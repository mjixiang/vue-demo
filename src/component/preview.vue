<style scoped>
	.preview{position:fixed;top:0;left:0;z-index:1000;transition:0.2s;border:5px solid white;box-shadow:3px 3px 20px #666,0 0 8px #666 inset;background:rgba(0,0,0,0.5);max-width:90%;max-height:90%;overflow:hidden;min-height:100px;min-width:100px;}
	.preview .preview-box{height:100%;width:100%;}
	.preview .preview-box>img{max-height:100%;max-width:100%;}
	.preview .close{position:absolute;height:40px;width:40px;top:10px;right:10px;background:rgba(255,255,255,0.9);border-radius:100%;cursor:pointer;}
	.preview .close:hover{background:white;}
	.preview .close:hover .iconfont{color:red;}
</style>
<template>
	<div :style="{transform:url?'scale(1)':'scale(0)'}"  class="preview">
		<div class="preview-box">
	    	<img @load="picLoaded" :src="url">
		</div>
		<div @click="closePreview" class="close xa-center">
			<i class="iconfont icon-jieshu xa-txt-22"></i>	
		</div>
	</div>
</template>
<script>
export default {
	props:{
		url:{
			type:String,
			twoWay:true
		}
	},
	methods:{
		closePreview(){
			this.$el.style.transition="0.2s";
			this.url = ''
			window.onmousewheel = undefined;
		},
		picLoaded(e){
			this.$el.style.top = (document.documentElement.clientHeight-e.target.height)/2+'px';
			this.$el.style.left = (document.documentElement.clientWidth-e.target.width)/2+'px';
			this.$el.style.transition="0s";
			var img = this.$el.querySelector('img');
			img.style.transform = "scale(1)";
			var scale = 1;
			window.onmousewheel = (e) => {
				if(e.wheelDelta > 0){  	//上
					scale += scale<2 ? 0.05 : 0;
				}else {
					scale -= scale>0.2 ? 0.05 : 0;
				}
				img.style.transform = "scale("+(scale)+")";
				e.stopPropagation();
				return false;
			}
		}
	},
	ready(){
        window.Xa.drag(this.$el);
    }
}
</script>
