<template>
  <div class="wraps">
     <ul>
       <li><i class="iconfont">&#xe602;</i>我的电影票</li>
       <li><i class="iconfont">&#xe62a;</i>优惠劵</li>
       <li><i class="iconfont">&#xe651;</i>帮助中心</li>
       <li><i class="iconfont">&#xe61c;</i>意见反馈</li>
     </ul>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  name: 'zoom',
  components: {
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wraps{
	 ul{
    li{
      width:80%;
      line-height:.6rem;      
    }
    .iconfont{
      width:30px;
      margin-left:20px;
      padding-right:20px;
      color:#ccc;
    }
  }    
}
</style>
