<style scoped>
    .overview .top-bar{display:flex;padding:15px 0 25px 0;text-align:center;background:#353B4B;color:white;}
    .overview .top-bar>div{flex:1;border-left:1px solid rgba(255,255,255,0.1);}
    .overview .top-bar>div:first-child{border-left:0;}
    .overview .datas>div.number{font-size:60px;}
    .overview .datas>div.number:after{content:'';display:block;height:0;width:120px;border-top:1px solid rgba(255,255,255,0.2);margin:7px auto;}
    .overview .datas>div:last-child{font-size:20px;color:#939dba;}
</style>
<template>
<div class="xa-page overview">
    <header class="xa-header">
        <div class="xa-header-icon">
            <i class="iconfont icon-htmal5icon30"></i>
        </div>
        <div class="xa-date-box">
            <span>开始时间</span>
            <xa-date :value.sync="query.start_date"></xa-date>
            <div class="dropdown"><i class="iconfont icon-jiantouxia"></i></div>
        </div>
        <div class="xa-date-box">
            <span>结束时间</span>
            <xa-date :value.sync="query.end_date"></xa-date>
            <div class="dropdown"><i class="iconfont icon-jiantouxia"></i></div>
        </div>
        <div @click="submitSearch" class="xa-btn xa-bg-blue-click">筛选</div>
    </header>
    <div class="top-bar">
        <div class="datas"><div class="number">72</div><div>培训期数/次</div></div>
        <div class="datas"><div class="number">3526</div><div>学员人次/次</div></div>
        <div class="datas"><div class="number">532</div><div>总课时/小时</div></div>
    </div>
    <div class="xa-page-container">
        <table class="xa-table xa-txt-center">
            <thead>
                <tr>
                    <th><div>课程标题</div></th>
                    <th><div>所属分类</div></th>
                    <th><div>培训讲师</div></th>
                    <th><div>课程人数</div></th>
                    <th><div>课程学时间</div></th>
                    <th><div>培训时间</div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in queryData.list" class="xa-border-bottom">
                    <td><span class="text">2016年上半期飞行操控技术培训</span></td>
                    <td><span class="text">这个是所属分类（也可能有点长）</span></td>
                    <td>李积祥</td>
                    <td>389</td>
                    <td>{{ $index }}</td>
                    <td>2016/5/23-2016/9/20</td>
                </tr>
            </ul>
        </table>
    </div>
    <xa-paging :page.sync="queryData.page" :record-count="queryData.recordCount" :psize="20"></xa-paging>
</div>
</template>

<script>
    export default {
        data(){
            return {
                query:{
                    start_date:'',
                    end_date:'',   
                },
                queryData:{
                    page:1,
                    recordCount:221,
                    list:[{},{},{},{},{},{},{},{},{},{},{},{}]
                }
            }
        },
        props:['service'],
        watch: {
        },
        methods:{
            submitSearch(){
                console.log(this.query.start_date,this.query.end_date);
            }
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','培训总览');
                setTimeout(()=>{
                    next();
                },2000)
            }
        },
        ready(){
            this.$dispatch('isLoading',true);
            setTimeout(()=>{
                this.$dispatch('isLoading',false);
                this.queryData = {
                    page:1,
                    recordCount:121,
                    list:[{},{},{},{},{},{},{},{},{},{},{},{}]
                }
            },2000)
        }
        
    }

</script>
