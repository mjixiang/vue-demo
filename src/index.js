var Vue = require('vue');
var VueRouter = require('vue-router');
var $ = require('jquery-ajax');

Vue.use(VueRouter);

var App = Vue.extend({});
window.Router = new VueRouter();
Router.map(require('./router.config.js'));
Router.start(App, '#app');