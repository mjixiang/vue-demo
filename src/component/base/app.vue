<template>
<div>
    <router-view class="vue-view" transition="vue" transition-mode="out-in"></router-view>
    <xa-loading :show.sync="isLoading"></xa-loading>
    <xa-toast :message="toast.message" :class-name="toast.className" :show.sync="toast.show"></xa-toast>
</div>
</template>
<script>
    import Vue from 'vue';
    import store from '../../vuex/store.js'
    import xaLoading from '../loading.vue'
    import xaToast from '../toast.vue'
    Vue.component('xaLoading',xaLoading);
    Vue.component('xaToast',xaToast);
    export default {
        data(){
            return{
                title:"培训系统",
                isLoading:false,
                toast:{
                    show:false,
                    className:'',
                    message:''
                }
            }
        },
        store,      //使用vuex
        events:{
            documentTitle (title){
                document.title = title;
            },
            isLoading(flag){
                this.isLoading = flag;
            },
            showAppToast(msg,className){
                this.toast.message = msg;
                this.toast.className = className;
                this.toast.show = true;
            }
        }
    }
</script>