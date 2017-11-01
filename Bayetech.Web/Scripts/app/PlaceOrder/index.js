//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'AccountOrder', 'CashOrder', 'GoldOrder']
require(moudule, function (Vue, $, common, account, cash, gold) {
    //数据为左右整合数据
    var data = {};

    //注册主键到标签
    Vue.component('accountorder', account);
    Vue.component('goldorder', gold);
    Vue.component('cashorder', cash);

    var vm = new Vue({
        el: '#GoodInfo',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});
