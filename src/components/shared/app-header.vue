<template>
  <header class="header">
    <div class="header__logo"><router-link :to="{ path: '/' }">Warby Parker</router-link></div>
    <div class="header__category"><router-link :to="{ name: 'Products' }">Eyeglasses</router-link></div>
    <products-search></products-search>
    <div class="header__cart">
      <router-link :to="{ name: 'Checkout' }" class="link button" type="button">
        <img src="~patternpack/images/icon-cart.svg" />( {{cartCount}} )
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsSearch from '@/components/products/products-search'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['cartCount'])
  },
  components: {
    ProductsSearch
  }
}
</script>
