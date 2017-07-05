import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = resolve => require(['@/pages/home/home'], resolve)
const goods = resolve => require(['@/pages/goods/goods'], resolve)
const grapic = resolve => require(['@/pages/goods/grapic'], resolve)
const login = resolve => require(['@/pages/login/login'], resolve)
const user = resolve => require(['@/pages/user/user'], resolve)
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
      path: '/login',
      component: login
    },
    {
      path: '/user',
      component: user,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let flag = true
    if (flag) {
      next({
        path: '/login'
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export {router}
