<template>
  <section class="content-block-full-bleed">
    <div class="content-block__content-centered" v-if="cartCount < 1">
      <h1 v-if="cartCount < 1">You don't have anything in your cart</h1>
      <router-link class="button button-lg button__primary" type="button" :to="{ name: 'Products' }">Continue Shopping</router-link>
    </div>

    <div class="content-block__content-centered" v-if="cartCount === 1">
      <h1 v-if="cartCount === 1">You have {{cartCount}} item in your cart</h1>
      <button class="button-lg button__primary" type="submit" @click="checkout()">Checkout</button>
      <p><small>Free standard shipping and free returns on all orders</small></p>
    </div>

    <div class="content-block__content-centered" v-if="cartCount > 1">
      <h1>You have {{cartCount}} items in your cart: ${{cartAmount}}</h1>
      <button class="button-lg button__primary" type="submit" @click="checkout()">Checkout</button>
      <p><small>Free standard shipping and free returns on all orders</small></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CheckoutSummary',
  props: ['cartAmount', 'cartCount'],
  methods: {
    checkout () {
      this.$emit('checkout')
    }
  }
}
</script>
