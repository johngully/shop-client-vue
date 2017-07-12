<template>
  <section class="content-block transparent" v-if="cartCount">
    <div class="content-block__content-centered">
      <p class="small">Still want to continue shopping?</p>
      <router-link :to="{ name: 'Products' }" class="button button-md button__secondary">Shop frames</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CheckoutContinueShopping',
  props: ['cartCount']
}
</script>
