<template>  
    <div class="about-movie">
      <p>故事发生在第二部《猩球崛起：黎明之战》的后两年。猿族和人类的战争已经持续了两年之久，凯撒一直生活在暴力与疯狂之中。他被科巴的死折磨着，同时也看够了猿族的同胞死于战争中...他想要复仇。所以凯撒发起了一场“史诗远征”，以刺杀人类军队的领导者“上校”，一场人猿之间的生死决战一触即发</p>
			<span @click="down($event)">展开</span>
    </div>      
</template>

<script>

export default {
  name: 'AboutMovie',
  data (){
		return {

		}
	},
	methods: {
		down (event) {
  		console.log(event.target.previousSibling);
  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.about-movie{
  height: 1.73rem;
	background: #fff;
	padding-right: 0.15rem;
	box-sizing: border-box;
	p{
		font-size: .16rem;
		height: .85rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	span{
		display: block;
    color: #0094ed!important;
		text-align: center;
	}
}
</style>
