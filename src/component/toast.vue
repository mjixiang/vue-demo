<template>
    <div v-show="show" :class="className" class="xa-toast">{{ message }}</div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                default:''
            },
            show:{
                type:Boolean,
                default:false,
                twoWay:true
            },
            className:{
                type:String,
                default:'xa-bg-white',
                coerce(className) {
                    return className || 'xa-bg-white'
                }
            },
        },
        watch:{
            show(val){
                if(val){
                    setTimeout(()=>{
                        this.show = false;
                    },3000)
                }
            }
        }
    }
</script>

