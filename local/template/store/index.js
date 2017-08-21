
import Vuex from 'vuex'
import mutations from './mutations.js'
const state = {
  count: 123,
  num: 7893,
  bobo: 'bobo'
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
