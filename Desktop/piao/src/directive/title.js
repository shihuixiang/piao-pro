export default {
	inserted: function(el,binding){
		// console.log(el)
		// console.log(binding)
		document.title = binding.value
	}
}