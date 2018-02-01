import productsQuery from './ProductsQuery.gql'
import productQuery from './ProductQuery.gql'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Create the graphql client
const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3030/products' }),
  cache: new InMemoryCache()
})

export default {

  getProducts: function () {
    return apolloClient.query({ query: productsQuery })
      .then((response) => {
        return response.data.products
      })
  },

  getProduct: function (id) {
    return apolloClient.query({
      query: productQuery,
      variables: {
        productId: id
      }
    }).then((response) => {
      return response.data.product
    })
  }

}
