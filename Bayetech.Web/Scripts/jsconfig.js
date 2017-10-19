var jsconfig = {
    baseUrl: "/Scripts/",
    //urlArgs: 'v=' + (new Date()).getTime(),//清楚缓存
    baseArr: ['vue', 'jquery', 'common'],
    paths: {
        'vue': 'vue',
        'jquery': 'jquery-1.10.2.min',
        'common': 'common',
        'helpLeft': 'app/HelpCenter/left',
        'helpButtom': 'app/HelpCenter/buttom',
        'SignLeftModule': 'app/Sign/signLeft',
        'SignRightModule': 'app/Sign/signRight',
        'HomeTabBox': 'app/HomePage/mainArea02'
    }
};
require.config(jsconfig);