<template>
  <section class="product-list">
    <router-link class="product" v-for="product in products" :key="product.id" :to="{ name: 'Product', params: { id: product.id }}">
      <img class="product__image" :src="product.images[0]" />
      <h3>{{ product.details.name }}</h3>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ProductsList',
  props: ['products']
}
</script>
