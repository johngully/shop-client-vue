import Vue from 'vue'
import ProductsList from '@/components/ProductsList'

describe('ProductsList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ProductsList)
    const vm = new Constructor().$mount()

    const expectedValue = vm.msg
    const actualValue = vm.$el.querySelector('p').textContent

    expect(actualValue).to.equal(expectedValue)
  })
})
