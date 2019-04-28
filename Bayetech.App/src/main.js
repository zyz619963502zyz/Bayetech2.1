// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.prototype.$SearchModel={
    GameId: 0,
    GameName: "游戏名称",
    GameGroupId: 0,//上海区 
    GameGroupName: "游戏区",
    GameServerId: 0,//上海一区
    GameServerName: "服务器",
    GoodTypeId: 0,//账号 金币
    GoodTypeName: "物品类型",
    DlTypeName: "代练类型",//等级 冲杯 段位
    GoodKeyWord: "",//关键字
    AcrossId: 0,//跨区Id
    AcrossName: "跨区"
}
import './assets/css/fost-base-min.css';
import { get, post, patch, put } from './assets/scripts/http.js';
import { choose, chooseSingle, isChoice } from './assets/scripts/common.js';

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$choose = choose;
Vue.prototype.$chooseSingle = chooseSingle;
Vue.prototype.$isChoice = isChoice;


import uploader from 'vue-easy-uploader'
Vue.use(Vuex) 
let store = new Vuex.Store({})
Vue.use(uploader, store)

/*已改为使用 vue-meta 来设置meta以及title*/
//router.beforeEach((to, from, next) => {
//  /* 路由发生变化修改页面title */
//  if (to.meta.title) {
//    document.title = to.meta.title;
//  }
//  next();
//})

/* eslint-disable no-new */
let $vm=new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
    })
