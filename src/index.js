window.Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = Vue.extend({});
window.Router = new VueRouter();
Router.map(require('./router.config.js'));
Router.start(App, '#app');