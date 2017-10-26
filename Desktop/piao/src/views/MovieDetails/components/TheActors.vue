<template>
<div class="the-actors">
	<div class="actors-wrap" id="wrap">
		<div id="scroll">
			<dl v-for="(item,index) in actorsList" :key="index">
				<dt>
					<img :src="item.imgUrl">
				</dt>
				<dd>{{item.name}}</dd>
				<dd>{{item.role}}</dd>
			</dl>
		</div>
	</div>
	<p>
		<a href="javascript:void(0)">查看全部51位演职人员</a>
	</p>
</div>
</template>

<script>
export default {
	name: 'TheActors',
	data() {
		return {
			actorsList:[{
					imgUrl: '//gw.alicdn.com/i4/TB1dmx9QFXXXXXkXVXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '乔·沃茨',
					role: '导演'
				},
				{
					imgUrl: '//gw.alicdn.com/i4/TB1BkxSJpXXXXX0XVXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '汤姆·赫兰德',
					role: '饰 彼得·帕克 / 蜘蛛侠'
				},
				{
					imgUrl: '//gw.alicdn.com/i2/TB1EgVdLFXXXXX7XFXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '小罗伯特·唐尼',
					role: '饰 托尼·斯塔克 / 钢铁侠'
				},
				{
					imgUrl: '//gw.alicdn.com/i4/TB1OL0TJpXXXXc.XFXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '玛丽莎·托梅',
					role: '饰 梅·帕克'
				},
				{
					imgUrl: '//gw.alicdn.com/i3/TB1S7BVJpXXXXcbXFXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '迈克尔·基顿',
					role: '饰 艾德里安·图姆斯/秃鹰'
				},
				{
					imgUrl: '//gw.alicdn.com/i2/TB105BNJpXXXXb.XVXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '赞达亚·科尔曼',
					role: '饰 米歇尔'
				},
				{
					imgUrl: '//gw.alicdn.com/i3/TB1Rj8KSFXXXXXwXFXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '雅各布·巴特隆',
					role: '饰 内德·利兹'
				},
				{
					imgUrl: '//gw.alicdn.com/i3/TB1znj8SpXXXXaGXVXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '劳拉·海瑞尔',
					role: '饰 Liz'
				},
				{
					imgUrl: '//gw.alicdn.com/i1/TB16MdWJpXXXXamXFXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '托尼·雷沃罗利',
					role: '饰 弗拉什·汤普森/闪电侠 '
				},
				{
					imgUrl: '//gw.alicdn.com/i2/TB1yhRtSFXXXXXGaXXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '罗拉·哈瑞',
					role: '饰 莉兹·艾伦'
				},
				{
					imgUrl: '//gw.alicdn.com/i2/TB1fW.YRpXXXXabXpXXXXXXXXXX_.jpg_160x160Q30s150.jpg',
					name: '洛伦佐·詹姆斯·亨里',
					role: ''
				}
			]
		}
	},
	mounted () {
		var scroll = new IScroll('#wrap',{
			scrollX: true
		})
	}
}
</script>

<style scoped lang="less">
.the-actors{
	position: relative;
	box-sizing: border-box;
	&>p{
		text-align: center;
		padding-top: 0.05rem;
		padding-bottom: 0.05rem;
		a{
			display: block;
			color: #0094ed!important;
		}
	}
}
#wrap{
	height: 1.6rem;
	width: 100%;
	overflow: hidden;
}
#scroll{
	width: 1000px;
	height: 1rem;
	dl{
		width: 0.9rem;
		padding-right: 0.03rem;
		box-sizing: border-box;
		float: left;
		dt{
			width: 100%;
			height: 1.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		dd{
			text-align: center;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			&:nth-child(2){
				font-size: 0.13rem;
			}
			&:nth-child(3){
				font-size: 0.12rem;
			}
		}		
	}
}
</style>