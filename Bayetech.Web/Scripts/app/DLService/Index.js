//模块间操作
var moudule = ['vue', 'jquery', 'common', 'InfoList']
require(moudule, function (Vue, $, common, infolist) {
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
            'infolist': infolist
        }
    });
});