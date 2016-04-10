/**
    http请求 状态码对应信息
*/
module.exports = {
    4301:{
        msg:'帐号密码错误',
        next:false,
        do:function(rs){
            // Router.go('/login');
        }
    },
    4302:{
        msg:'登录已过期',
        next:false,
        do:function(rs){
            Router.go('/login');
        }
    },
    4303:{
        msg:'帐号密码错误',
        next:false,
        do:function(rs){
            
        }
    },
    4304:{
        msg:'登录已过期',
        next:false,
        do:function(rs){
            Router.go('/login');
        }
    },
    200:{
        msg:'请求成功',
        next:true,
        do:function(rs){
            
        }
    }
}