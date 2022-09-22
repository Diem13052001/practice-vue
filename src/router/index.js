import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Home from '../component/Home'
import Login from '../component/Login'

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Home', // tên route
      component: Home // component route sử dụng
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})