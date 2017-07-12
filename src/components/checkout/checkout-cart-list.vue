<template>
  <section class="cart-list" v-if="cartAmount">
    <div class="cart-product" v-for="product in cart">
      <div class="cart-product__image">
        <img :src="product.images[0]" />
      </div>
      <div class="cart-product__description">
        <h3>{{product.details.name}}</h3>
        <p class="small">
          {{product.attributes.fit}}<br />
          {{product.attributes.measurements}}
        </p>
      </div>
      <div class="cart-product__remove">
        <button type="button" class="button__icon" @click="removeProductFromCart(product)">
          <img src="~patternpack/images/icon-remove.svg" />Remove
        </button>
      </div>
      <div class="cart-item__price">${{product.pricing.amount}}</div>
    </div>
    <!-- Cart total -->
    <div class="cart-total">
      Subtotal: ${{cartAmount}}
    </div>
  </section>
</template>

<script>
export default {
  name: 'CheckoutCartList',
  props: ['cart', 'cartAmount'],
  methods: {
    removeProductFromCart (product) {
      this.$emit('removeProductFromCart', product)
    }
  }
}
</script>
