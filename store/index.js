
import Vuex from 'vuex'
import mutations from './mutations'
const state = {
  count: '崔雨微爱'
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default createStore
