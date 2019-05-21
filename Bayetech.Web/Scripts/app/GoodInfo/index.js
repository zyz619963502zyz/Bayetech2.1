//模块之间的操作
var moudule = ['vue', 'jquery', 'common', 'GoodInfo','GoodPics' ,'Nav',"nav-top", "v-header","v-footer"]
require(moudule, function (Vue, $, common, goodInfo, goodpic ,orderNav, navt, header,footer) {
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
            'ordergoodpic':goodpic,
            'nav-top': navt,
            'v-header': header,
            'v-foot':footer
        }
    });
});