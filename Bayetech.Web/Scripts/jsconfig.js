var webUrl = window.document.location.pathname.indexOf("Bayetech.Web") > -1 ? window.document.location.pathname.split("Bayetech.Web")[0] + "Bayetech.Web" : "";
var jsconfig = {
    baseUrl: webUrl + "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    baseArr: ['vue', 'jquery', 'common'],
    paths: {
        'vue': 'vue',
        'jquery': 'jquery-1.10.2.min',
        'common': 'common',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/buttom',
        'SignModule': 'app/Sign/sign',
        'indexTab': 'app/Home/index-tab',
        'convenience': 'app/Home/convenience',
        'hotgamelist': 'app/Home/hotgamelist',
        'HomeTabBox': 'app/Home/mainArea02',
    }
};
require.config(jsconfig);