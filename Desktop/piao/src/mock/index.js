import axios from 'axios'
import {getShowsByCityCode, getMovieList} from '@/api/index.js'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios,{delayResponse: 2000})
mock.onGet('/api/queryAdvertise').reply(function(config){
    // console.log(config.params)
    let params = config.params
    let data = {
        code: getShowsByCityCode.code,
        data: []
    }
    data.data = getShowsByCityCode.data.splice(params.page*params.pageSize,params.pageSize)
    return [200, data]
})
mock.onGet('/api/getmovielist').reply(function(config){
    let params = config.params
    let data = {
        code: getMovieList.code,
        data: []
    }
    data.data = getMovieList.data.splice(params.page*params.pageSize,params.pageSize)
    return [200, data]
})
export default axios
