// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
import './assets/scripts/common.js';



/* eslint-disable no-new */
let $vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
