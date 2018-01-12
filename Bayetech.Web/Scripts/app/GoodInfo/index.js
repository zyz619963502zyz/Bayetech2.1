//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'GoodInfo', 'Nav',"nav-top", "v-header"]
require(moudule, function (Vue, $, common, goodInfo, orderNav, navt, header) {
    //数据为左右整合数据
    var data = {};

    //注册主键到标签
    //Vue.component('ordernav', orderNav);
    //Vue.component('ordergoodinfo', goodInfo);

    var vm = new Vue({
        el: '#GoodInfo',
        data: function () {
            return data;
        },
        created: function () {
            //this.$options.components.ordergoodinfo.methods.GetGoodInfo("201711151714130001");
        },
        components: {
            'ordernav': orderNav,
            'ordergoodinfo': goodInfo,
            'nav-top': navt,
			'v-header':header
        }
    });
});