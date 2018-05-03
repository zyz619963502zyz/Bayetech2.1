//模块间操作
var moudule = ['vue', 'jquery', 'common', 'DLDetail','v-footer','nav-top','css!../../Content/bootstrap/bootstrap.min','css!../../../../Content/common','css!../../Content/dailian','css!../../Content/details']
require(moudule, function (Vue, $, common,dlDetail,footer,navt) {
    //数据为左右整合数据
    var data = {};

    var vm = new Vue({
        el: '#DetailElem',
        data: function () {
            return data;
        },
        methods: {

        },
        created: function () {
            
        },
        components: {
        	'dldetail': dlDetail,
        	'v-footer': footer,
			'navt':navt
        }
    });
});