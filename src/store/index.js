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
    },
    appendTemplate(state, template) {
      state.templates.push(template)
    }
  },
  actions: {
    fetchTemplates ({ commit }) {
      axios.get('/api/templates')
        .then((response) => {
          commit('setTemplates', response.data)
        })
        .catch((error) => console.log(error))
    },
    createTemplate ({ commit, state }, template) {
      axios.post('/api/templates', template)
        .then(response => commit('appendTemplate', response.data))
        .catch(err => console.log(err))
    }
  }
})
