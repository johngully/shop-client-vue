import productsData from '@/assets/products.json'

export default {
  loadProducts: function ({ commit }) {
    console.debug('ACTION:', 'loadProducts')
    // TODO: load from API
    const products = productsData
    return commit('loadProductsSuccess', products)

    // TODO: handle error condition from api
    // commit('loadProductsError')
  },

  loadProduct: function ({ commit, dispatch, state }, product) {
    console.debug('ACTION', 'loadProduct', product)
    // This ensure that the initial set of products has been loaded
    // Probably not needed once an API call is implemented
    if (!state.products.length) {
      return dispatch('loadProducts').then(() => commit('loadProduct', product))
    } else {
      return commit('loadProduct', product)
    }
  },

  addProductToCart: function ({ commit }, product) {
    console.debug('ACTION', 'addProductToCart', product)
    return commit('addProductToCartSuccess', product)

    // TODO: handle error condition from api
    // commit('addProductToCartError')
  },

  removeProductFromCart: function ({ commit }, product) {
    console.debug('ACTION', 'removeProductFromCart', product)
    return commit('removeProductFromCartSuccess', product)

    // TODO: handle error condition from api
    // commit('removeProductFromCartError')
  },

  checkout: function ({ commit }) {
    console.debug('ACTION', 'checkout')
    return commit('checkoutSuccess')

    // TODO: handle error condition from api
    // commit('checkoutError')
  },

  filterProducts: function ({ commit }, filters) {
    console.debug('ACTION', 'filterProducts', filters)
    return commit('filterProducts', filters)
  },

  searchProducts: function ({ commit }, criteria) {
    console.debug('ACTION', 'searchProducts', criteria)
    return commit('searchProducts', criteria)
  },

  selectFilters: function () {}
}
