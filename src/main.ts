import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal)

// 存储服务
var AV = require('leancloud-storage');
var { Query, User } = AV;
// 实时消息服务
var { Realtime, TextMessage } = require('leancloud-realtime');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export {App, router, store}