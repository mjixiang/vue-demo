<template>
    <div class="xa-loading xa-txt-blue" :class="{'show':show}">
        <i class="iconfont icon-jiazai xa-txt-24 xa-txt-bold"></i>
    </div>
</template>

<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

