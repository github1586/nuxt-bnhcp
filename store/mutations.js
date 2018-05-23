
import {
  COURSE_PARAMS,
  COURSE_ARR,
  TOUCHEND,
  COURSE_ID,
  COURSE_TYPE,
  COURSE_SORT,
  COURSE_DETAIL,
  CART,
  ORDERDATA
} from './mutation-types.js'
import {setStore} from '../config/common.js'
export default {
  [COURSE_PARAMS] (state, value) {
    state.coursename = value
  },
  // 如果不是第一次请求 就不要在累加了 好把～
  [COURSE_ARR] (state, array) {
    if (parseInt(array.offset) !== 0) {
      state.courseArr = [...state.courseArr, ...array.data]
    } else {
  // 只有在第一次请求的时候在累加  好吧
      state.courseArr = array.data
    }
  },
  // 是否限时暂无更多
  [TOUCHEND] (state, value) {
    state.touchend = value
  },
  // 当前课程列表请求参数 课程id
  [COURSE_ID] (state, value) {
    state.courseId = value
  },
  // 当前课程列表请求的 级别
  [COURSE_TYPE] (state, value) {
    state.coursetype = value
  },
  // 当前课程列表排序方式
  [COURSE_SORT] (state, value) {
    state.courseSort = value
  },
  // 课程详情
  [COURSE_DETAIL] (state, value) {
    state.courseDetail = value
    // 存入locaStore
    setStore('courseDetail', value)
  },
  [CART] (state, value) {
    state.cart = value
  },
  // 订单信息
  [ORDERDATA] (state, value) {
    state.orderData = value
  }
}
