Router.componentBuffer = {
	template:require('./demo.html'),
	data:function(){
		return {
			good:'------------',
			query:{

			}
		}
	},
	methods:{
		getQueryData:function(){

		}
	},
	route:{
		data:function(transition){
			this.$root.root.title = '测试页面';
			// transition(next())
		}
	},
	ready:function(){
		Net.get('/user/login',null,function(rs){
			console.log(rs);
		})
	}
};