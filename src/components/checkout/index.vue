<template>
  <div class="checkout">
    <app-header></app-header>
    <checkout-summary :cartAmount="cartAmount" :cartCount="cartCount" @checkout="checkout"></checkout-summary>
    <button @click="removeProductFromCart(cart[0])">Remove</button>
    <checkout-cart-list :cart="cart" :cartAmount="cartAmount" @removeProductFromCart="removeProductFromCart"></checkout-cart-list>
    <checkout-continue-shopping :cartCount="cartCount"></checkout-continue-shopping>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppHeader from '@/components/shared/app-header'
import AppFooter from '@/components/shared/app-footer'
import CheckoutSummary from '@/components/checkout/checkout-summary'
import CheckoutCartList from '@/components/checkout/checkout-cart-list'
import CheckoutContinueShopping from '@/components/checkout/checkout-continue-shopping'

export default {
  name: 'Checkout',
  computed: {
    ...mapGetters(['cartAmount', 'cartCount']),
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['removeProductFromCart']),

    checkout: function (product) {
      this.$store.dispatch('checkout').then(() => {
        this.$router.push({name: 'Products'})
      })
    }
  },
  components: {
    AppHeader,
    AppFooter,
    CheckoutSummary,
    CheckoutCartList,
    CheckoutContinueShopping
  }
}
</script>
