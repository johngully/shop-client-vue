import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import state from '@/store/state'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  // Stict mode is enabled, but turned off in production for performance considerations
  strict: process.env.NODE_ENV !== 'production'
})
