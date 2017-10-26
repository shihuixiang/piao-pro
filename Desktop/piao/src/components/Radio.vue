<template>
	<div class="radio-box">
		<input 
			type="radio" 
			:name="name" 
			:value="value" 
			:id="radioId" 
			@change="up(value)" 
			v-if="checked && checked==value"
			checked="checked"
		>
		<input 
			type="radio" 
			:name="name" 
			:value="value" 
			:id="radioId" 
			@change="up(value)" 
			v-else
		>
		<label :for="radioId">{{label}}</label>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'checked',
		event: 'change'
	},
	data () {
		return {
			radioId: +new Date() + Math.random()
		}
	},
	props: ['name', 'value' , 'label','checked'],
	methods: {
		up (val) {
			// console.log(val)
			this.$emit('change',val)
		}
	},
	watch: {
		'checked': function(){
			console.log('改变')
		}
	}
}
</script>

<style scoped lang="less">
.radio-box{
	display: inline-block;
	padding-top: 0.07rem;
	padding-bottom: 0.07rem;
	input{
		display: none;
		&:checked + label{
			border-color: red;
			color: red;
		}
	}
	label{
		display: inline-block;
		padding-top: 0.05rem;
		padding-bottom: 0.05rem;
		width: 80%;
		border: 1px solid #ccc;
	}
}
</style>