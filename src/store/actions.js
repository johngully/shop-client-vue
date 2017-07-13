import productsService from '@/services/productsService'

export default {
  loadProducts: function ({ commit }) {
    console.debug('ACTION:', 'loadProducts')
    return productsService.getProducts()
      .then(products => commit('loadProductsSuccess', products))
      .catch(error => commit('loadProductsError', error))
  },

  loadProduct: function ({ commit, dispatch, state }, id) {
    console.debug('ACTION', 'loadProduct', id)
    return productsService.getProduct(id)
      .then(product => commit('loadProduct', product))
      .catch(error => commit('loadProductError', error))
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
