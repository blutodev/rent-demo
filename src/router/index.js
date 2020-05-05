import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/sayHi',
      name: 'SayHi',
      component: SayHi
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
