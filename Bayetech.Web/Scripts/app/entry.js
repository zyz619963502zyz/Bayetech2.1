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

//启动文件
require(['vue', 'jquery', 'common'], function (Vue,$,common) {
    //路由配置
    var routeconfig = [{
        path: webUrl + 'Page/HelpCenter/index.html',
        name: "helpCenter",
    }];

    //需要组件
    let componentArr = ['vue', 'jquery', 'common', 'head', 'foot', 'helpCenter'];
    let component = FindObjByProp(routeconfig, "path", window.document.location.pathname).name;
    componentArr.push(component);
});