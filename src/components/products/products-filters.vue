<template>
  <section class="filters">
    <ul class="filters__menu">
      <li class="filters__menu-item" v-for="(options, category) in filters">
        <button class="link" type="button" @click="selectCategory(category)">{{ category }}</button>
      </li>
    </ul>
    <div class="filters__options" v-for="(options, category) in filters" v-show="category === selectedCategory">
      <div class="filters__option" v-for="option in options">
        <label><input type="checkbox" :id="option" :value="option" v-model="selectedOptions[selectedCategory]" @change="filter" />{{ option }}</label>
      </div>
    </div>
  </section>
</template>

<script>
import cloneDeep from 'lodash.clonedeep'
import filters from '@/assets/filters.json'

const selectedOptions = {
  color: [],
  fit: [],
  material: [],
  shape: []
}

export default {
  name: 'ProductsFilters',
  data: function () {
    return {
      filters,
      selectedCategory: '',
      selectedOptions
    }
  },
  methods: {
    selectCategory: function (category) {
      this.selectedCategory = category
    },
    filter () {
      // Since the payload is eventually attached to the store.state
      // the object needs to be cloned before being passed out of the
      // component.  This ensures that the selectedOptions don't
      // get referenced by the store, which should not be modified.
      this.$emit('filter', cloneDeep(this.selectedOptions))
    }
  }
}
</script>
