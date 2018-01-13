//模块间操作
var moudule = ['vue', 'jquery', 'common', 'DLDetail']
require(moudule, function (Vue, $, common, infolist,dlDetail) {
    //数据为左右整合数据
    var data = {};

    var vm = new Vue({
        el: '#DlInfo',
        data: function () {
            return data;
        },
        methods: {

        },
        created: function () {
            
        },
        components: {
            'dldetail': dlDetail
        }
    });
});