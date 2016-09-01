<template>
	<li>
		<div @click="toggle">
			<div style="flex:1;">
				<i v-if="hasChild" :class="{'up':open}" class="iconfont icon-jiantouxia toggle-icon"></i>
				<span class="name" :class="{'red':model.status == 2}" :title="model.remark">{{model.name}}</span>
			</div>
			<div class="xa-icon-boxs">
				<div @click.stop="setEvent('addEvent',model)" class="xa-icon-box" title="添加下级分类"><i class="iconfont icon-2 xa-txt-20"></i></div>
				<div @click.stop="setEvent('editEvent',model)" class="xa-icon-box" title="修改"><i class="iconfont icon-bianji xa-txt-20"></i></div>
				<div @click.stop="setEvent('forbidEvent',model)" :class="{'xa-txt-red':model.status == 2}" class="xa-icon-box" :title="model.status==2?'点击启用':'点击停用'"><i class="iconfont icon-jinyong xa-txt-20"></i></div>
			</div>
		</div>
		<ul v-show="open" v-if="hasChild">
			<xa-tree v-for="model in model.sub" :model="model"></xa-tree>
		</ul>
	</li>
</template>
<script>
export default {
	name:'xaTree',
	data(){
		return {
			open:false
    	}
    },
    computed:{
    	hasChild(){
      		return this.model.sub && this.model.sub.length
    	}
  	},
	methods:{
		toggle(){
			if(this.hasChild){
	        	this.open = !this.open
	        }
	    },
	    setEvent(eventName,item){
	    	this.$dispatch(eventName,item);
	    }
	},
	props:{
  		model: Object
	}
}
</script>