import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = resolve => require(['@/pages/home/home'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})
