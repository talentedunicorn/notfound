import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Generator from '@/components/Generator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/generator',
      name: 'Generator',
      component: Generator
    }
  ]
})
