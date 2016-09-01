<template>
<div class="xa-page exam">
    <header class="xa-header">
        <div class="xa-header-icon">
            <i class="iconfont icon-htmal5icon30"></i>
        </div>
        <div @click="showAddExamDialog" title="创建考试" class="xa-header-icon">
            <i class="iconfont icon-tianjia"></i>
        </div>
        <div class="xa-date-box">
            <span>创建时间</span>
            <xa-date :value.sync="query.start_date"></xa-date>
            <div class="dropdown"><i class="iconfont icon-jiantouxia"></i></div>
        </div>
        <div @click="submitSearch" class="xa-btn xa-bg-blue-click">筛选</div>

    </header>
    <div class="xa-page-container">
        <table class="xa-table xa-txt-center">
            <thead>
                <tr>
                    <th><div>考试编号</div></th>
                    <th><div>考试标题</div></th>
                    <th><div>分类</div></th>
                    <th><div>创建时间</div></th>
                    <th><div>考试时间</div></th>
                    <th><div>创建人</div></th>
                    <th><div>操作</div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in queryData.data"  class="xa-border-bottom">
                    <td>{{ item.number }}</td>
                    <td><a v-link="{path:'/train/exam/paper?id='+item.id}" class="text xa-txt-blue">{{ item.title }}</a></td>
                    <td><span class="text">{{ item.cat_id }}</span></td>
                    <td>{{ item.create_at }}</td>
                    <td>{{ item.start_date }}</td>
                    <td>{{ item.create_by }}</td>
                    <td style="width:200px;max-width:200px;padding:0 10px;"><span class="xa-btns"><span class="xa-btn-min xa-bg-blue-click">修改</span><span class="xa-btn-min xa-bg-red-click">删除</span></span></td>
                </tr>
            </ul>
        </table>
    </div>
    <add :step.sync="step" :show.sync="isShowDialog" :query.sync="addQuery" :type-data="typeData"></add>

</div>
</template>

<script>
    import add from '../../../component/exam/add.vue'
    export default {
        data(){
            return {
                step:1,
                isShowDialog:false,
                typeData:[],
                query:{
                    start_date:'',
                },
                queryData:{
                    data:[]
                },
                addQuery:{
                    number:'',
                    title:'',
                    is_train:1,
                    type:'1',
                    train:'',
                    ratio:'',
                    start_date:'',
                    timeout:'',
                    cat_id:[],
                    remark:'',
                    item:[{
                        name:'',
                        score:'',
                        remark:'',
                        range:[
                            {
                                type:'',
                                cat_id:'',
                                sum:1
                            }
                        ]
                    }]
                }
            }
        },
        props:['service'],
        components:{
            add
        },
        events:{
            confirmlSubmitEvent(){
                this.$log('addQuery');
                this.$dispatch('isLoading',true);
                this.service.addExam(this.addQuery).then(data=>{
                    this.queryData.push(data);
                    this.isShowDialog = false;
                },err=>{
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            }
        },
        methods:{
            getQueryData(){
                this.$dispatch('isLoading',true);
                this.service.getExamList(this.query).then(data=>{
                    this.queryData = data;
                },err=>{
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            },
            getTypeData(){
                this.service.getCategoryList({type:2}).then(data=>{
                    this.typeData = data;
                },err=>{
                    err && alert(err);
                })
            },
            submitSearch(){
                console.log(this.query);
            },
            showAddExamDialog(){
                this.isShowDialog = true;
            }
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','考试管理');
            }
        },
        ready(){
            this.getQueryData();
            this.getTypeData();
        }
        
    }

</script>