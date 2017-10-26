<template>
  <div class="menu" slot="menu">
    <a 
			v-for="(item, index) in menuList"
			href="javascript:;" 
			:class="{active: isActive == index}" 
			@click="tabClick(index)"
	>{{item}}</a>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
		return {
			isActive: 0,
      menuList: ['正在热映', '即将上映']
		}
  },
  methods: {
    tabClick (index) {
      this.isActive = index
      this.$emit('tabList', index)
    }
  }
}
</script>

<style>
.menu{
	float: right;
}
.menu a{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	font-size: .14rem;
	position: relative;
	text-align: center;
	color: #50505a;
	text-decoration: none;
	padding:0 0.1rem;
	margin:0 0.08rem;
	position: relative;
}
.menu a:after{
	content: '';
	display: block;
	height: 0.03rem;
	width: 100%;
	background: #fff;
	position: absolute;
	bottom: 0rem;
	left: 0;
}
.menu a.active{
	color: #ff4d64;
}
.menu a.active:after{
	background: #ff4d64;
}
</style>