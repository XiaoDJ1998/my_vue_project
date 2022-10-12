import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/404',
      component: () => import('@/views/error/404'),
      hidden: true
    },
    {
      path: '/login',
      component: () => import('@/views/login'),
      hidden: true
    },
    {
      path: '/registration',
      component: () => import('@/views/registration')
    },
    {
      path: '/home',
      component: () => import('@/views/home')
    },
  ]
})
