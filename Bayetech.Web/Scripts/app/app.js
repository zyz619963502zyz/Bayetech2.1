var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web/" : "/";
//组件配置
var componentfig = {
    baseUrl: webUrl + "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    paths: {
        'vue': 'vue',
        'vueRouter':'vue-router',
        'jquery': 'jquery-1.10.2.min',
        'common': 'common',
        'head': 'app/Shared/head',
        'foot': 'app/Shared/foot',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/buttom',
        'helpContent': 'app/HelpCenter/content',
        'helpCenter': 'app/HelpCenter/helpCenter',
        'SignModule': 'app/Sign/sign'
    }

};
require.config(componentfig);

//启动文件
require(['vue', 'jquery', 'vueRouter', 'common', 'head', 'foot', "helpCenter"], function (Vue, $, VueRouter, common, head, foot, helpCenter) {
    //路由配置
    let routeconfig = [{
        path: webUrl + 'Areas/HelpCenter/index.html',
        component: helpCenter,
    }];
    var component = common.FindObjByProp(routeconfig, "path", window.document.location.pathname).component;
    Vue.component('main-head', head);
    Vue.component('main-foot', foot);

    let app = new Vue({
        components: { "v-view": component}
    }).$mount('#app');
});