<style scoped>
    .exam-info .top-bar{height:40px;line-height:40px;text-align:center;background:#767B84;color:white;}
    .exam-info .top-bar>span{margin:0 8px;}
    .exam-info .xa-line{border-bottom:1px solid #ccc;}
    .exam-info .xa-line>div{border-right:1px solid #ccc;}
    .exam-info .xa-line>div:last-child{border-right:0;}
    .exam-info .xa-line>div>span{padding:0 10px;}
</style>
<template>
    <div class="exam-info">
        <div class="top-bar">
            <span>ADS</span>
            <span>第四次模拟考试</span>
        </div>
        <div class="xa-lines">
            <div class="xa-line xa-box xa-bg-eee">
                <div class="xa-flex xa-txt-center"><span class="xa-text">考试类型:飞行器</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">创建人:飞行器</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">创建时间:飞行器</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">考试时间:飞行器</span></div>
            </div>
            <div class="xa-line xa-box xa-bg-eee">
                <div class="xa-flex xa-txt-center"><span class="xa-text">考试时长:60分钟</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">状态:进行中</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">课程考核:是</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">课程编号:A872345</span></div>
                <div class="xa-flex xa-txt-center"><span class="xa-text">综合占比:50%</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['queryData']
    }

</script>