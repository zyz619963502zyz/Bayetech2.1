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
      path: '/',
      name: 'Index',
      component: r => require.ensure([], () => r(require('../page/index.vue')), 'Index')
    },
    {
        path: '/index',
        name: 'Indexback',
        component: r => require.ensure([], () => r(require('../page/indexback.vue')), 'IndexBack')
    },
    {
        path: '/gameSearch',
        name: 'gameSearch',
        component: r => require.ensure([], () => r(require('../page/search/gameSearch.vue')), 'gameSearch')
    },
    {
      path: '/goodstype',
      name: 'goodstype',
      component: r => require.ensure([], () => r(require('../page/search/goodstype.vue')), 'goodsType')
    },
	{
      path: '/hotGameSearch',
      name: 'hotGameSearch',
      component: r => require.ensure([], () => r(require('../page/demo/hotGameSearch.vue')), 'hotGameSearch')
	},
	{
	    path: '/goodsList',
	    name: 'goodsList',
	    component: r => require.ensure([], () => r(require('../page/list/goodsList.vue')), 'goodsList')
	}
  ]
})
