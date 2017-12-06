//模块之间的操作
var GoodListMoudule = ['vue', 'jquery', 'common', 'Screen', 'GoodList']
//alert(1);
require(GoodListMoudule, function (Vue, $, common, mediacy, tabuiation) {
    //注册主键到标签
    Vue.component('regboxtop', mediacy);
    Vue.component('regboxmiddle', tabuiation);

    var vm = new Vue({
        el: '#GoodList',
        created() {
            //this.findList();
        },
        nowVue: this,
        methods: {
           
        },
    });
});
