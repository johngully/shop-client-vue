import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from '@/components/ProductsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList
    }
  ]
})
