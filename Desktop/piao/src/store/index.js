import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		movie
	},
	state: {
		count: 0
	},
	getters: {

	},
	mutations: {
		increment (state, n){
			state.count += n
		}
	}
})
export default store