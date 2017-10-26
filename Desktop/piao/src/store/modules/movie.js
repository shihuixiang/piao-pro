import Vue from 'vue'
import * as types from '../mutation-type'
let axios = Vue.prototype.$axios
const state = {
    movieList: []
}
//gettesr
const getters = {
  getList: (state)=>{
		return state.movieList
	}
}
//actions
const actions = {
	getMovieList({commit, state},params){
		return new Promise( (resolve,reject)=>{
			axios.get('/api/queryAdvertise',{
				params
			}).then((response) => {        
				commit(types.GET_MOVIE_LIST,response.data.data)
				resolve(state.movieList)
			}).catch( (error)=> {
				console.log(error)
				reject(error)
			})
		})        
	}
}

//mutations
const mutations = {
    [types.GET_MOVIE_LIST](state, movieList){
        state.movieList = state.movieList.concat(movieList)
    }
}
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
