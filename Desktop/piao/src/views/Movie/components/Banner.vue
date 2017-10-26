<template>
	<swiper :options="swiperOption" ref="mySwiper" class="swiper-banner">
		<swiper-slide v-for="(imgItem,index) in banner" :key="index">
			<img :src="imgItem">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return{
			banner:[
        '//gw.alicdn.com/tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg',
        '//gw.alicdn.com/tfs/TB1u9oZa3MPMeJjy1XcXXXpppXa-1280-520.jpg_720x720Q30.jpg',
        '//gw.alicdn.com/tfs/TB1lWwGbMoQMeJjy1XaXXcSsFXa-1280-520.jpg_720x720Q30.jpg',
        '//gw.alicdn.com/tfs/TB1xeGebMMPMeJjy1XbXXcwxVXa-1280-520.jpg_720x720Q30.jpg'
			],
			swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        loop: true,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: swiper => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
		}
  }
}
</script>

<style>
.moviePage{
  font-size: 20px;
}
.moviePage .swiper-banner img{
  display: block;
  width: 100%;
}
</style>