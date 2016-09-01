<template>
    <tbody style="border:1px solid #eee;border-top:2px solid white;">
        <tr @click="show=!show">
            <td colspan="2" style="padding:0;padding-left:10px;background:#eee;">
                <div class="xa-box">
                    <div class="xa-flex" style="line-height:40px;text-align:left;">{{ module.name }}</div>
                    <div class="xa-icon-boxs">
                        <div @click.stop="deleteModule" class="xa-icon-box">
                            <i class="iconfont icon-shanchu xa-txt-20"></i>
                        </div>
                        <div class="xa-icon-box" :class="{'xa-toggle':!show,'xa-toggle-up':show}">
                            <i class="iconfont icon-jiantouxia xa-txt-20"></i>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr v-show="show">
            <td class="xa-width-100"><label>模块名称</label></td>
            <td>
                <input v-model="module.name" placeholder="请输入模块名称" type="text" class="form-control">
            </td>
        </tr>
        <tr v-show="show">
            <td><label>满分</label></td>
            <td>
                <input v-model="module.score" placeholder="请输入该模块分值" type="number" class="form-control">
            </td>
        </tr>
        <tr v-show="show">
            <td><label>试题范围</label></td>
            <td class="exam-range">
                <div v-for="item in module.range" class="xa-box">
                    <div class="xa-flex">
                        <label>题型：<select v-model="item.type" class="form-control" style="display:inline-block;width:140px;margin-right:12px;">
                            <option value="1">单选题</option>
                            <option value="2">多选题</option>
                            <option value="3">判断题</option>
                        </select></label>
                        <label>分类：<select v-model="item.cat_id" class="form-control" style="display:inline-block;width:200px;margin-right:12px;">
                            <option v-for="item in typeData" :value="item.id">{{{ item.name }}}</option>
                        </select></label>
                        <label>题数：<input v-model="item.sum" type="number" min="1" class="form-control" style="display:inline-block;width:100px;"></label>    
                    </div>
                    <div @click="addRange" v-show="module.range.length-1 == $index" class="xa-icon-box add-range" title="添加试题范围"><i class="iconfont icon-2 xa-txt-20"></i></div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
    export default {
        data(){
            return {
                show:true
            }
        },
        methods:{
            addRange(){
                this.module.range.push({type:'',cat_id:'',sum:1});
            },
            deleteModule(){
                this.$dispatch('deleteModuleEvent',this.index);
            }
        },
        props:{
            module:Object,
            typeData:Array,
            index:Number
        }
    }
</script>