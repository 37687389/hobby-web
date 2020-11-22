import request from '@/utils/request'

export function createdFormData(data) {
  return request({
    url: '/service-main/admin/createdFormData',
    method: 'post',
    data
  })
}
