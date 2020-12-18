import Vue from 'vue'
import store from './store';
import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  store
}).$mount('#app')

global.gui = { modals: [] }

global.app = app
global.appData = app.$store
global.router = app.$router
