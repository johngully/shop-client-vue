<template>
  <section class="product-details">
    <div class="product-details__content">
      <img class="product-details__image" :src="product.images[0]" />
      <h1>{{product.details.name}}</h1>
      <p>{{product.details.description}}</p>
      <div class="product-details__facts">
        <div class="product-details__fact">
          <h4>Frame Fit</h4>
          <p>{{product.attributes.fit}}</p>
        </div>
        <div class="product-details__fact">
          <h4>Measurements</h4>
          <p>{{product.attributes.measurements}}</p>
        </div>
      </div>
      <button class="button-lg button__primary" type="button" @click="addProductToCart(product)">Add to cart</button>
      <p>${{product.pricing.amount}} including prescription lenses</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: ['product'],
  methods: {
    addProductToCart (product) {
      this.$emit('addProductToCart', product)
    }
  }

}
</script>
