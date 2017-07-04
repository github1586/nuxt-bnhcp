
import {
  COURSE_PARAMS,
  COURSE_ARR
} from './mutation-types.js'

export default {
  [COURSE_PARAMS] (state, value) {
    state.coursename = value
  },
  [COURSE_ARR] (state, array) {
    state.courseArr = [...array]
  }
}
