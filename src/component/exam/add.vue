<template>
    <xa-prompt :title="dialog.title" :buttons="dialog.buttons" :show.sync="show">
        <div style="width:800px;padding:10px 20px;">
            <table v-show="step == 1" class="xa-table xa-txt-right">
                <tbody>
                    <tr>
                        <td class="xa-width-100"><label>考试编号</label></td>
                        <td><input v-model="query.number" placeholder="输入考试编号" type="text" class="form-control"></td>
                    </tr>
                    <tr>
                        <td><label>考试标题</label></td>
                        <td>
                            <input v-model="query.title" placeholder="输入考试标题" type="text" class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <td><label>课程考核</label></td>
                        <td class="xa-txt-left">
                            <label><input type="radio" value="1" v-model="query.is_train" name="istrain">是</label>
                            <label style="margin-left:20px;"><input type="radio" value="2" v-model="query.is_train" name="istrain">否</label>
                        </td>
                    </tr>
                    <tr v-show="query.is_train == 1">
                        <td><label>课程编号</label></td>
                        <td>
                            <select v-model="query.train" class="form-control">
                                
                            </select>
                        </td>
                    </tr>
                    <tr v-show="query.is_train == 1">
                        <td><label>综合成绩占比</label></td>
                        <td>
                            <input v-model="query.ratio" placeholder="输入综合成绩占比" type="text" class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <td><label>考试形式</label></td>
                        <td>
                            <select v-model="query.type" class="form-control">
                                <option value="1">考卷形式</option>}
                                <option value="2">口试或实操形式</option>}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>考试日期</label></td>
                        <td>
                            <input v-model="query.start_date" type="datetime-local" class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <td><label>考试时长</label></td>
                        <td>
                            <input v-model="query.timeout" placeholder="输入考试时长（单位：分钟）" min="1" type="number" class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <td><label>包含分类</label></td>
                        <td>
                            <select v-model="query.cat_id" multiple class="form-control">
                                <option v-for="item in typeData" :value="item.id">{{{ item.name }}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>分类描述</label></td>
                        <td>
                            <textarea v-model="query.remark" class="form-control" rows="4" style="resize:vertical;"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table v-show="step == 2" class="xa-table xa-txt-right">
                <tbody is="module" :type-data="typeData" v-for="item in query.item" :index="$index" :module="item"></tbody>
            </table>
        </div>
    </xa-prompt>
</template>

<script>
    import module from './module.vue';
    export default {
        data(){
            return {
                dialog:{
                    title:'创建考试-基本信息',
                    buttons:[
                        {
                            text:'取消',
                            className:'',
                            clickEvent:'cancelEvent'
                        },
                        {
                            text:'下一步',
                            className:'xa-bg-blue-click',
                            clickEvent:'toNextStepEvent'
                        }
                    ],
                }
            }
        },
        props:{
            step:{
                type:Number,
                default:1,
                twoWay:true
            },
            query:{
                type:Object,
                twoWay:true
            },
            show:{
                type:Boolean,
                default:false,
                twoWay:true
            },
            typeData:{
                type:Array,
                default:[]
            }
        },
        events:{
            cancelEvent(){
                this.show = false;
            },
            toNextStepEvent(){
                this.step = 2;
            },
            toPreStepEvent(){
                this.step = 1;
            },
            addModuleEvent(){
                this.query.item.push({
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
                })
            },
            deleteModuleEvent(ix){
                if(this.query.item.length == 1){
                    console.log('最后一个也删？');
                }
                this.query.item.splice(ix,1);
            },
            confirmlEvent(){
                this.$dispatch('confirmlSubmitEvent');
            }
        },
        components:{
            module
        },
        watch:{
            step(val){
                if(val == 1){
                    this.dialog.title = '创建考试-基本信息';
                    this.dialog.buttons = [
                        {
                            text:'取消',
                            className:'',
                            clickEvent:'cancelEvent'
                        },
                        {
                            text:'下一步',
                            className:'xa-bg-blue-click',
                            clickEvent:'toNextStepEvent'
                        }
                    ]
                }else if(val == 2){
                    this.dialog.title = '创建考试-模块信息';
                    this.dialog.buttons =  [
                        {
                            text:'添加模块',
                            className:'',
                            clickEvent:'addModuleEvent'
                        },
                        {
                            text:'上一步',
                            className:'',
                            clickEvent:'toPreStepEvent'
                        },
                        {
                            text:'提交',
                            className:'',
                            clickEvent:'confirmlEvent'
                        },
                        {
                            text:'取消',
                            className:'',
                            clickEvent:'cancelEvent'
                        }
                    ]
                }
            }
        }
    }
</script>