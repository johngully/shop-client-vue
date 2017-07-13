import axios from 'axios'
const apiUrl = 'https://62mjnjf07k.execute-api.us-east-1.amazonaws.com/dev'

export default {

  getProducts: function () {
    return axios.get(`${apiUrl}/products`)
      .then(response => response.data)
  },

  getProduct: function (id) {
    return axios.get(`${apiUrl}/product/${id}`)
      .then(response => response.data)
  }

}
