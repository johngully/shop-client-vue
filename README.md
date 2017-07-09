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

## How this was created
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
