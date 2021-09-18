import request from '../utils/request'

export function getData() {
  return request({
    url: '/zentao/gantt',
    method: 'post'
  })
}