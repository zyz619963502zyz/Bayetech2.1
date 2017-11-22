/// <reference path="app/ServiceCenter/sevicelogo.js" />
/// <reference path="app/ServiceCenter/sevicelogo.js" />
var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web" : "";
var jsconfig = { 
    baseUrl: webUrl + "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    baseArr: ['jquery', 'vue', 'common'],
    paths: {
        jquery: 'jquery-1.10.2',
        'vue': 'vue',
        'bootstrap': 'bootstrap',
        'bootstrapValidator': 'bootstrapValidator',
        'swiper': 'swiper.min',
        'common': 'common',
        'v-header': 'app/Shared/header',
        'v-footer': 'app/Shared/footer',
        'footer-server': 'app/Shared/footer-server',
        'footer-nav': 'app/Shared/footer-nav',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/bottom',
        'SignLeftModule': 'app/Sign/signLeft',
        'SignRightModule': 'app/Sign/signRight',
        'index-notice': 'app/Home/notice',
        'index-consult': 'app/Home/consult',
        'index-convenience': 'app/Home/convenience',
        'index-hotgamelist': 'app/Home/hotgamelist',
        'index-banner': 'app/Home/banner',
        'index-slidebox': 'app/Home/slidebox',
        'index-adv01': 'app/Home/adv01',
        'index-tabslist': 'app/Home/tabslist',
        'ScreenModel': 'app/PointTrading/screen',
        'PointTradingModel': 'app/PointTrading/pointTradingMiddle',
        'v-tab': "app/Shared/tab",
        'index-gameranking': "app/Home/gameranking",
        'index-adv': "app/Home/adv",
        'index-mgamelist': "app/Home/mgamelist",
        'v-partner': "app/Home/partner",
        'ScreenModel': 'app/PointTrading/screen',
        'index-nav': "app/Home/nav",
        "nav-dropdown":"app/Home/nav-dropdown",
        'ScreenModel': 'app/PointTrading/screen',
        'OrderGoodInfo': 'app/DealCheck/OrderGoodInfo',
        'OrderNav': 'app/DealCheck/OrderNav',
        'AccountOrder': 'app/PlaceOrder/AccountOrder',
        'CashOrder': 'app/PlaceOrder/CashOrder',
        'GoldOrder': 'app/PlaceOrder/GoldOrder',
        "v-search": "app/Search/Search",
        "search-dropdown": "app/Search/search-dropdown",
        "search-gamedropdown": "app/Search/search-gamedropdown",
        'PersonalHead': "app/PersonalCenter/head",
        'Pavigation': "app/PersonalCenter/pavigationBar",
        'PwdRecoverTem': "app/Login/PwdRecover/PwdRecoverTem",
        'PersonRight': "app/PersonalCenter/righttop",
        'PersonButtom': "app/PersonalCenter/rightbuttom",
        'Percontent': "app/PersonalCenter/content",
        'ServiceLogo': "app/ServiceCenter/sevicelogo",
        'ServiceNav': "app/ServiceCenter/servicepavigation",
        'ServiceButtom': "app/ServiceCenter/servicenew",
        'ServiceFoot': "app/ServiceCenter/footeradvan",

    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'aaaa'
        },
        'bootstrapValidator': {
            deps: ['jquery', 'bootstrap'],
            exports: 'validate'
        }
    }
};
require.config(jsconfig);

