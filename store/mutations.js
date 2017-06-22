
import {TEST_CONST} from './mutation-types.js'

export default {
  [TEST_CONST] (state, n) {
    state.count = n
    state.num = n * 2
  }
}
