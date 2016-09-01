<template>
<div class="xa-page question">
    <header class="xa-header">
        <div class="xa-header-icon">
            <i class="iconfont icon-htmal5icon30"></i>
        </div>
        <div @click="" class="xa-btn xa-bg-blue-click">筛选</div>
    </header>
    <div class="xa-page-container">
        <table class="xa-table xa-txt-center">
            <thead>
                <tr>
                    <th><div>题目</div></th>
                    <th><div>分类</div></th>
                    <th><div>题型</div></th>
                    <th><div>添加时间</div></th>
                    <th><div>添加人</div></th>
                    <th><div>操作</div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in queryData.data" class="xa-border-bottom">
                    <td><span class="text">{{ item.remark }}</span></td>
                    <td><span class="text">{{ item.cat_id }}</span></td>
                    <td>{{ item.type | type }}</td>
                    <td>{{ item.create_at }}</td>
                    <td>{{ item.create_by }}</td>
                    <td style="padding:0 10px;height:40px;width:80px;">
                        <div class="xa-icon-boxs">
                            <div class="xa-icon-box">
                                <i class="iconfont icon-bianji xa-txt-20"></i>
                            </div>
                            <div class="xa-icon-box">
                                <i class="iconfont icon-jinyong xa-txt-20"></i>
                            </div>
                        </div>
                    </td>
                </tr>
            </ul>
        </table>
    </div>
    <xa-paging :page.sync="query.p" :record-count="queryData.recordCount" :psize="query.psize"></xa-paging>
</div>
</template>

<script>
    export default {
        data(){
            return {
                query:{
                    p:1,
                    psize:20
                },
                queryData:{
                    recordCount:0,
                    pageCount:0,
                    data:[

                    ]

                }
            }
        },
        props:['service'],
        events:{
            onPageChange(p){
                this.getQueryData();
            }
        },
        methods:{
            getQueryData(){
                this.$dispatch('isLoading',true);
                this.service.getQuestionList(this.query).then(data=>{
                    if(!data) return;
                    this.queryData = data;
                },err=>{
                    err && alert(err);
                }).finally(()=>{
                    this.$dispatch('isLoading',false);
                })
            }
        },
        route:{
            data({next}){
                this.$dispatch('documentTitle','题库管理');
            }
        },
        ready(){
            this.getQueryData();
        }
        
    }

</script>
