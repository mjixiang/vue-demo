<template>
	<div v-show="pages.length" class="paging-box">
		<div class="page-bar">
			<ul class="page-items">
				<li @click="setPage(1)" :class="{'page-disable-item':page == 1}">首页</li>
				<li @click="setPage(page-1)" :class="{'page-disable-item':page == 1}">上一页</li>
				<li v-for="p in pages" @click="setPage(p)" :class="{'page-current-item':p == page}">{{ p }}</li>
				<li @click="setPage(page+1)" :class="{'page-disable-item':page == maxPage}">下一页</li>
				<li @click="setPage(maxPage)" :class="{'page-disable-item':page == maxPage}">末页</li>
			</ul>
			<div class="page-jump">
				<input type="number" v-model="jumpPage" min="1" :max="maxPage">
				<button @click="pageGoto" class="page-goto">确定</button>
			</div>
		</div>
		<div class="page-info">共 <span>{{recordCount}}</span> 条  当前显示第 <span>{{(this.page - 1) * this.psize + 1}} - {{Math.min(this.page * this.psize, this.recordCount)}}</span> 条 共 {{maxPage}} 页</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			jumpPage:this.page,
			pages:[],
			maxPage:0,
		}
	},
	methods:{
        setPage(p){
        	p = p < 1 ? 1 : p > this.maxPage ? this.maxPage : p;
        	this.page = p;
        },
		//根据当前页和总数据量计算应该显示的页码
        updateView(){
        	var pages = [];
        	if (this.page > this.maxPage - 3) {
                for (var i = Math.max(1, this.maxPage - 6); i <= this.page - 4; i++) {
                    pages.push(i);
                }
            }
            for (var i = 1; i <= this.maxPage; i++) {
                if (this.page - 3 <= i && i <= this.page + 3) {
                    pages.push(i);
                }
            }
            if (this.page < 4) {
                for (var i = 4 + this.page; i <= Math.min(7, this.maxPage); i++) {
                    pages.push(i);
                }
            }
        	this.pages = pages;
        },
        pageGoto(){
        	this.setPage(this.jumpPage*1);
        }
    },
	props:{
		page:{
			type:Number,
			default:0,
			twoWay:true
		},
		psize:{
			type:Number,
			default:20
		},
		recordCount:{
			type:Number,
			default:0,
			coerce(val){
		        return val*1 // 将值转换为数字
		    }
		}
	},
	watch:{
		page(val){
			this.jumpPage = this.page;
			this.updateView();
			this.$dispatch('onPageChange',val);
		},
		recordCount(){
			this.maxPage = Math.ceil(this.recordCount / this.psize);
			this.updateView();
		}
	},
	ready() {
		if(!this.recordCount) return;
		this.maxPage = Math.ceil(this.recordCount / this.psize);
		this.updateView();
	}
}
</script>

