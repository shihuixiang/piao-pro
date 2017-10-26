import mock from '../mock'
import Vue from 'vue'
import loading from '../components/Loading'

var instance = mock.create({
  baseURL: 'https://localhost:8080/api/queryAdvertise',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

instance.interceptors.request.use(function(config){
  console.log('请求开始并且成功')
  return config
},function(error){
  console.log('请求开始并且失败')  
  return Promise.reject(error)
})
instance.interceptors.response.use(function(response){
  console.log('请求结束并且成功')
  return response
},function(error){
  console.log('请求结束并且失败')  
  return Promise.reject(error)
})

Vue.prototype.$axios = instance

export default instance