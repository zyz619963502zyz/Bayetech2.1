//模块之间的操作
var PointTradingModule = ['vue', 'jquery', 'ScreenModel', 'PointTradingModel']
require(PointTradingModule, function (Vue, $, screen, pointTrading) {
    //筛选和列表整合数据
    var data = {
        //注册筛选
        Screenobject: {

        },
        //注册列表
        PointTradingobiect: {

        }
    }

    //注册主键到标签
    Vue.component('regboxtop', screen);
    Vue.component('regboxmiddle', pointTrading);

    var vm = new Vue({
        el: '#PointDiv',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});