import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  chatList: [],
  users: {}
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
