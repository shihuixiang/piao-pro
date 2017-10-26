<template>
	<main class="screen-tincture">
		<ul v-for="item in screens">
			<li class="screen-top">
				<div>{{item.district}}</div>
				<div>{{item.infinite}}</div>  
			</li>
			<li class="screen-bottom">
				{{item.region}} 
			</li>
		</ul>
	</main>
</template>
<script>
export default {
	name: 'ScreenTincture',
	props:["ScreenTincture"],
	data () {
		return {
			screens:[
				{
					"district":"特色",
					"infinite":"不限",
					"region":"退票"
				},
				{
					"region":"改签"
				},
				{
					"region":"观影小食"
				},
				{
					"region":"IMAX厅"
				},
				{
					"region":"巨幕厅"
				},
				{
					"region":"realD厅"
				},
				{
					"region":"4k厅"
				},
				{
					"region":"4DX厅"
				},
				{
					"region":"4D厅"
				},
				{
					"region":"双机3D"
				},
				{
					"region":"杜比厅"
				}
			]
		}
	}
}
</script>
<style scoped lang="less">
.screen-tincture{
	width:100%;
	height:auto;
	padding-top:2rem;
	ul{
		.screen-top{
			margin:.1rem 0;
			padding-left:.1rem;
			div:nth-child(1){
				font-weight:bold;
				float:left;
				font-size:.16rem;
				padding-right:.05rem;
			}
			div:nth-child(2){
				color:#ccc;
				line-height:.25rem;
			}
		}     
		.screen-bottom{
			margin-top:.1rem;
			float:left;
			width:22%;
			position:relative;
			text-align:center;
			border:1px solid #ccc;
			padding:.05rem 0;
			margin-left:.05rem;
			font-size:.1rem;
		}
		.screen.bottom:nth-child(1){
			margin-top:.4rem;
		}
	}
}
</style>