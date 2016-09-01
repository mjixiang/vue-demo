<style>
    .category .top-bar{display:flex;padding:15px 0 25px 0;text-align:center;background:#353B4B;color:white;}
    .category .top-bar>div{flex:1;border-left:1px solid rgba(255,255,255,0.1);}
    .category .top-bar>div:first-child{border-left:0;}
    .category .datas>div.number{font-size:60px;}
    .category .datas>div.number:after{content:'';display:block;height:0;width:120px;border-top:1px solid rgba(255,255,255,0.2);margin:7px auto;}
    .category .datas>div:last-child{font-size:20px;color:#939dba;}
    .category ul{transition:0.25s;}
    .category .tree-root:last-child{border-bottom:1px solid #eee;}
    .category .tree-root li>div{display:flex;}
    .category .tree-root li{border-top:1px solid #eee;line-height:40px;padding-left:24px;}
    .category .tree-root .toggle-icon{transition:0.1s;display:inline-block;margin:0 4px 0 0;font-size:14px;color:#888;}
    .category .tree-root .toggle-icon.up{transform:rotate(-180deg);}
    .category .tree-root span.name{cursor:pointer;transition:0.25s;}
    .category .tree-root li>div:hover span.name{color:#268dff;}
    .category .tree-root li>div:hover span.name.red{color:red;}
    .category .tree-root li>div:hover .xa-icon-boxs{display:flex;}
    .category .xa-icon-boxs{display:none;}
    .category .xa-icon-box.xa-txt-red:hover .iconfont{color:red;}
    
</style>
<template>
<div class="xa-page category">
    <header class="xa-header">
        <div @click="addRootClass" title="创建一级分类" class="xa-header-icon">
            <i class="iconfont icon-tianjia"></i>
        </div>
        <div class="line"></div>
        <div @click="" class="xa-header-icon">
            <i class="iconfont icon-dingdanliebiaoyincang201"></i>
        </div>
    </header>
    <div class="xa-page-container">
        <ul class="tree-root" v-for="item in queryData">
            <xa-tree :model="item"></xa-tree>
        </ul>
    </div>

    <xa-prompt :title="dialog.title" :buttons="dialog.buttons" :show.sync="dialog.isShowDialog">
        <div style="width:500px;padding:10px 20px;">
            <div class="form-group">
                <label>分类名称</label>
                <input v-model="classQuery.name" type="text" class="form-control"></div>
            <div class="form-group">
                <label>分类描述</label>
                <textarea v-model="classQuery.remark" class="form-control" rows="5" style="resize:vertical;"></textarea>
            </div>
        </div>
    </xa-prompt>
</div>
</template>
 
<script>
    import xaTree from '../../../component/tree.vue';
    export default {
        data(){
            return {
                query:{
                    type:1
                },
                classQuery:{id:'',pid:0,name:'',remark:''},
                queryData:[],
                currentClass:null,
                dialog:{
                    title:'创建分类',
                    isShowDialog:false,
                    buttons:[
                        {
                            text:'取消',
                            className:'',
                            clickEvent:'cancelEvent'
                        },
                        {
                            text:'确定',
                            className:'xa-bg-blue',
                            clickEvent:'confirmlEvent'
                        }
                    ],
                }
            }
        },
        events:{
            addEvent(item){
                this.currentClass = item;
                this.classQuery = {id:'',pid:item.id || 0,name:'',remark:''};
                this.dialog.title="添加分类";
                this.dialog.isShowDialog = true;
            },
            editEvent(item){
                this.currentClass = item;
                this.classQuery = {id:item.id,pid:item.pid || 0,name:item.name,remark:item.remark};
                this.dialog.title="编辑分类";
                this.dialog.isShowDialog = true;
            },
            forbidEvent(item){
                this.forbid(item);
            },
            stopEvent(item){
            },
            cancelEvent(){
                this.dialog.isShowDialog = false;
            },
            confirmlEvent(){
                if(!this.classQuery.name){
                    alert('请输入分类名称');
                    return;
                }
                this.dialog.isShowDialog = false;
                this.save();
            },
        },
        methods:{
            getQueryData(){
                this.$dispatch('isLoading',true);
                this.service.getCategoryList(this.query).then(data=>{
                    this.queryData = data;
                }, err => {
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            },
            save(){
                this.$dispatch('isLoading',true);
                this.service.addCategory(this.classQuery).then(data=>{
                    if(this.currentClass){
                        if(this.classQuery.id){     //编辑
                            this.currentClass.name = this.classQuery.name;
                            this.currentClass.remark = this.classQuery.remark;
                        }else{                      //添加
                            if(!this.currentClass.sub || !this.currentClass.sub.length){
                                this.currentClass.sub = [];
                            }
                            this.currentClass.sub.push({
                                id:data,
                                name:this.classQuery.name,
                                remark:this.classQuery.remark,
                                sub:[],
                                status:1
                            })
                        }
                        this.currentClass = null;
                    }else{
                        //添加根分类
                    }
                },err => {
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            },
            forbid(item){
                // status:1 正常  2禁用
                this.$dispatch('isLoading',true);
                var status = item.status == 1 ? 2 : 1;
                this.service.forbidCategory({id:item.id,status,ids:JSON.stringify(item.ids)}).then(data=>{
                    item.status = status;
                    item.sub = data;
                },err => {
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            },
            addRootClass(){
                this.currentClass = null;
                this.classQuery = {id:'',pid:0,name:'',remark:''};
                this.dialog.title="添加分类";
                this.dialog.isShowDialog = true;
            },
        },
        props:['service'],
        route:{
            data({next}){
                this.$dispatch('documentTitle','分类管理');

            }
        },
        components:{
            xaTree
        },
        ready(){
            this.getQueryData();
        }
        
    }

</script>
