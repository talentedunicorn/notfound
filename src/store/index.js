import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    templates: []
  },
  mutations: {
    setTemplates(state, templates) {
      state.templates = templates
    }
  },
  actions: {
    fetchTemplates (context) {
      axios.get('/api/templates')
        .then((response) => {
          context.commit('setTemplates', response.data)
        })
        .catch((error) => console.log(error))
    }
  }
})
