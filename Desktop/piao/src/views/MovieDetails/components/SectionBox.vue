<template>
  <section class="section-box" >
    <h3 class="section-title" v-if="title">{{title}}</h3>
		<div :class="['section-content',{paddingBox: padding}]">
			<slot name="viewingHints"></slot>
		</div>
  </section>
</template>

<script>
  export default {
    name: 'sectionBox',
		props: {
			'title': {
				default: ''
			},
			'padding': {
				default: 18
			}
		},
    data() {
      return {

      }
    }
  }

</script>

<style scoped lang="less">
.section-box{
	width: 100%;
	background: #fff;
	padding-left: 0.18rem;
	box-sizing: border-box;
	margin-bottom: .1rem;
	h3{
		padding-top: .15rem;
		padding-bottom: 0.15rem;
		font-size: 0.14rem;
	}
	.section-content{		
		padding-bottom: 0.1rem;
	}
}
</style>