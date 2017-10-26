<template>
  <header class="header">
		<div class="group-left">
			<slot name="groupLeft"></slot>
		</div>
		<div class="icon-group">
			<slot name="menu"></slot>
		</div>
		<div class="group-right">
			<slot name="groupRight"></slot>
		</div>
  </header>
</template>

<script>
import MenuList from '@/views/Movie/components/MenuList'
export default {
  name: 'header',
	components: {
		MenuList
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	display: flex;
}
.group-left{
	-webkit-flex: 1;
}
.icon-group a{
	font-size:0.12rem;
  color:#ccc;
}
.icon-group a.left-group{
	float: left;
}
.icon-group a.right-group{
	 float: right;
}
</style>