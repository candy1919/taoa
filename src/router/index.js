import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = resolve => require(['@/pages/home/home'], resolve)
const goods = resolve => require(['@/pages/goods/goods'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/goods',
      component: goods
    }
  ]
})
