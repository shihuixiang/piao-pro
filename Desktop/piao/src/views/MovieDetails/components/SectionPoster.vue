<template>  
	<div class="movie-top">
		<div class="show-detail-banner">
		<div class="pic"></div>
		<div class="info">
			<h1>
				<span>猩球崛起3：终极之战</span> 
				<img src="https://gw.alicdn.com/tps/TB1RZpPPVXXXXczaXXXXXXXXXXX-264-84.png" style="visibility: visible;">
			</h1>
			<h2>War for the Planet of the Apes</h2>
			<p class='p1'><span>动作</span><span>剧情</span><span>冒险</span></p>
			<p><span>美国</span> <span>|</span> <span>140分钟</span></p>
			<p>2017-09-15<span> 在中国大陆</span>上映</p>
		</div>
		<div class="bottom">
			<div class="remark">
				<h2>用户评分
										<small>(6,196)</small>
								</h2>
								<div class="show-stars"><span>8.4</span><i>★★★★★</i></div>
			</div>
			<div class="want">
				<h2>想看人数</h2>
				<span>409,905</span>
			</div>
		</div>
	</div>	
	<div class="list">
		<div class='items'>
			<h2>4658.7万</h2>
			<span>累计票房</span>
		</div>
		<div class='items'>
			<h2>4361.1万</h2>
			<span>分账票房</span>
		</div>
		<div class='items'>
			<h2>--</h2>
			<span>首周票房</span>
		</div>
		<div class='items'>
			<h2>3747.8万</h2>
			<span>首日票房</span>
		</div>
	</div>      
</template>

<script>

export default {
  name: 'SectionPoster',
  data (){
		return {

		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.movie-top{
	width: 100%;
	height: 2.65rem;
	background: #fff;
	.show-detail-banner{
		width: 100%;
		height: 1.75rem;
		background: rgba(0,0,0,0.4);
		box-sizing:border-box;
		position: relative;
			overflow: hidden;
			.pic{
				background:url("//gw.alicdn.com/tfscom/i4/TB1SjYYSpXXXXaBapXXXXXXXXXX_.jpg_400x400q50.jpg_.webp") no-repeat;
				background-position: center center;
				background-size: cover;
				position: absolute;
				display: block;
				left: .2rem;
				top: .25rem;
				bottom: 0;
				width: 1.1rem;
				height: 1.5rem;
			}
			.info{
				position: absolute;
				width: 2.2rem;
				height: 1.02rem;
				top: .25rem;
				left: 1.5rem;
				right: .4rem;
				color: hsla(0,0%,100%,.7);
				h1{
					width: 1.71rem;
					font-size: .18rem;
					color: #fff;
					font-weight: 400;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					img{
						position: absolute;
						top: .05rem;
						margin-left: .05rem;
						display:inline-block;
						visibility: visible;
						width: .45rem;
						height: .16rem;
					}
				}
				h2{
					font-weight: normal;
					font-size: .12rem;
				}
				p{
					font-size: .12rem;
					line-height: .18rem;
				}
				.p1{
					padding-top: .1rem;
				}
			}
			.bottom{
				position: absolute;
				left: 1.5rem;
				height: .25rem;
				text-align: left;
				bottom: .15rem;
				font-weight: normal;
				right: 0;
				font-size: .12rem;
				color: hsla(0,0%,100%,.7);
				.remark{
				float: left;
				width: 50%;
				h2{
					font-size: .12rem;
					small{
						font-size: .1rem;
						font-weight: normal;
					}
				}
				.show-stars{
					color: #fea54c;
					font-size: .14rem;
					i{
						font-style: normal;
						margin-left: .05rem;
					}
				}
				}
				.want{
				width: 50%;
				float: left;
				h2{
					font-size: .12rem;
				}
				span{
					color: #fea54c;
					font-size: .14rem;
				}
				}
			}
	}
	.list{
		font-size: .12rem;
		display: flex;
		.items{
			flex:1;
			text-align: center;
			vertical-align: center;
			h2{
				font-size: .14rem;
				font-weight: normal;
				padding-top: .25rem;
			}
			span{
				display: block;
				color:#657786;
				padding-top: .05rem;
			}
		}
	}
}
</style>
