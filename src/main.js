require('./common/common.css');
require('./common/iconfont/iconfont.css');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import  Common from './common/common.js'
// import VueAnimatedList from 'vue-animated-list'
// Vue.use(VueAnimatedList)

window.Vue = Vue;
Vue.config.debug = true;

import {map,alias} from './config/router.config.js'
import App from './component/base/app.vue'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.use(VueRouter);
window.Router = new VueRouter({
    linkActiveClass:'active'
});
Router.map(map).alias(alias).start(App,'#app')


window.Xa = Common;