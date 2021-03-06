// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import commonComponents from 'components'
import VueResource from 'vue-resource'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import { baseUrl, routerMode, imgBaseUrl } from './config'
Vue.config.productionTip = false
Object.keys(commonComponents).forEach(key => {
  Vue.component(key, commonComponents[key])
})
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios
Vue.prototype.baseUrl = baseUrl
Vue.prototype.routerMode = routerMode
Vue.prototype.imgBaseUrl = imgBaseUrl
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
