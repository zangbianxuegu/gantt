import request from '../utils/request'

export function getData(data: Object) {
  return request({
    url: '/zentao/gantt',
    method: 'post',
    data,
  })
}