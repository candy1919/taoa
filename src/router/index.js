import Vue from 'vue'
import Router from 'vue-router'
import {getStore} from '@/util/util'
Vue.use(Router)

const home = resolve => require(['@/pages/home/home'], resolve)
const goods = resolve => require(['@/pages/goods/goods'], resolve)
const grapic = resolve => require(['@/pages/goods/grapic'], resolve)
const login = resolve => require(['@/pages/user/login'], resolve)
const user = resolve => require(['@/pages/user/user'], resolve)
const pay = resolve => require(['@/pages/pay/pay'], resolve)
var router = new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/goods',
      component: goods,
      children: [
        {
          path: 'grapic',
          component: grapic
        }
      ]
    },
    {
      path: '/user',
      component: user,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'login',
          component: login
        }
      ]
    },
    {
      path: '/pay',
      component: pay,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !getStore('user_id')) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (to.path !== '/user/login') {
      next({
        path: '/user/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export {router}
