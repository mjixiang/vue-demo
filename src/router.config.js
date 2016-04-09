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
module.exports = {
    "/foo": {
        "component": Vue.extend({
            name:'foo',
		    template: '<p>This is foo!</p>'
		})
    },
    "/bar": {
        "component":resolveComponet('./views/base/sidebar.js')
    },
    "/demo/demo": {
        "component":resolveComponet('./views/demo/demo.js')
    },

    // not found handler
    '*': {
      component:function (resolve) {
             resolve(require('./views/not-found.vue'));
            //resolve(component);
        }
    }
}