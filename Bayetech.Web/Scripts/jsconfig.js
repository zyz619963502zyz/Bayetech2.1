/// <reference path="app/ServiceCenter/sevicelogo.js" />
/// <reference path="app/ServiceCenter/sevicelogo.js" />
var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web/" : "/";
var jsconfig = {
    baseUrl: webUrl,
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    baseArr: ['vue', 'jquery', 'common'],
    paths: {
        'vue': 'Scripts/vue',
        'jquery': 'Scripts/jquery-1.10.2',
        'bootstrap': 'Scripts/bootstrap',
        'bootstrapValidator': 'Scripts/bootstrapValidator',
        'swiper': 'Scripts/swiper',
        'common': 'Scripts/common',
        'text': "Scripts/text",
        'v-header': 'Scripts/app/Shared/header',
        'v-footer': 'Scripts/app/Shared/footer',
        "v-nav": 'Scripts/app/Shared/nav',
        'v-tab': "Scripts/app/Shared/tab",
        'v-menu': "Scripts/app/Shared/menu",
        'v-partner': "Scripts/app/Home/partner",
        "v-search": "Scripts/app/Search/Search",
        "search-dropdown": "Scripts/app/Search/search-dropdown",
        'footer-server': 'Scripts/app/Shared/footer-server',
        'footer-nav': 'Scripts/app/Shared/footer-nav',
        'helpLeft': 'Scripts/app/HelpCenter/left',
        'helpButtom': 'Scripts/app/HelpCenter/bottom',
        'SignLeftModule': 'Scripts/app/Sign/signLeft',
        'SignRightModule': 'Scripts/app/Sign/signRight',
        'index-notice': 'Scripts/app/Home/notice',
        'index-consult': 'Scripts/app/Home/consult',
        'index-convenience': 'Scripts/app/Home/convenience',
        'index-hotgamelist': 'Scripts/app/Home/hotgamelist',
        'index-banner': 'Scripts/app/Home/banner',
        'index-slidebox': 'Scripts/app/Home/slidebox',
        'index-adv01': 'Scripts/app/Home/adv01',
        'index-tabslist': 'Scripts/app/Home/tabslist',
        'index-gameranking': "Scripts/app/Home/gameranking",
        'index-adv': "Scripts/app/Home/adv",
        'index-mgamelist': "Scripts/app/Home/mgamelist",
        'index-nav': "Scripts/app/Home/nav",
        'Screen': 'Scripts/app/GoodList/Screen',
        'ScreenBox': "Scripts/app/GoodList/ScreenBox",
        'GoodList': 'Scripts/app/GoodList/GoodList',
        'ScreenModel': 'Scripts/app/PointTrading/screen',
        "nav-dropdown": "Scripts/app/Home/nav-dropdown",
        'ScreenModel': 'Scripts/app/GoodList/Screen',
        'GoodInfo': 'Scripts/app/GoodInfo/GoodInfo',
        'Nav': 'Scripts/app/GoodInfo/Nav',
        'OrderPay': 'Scripts/app/PlaceOrder/OrderPay',
        'SureBuy': 'Scripts/app/PlaceOrder/SureBuy',
        "v-search": "Scripts/app/Search/Search",
        "search-dropdown": "Scripts/app/Search/search-dropdown",
        "search-gamedropdown": "Scripts/app/Search/search-gamedropdown",
        'AccountOrder': 'Scripts/app/MakeGoodInfo/AccountOrder',
        'CashOrder': 'Scripts/app/MakeGoodInfo/CashOrder',
        'GoldOrder': 'Scripts/app/MakeGoodInfo/GoldOrder',
        'PersonalHead': "Scripts/app/PersonalCenter/head",
        'Pavigation': "Scripts/app/PersonalCenter/pavigationBar",
        'PwdRecoverTem': "Scripts/app/Login/PwdRecover/PwdRecoverTem",
        'PersonRight': "Scripts/app/PersonalCenter/righttop",
        'PersonButtom': "Scripts/app/PersonalCenter/rightbuttom",
        'Percontent': "Scripts/app/PersonalCenter/content",
        'ServiceLogo': "Scripts/app/ServiceCenter/sevicelogo",
        'ServiceNav': "Scripts/app/ServiceCenter/servicepavigation",
        'ServiceButtom': "Scripts/app/ServiceCenter/servicenew",
        'ServiceFoot': "Scripts/app/ServiceCenter/footeradvan",
        'ServiceCall': "Scripts/app/ServiceCenter/ServiceColl",
        'ServicePusht': "Scripts/app/ServiceCenter/servicepusht",
        'ServiceInfa': "Scripts/app/ServiceCenter/serviceinfo"
    },
    map: {
        '*': {
            'css': 'Scripts/css.min'
        }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery', , 'css!../Content/bootstrap/bootstrap.min'],
            exports: 'aaaa'
        },
        'bootstrapValidator': {
            deps: ['jquery', 'bootstrap'],
            exports: 'validate'
        },
        'swiper': {
            deps: ['jquery', 'bootstrap', 'css!../Content/swiper/swiper.min'],
            exports: 'Swiper',
        }
    }
};
require.config(jsconfig);

var requireManage={
    libArr: ['vue', 'jquery', 'common'],
    moduleArr: [],
    cssArr: [],
    textArr: [],
    requireArr: ['vue', 'jquery', 'common'],
    addLib: function (arr) {
        requireManage.libArr = requireManage.libArr.concat(arr);
        requireManage.requireArr = requireManage.requireArr.concat(arr);
    },
    addModule: function (arr) {
       // q.concat(b)
        requireManage.moduleArr = requireManage.moduleArr.concat(arr);
        requireManage.requireArr = requireManage.requireArr.concat(arr);
    },
    addCss: function (arr) {
        requireManage.cssAr = requireManage.cssArr.concat(arr);
        requireManage.requireArr = requireManage.requireArr.concat(arr);
    },
    addText: function (arr) {
        requireManage.textArr = requireManage.textArr.concat(arr);
        requireManage.requireArr= requireManage.requireArr.concat(arr);
    },
    getrequire: function () {
        return requireManage.requireArr;
    },
    getModule: function () {
        return requireManage.requireArr;
    },
}

