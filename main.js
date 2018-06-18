import Vue from 'vue'
import App from './src/App'
import Header from './src/components/Header'
import Loading from './src/components/Loading'
import router from './src/router'
import store from './src/store'
import 'normalize.css'

Vue.component('Header', Header)
Vue.component('Loading', Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
