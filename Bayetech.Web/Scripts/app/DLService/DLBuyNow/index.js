//模块间操作
var moudule = ['vue', 'jquery', 'common', 'DLBuyNow']
require(moudule, function (Vue, $, common ,dlBuyInfo) {
    //数据为左右整合数据
    var data = {};

    var vm = new Vue({
        el: '#DlBuyInfo',
        data: function () {
            return data;
        },
        methods: {

        },
        created: function () {
            
        },
        components: {
            'dlbuyinfo': dlBuyInfo
        }
    });
});