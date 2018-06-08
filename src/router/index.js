import Vue from 'vue'
import Router from 'vue-router'
import Intro from '../components/Intro'
import Catalog from '../components/Catalog'
import Template from '../components/Template'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/template/:id',
      name: 'template',
      component: Template,
      props: true
    }
  ]
})
