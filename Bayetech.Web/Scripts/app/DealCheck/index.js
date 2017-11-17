//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'OrderGoodInfo', 'OrderNav']
require(moudule, function (Vue, $, common, goodInfo, orderNav) {
    //数据为左右整合数据
    var data = {};
    var url = "/api/DealCheck/GetCheckInfo";

    //注册主键到标签
    //Vue.component('ordernav', orderNav);
    //Vue.component('ordergoodinfo', goodInfo);

    var vm = new Vue({
        el: '#GoodInfo',
        data: function () {
            return data;
        },
        created: function () {
            common.postWebJson(url, data, function (data) {
                var a = data;
            });
        },
        components: {
            'ordernav': orderNav,
            'ordergoodinfo': goodInfo
        }
    });
});