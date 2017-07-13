import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import Products from '@/components/products'
import Product from '@/components/product'
import Checkout from '@/components/checkout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products,
      beforeEnter: function (to, from, next) {
        if (store.state.products.length) {
          return next()
        } else {
          return store.dispatch('loadProducts').then(() => next())
        }
      }
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
      beforeEnter: function (to, from, next) {
        return store.dispatch('loadProduct', to.params.id).then(() => next())
      }
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

sync(store, router)
export default router
