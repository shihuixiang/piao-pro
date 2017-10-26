<template>  
    <div class="hello">
      <router-view></router-view>
      <FooterBar></FooterBar>    
    </div>      
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  name: 'hello',
  components: {
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  overflow: scroll;
}
</style>
