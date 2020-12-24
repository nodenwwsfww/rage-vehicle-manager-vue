import Vue from 'vue'
import Vuex from 'vuex'
import hud from './modules/hud.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hud
  }
})

export default store;