<template>
	<div class="movieWrap">
		<div class="movie-list" v-for="(movieItem,index) in MovieWrap">
        <router-link :to='"moviedetails/"+index'>
          <div class="list-wrap">
            <div class="list-left">
              <img :src="movieItem.image">
            </div>
            <div class="list-center">
              <h2>{{movieItem.name}}</h2>
              <p>{{movieItem.type == 1 ? movieItem.star : movieItem.remarkCount}}</p>
              <p>导演：{{movieItem.director}}</p>
              <p>主演：{{movieItem.leadingRole[0]}}{{movieItem.leadingRole[0]}}</p>
            </div>
            <div class="list-right">
              <button class="btn">{{movieItem.type == 1 ? '购票' : '预售'}}</button>
            </div>
          </div>
          <p>
            <span class="new">{{movieItem.newP}}</span>
            <span class="gap">|</span>
            {{movieItem.gap}}
          </p>
        </router-link>        
    </div>
	</div>
</template>

<script>
export default {
  name: 'movieWrap',
  data () {
    return{
			
		}
  },
  props: ['MovieWrap']
}
</script>

<style>
.movie-list{
  position: relative;
  overflow: hidden;
}
.movie-list:after{  
  position: absolute;
  content: '';
  width: 200%;
  height: 0.02rem;
  background: #ccc;
  left: 0.15rem;
  bottom: 0;
  -webkit-transform: scale(0.5);
  -webkit-transform-origin: 0 0;
}
.list-wrap+p{  
  padding-top: 0.08rem;
  padding-bottom: 0.1rem;
  padding-left: 0.9rem;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.12rem;  
  color: #8a869e;
}
.list-wrap+p .new{
  color: #fea54c;
}
.list-wrap+p .gap{
  padding-left: 0.05rem;
  padding-right: 0.05rem;
}
.list-wrap{
  display: flex; 
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  position: relative;
}
.list-wrap:after{
  position: absolute;
  content: '';
  width: 200%;
  height: 0.02rem;
  background: #ccc;
  left: 0.9rem;
  bottom: 0;
  -webkit-transform: scale(0.5);
  -webkit-transform-origin: 0 0;
}
.list-left{
  padding-left: 0.15rem;
  padding-right: 0.1rem;
}
.list-left img{
  display: block;
  width: 0.65rem;
  height: 0.9rem;
}
.list-center{
  -webkit-flex: 1;
}
.list-center h2{
  font-size: 0.16rem;
  font-weight: normal;
  color: #333;
}
.list-center p{
  font-size: 0.12rem;
  color: #8a869e;
  line-height: 0.2rem;
}
.list-center p:nth-child(2){
  color: #fea54c;
  line-height: 0.24rem;
}
.list-right{
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  -webkit-flex-align: center;
  -webkit-justify-content: center;
}
.list-right .btn{
  background: transparent;
  border: 0.01rem solid #ff4d64;
  color: #ff4d64;
  padding: 0.05rem 0.1rem;
  border-radius: 0.04rem;
  margin-top: 0.25rem;
}
</style>