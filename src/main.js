// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import commonComponents from 'components'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import { Swipe, SwipeItem } from 'vue-swipe'
Vue.config.productionTip = false
Object.keys(commonComponents).forEach(key => {
  Vue.component(key, commonComponents[key])
})
Vue.component('swipe', Swipe)
Vue.component('swipeItem', SwipeItem)
Vue.use(VueResource)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
