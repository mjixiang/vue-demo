<style>
    @media screen and (max-width:600px) {
        .login-form{background:white;}
        .login-box{box-shadow:0 0 5px #ccc;}
    }
    @media screen and (min-width:600px) {
        .login-form{background:url(../../common/images/bg_login.png) rgba(80,80,80,0.7);background-size:cover;}
    }
    .login-form{height:100%;}
    .login-box{width:360px;background:white;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}
    .login-title{line-height:68px;font-size:24px;text-align:center;}
    .login-line{padding:0 30px;margin-bottom:15px;}
    .login-input:focus{outline:0;}
    .login-input{width:300px;height:30px;padding:0;border:1px solid #eee;text-indent:5px;}
    .login-btn{width:300px;height:32px;line-height:32px;border:0;color:white;border-radius:5px;background:#007ae2;cursor:pointer;}
</style>
<template>
    <form @submit.stop.prevent="submitLogin" class="login-form">
        <div class="login-box">
            <div class="login-line login-title">系统登录</div>
            <div class="login-line"><input v-model="query.username" type="text" placeholder="账号" class="login-input" autofocus="autofocus" autocomplete="off"></div>
            <div class="login-line"><input v-model="query.password" type="password" placeholder="密码" class="login-input" autocomplete="off"></div>
            <!-- <div class="login-line">
                <input type="text" placeholder="验证码" name="checkcode" class="login-input" autocomplete="off" style="width:155px;">
                <img src="">
                <a href="#" style="font-size:12px;color:#007ae2;">看不清？</a>
            </div> -->
            <div style="padding:15px 30px;">
               <input type="submit" class="login-btn" :value="btnName">
            </div>
        </div>
    </form>
</template>

<script>
    const Service = require('service/user.js')
    export default {
        data(){
            return {
                query:{
                    username:this.$route.query.username || '',
                    password:this.$route.query.password || '',
                },
                btnName:'登录'

            }
        },
        methods:{
            submitLogin(){
                if(this.$root.isLoading == true) return;
                this.btnName = '登录中，请稍后...'
                this.$dispatch('isLoading',true);
                Service.login(this.query).then(data=>{
                    this.$dispatch('isLoading',false);
                    this.btnName = '登录成功'
                    if(data && data.name){
                        window.localStorage.userName = data.name;
                    }
                    Router.go(this.$route.query.goto || '/train/overview');
                },err => {
                    this.btnName = '登录失败，点击重新登录'
                }).finally(()=>{  
                    this.$dispatch('isLoading',false);
                })
            }
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','培训系统登录');
            }
        }

        
    }

</script>
