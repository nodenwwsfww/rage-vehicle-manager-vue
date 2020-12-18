import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modules/modal.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    modal
  }
})

export default store;