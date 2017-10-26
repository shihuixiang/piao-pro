<template>
  <div class="moviePage">
    <HeaderBar v-title="title">
      <SelectCity slot="groupLeft" @selectCity="selectCity"></SelectCity>
      <MenuList slot="menu" @tabList='tabList'></MenuList>
    </HeaderBar>
    <div class="content" v-show="tabFlg == 0">
      {{this.$store.getters['movie/movieList']}}
      <BannerBar></BannerBar>
      <MoviesWrap :MovieWrap="MovieWrap" v-scrollBottom="scrollLoad"></MoviesWrap>
    </div>
    <div class="content" v-show="tabFlg == 1">
      <MoviesWrapTwo :MovieWrap="MovieWrap"></MoviesWrapTwo>
    </div>
    <FooterBar></FooterBar>
    <Loading :flag="flag"></Loading>
  </div>  
</template>

<script>
import '@/static/css/reset.css'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import SelectCity from '@/components/SelectCity'
import MenuList from './components/MenuList'
import BannerBar from './components/Banner'
import MoviesWrap from './components/MoviesWrap'
import MoviesWrapTwo from './components/MoviesWrapTwo'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Loading from '@/components/Loading'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return{
			tabFlg: 0,
      title: '淘票票',
      MovieWrap: [],
      cityId: 0,
      page: 0,
      pageSize: 10,
      flag: false
		}
  },
  computed: {
    ...mapGetters('movie/',['getList'])
  },
  components: {
    HeaderBar,
    FooterBar,
    MenuList,
    BannerBar,
    MoviesWrap,
    SelectCity,
    MoviesWrapTwo,
    Loading
  },
  methods: {
    scrollLoad (){
      if(this.flag){
        this.page += 1
        //console.log('aaa')
        this.getMovieList()
      }  
    },
    tabList(index){
      this.tabFlg = index
    },
		selectCity (data) {
			// console.log(data)
		},
    getMovieList(){
      this.flag = false
      this.$store.dispatch('movie/getMovieList',{
        cityId: 12345,
        page: this.page,
        pageSize: this.pageSize
      }).then((data)=>{
        this.MovieWrap = data
        this.flag = true
      },
      (error)=>{
        alert('失败')
        this.flag = true
      })
    }
  },
  created () {
    //console.log(this.$store.getters['movie/getList'])
    this.getMovieList()
  },
  watch: {
    '$route': (to, from) => {
      //console.log(to, from)
    },
    'cityId': ()=>{
      //console.log('城市改变')
      this.getMovieList()
    }
  },
  mounted () {
    document.addEventListener('scroll', (e) => {
      //console.log(e)
    },false)
  }
}
</script>

<style scoped>
.group-left{
  height: 0.4rem;
}
.group-left a{
  display: block;  
  padding-top: 0.06rem;
  padding-bottom: 0.06rem;
  box-sizing: border-box;
}
.group-left a img{
  width: 0.24rem;
  height: 0.24rem;
  padding-left: 0.15rem;
  padding-right: 0.05rem;
}
.group-left a span{
  font-size: 0.12rem;
  position: relative;
  color: #50505a;
  display: inline-block;
}
.group-left a span::after{
  width: 0.1rem;
  height: 0.1rem;
  border-bottom: 0.01rem solid #ccc;
  border-left: 0.01rem solid #ccc;
  position: absolute;
  left: 0;
}
</style>