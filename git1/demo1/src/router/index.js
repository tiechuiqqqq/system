import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/Login.vue'
import Home from '../view/Home'
 
Vue.use(Router)


 
export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: home
    },
  ],
  mode: "history"
})