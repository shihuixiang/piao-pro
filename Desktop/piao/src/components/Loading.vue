<template>
	<div id="loadingWrap" v-show="!flag">
		<div class="loading">
			<div class="arc1"></div>
			<div class="arc2"></div>
			<div class="arc3"></div>
			<div class="arc4"></div>
			<div class="arc5"></div>
			<div class="arc6"></div>
			<div class="arc7"></div>
			<div class="arc8"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loading',
	props: ['flag'],
	data () {
		return {
			
		}
	}
}
</script>

<style scoped lang="scss">
#loadingWrap{
	width:100%;
	height:100%;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	z-index: 100000;
	.loading{
		width: 100px;
		height: 100px;
		position:absolute;
		animation: rotates 2s linear infinite;
		-webkit-animation: rotates 2s linear infinite;
		top:0;
		left:0;
		margin: auto;
		right: 0;
		bottom:0;
		div{
			width: 10px;
			height: 10px;
			border-radius:50%;
			position: absolute;
			top:0;
			left:45px;
			background:#000;
			transform-origin: 5px 50px;
		}
		@for $i from 1 to 8{
			.arc#{$i}{
				transform: rotate(calc(#{$i} * 45deg));
				opacity: calc(0.125*#{$i})
			}
		}
	}
}

@keyframes rotates {
	from {
		transform:rotate(0deg);
	}
	to{
		transform:rotate(360deg);
	}
}
</style>