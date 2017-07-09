<template>
  <div class="products-list">
    <h1>Products</h1>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'ProductsList',
  data () {
    return {
      msg: 'A list of products goes here'
    }
  }
}
</script>
