<template>
	<aside class="xa-aside">
		<!-- <div class="logo"></div> -->
		<div class="logo1" style="line-height:60px;color:white;text-align:center;background:#268DFF;font-size:30px;"><i>logo</i></div>
		<nav>
			<ul>
				<li v-link="{path:'/train/overview'}"><i class="iconfont icon icon-meeting"></i>模块一</li>
				<li v-link="{path:'/train/category'}"><i class="iconfont icon icon-class"></i>模块二</li>
				<li v-link="{path:'/train/question'}"><i class="iconfont icon icon-wentiziyuanku02"></i>模块三</li>
				<li v-link="{path:'/train/exam'}"><i class="iconfont icon icon-iconkaoshitongzhi"></i>考试列表</li>
				<li v-link="{path:'/train/docs'}"><i class="iconfont icon icon-shu"></i>模块五</li>
				<li v-link="{path:'/train/knowledge'}"><i class="iconfont icon icon-shujia2"></i>模块六</li>
				<li v-link="{path:'/train/course'}"><i class="iconfont icon icon-peixunzhichi"></i>模块七</li>
				<li v-link="{path:'/train/lecturer'}"><i class="iconfont icon icon-meeting"></i>模块八</li>
			</ul>
		</nav>
		<div v-show="userName" class="user">
			<span>{{ userName }}</span>
			<span class="line">|</span>
			<a @click="logout">退出</a>
		</div>	
	</aside>
</template>
<script>
export default {
	data(){
        return{
        	userName:''
        }
    },
    methods:{
    	logout(){
    		this.$dispatch('isLoading',true);
    		Xa.get('/exams/public/loginOut').then(()=>{
    			Router.go('/login?goto='+this.$route.path);
    		}).finally(()=>{
                this.$dispatch('isLoading',false);
            })
    	}
    },
    ready(){
    	this.userName = window.localStorage.userName || ''
    }
}
</script>