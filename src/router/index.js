import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Daftar from '@/views/Daftar'
import Success from '@/views/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/Daftar',
      name: 'Daftar',
      component: Daftar
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
  ]
})
