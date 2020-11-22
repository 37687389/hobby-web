/* eslint-disable no-unused-vars */
<template>
  <div class="app-container">
    <video-player
      ref="videoPlayer"
      class="video-player vjs-custom-skin"
      :playsinline="true"
      :options="playerOptions"
    />
    <!-- <video
      id="my-player"
      class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid"
      preload="auto"
      autoplay
      style="width: 1200px;height: 640px;"
      controls
      data-setup="{}"
    /> -->
    <!-- <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">测试登录信息</el-button>

      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
import { createdFormData } from '@/api/form'
import { login, getInfo } from '@/api/user'
import { videoPlayer } from 'vue-video-player' // 流媒体组件
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
export default {
  components: {
    videoPlayer

  },
  created() {
    this.playVideo()
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto',
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            // src: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4', // 路径
            src: 'http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4', // 路径
            type: 'video/mp4' // 类型
          }
        ],
        // poster: "../../static/images/test.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: true,
        techOrder: ['flash', 'html5'] // 兼容顺序
      }
    }
  },
  methods: {
    playVideo() {
      var videoPlayer = videojs(
        'my-player',
        {
          sources: [
            {
              src: 'http://vjs.zencdn.net/v/oceans.mp4',
              type: 'rtmp/flv'
            }
          ],
          muted: true,
          controls: true,
          autoplay: true,
          loop: true,
          techOrder: ['html5', 'flash'],
          width: '1200',
          height: '640'
        },
        function() {
          this.play()
        }
      )
    },
    onSubmit() {
      this.$message('submit!')
      console.log(this.form)
      const aa = { 'name': this.form.name, 'region': this.form.region, 'dete1': this.form.date1 }
      createdFormData(aa).then(res => {
        console.log(res)
      })
    },
    onCancel() {
      getInfo().then(res => {
        console.log(res)
      })
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    login() {
      const params = { 'account': this.form.name }
      // const aa = { 'name': this.form.name, 'region': this.form.region, 'dete1': this.form.date1 }
      login(params).then(res => {
        console.log(res)
      })
    },
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerPause(player) {
    // console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged(playerCurrentState) {
    // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.\[methods\]
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.video-js .vjs-big-play-button{
  top: 50%;
  left: 50%;
}
</style>
<style>
.video-js .vjs-big-play-button{
  top: 50%;
  left: 50%;
}
</style>

