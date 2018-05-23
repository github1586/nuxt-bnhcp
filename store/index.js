
import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  // 选中的参数
  coursename: '艺术',
  // 是否显示暂无更多数据
  touchend: false,
  // 课程列表组件容器
  courseArr: [],
  // 课程id
  courseId: '15963587',
  // 课程类型
  coursetype: '1',
  // 当前的课程列表排序方式啊
  courseSort: '1',
  // 课程详情
  courseDetail: {},
  // 购物车
  cart: {},
  // 订单信息
  orderData: {}
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
