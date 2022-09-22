import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'
// import Home from './component/Home.vue'
// import Login from './component/Login.vue'
import babelPolyfill from 'babel-polyfill'

import router from './router'

Vue.config.productionTip = false
new Vue({
  // router: router, 
  el: '#app',
  render: h => h(App),
  router,
  // template: '<App/>',
  // components: { App }
})
