<template>
  <div class="moviePage">
    <HeaderBar>
      <SelectCity slot="groupLeft" v-title="title"></SelectCity>
      <FilterBar slot="groupRight" :filterArr.sync="filterArr"></FilterBar>
    </HeaderBar>    
    <div class="content">
      <span>{{filterArr}}</span>
      <ul>
        <li v-for="(item,index) in movieList">
          <h2>{{item.name}}</h2>
          <div class="sub-money">
            <span>{{item.price}}</span><span>元起</span>
          </div>
          <p>{{item.address}}</p>
          <div class="sub-start">
            <span v-for="ii in item.yewu">{{ii}}</span>
          </div>
          <div class="sub-pop">
            <!--<span>{{item.news}}</span>
            <span>{{item.people}}</span>-->
          </div>
        </li>
      </ul>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import SelectCity from '@/components/SelectCity'
import FilterBar from './components/FilterBar'

export default {
  name: 'movieMain',
  props:["FilmSub"],
  data () {
    return {
      title: '影院',
      movieList: [],
      flag: true,
      filterArr: []
    }
  },
  components: {
    HeaderBar,
    FooterBar,
    SelectCity,
    FilterBar
  },
  methods: {
    getMovieList () {
      this.flag = false
      this.$axios.get('/api/getmovielist',{
        params: {
          cityId: 12345,
          page: 0,
          pageSize: 10
        }
      }).then((response) => {        
        this.movieList = this.movieList.concat(response.data.data) 
        //console.log(response)
        this.flag = true
      }).catch( (error)=> {
        this.flag = true
      })
    }
  },
  created(){
    this.getMovieList()
  }
}
</script>

<style>
.moviePage{
  display: flex;
  flex-direction: column;
}
.content{
  -webkit-flex: 1;
  overflow-y: scroll;
}
.content{
  width:100%;
  height:auto;
  padding-bottom: 0.55rem;
  box-sizing: border-box;
} 
.content ul li{
  padding:.1rem 0.15rem;
  box-sizing: border-box;
  border-bottom:1px solid #ccc;
  box-sizing: border-box;
}
.content ul li h2{
  float:left;
  width: 1.6rem;  
  padding-right:.05rem;
  white-space: nowrap;  
  overflow: hidden;  
  text-overflow: ellipsis; 
  font-size: 0.16rem; 
}
.content ul li .sub-money span{
  padding-top:.02rem;
  display:inline-block;
  font-size: 0.14rem;
}
.content ul li .sub-money span:nth-child(1){
  color:#ff4d64;
}
.content ul li p{
  display:inline-block;
  padding:.05rem 0 .05rem;
  color:#8a86b6;
  font-size:.14rem;
}
.content ul li .sub-start span{
  display:inline-block;
  font-size: 0.12rem;
  border:1px solid #7ab5e0;
  color:#7ab5e0;
  padding:0 .05rem;
  border-radius:.2rem;  
}
.content ul li .sub-pop span{
  margin:.07rem 0 .05rem;
  color:#8a86b6;
  font-size: .12rem;
}
.content ul li .sub-pop span:nth-child(1){
  display:inline-block;
  background:#fe926d;
  color:#fff;
  text-align:center;
  border-radius:.03rem;
  padding:0 .02rem;
}
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