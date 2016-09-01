<template>
	 <div v-show="show"	 class="xa-popup">
	  	<div class="layer"></div>
	  	<div class="popup">
	  		<div class="title">
	  			<div class="name">{{ title }}</div>
	  			<div @click="show = false" class="close"></div>
	  		</div>
	  		<div class="main">
	  			<slot></slot>
	  		</div>
			<div class="buttons">
				<div v-for="btn in buttons" @click="setEvent(btn.clickEvent)" :class="btn.className" class="button">{{ btn.text }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		// 弹框适配屏幕
		autosize(){
			var dom = this.$el.querySelector('.popup');
            var CHeight = document.documentElement.clientHeight;
            var CWidth = document.documentElement.clientWidth;
            var PHeight = dom.offsetHeight;
            var PWidth = dom.offsetWidth;
            dom.querySelector(".main").style.maxHeight = CHeight - 100;
            dom.style.top = CHeight>PHeight?(CHeight-PHeight)/2:0;
            dom.style.left = (CWidth-PWidth)/2;
        },
        setEvent(eventName){
        	this.$dispatch(eventName)
        }
    },
	props:{
		title:{
			type:String,
			default:''
		},
		show:{
			type:Boolean,
			default:false,
			twoWay:true
		},
		buttons:{
			type:Array,
			default(){
				return [
					{text:'确定',click:'confirmEvent',className:''},
					{text:'取消',click:'cancelEvent',className:''},
				]
			}
		}
	},
	watch:{
		show(val){
			val && this.autosize();
		}
	},
	ready() {
		// 添加拖拽事件	有时间改成指令形式
		window.Xa.drag(this.$el.querySelector('.title'),this.$el.querySelector('.popup'));
	},
	beforeDestroy() {
	}
}
</script>

