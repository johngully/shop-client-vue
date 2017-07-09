// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import VuexStore from './store'

// Configure Vue
Vue.config.productionTip = false
Vue.use(Vuex)

// Create the store and configure vuex-router-sync to use it
const store = new Vuex.Store(VuexStore)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
