var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web" : "";
//组件配置
var componentfig = {
    baseUrl: webUrl + "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    paths: {
        'vue': 'vue',
        'vueRouter': 'vue-router',
        'jquery': 'jquery-1.10.2.min',
        'common': 'common',
        'head': 'app/Shared/head',
        'foot': 'app/Shared/foot',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/buttom',
        'helpContent': 'app/HelpCenter/content',
        'helpCenter': 'app/HelpCenter/helpCenter',
        'SignModule': 'app/Sign/sign'
    },
    commonComponent: ['vue', 'jquery', 'common', 'head', 'foot', 'helpLeft'],
};
require.config(componentfig);

//路由配置
//var routeconfig = [{
//    path: webUrl + 'Page/HelpCenter/index.html',
//    name: "helpCenter",
//}];
var routeconfig = {};
routeconfig[webUrl + '/Page/HelpCenter/index.html'] = "helpCenter";

//需要组件
let componentArr = ['vue', 'jquery', 'common', 'head', 'foot'];
//let component = FindObjByProp(routeconfig, "path", window.document.location.pathname).name;
let component = routeconfig[window.document.location.pathname];
componentArr.push(component);

//启动文件
require(componentArr, function () {
    var Vue = arguments[0];
    var $ = arguments[1];
    var common = arguments[2];
    var head = arguments[3];
    var foot = arguments[4];
    var component = arguments[5];

    Vue.component('main-head', head);
    Vue.component('main-foot', foot);

    let app = new Vue({
        components: { "v-view": component}
    }).$mount('#app');
});


