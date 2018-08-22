import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'HelloWorld')
    },
    {
      path: '/home',
      name: 'home',
      component: r => require.ensure([], () => r(require('../components/home.vue')), 'home')
    },
    {
        path: '/index',
        name: 'Index',
        component: r => require.ensure([], () => r(require('../page/indexback.vue')), 'Index')
    },
    {
        path: '/gameSearch',
        name: 'Index',
        component: r => require.ensure([], () => r(require('../page/search/gameSearch.vue')), 'Index')
    }
  ]
})
