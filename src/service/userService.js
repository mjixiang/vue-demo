module.exports = {
	userLogin:function(query){
		return Net.post('/user/login',query);
	},
	getUserInfo:function(query){
		return Net.get('/user/info',query);
	}
}