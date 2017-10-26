<template>
	<main class="screen-district">
		<ul class="screen-ul">
			<li class="screen-top">
				<span>{{screens[0].district}}</span>
				<span>{{screens[0].infinite}}</span>  
			</li>
			<li v-for="item in screens" class="screen-bottom">
				<span>{{item.region}}</span> 
			</li>
		</ul>
	</main>
</template>
<script>
    export default {
        name: 'ScreenDistrict',
        props:["ScreenDistrict"],
        data () {
            return {
                screens:[
                    {
                        "district":"区域",
                        "infinite":"不限",
                        "region":"宝山区"
                    },
                    {
                        "region":"崇明县"
                    },
                    {
                        "region":"凤翔县"
                    },
                    {
                        "region":"虹口区"
                    },
                    {
                        "region":"黄浦区"
                    },
                    {
                        "region":"嘉定区"
                    },
                    {
                        "region":"静安区"
                    },
                    {
                        "region":"金山区"
                    },
                    {
                        "region":"龙湾区"
                    },
                    {
                        "region":"开新区"
                    },
                    {
                        "region":"浦东新区"
                    },
                    {
                        "region":"普陀区"
                    },
                    {
                        "region":"青浦区"
                    },
                    {
                        "region":"松江区"
                    },
                    {
                        "region":"徐汇区"
                    },
                    {
                        "region":"杨浦区"
                    },
                    {
                        "region":"闸北区"
                    },
                    {
                        "region":"长宁区"
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="less">
.screen-district{
    width:100%;
    height:auto;    
}
.screen-ul{
	display: flex;
	-webkit-flex-wrap: wrap;
}
.screen-top{
	width: 100%;
	padding-left: 0.1rem;
	padding-top: 0.1rem;
	padding-bottom: 0.1rem;
	box-sizing: border-box;
}
.screen-top>span:nth-child(1){
	font-weight: bold;
}
.screen-bottom{
	width: 25%;
	text-align: center;
	box-sizing: border-box;
	padding: 0.05rem;
}
.screen-bottom span{
	padding-top: 0.05rem;
	padding-bottom: 0.05rem;
	display: block;
	border-right: 0.005rem solid #ccc;
	font-size: 0.12rem;
}
</style>