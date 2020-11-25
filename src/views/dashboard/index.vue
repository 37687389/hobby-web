<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <div class="services-section">
      <div class="inner-width">
        <h1 class="section-title">Our Service</h1>
        <div class="demo-center">{{ "居中" }}</div>
        <div class="border"></div>
        <div class="services-container">
          <div class="service-box">
            <div class="service-icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制作、微页面制作，但基本功能都是类似的。所谓店铺装修，就是用户可以在
              PC端进行移动页辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-brush"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制作、微页要通过简单的拖拽就可以实现页面的编辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="el-icon-delete"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制作、微页面制作，但基本功能都是拖拽就可以实现页面的编辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="el-icon-delete"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              PC端进行移动页面的制作，只需要通过简单的拖拽就可以实现页面的编辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-database"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制。所谓店铺装修，就是用户可以在
              PC端进行移动页面的制作，只需要通过简单的拖拽就可以实现页面的编辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="fab fa-android"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制作、微页面制作，但基本需要通过简单的拖拽就可以实现页面的编辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
          <div class="service-box">
            <div class="service-icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="service-title">Web Design</div>
            <div class="service-desc">
              做过电商项目的同学都知道，店铺装修是电商系统必备的一个功能，在某些场景下，可能是广告页制作、活动页制作、微页面制作，但基本功能都是类似的。所谓店铺装修，就是用户可以在
              PC端进行移动页辑，属于用户高度自定义的功能。最终编辑的结果。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {
      data: [],
      aaa: "",
      ccc: ""
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
  box-sizing: border-box;
}
.services-section {
  background: #333;
  background-size: cover;
  padding: 60px 0;
}
.inner-width {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  overflow: hidden;
}
.section-title {
  text-align: center;
  color: #ddd;
  text-transform: uppercase;
  font-size: 30px;
}
.demo-center {
  text-align: center;
}
.border {
  width: 160px;
  height: 2px;
  background: #82ccdd;
  margin: 40px auto;
}
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.service-box {
  max-width: 33.33%;
  padding: 10px;
  text-align: center;
  color: #ddd;
  cursor: pointer;
}
.service-icon {
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 3px solid #82ccdd;
  color: #82ccdd;
  transform: rotate(45deg);
  margin-bottom: 30px;
  margin-top: 16px;
  transition: 0.3s linear;
}
.service-icon i {
  line-height: 70px;
  transform: rotate(-45deg);
  font-size: 26px;
}
.service-box:hover .service-icon {
  background: #82ccdd;
  color: #ddd;
}
.service-title {
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.service-desc {
  font-size: 14px;
}
@media screen and (max-width: 960px) {
  .service-box {
    max-width: 45%;
  }
}
@media screen and (max-width: 768px) {
  .service-box {
    max-width: 50%;
  }
}
@media screen and (max-width: 480px) {
  .service-box {
    max-width: 100%;
  }
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
