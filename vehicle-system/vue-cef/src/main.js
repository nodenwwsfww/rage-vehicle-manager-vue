import Vue from 'vue'
import store from './store';
import router from './router';
import App from './App.vue'

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

global.app = app;
global.appData = app.$store;

export default app;