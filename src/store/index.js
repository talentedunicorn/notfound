import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: {},
    templates: []
  },
  mutations: {
    setTemplates(state, templates) {
      state.templates = templates
    },
    appendTemplate(state, template) {
      state.templates.push(template)
    },
    setNotification(state, notification) {
      state.notification = notification
    },
    clearNotification(state) {
      state.notification = {}
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
        .then(response => { 
          commit('appendTemplate', response.data)
          commit('setNotification', { title: 'The template was created successfully', type: 'success' })
        })
        .catch(err => console.log(err))
    },
    deleteTemplate ({ commit, state }, id) {
      axios.delete('/api/templates/'+ id)
        .then((response) => {
          let template = state.templates.filter(template => template._id === id)[0]
          commit('setNotification', { title: 'Template deleted successfully', type: 'success' })
          state.templates.splice(state.templates.indexOf(template), 1)
        })
        .catch(err => {
          commit('setNotification', { title: 'There was an error deleting the template', type: 'error'})
          console.error(err)
        })
    }
  }
})
