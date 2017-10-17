//帮助中心主模块
define(['vue', 'jquery', 'head', 'foot', 'helpLeft', 'helpButtom', 'helpContent'], function () {
    //Api
    var findListtUrl = "/api/Article/FindList"; //查询列表
    var findContentUrl = "/api/Article/FindContent"; //查询详情
    var html = `<div class="center">
            <help-left></help-left>
            <div class="help_right">
                <help-content></help-content>
                <help-buttom></help-buttom>
            </div>
        </div>`;
    var components = {
        name: "helpCenter",
        template: html,
        components: {},
    };
    for (var i = 4; i < arguments.length; i++) {
        components["components"][arguments[i].name] = arguments[i];
    }
    return components;
});

//启动文件
//require(['vue', 'jquery', 'common', 'head', 'foot', 'helpLeft', 'helpButtom', 'helpContent'], function (Vue, $, common, head, foot, helpCenter) {
//    //路由配置
//    let routeconfig = [{
//        path: webUrl + 'Page/HelpCenter/index.html',
//        component: helpCenter,
//    }];
//    Vue.component('main-head', head);
//    Vue.component('main-foot', foot);

//    var components = {};
//    for (var i = 4; i < arguments.length; i++) {
//        components[arguments[i].name] = arguments[i];
//    }
    
//    let app = new Vue({
//        components: components,
//    }).$mount('#app');
//});


