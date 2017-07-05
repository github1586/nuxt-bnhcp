
import {
  COURSE_PARAMS,
  COURSE_ARR
} from './mutation-types.js'

export default {
  [COURSE_PARAMS] (state, value) {
    state.coursename = value
  },
  [COURSE_ARR] (state, array) {
    console.log(array)
    if (array.offse !== '0') {
      state.courseArr = [...state.courseArr, ...array.data]
    } else {
      state.courseArr = [...array.data]
    }
  }
}
