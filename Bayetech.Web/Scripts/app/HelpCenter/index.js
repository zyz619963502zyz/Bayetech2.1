//帮助中心主模块
define(['vue', 'jquery', 'common', 'help-head', 'help-left', 'help-buttom', 'help-content'], function () {
    debugger;
    let html = `<div class="center">
            <help-head></help-head>
            <help-left :list="articleList" :view="view"></help-left>
            <div class="help_right">
                <help-content :object="article"></help-content>
                <help-buttom></help-buttom> 
            </div>
        </div>`;

    let Vue = arguments[0];
    let $ = arguments[1];
    let common = arguments[2];
    //Api
    let findListUrl = "/api/Article/FindList"; //查询列表
    let findContentUrl = "/api/Article/FindContent"; //查询详情

    let data = {
        articleList: [],
        article: {
            content: `<li><img src="../../Content/Images/wymlc.jpg"></li>`
        },
    };
    let components = {
        name: "helpCenter",
        mouduleid: "23",//帮助中心id
        template: html,
        components: {},
        data() {
            return data;
        },
        created() {
            this.findList();
        },
        nowVue: this,
        methods: {
            findList() {
                let nowVue = this;
                common.getWebJson(findListUrl, { value: this.mouduleid }, function (data) {
                    nowVue.articleList = data;
                });
            },
            view(value) {
                let nowVue = this;
                common.getWebJson(findContentUrl, { value: value }, function (data) {
                    nowVue.article = data;
                });
            },
        },
    };
    for (let i = 2; i < arguments.length; i++) {
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

//    let components = {};
//    for (let i = 4; i < arguments.length; i++) {
//        components[arguments[i].name] = arguments[i];
//    }

//    let app = new Vue({
//        components: components,
//    }).$mount('#app');
//});


