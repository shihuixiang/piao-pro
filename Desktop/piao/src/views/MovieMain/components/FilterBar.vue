<template>
	<a href="javascript:;" :class="{'filter-wrap': true, 'filter-active': filterShow}" @click="filterShow = !filterShow">
		<i class="iconfont">&#xe613;</i>筛选
		<div class="filter-panel" v-show="filterShow">
			<h3>区域 <span>{{filterArr[0]}}</span></h3>
			<div class="filter-radio">
				<Radio v-for="(item,index) in area" :key="index" name="diqu" :value="item" :label="item" v-model="filterArr[0]"></Radio>
			</div>	
			<h3>特色 <span>{{filterArr[1]}}</span></h3>
			<div class="filter-radio">
				<Radio v-for="(ite,ind) in yingyuan" :key="ind" name="diqu2" :value="ite.desc" :label="ite.desc" v-model="filterArr[1]"></Radio>
			</div>	
			<ul class="footer-group">
				<li>
					<button @click.stop="cancel">取消筛选</button>					
				</li>
				<li>
					<button @click="sure">确定</button>
				</li>
			</ul>
		</div>
	</a>
</template>
<script>
import Radio from '@/components/Radio'

export default {
	name: 'FilterBar',
	data () {
		return {
			filterShow: false,
			filterArr: ['宝山区','退票'],
			area: ['宝山区', '崇明县', '虹口区', '黄浦区', '嘉定区', '静安区', '金山区', '凤翔县','龙湾区', '开新区', '浦东新区', '普陀区', '青浦区', '松江区', '徐汇区', '杨浦区', '闸北区', '长宁区'],
			yingyuan:[{supportCode: "8", desc: "退票"}, {supportCode: "23", desc: "改签"}, {supportCode: "3", desc: "观影小食"},{supportCode: "11", desc: "IMAX厅"},{supportCode: "12", desc: "巨幕厅"},{supportCode: "17", desc: "realD厅"},{supportCode: "16", desc: "4K厅"},{supportCode: "20", desc: "4DX厅"},{supportCode: "13", desc: "4D厅"},{supportCode: "18", desc: "双机3D"},{supportCode: "15", desc: "杜比厅"}]
		}	
	},
	methods: {
		cancel () {
			this.$set(this.filterArr,0,'')
			this.$set(this.filterArr,1,'')
			this.$emit('update:filterArr', this.filterArr)
		},
		sure () {
			this.$emit('update:filterArr', this.filterArr)
		}
	},
	props: ['filterVal'],
	components: {
		Radio
	},
	watch: {
		filterVal (val){
			console.log(this.filterVal)
			this.filterArr = this.filterVal
		}
	},
	created() {
		setTimeout(()=>{
			if(this.filterVal){
				this.filterArr = this.filterVal
			}
		},1000)
	}
}
</script>

<style scoped lang="less">
.filter-wrap{
	text-decoration: none;
	color: #8a869e;
	.filter-panel{
		position: fixed;
		top: 0.44rem;
		left: 0;
		bottom: 0;
		right: 0;
		background: #fff;
		z-index: 10000;
		h3{
			text-indent: 0.1rem;
			span{
				font-weight: normal;
				font-size: 0.14rem;
			}
		}
		.filter-radio{
			padding-left: 0.06rem;
			padding-right: 0.06rem;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			.radio-box{
				width: 25%;
				text-align: center;
			}
		}
		.footer-group{
			display: flex;
			position: absolute;
			bottom: 0.2rem;
			left: 0;
			width: 100%;
			li{
				flex: 1;
				button{
					margin-left: 7%;
					width: 86%;					
					padding-top: 0.13rem;
					padding-bottom: 0.13rem;
					border-radius: 0.05rem;
				}
				&:nth-child(1){
					button{						
						background-color: transparent;
						border: 1px solid #908ca3;
						color: #8a869e;
					}
				}
				&:nth-child(2){
					button{
						background-color: #ff4d64;
						border: 1px solid #ff4d64;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>