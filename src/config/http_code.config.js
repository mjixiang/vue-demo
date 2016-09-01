/**
    http请求 状态码对应信息
    next:Boolean 默认值true 是否将原数据带下去
    msg:String 状态描述，next===false 会将msg放入数据
    do:Function 获取数据后的第一手操作
*/

export default {
    4300:{
        msg:'您没有权限访问',
        do:function(rs){
            // Router.go('/error?msg=您没有权限访问');
        }
    },
    4301:{
        msg:'帐号密码错误',
        do:function(rs){
        }
    },
    4302:{
        msg:'登录已过期',
        next:false,
        do:function(rs){
            Router.go('/login?goto='+window.location.hash.substring(2));
        }
    },
    4303:{
        msg:'帐号密码错误'
    },
    4304:{
        msg:'登录已过期',
        next:false,
        do:function(rs){
            Router.go('/login?goto='+window.location.hash.substring(2));
            // Router.go('/error?msg=登录验证失败');
        }
    },
    8888:{
        msg:'未登录',
        next:false,
        do:function(rs){
            Router.go('/login?goto='+window.location.hash.substring(2));
        }
    },
    200:{
    }
}