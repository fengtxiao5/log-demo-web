import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $api from './network/api'
import axios from 'axios'
import $http from './network/axios'

Vue.config.productionTip = false
Vue.prototype.$api = $api
Vue.prototype.$http = $http
Vue.prototype.$axios = axios
Vue.use(ElementUI)
window.request = $http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
