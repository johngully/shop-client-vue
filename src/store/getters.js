export default {
  cartCount: state => state.cart.length,
  cartAmount: state => state.cart.reduce((total, product) => total + product.pricing.amount, 0)
}
