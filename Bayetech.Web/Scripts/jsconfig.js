var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web" : "";
var jsconfig = {
    baseUrl: webUrl + "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    baseArr: ['jquery','vue','common'],
    paths: {
        'jquery': 'jquery-1.10.2.min',
        'vue': 'vue',
        //'bootstrap': 'bootstrap.min',
        //'bootstrapValidator': 'bootstrapValidator',
        'common': 'common',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/buttom',
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
        'c-tab':"app/Shared/tab",
        'ScreenModel': 'app/PointTrading/screen'
    }
};
require.config(jsconfig);