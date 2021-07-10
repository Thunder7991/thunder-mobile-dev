import request from '../utils/request'

export function getMapData() {
  return request({
    url: '/screen/mobile',
    method: 'get'
  })
}
