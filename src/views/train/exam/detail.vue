<template>
<div class="xa-page exam-detail">
    <header class="xa-header">
        <div class="xa-header-icon">
            <i class="iconfont icon-htmal5icon30"></i>
        </div>
    </header>
    <div class="xa-page-container">
        <info></info>
        <table class="xa-table xa-txt-center">
            <thead>
                <tr>
                    <th><div>姓名</div></th>
                    <th><div>联系电话</div></th>
                    <th><div>所属部门</div></th>
                    <th><div>成绩</div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in queryData.data"  class="xa-border-bottom">
                    <td>{{ item.number }}</td>
                    <td>{{ item.phone }}</td>
                    <td><span class="text">{{ item.cat_id }}</span></td>
                    <td>{{ item.score }}</td>
                </tr>
            </ul>
        </table>
    </div>
</div>
</template>

<script>
    import info from '../../../component/exam/info.vue'
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
            info
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