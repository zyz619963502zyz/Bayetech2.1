//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'AccountOrder', 'CashOrder', 'GoldOrder']
require(moudule, function (Vue, $, common, account, cash, gold) {
    //数据为左右整合数据
    var data = {};

    //注册主键到标签
    Vue.component('accountorder', account);//账号
    Vue.component('goldorder', gold);//金币
    Vue.component('cashorder', cash);//点劵

    var vm = new Vue({
        el: '#OrderInfo',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});
