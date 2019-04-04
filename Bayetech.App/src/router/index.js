import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('@/components/HelloWorld.vue')), 'HelloWorld')
    },
    {
      path: '/home',
      name: 'home',
      component: r => require.ensure([], () => r(require('@/components/home.vue')), 'home')
    },
    {
      path: '/',
      name: 'Index',
      component: r => require.ensure([], () => r(require('@/page/index.vue')), 'Index')
    },
    {
      path: '/demoIndex',
      name: 'demoIndex',
      component: r => require.ensure([], () => r(require('@/page/demo/index.vue')), 'demoIndex')
    },
    {
      path: '/gameSearch',
      name: 'gameSearch',
      component: r => require.ensure([], () => r(require('@/page/search/gameSearch.vue')), 'gameSearch')
    },
    {
      path: '/goodstype',
      name: 'goodstype',
      component: r => require.ensure([], () => r(require('@/page/search/goodstype.vue')), 'goodsType')
    },
    {
      path: '/hotGameSearch',
      name: 'hotGameSearch',
      component: r => require.ensure([], () => r(require('@/page/demo/hotGameSearch.vue')), 'hotGameSearch')
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: r => require.ensure([], () => r(require('@/page/list/goodsList.vue')), 'goodsList')
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: r => require.ensure([], () => r(require('@/page/detail/goodsDetail.vue')), 'goodsDetail')
    }
    ,
    {
      path: '/gameDL',
      name: 'gameDL',
      component: r => require.ensure([], () => r(require('@/page/subIndex/GameDL.vue')), 'gameDL')
    }
    ,
    {
      path: '/dlList',
      name: 'dlList',
      component: r => require.ensure([], () => r(require('@/page/list/dlList.vue')), 'dlList')
    },
    {
      path: '/dlDetail',
      name: 'dlDetail',
      component: r => require.ensure([], () => r(require('@/page/detail/dlDetail.vue')), 'dlDetail')
    },
    {
      path: '/dlOrder',
      name: 'dlOrder',
      component: r => require.ensure([], () => r(require('@/page/placeOrder/dlorder.vue')), 'dlOrder')
    },
    {
      path: '/center',
      name: 'center',
      component: r => require.ensure([], () => r(require('@/page/center/PersonalCenter.vue')), 'center')
    },
    {
      //下订单页
      //equipment装备，account账号，coins金币，stone（挑战书）等大部分公用
      path: '/gameOrder',
      name: 'gameOrder',
      component: r => require.ensure([], () => r(require('@/page/placeOrder/gameOrder.vue')), 'center')
    },
    {
      path: '/goodsPublish',
      name: 'goodsPublish',
      component: r => require.ensure([], () => r(require('@/page/sales/goodsPublish.vue')), 'sales')
    },
    {
      path: '/goodsPublish_account',
      name: 'goodsPublish_account',
      component: r => require.ensure([], () => r(require('@/page/sales/goodsPublish_account.vue')), 'sales')
    },
    {
      path: '/goodsPublish_equip',
      name: 'goodsPublish_equip',
      component: r => require.ensure([], () => r(require('@/page/sales/goodsPublish_equip.vue')), 'sales')
    },
    {
      path: '/goodsPublish_material',
      name: 'goodsPublish_material',
      component: r => require.ensure([], () => r(require('@/page/sales/goodsPublish_material.vue')), 'sales')
    },
    {
      path: '/goodsPublish_gold',
      name: 'goodsPublish_gold',
      component: r => require.ensure([], () => r(require('@/page/sales/goodsPublish_gold.vue')), 'sales')
    }
  ]
})
