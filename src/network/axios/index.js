import axios from 'axios'
import config from './_axios_config'
const $http = axios.create(config)
// request拦截器
$http.interceptors.request.use(
  (config) => {
    console.log('request拦截了', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
$http.interceptors.response.use((response) => {
  console.log('response拦截了', response)
  // if (response.data) {
  //   response.data = JSON.parse(response.data)
  // }
  return response
})
export default $http
