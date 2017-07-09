# Shop Client Vue

> Example shop client build with vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Design system integration
In order to include the design system into the Vue application a few changes to
the Webpack configuration were required.

Basic integration was actually quite simple and only required that the
`<style src="../node_modules/shop-patternpack/dist/pattern-library/assets/css/patterns.css"></style>`
tag be added to the `App.vue`.  Referring to the entire `node_modules` path was
cumbersome so a Webpack alias was created to simplify things.


Adding an alias to the the webpack configuration makes accessing the assets much
simpler.  To include the styles change the path to use the alias `patternpack`
instead of the long `node_modules/...` path.
`/build/webpack.base.conf.js`
```js
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'patternpack': resolve('node_modules/shop-patternpack/dist/pattern-library/assets')
  }
}
```

`App.vue`
```html
<style src="patternpack/css/patterns.css"></style>
```

 > ##### CAUTION
The alias can also be used to access image assets, however [there is a trick to
getting it working](https://github.com/vuejs/vue-loader/issues/193).  The path
must be prefixed with a `~` so that the `vue-html-loader` will treat the path
like a module path (instead of a relative path).
```html
<img src="~patternpack/images/icon-remove.svg" />Icon
```

## Bootstrapping a new application
```bash
npm init
npm install -g vue-cli
vue init webpack shop-client-vue #use all the default settings
npm install vuex vuex-router-sync
```

##### Configure Vuex & VuexRouterSync
Some files need to be created/updated to use `vuex` and `vuex-router-sync`.

Create `src/store/index.js`
```js
export default {
  modules: {

  },
  strict: true
}
```

Modify `src/main.js_`
```js
import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import VuexStore from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
```

##### Create the initial component & route
The vue-cli creates an initial route that points to the `Hello.vue` component.  Create the initial component you want for the application and configure the router `/src/router/index.js` to load it.

* Create `src/component/ProductsList.vue`
* Update `src/router/index.js`: import `src/component/ProductsList.vue` and setup the route

  ```js
  import Vue from 'vue'
  import Router from 'vue-router'
  import ProductsList from '@/components/ProductsList'

  Vue.use(Router)

  export default new Router({
    routes: [
      {
        path: '/',
        name: 'ProductsList',
        component: ProductsList
      }
    ]
  })
```
* Remove the extraneous code from `/src/App.vue`
  ```js
  <template>
    <div id="app">
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    name: 'app'
  }
  </script>
  ```
* Delete `/src/components/Hello.vue`
* Update or remove unit tests `/src/test/unit/specs/` and `/src/test/e2e/specs/`
