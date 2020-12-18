import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Hud from '@/views/Hud'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/hud', component: Hud },
    ],
})