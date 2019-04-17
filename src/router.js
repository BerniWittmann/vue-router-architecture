import Vue from 'vue'
import Router from 'vue-router'
import EmptyRouterView from './views/EmptyRouterView.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NestedOne from './views/NestedOne.vue'
import NestedTwo from './views/NestedTwo.vue'
import NestedDeep from './views/NestedDeep.vue'
import MyDialog from './views/MyDialog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/nested',
      component: EmptyRouterView,
      children: [{
        name: 'nested.one',
        path: 'one',
        component: NestedOne
      }, {
        path: 'dialog',
        name: 'nested.dialog',
        components: {
          default: NestedOne,
          dialog: MyDialog
        }
      }, {
        path: 'two',
        component: EmptyRouterView,
        children: [{
          path: '',
          name: 'nested.two',
          component: NestedTwo
        }, {
          path: 'deep/:id',
          name: 'nested.deep',
          component: NestedDeep
        }]
      }]
    }
  ]
})
