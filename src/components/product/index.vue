<template>
  <div class="products">
    <app-header></app-header>
    <product-details :product="product" @addProductToCart="addProductToCart"></product-details>
    <product-promise></product-promise>
    <product-make></product-make>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/shared/app-header'
import AppFooter from '@/components/shared/app-footer'
import ProductDetails from '@/components/product/product-details'
import ProductPromise from '@/components/product/product-promise'
import ProductMake from '@/components/product/product-make'
// import products from '@/assets/products.json'

export default {
  name: 'Product',
  computed: {
    ...mapState(['product'])
  },
  methods: {
    addProductToCart: function (product) {
      this.$store.dispatch('addProductToCart', product).then(() => {
        this.$router.push({name: 'Checkout'})
      })
    }
  },
  components: {
    AppHeader,
    AppFooter,
    ProductDetails,
    ProductPromise,
    ProductMake
  }
}
</script>
