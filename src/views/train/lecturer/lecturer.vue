<style scoped>
    .lecturer .top-bar{height:40px;line-height:40px;text-align:center;background:#767B84;color:white;}
    .lecturer .top-bar>span{margin:0 8px;}
</style>
<template>
<div class="lecturer">
    <header style="height:60px;">
    </header>
    <div>
        <div class="top-bar">
            <span>2016/03/25-2016/06/15</span>
            <span>课程数：100</span>
            <span>学时数：160</span>
            <span>学员数：160</span>
        </div>
        <div class="table-box">
            <div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                isShowDialog:false,
                toastShow:false,
                toastText:'',
                loadingToastShow:false,
                loadingToastText:'',
            }
        },
        props:['service'],
        methods:{
            showDialog(){
                this.isShowDialog = true;
            },
            comfirmDialog(){
                this.isShowDialog = false;
            },
            cancelDialog(){
                this.isShowDialog = false;
            },
            showToast(){
                this.loadingToastText='请稍后..';
                this.loadingToastShow = true;
                setTimeout(()=>{
                    this.loadingToastShow = false;
                    this.toastText = '操作成功';
                    this.toastShow = true;
                    setTimeout(()=>{
                        this.toastShow = false;
                    },1000);
                },1000)
            },
        },
        components:{
            
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','讲师管理');
                setTimeout(()=>{
                    next();
                },2000)
            }
        }
        
    }

</script>
