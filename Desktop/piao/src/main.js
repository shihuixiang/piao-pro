// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper' 
import router from './router'
import mock from './mock'
import http from './http'
import store from './store'

import directive from './directive'
import './static/lib/iscroll.js'

// var instance = mock.create({
//   baseURL: 'https://localhost:8080/api/queryAdvertise',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// })

// instance.interceptors.request.use(function(config){
//   console.log('请求开始并且成功')
//   return config
// },function(error){
//   console.log('请求开始并且失败')  
//   return Promise.reject(error)
// })
// instance.interceptors.response.use(function(response){
//   console.log('请求结束并且成功')
//   return response
// },function(error){
//   console.log('请求结束并且失败')  
//   return Promise.reject(error)
// })

// Vue.prototype.$axios = instance
for(let key in directive){
  // console.log(key)
  Vue.directive(key, directive[key])
}
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
