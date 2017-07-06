
import {
  COURSE_PARAMS,
  COURSE_ARR,
  TOUCHEND
} from './mutation-types.js'

export default {
  [COURSE_PARAMS] (state, value) {
    state.coursename = value
  },
  [COURSE_ARR] (state, array) {
    if (parseInt(array.offset) !== 0) {
      state.courseArr = [...state.courseArr, ...array.data]
    } else {
      state.courseArr = array.data
    }
  },
  [TOUCHEND] (state, value) {
    state.touchend = value
  }
}
