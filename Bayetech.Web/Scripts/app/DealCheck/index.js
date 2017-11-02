//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'OrderGoodInfo', 'OrderNav']
require(moudule, function (Vue, $, common, goodInfo, orderNav) {
    //数据为左右整合数据
    var data = {};

    //注册主键到标签
    //Vue.component('ordernav', orderNav);
    //Vue.component('ordergoodinfo', goodInfo);

    var vm = new Vue({
        el: '#OrderInfo',
        data: function () {
            return data;
        },
        created: function () {

        },
        components: {
            'ordernav': orderNav,
            'ordergoodinfo': goodInfo
        }
    });
});