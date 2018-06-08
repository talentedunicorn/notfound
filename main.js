import Vue from 'vue'
import App from './src/App'
import Header from './src/components/Header'
import router from './src/router'
import store from './src/store'
import 'normalize.css'

Vue.config.productionTip = false
Vue.component('Header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
