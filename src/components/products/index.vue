<template>
  <div class="products">
    <app-header></app-header>
    <products-marketing></products-marketing>
    <!-- <products-search @search="searchProducts"></products-search> -->
    <products-filters @filter="filterProducts"></products-filters>
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
import ProductsSearch from '@/components/products/products-search'
import ProductsList from '@/components/products/products-list'

export default {
  name: 'Products',
  data: function () {
    return {
      msg: 'A list of products goes here'
    }
  },
  computed: {
    ...mapState(['products', 'filteredProducts', 'search'])
  },
  methods: {
    ...mapActions(['loadProducts', 'loadProduct']),
    filterProducts (filters) {
      // this.search.filters = filters
      this.$store.dispatch('filterProducts', filters)
    }
    // ,
    // searchProducts (criteria) {
    //   this.search.criteria = criteria
    //   this.$store.dispatch('searchProducts', this.search)
    // }
  },
  components: {
    AppHeader,
    AppFooter,
    ProductsMarketing,
    ProductsFilters,
    ProductsSearch,
    ProductsList
  }
}
</script>
