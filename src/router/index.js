import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Catalog from '@/components/Catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
