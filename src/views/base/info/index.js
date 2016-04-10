Router.componentBuffer = {
	template:require('./index.html'),
	data:function(){
		return {
			queryData:{
				"userName":"",
				"email":"",
				"phone":"",
				"sex":"",
				"birthday":"",
				"experience":"",
				"image":""
			}
		}
	},
	route:{
		data:function(transition){
			this.$root.root.title = '测试站点_基本信息';
			Net.get('/user/info',{id:1},function(rs){
				if(rs.status == 200){
					setTimeout(function(){
						transition.next({
							queryData:rs.data
						});	
					},2000)
				}
			});
		}
	}
};