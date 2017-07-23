import Vue from 'vue'
import Router from 'vue-router'
import {getStore} from '@/util/util'
Vue.use(Router)

const home = resolve => require(['@/pages/home/home'], resolve)
const goods = resolve => require(['@/pages/goods/goods'], resolve)
const grapic = resolve => require(['@/pages/goods/grapic'], resolve)
const login = resolve => require(['@/pages/user/login'], resolve)
const user = resolve => require(['@/pages/user/user'], resolve)
const register = resolve => require(['@/pages/user/register'], resolve)
const pay = resolve => require(['@/pages/pay/pay'], resolve)
const add = resolve => require(['@/pages/pay/add'], resolve)
const me = resolve => require(['@/pages/me/me'], resolve)
const recordList = resolve => require(['@/pages/me/recordList'], resolve)
const winRecord = resolve => require(['@/pages/me/winRecord'], resolve)
const winConfirm = resolve => require(['@/pages/me/winConfirm'], resolve)
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
      children: [
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        }
      ]
    },
    {
      path: '/pay',
      component: pay,
      meta: { requiresAuth: true }
    },
    {
      path: '/add',
      component: add,
      meta: { requiresAuth: true }
    },
    {
      path: '/me',
      component: me,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'recordList',
          component: recordList
        },
        {
          path: 'winRecord',
          component: winRecord
        },
        {
          path: 'winConfirm',
          component: winConfirm
        }
      ]
    }
  ]
})
import store from '../store'
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
    if (!store.state.userInfo) {
      store.commit('GET_USERINFO')
    }
    next() // 确保一定要调用 next()
  }
})
export {router}
