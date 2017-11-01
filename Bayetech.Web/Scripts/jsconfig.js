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
        'common': 'common',
        'v-header': 'app/Shared/header',
        'v-footer': 'app/Shared/footer',
        'footer-server': 'app/Shared/footer-server',
        'footer-nav': 'app/Shared/footer-nav',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/bottom',
        'SignLeftModule': 'app/Sign/signLeft',
        'SignRightModule': 'app/Sign/signRight',
        'HomeTabBox': 'app/HomePage/mainArea02',
        'indexTab': 'app/Home/index-tab',
        'convenience': 'app/Home/convenience', 
        'hotgamelist': 'app/Home/hotgamelist',
        'banner-box': 'app/Home/banner-box',
        'slideBox': 'app/Home/slideBox',
        'adv-01': 'app/Home/adv-01',
        'tabsList-box': 'app/Home/tabsList-box',
        'ScreenModel': 'app/PointTrading/screen',
        'PointTradingModel': 'app/PointTrading/pointTradingMiddle',
        'c-tab': "app/Shared/tab",
        'v-gameranking': "app/Home/v-gameranking",
        'index-adv': "app/Home/index-adv",
        'mgame-list': "app/Home/mgame-list",
        'partner': "app/Home/partner",
        'c-tab':"app/Shared/tab",
        'ScreenModel': 'app/PointTrading/screen',
        'index-nav': "app/Home/index-nav",
        "index-nav-dropdown":"app/Home/index-nav-dropdown",
        'ScreenModel': 'app/PointTrading/screen',
        'OrderGoodInfo': 'app/DealCheck/OrderGoodInfo',
        'OrderNav': 'app/DealCheck/OrderNav'
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