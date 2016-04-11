var service = require('service/userService');
Router.componentBuffer = {
	template:require('./index.html'),
	data:function(){
		return {
			query:{id:1},
			queryData:{}
		}
	},
	route:{
		data:function(transition){
			this.$root.root.title = '测试站点_基本信息';
			service.getUserInfo(this.query).done(function(rs){
				if(rs.status == 200){
					setTimeout(function(){
						transition.next({
							queryData:rs.data
						});	
					}.bind(this),1000)
				}
			}.bind(this));
		}
	}
};