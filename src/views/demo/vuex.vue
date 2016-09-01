<template>
<div>
  <div>
    增量：<input v-model="step" type="number" min="1"><br>
    <button @click='increment(step)'>Increment +{{step}}</button>
  </div>
  <div>
    <h3>Count is {{ counterValue }}</h3>
  </div>
</div>
</template>

<script>
import { incrementCounter } from '../../vuex/action'
import { getCount } from '../../vuex/getter'
export default {
  data(){
    return {
      step:1
    }
  },
  vuex: {
    actions: {
      increment: incrementCounter
    },
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      // counterValue: getCount
      counterValue:getCount
    }
  },
  ready(){
      this.$dispatch('documentTitle','vuex测试');
  }
}
</script>