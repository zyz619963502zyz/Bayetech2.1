//模块之间的操作
var PointTradingModule = ['vue', 'jquery', 'ScreenModel', 'PointTradingModel']
require(PointTradingModule, function (Vue, $, mediacy, tabuiation) {
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
    Vue.component('regboxtop', mediacy);
    Vue.component('regboxmiddle', tabuiation);

    var vm = new Vue({
        el: '#PointDiv',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});

//{{props.urltext}}