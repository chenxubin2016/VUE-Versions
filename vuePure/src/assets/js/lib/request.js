import axios from 'axios'
import qs from 'qs'
import baseUrl from '../common/baseUrl'

const request = axios.create({
  baseURL: baseUrl.test,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    const _data = {
      header: {
        pid: data.pid || 1001,
        sid: new Date().getTime()
      },
      rpara: data.params || ''
    }
    return qs.stringify({para: JSON.stringify(_data)})
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data
  }]
})
// 添加请求拦截
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 添加响应拦截
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
export const get = (url, data) => {
  return request.get(url, {params: data})
}
export const post = (data) => {
  return request.post('', data)
}
export const del = (url, data) => request.delete(url, data)
export const head = (url, data) => request.head(url, data)
export const option = (url, data) => request.options(url, data)
export const put = (url, data) => request.put(url, data)
export const patch = (url, data) => request.patch(url, data)
