import Qs from 'qs'
export default {
  title: '',
  method: 'get',
  transformResponse: [
    function(data) {
      return data
    },
  ],
  // 请求头信息
  headers: {
    'Content-Type': 'application/json',
  },
  params: {},
  paramsSerializer: {
    function(params) {
      return Qs.stringify(params)
    },
  },
  data: {},
  // 设置超时时间
  timeout: 500000000,
  withCredentials: true, // 自动携带cookie
  // 返回数据类型
  responseType: 'json',
  maxContentLength: 2000,
  validateStatus: function(status) {
    return status >= 200 && status < 300
  },
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5,
}
