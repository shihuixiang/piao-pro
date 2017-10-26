<template>
    <header class="search-header">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="影院名称或地址"/>
        <router-link to="/film">取消</router-link>
    </header>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped lang="less">
.search-header{
	height: .4rem;
	border-bottom: 1px solid #ccc;
	display: flex;
	position: relative;
	i{
		font-size: .14rem;
		position: absolute;
		top: .13rem;
		left: .2rem;
	}
	input{
		flex: 1;
		margin: .06rem .5rem .08rem .1rem;
		padding-left: .35rem;
		border: 1px solid #ccc;
		border-radius: .03rem;   
	}
	a{
		position: absolute;
		right: .1rem;
		top: .1rem;
		color: #108ee9;
		font-size: 0.12rem;
	}
}
</style>
