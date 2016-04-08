var Vue = require('vue');
module.exports = {
    "/foo": {
        "component": Vue.extend({
		    template: '<p>This is foo!</p>'
		})
    },
    "/bar": {
        "component": Vue.extend({
		    template: '<p>This is bar!</p>'
		})
    },
    "/demo/demo": {
        "component": Vue.extend({
		    template: '<p>This is demo!</p>'
		})
    }
}