//模块之间的操作
var Signmoudule = ['vue', 'jquery', 'OrderGoodInfo', 'OrderNav']
require(Signmoudule, function (Vue, $, goodInfo, orderNav) {
    //数据为左右整合数据
    var data = {};

    //注册主键到标签
    Vue.component('ordernav', orderNav);
    Vue.component('ordergoodinfo', goodInfo);

    var vm = new Vue({
        el: '#GoodInfo',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});