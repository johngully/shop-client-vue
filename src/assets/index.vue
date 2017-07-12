<template>
  <div class="products">
    <app-header></app-header>
    <products-marketing></products-marketing>
    <products-filters :filters="filters"></products-filters>
    <button @click="filterProducts">Filter</button>
    <products-list :products="filteredProducts"></products-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppHeader from '@/components/shared/app-header'
import AppFooter from '@/components/shared/app-footer'
import ProductsMarketing from '@/components/products/products-marketing'
import ProductsFilters from '@/components/products/products-filters'
import ProductsList from '@/components/products/products-list'

export default {
  name: 'Products',
  data: function () {
    return {
      msg: 'A list of products goes here'
    }
  },
  computed: {
    ...mapState(['products', 'filteredProducts', 'filters'])
  },
  methods: {
    ...mapActions(['loadProducts', 'loadProduct']),
    filterProducts () {
      const search = {
        criteria: '',
        filters: {
          // color: ['blue', 'crystal'],
          // fit: ['medium'],
          // color: ['black'],
          // fit: ['narrow']
        }
      }
      this.$store.dispatch('searchProducts', search)
    }
  },
  components: {
    AppHeader,
    AppFooter,
    ProductsMarketing,
    ProductsFilters,
    ProductsList
  }
}
</script>
