import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Daftar from '@/views/Daftar'

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
  ]
})
