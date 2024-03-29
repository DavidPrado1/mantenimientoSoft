import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import login from '@/sections/login'
import profile from '@/sections/profile'
import purchase from '@/sections/purchase'
import furniture from '@/sections/furniture'
import decor from '@/sections/decor'
import SideMainLayout from '@/layout/SideMainLayout'
import purchaselist from '@/sections/purchaselist'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: SideMainLayout,
      children: [
        {
          path: '/',
          component: index
        },
        {
          path: '/furniture',
          name: 'furniture',
          component: furniture
        },
        {
          path: '/decor',
          name: 'decor',
          component: decor
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/purchase/:id',
      name: 'purchase',
      component: purchase,
      props: true
    },
    {
      path: '/purchaselist',
      name: 'purchaselist',
      component: purchaselist,
      props: true
    }
  ]
})
