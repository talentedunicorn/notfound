import Vue from 'vue'
import App from './src/App'
import router from './src/router'
import 'normalize.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
