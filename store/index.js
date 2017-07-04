
import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  // 选中的参数
  coursename: '',
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
