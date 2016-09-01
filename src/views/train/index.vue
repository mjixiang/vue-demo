<template>
<div class="xa-page-row">
    <xa-sidebar></xa-sidebar>
    <section class="xa-flex">
	   <router-view :service="trainService" class="vue-view" transition="vue" transition-mode="out-in" keep-alive></router-view>
    </section>
</div>
</template>
<script>
/*培训模块 入口*/ 
const trainService = require('service/train');
import xaSidebar from '../../component/base/aside.vue'
import xaDate from '../../component/Datepicker.vue'
import xaPrompt from '../../component/prompt.vue'
import xaPaging from '../../component/paging.vue'
Vue.component('xaDate',xaDate);
Vue.component('xaPrompt',xaPrompt);
Vue.component('xaPaging',xaPaging);
Vue.filter('type',val => val==1 && '单选题' || val == 2 && '多选题' || val == 3 && '判断题' || '未知题型')
export default {
	data(){
		return {
			trainService
		}
	},
    components:{
        xaSidebar
    }
}
</script>