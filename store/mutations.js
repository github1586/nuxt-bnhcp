import {
  RECORD_ADDRESS
} from './mutation-types.js'

export default {
  [RECORD_ADDRESS] (state, n) {
    state.count = n
  }
}
