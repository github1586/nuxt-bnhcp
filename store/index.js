import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  count: 123,
  num: 10086,
  bobo: 'bobo'
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
