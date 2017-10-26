<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/css/swiper.css'
import '@/static/fonts/iconfont.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  
}
</style>
