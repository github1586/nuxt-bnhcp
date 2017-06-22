<<<<<<< HEAD

import Vuex from 'vuex'
import mutations from './mutations'
const state = {
  count: '崔雨微爱'
=======
import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  count: 123,
  num: 10086,
  bobo: 'bobo'
>>>>>>> e755ab4bb4eae08388e3fcb8e663f4186ca8b47d
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
