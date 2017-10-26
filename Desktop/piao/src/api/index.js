import {Random} from 'mockjs'

let getShowsByCityCode = {
	code: 0,
	data: []
}
for(let i = 0; i < 100 ; i++){
	let type = Random.integer(1,2)
	if(type === 1){
		getShowsByCityCode.data.push({
			name: Random.csentence(3,10),
			star: Random.string('★',10),
			director:  Random.cname(),
			image: Random.dataImage('113x160'),
			leadingRole: [Random.cname(),Random.cname()],
			remark: Random.float(0,9,1,1),
			newP: '新人专享',
			gap: Random.csentence(3,10),
			type: type
		})
	}else{
		getShowsByCityCode.data.push({
			name: Random.csentence(3,10),
			director:  Random.cname(),
			image: Random.dataImage('113x160'),
			leadingRole: [Random.cname(),Random.cname()],
			remarkCount: Random.natural(5),
			data: Random.date('yyyy-MM-dd'),
			newP: '新人专享',
			gap: Random.csentence(3,10),
			type: type
		})
	}	
}
let getMovieList = {
	code: 0,
	data: []
}
for(let i = 0; i < 100 ; i++){
	getMovieList.data.push({
		name: Random.csentence(3,10),
		price: Random.float(1,100,2,2),
		address: (Random.county(true)+Random.integer(1,2)+'号'),
		yewu: [Random.cname(),Random.cname()]
	})
}
export {
	getShowsByCityCode,
	getMovieList
}