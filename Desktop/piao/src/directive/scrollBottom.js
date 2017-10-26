export default {
	inserted (el, binding){
		let isScrollBottom = (pageX) => {
			let [
				scrollTop,
				winHeight,
				bodyHeight
			] = [
				(document.body.scrollTop),
				(window.outerHeight),
				(document.body.clientHeight)
			]
			//console.log(scrollTop,winHeight,bodyHeight)
			if (bodyHeight-scrollTop <= winHeight+50 ){
				return true
			}else{
				return false
			}		
		}
		document.addEventListener('scroll',(e) =>{
			// console.log(isScrollBottom())				
			if(isScrollBottom()){
				binding.value()
			}
		},false)
	}
}
