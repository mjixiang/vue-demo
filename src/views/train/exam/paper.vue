<template>
<div class="xa-page exam-paper">
    <header class="xa-header">
        <div class="xa-header-icon">
            <i class="iconfont icon-htmal5icon30"></i>
        </div>
    </header>
    <div class="xa-page-container">
        <info></info>
        <div>
            <div class="xa-box xa-line xa-txt-blue xa-border-bottom" style="padding:8px 20px;">
                <div class="xa-flex">P20的基础知识（单选题）</div>
                <div class="xa-flex xa-txt-right">总分：20分 题数：10题</div>
            </div>
            <question></question>
            <div class="xa-center xa-absolute-bottom" style="background:rgba(0,153,255,0.9)">
                <div class="xa-btn-large xa-bg-white xa-txt-blue">上一项目</div>
                <div class="xa-btn-large xa-txt-white xa-border-white" style="line-height:36px;">下一项目</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import info from '../../../component/exam/info.vue'
    import question from '../../../component/exam/question.vue'
    export default {
        data(){
            return {
                query:{
                    start_date:'',
                },
                queryData:{
                    data:[]
                }
            }
        },
        props:['service'],
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
        },
        components:{
            info,
            question
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','考试详情');
            }
        },
        ready(){
            this.getQueryData();
        }
    }
</script>