import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // 应用启动时，count 置为0
  count: 0,
  title:'培训平台'
}

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT (state, amount) {
    state.count = state.count + amount*1
  },
  updateTitle(state,title){
  	state.title = title;
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})