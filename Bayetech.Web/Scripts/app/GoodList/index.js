//模块之间的操作
var GoodListMoudule=['vue', 'jquery', 'common','v-header', 'v-nav', 'Screen', 'GoodList', "ScreenBox"]
//alert(1);
require(GoodListMoudule, function (Vue, $, common,header,nav, mediacy, tabuiation, screenbox) {

    var vm = new Vue({
        el: '#GoodList',
        created() {
            //this.findList();
        },
        nowVue: this,
        methods: {
           
        },
        components: {
            "v-header": header,
            "v-nav": nav,
            "screenbox": screenbox,
            "regboxtop": mediacy,
            "regboxmiddle": tabuiation
        }
    });
});
