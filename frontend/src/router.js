import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import MyBoard from './components/MyBoard.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/myboard',
      name: 'myboard',
      component: MyBoard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})