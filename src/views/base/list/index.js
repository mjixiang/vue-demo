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
			this.$root.root.title = '测试站点_列表';
			Net.get('/user/info',{id:1},function(rs){
				if(rs.status == 200){
					transition.next({
						queryData:rs.data
					});
				}
			});
		}
	}
};