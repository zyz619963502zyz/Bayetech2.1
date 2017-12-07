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
        'header': 'app/Shared/header',
        'footer': 'app/Shared/footer',
        'help-head': 'app/HelpCenter/head',
        'help-left': 'app/HelpCenter/left',
        'help-buttom': 'app/HelpCenter/buttom',
        'help-content': 'app/HelpCenter/content',
        'helpCenter': 'app/HelpCenter/index',
        'SignLeftModule': 'app/Sign/signLeft',
        'SignRightModule': 'app/Sign/signRight',
        'index-tab': 'app/Home/index-tab',
        'ScreenModel': 'app/PointTrading/screen',
        'PointTradingModel': 'app/PointTrading/pointTradingMiddle',
        'personal-head': 'app/PersonalCenter/head', 
        'personalCenter': 'app/PersonalCenter/index',
        'v-menu': "app/Shared/menu",

    },
    commonComponent: ['vue', 'jquery', 'common', 'header', 'footer'],
};
require.config(componentfig);

var FindObjByProp = function (arr, propName, value) {
    var newArr = [];
    for (var prop in arr) {
        var o = arr[prop], p = o[propName];
        p && newArr.push(o);
    }
    return newArr[0];
}

//路由配置
var routeconfig = [{
    name: "helpCenter",
    path: webUrl + 'Page/HelpCenter/index.html',
}, {
    name: "home",
    path: webUrl + 'Page/Home/index.html',
},
{
    name: "personalCenter",
    path: webUrl + 'Page/PersonalCenter/index.html',
}];
//var routeconfig = {};
//routeconfig[webUrl + '/Page/HelpCenter/index.html'] = "helpCenter";

//需要组件
let componentArr = ['vue', 'jquery', 'common', 'header', 'footer'];
let component = FindObjByProp(routeconfig, "path", window.document.location.pathname).name;
//let component = routeconfig[window.document.location.pathname];
componentArr.push(component);

//启动文件
require(componentArr, function () {
    let Vue = arguments[0];
    let $ = arguments[1];
    let common = arguments[2];
    let head = arguments[3];
    let footer = arguments[4];
    let component = arguments[5];

    Vue.component('main-header', head);
    Vue.component('main-footer', footer);

    let app = new Vue({
        components: { "v-view": component }
    }).$mount('#app');
});


