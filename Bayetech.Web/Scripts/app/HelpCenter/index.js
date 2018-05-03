//帮助中心主模块
define(['vue', 'jquery', 'common', 'help-head', 'help-left', 'help-buttom', 'help-content', 'v-menu'], function () {
    var html = `<div class="center">
            <help-head></help-head>
            <v-menu :data="menuData"></v-menu>
            <div class="help_right">
                <help-content :object="article"></help-content>
                <help-buttom></help-buttom> 
            </div>
        </div>`;
    //<help-left :list="articleList" :view="view"></help-left>

    var Vue = arguments[0];
    var $ = arguments[1];
    var common = arguments[2];
    //Api
    var findListUrl = "/api/Article/FindList"; //查询列表
    var findContentUrl = "/api/Article/FindContent"; //查询详情

    var data = {
        mouduleid: "23",//帮助中心id
        menuData:{
            Title: "帮助中心",
            Home: "#",
            List:[]
        },
        articleList: [],
        article: {
            content: `<li><img src="../../../../Content/Images/wymlc.jpg"></li>`
        },
    };
    var components = {
        name: "helpCenter",
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
                var nowVue = this;
                common.getWebJson(findListUrl, { value: this.mouduleid }, function (data) {
                    nowVue.menuData.List=data;
                });
            },
            view(value) {
                var nowVue = this;
                common.getWebJson(findContentUrl, { value: value }, function (data) {
                    nowVue.article = data;
                });
            },
        },
    };
    common.PrepareComponents(components, 3, arguments);//组装组件
    return components;
});

//启动文件
//require(['vue', 'jquery', 'common', 'head', 'foot', 'helpLeft', 'helpButtom', 'helpContent'], function (Vue, $, common, head, foot, helpCenter) {
//    //路由配置
//    var routeconfig = [{
//        path: webUrl + 'Page/HelpCenter/index.html',
//        component: helpCenter,
//    }];
//    Vue.component('main-head', head);
//    Vue.component('main-foot', foot);

//    var components = {};
//    for (var i = 4; i < arguments.length; i++) {
//        components[arguments[i].name] = arguments[i];
//    }

//    var app = new Vue({
//        components: components,
//    }).$mount('#app');
//});


