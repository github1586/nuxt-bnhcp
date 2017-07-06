
import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  // 选中的参数
  coursename: 'undefined',
  // 是否显示暂无更多数据
  touchend: false,
  // 课程列表组件容器
  courseArr: []
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
