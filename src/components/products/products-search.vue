<template>
  <div class="header__search">
    <input ref="search" type="search" class="header__search-criteria" placeholder="Search" v-model="criteria" @keyup="searchProducts" @blur="toggleSearchMode()" v-show="isSearching"></input>
    <button class="link" type="button" @click="toggleSearchMode()">
      <img src="~patternpack/images/icon-search.svg" /> Search
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductsSearch',
  data: function () {
    return {
      criteria: '',
      isSearching: false
    }
  },
  computed: {
    ...mapState(['search'])
  },
  methods: {
    toggleSearchMode () {
      this.isSearching = !this.isSearching
      this.searchFocus()
    },
    searchProducts () {
      this.$store.dispatch('searchProducts', this.criteria)
    },
    searchFocus () {
      if (this.isSearching) {
        this.$nextTick(() => this.$refs.search.focus())
      }
    }
  }
}
</script>
