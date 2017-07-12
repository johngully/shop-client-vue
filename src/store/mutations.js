function searchProductByName (product, search) {
  let hasName = true
  if (search.criteria) {
    hasName = product.details.name.toLowerCase().includes(search.criteria.toLowerCase())
  }
  return hasName
}

function searchProductByAttribute (product, search, attribute) {
  let hasAttribute = true
  if (search.filters[attribute] && search.filters[attribute].length) {
    hasAttribute = !!search.filters[attribute].filter(item => item.toLowerCase() === product.attributes[attribute].toLowerCase()).length
  }
  return hasAttribute
}

function searchAndFilterProducts (state, search) {
  console.debug('MUTATION:', 'searchProducts')
  state.filteredProducts = state.products.filter(product => {
    let hasName = searchProductByName(product, search)

    let hasColor = searchProductByAttribute(product, search, 'color')
    let hasFit = searchProductByAttribute(product, search, 'fit')
    let hasMaterial = searchProductByAttribute(product, search, 'material')
    let hasShape = searchProductByAttribute(product, search, 'shape')

    return hasName && hasColor && hasFit && hasMaterial && hasShape
  })
}

export default {
  loadProductsSuccess: function (state, products) {
    console.debug('MUTATION:', 'loadProductsSuccess')
    state.products = products
    state.filteredProducts = products
  },

  loadProductsError: function () {
    console.error('MUTATION:', 'loadProductsError')
  },

  loadProduct: function (state, id) {
    console.debug('MUTATION:', 'loadProduct', id)
    const product = state.products.find(item => item.id === id)
    state.product = product
  },

  addProductToCartSuccess: function (state, product) {
    console.debug('MUTATION:', 'addProductToCartSuccess', product)
    state.cart.push(product)
  },

  addProductToCartError: function (state, product) {
    console.error('MUTATION:', 'addProductToCartError', product)
  },

  removeProductFromCartSuccess: function (state, product) {
    console.debug('MUTATION:', 'removeProductFromCartSuccess', product)
    state.cart.splice(state.cart.indexOf(product), 1)
  },

  removeProductFromCartError: function (state, product) {
    console.error('MUTATION:', 'removeProductFromCartError', product)
  },

  checkoutSuccess: function (state) {
    console.debug('MUTATION:', 'checkoutSuccess')
    state.cart = []
  },

  checkoutError: function (state) {
    console.error('MUTATION:', 'checkoutError')
  },

  filterProducts: function (state, filters) {
    console.debug('MUTATION:', 'filterProducts', filters)
    state.search.filters = filters
    searchAndFilterProducts(state, state.search)
  },

  searchProducts: function (state, criteria) {
    console.debug('MUTATION:', 'searchProducts', criteria)
    state.search.criteria = criteria
    searchAndFilterProducts(state, state.search)
  }
}
