var Vue = require('vue');
var $ = require('jquery-ajax');
var resolveComponet = function(url){
    return function(resolve){
        $.getScript(url,function(){
            resolve(Router.componentBuffer);
            delete Router.componentBuffer;
        })
    }
}
/**
    map:路由配置
    alias:别名配置
    redirect:重定向配置
*/
module.exports = {
    "map":{
        "/foo": {
            "component": Vue.extend({
                name:'foo',
    		    template: '<p>This is foo!</p>'
    		})
        },
        "/base": {
            "component":resolveComponet('./views/base/index.js'),
            "subRoutes":{
                "/info":{
                    "name":"base.info",
                    "component":resolveComponet('./views/base/info/index.js')
                },
                "/list":{
                    "name":"base.list",
                    "component":resolveComponet('./views/base/list/index.js')
                },
                "/setting":{
                    "name":"base.setting",
                    "component":resolveComponet('./views/base/setting/index.js')
                }
            }
        },
        "/demo/demo": {
            "component":resolveComponet('./views/demo/demo.js')
        },
        "*": {  //以上都不匹配时
            component:function (resolve) {
                 resolve(require('../views/not-found.vue'));
            }
        }
    },
    "alias":{
        "/": "/base/info",
        "/base": "/base/info"
    },
    "redirect":{

    }
}