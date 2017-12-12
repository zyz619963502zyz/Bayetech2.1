//模块之间的操作
var GoodListMoudule=['vue', 'jquery', 'common', 'Screen', 'GoodList', "ScreenBox"]
//alert(1);
require(GoodListMoudule, function (Vue, $, common, mediacy, tabuiation, screenbox) {

    var vm = new Vue({
        el: '#GoodList',
        created() {
            //this.findList();
        },
        nowVue: this,
        methods: {
           
        },
        components: {
            "screenbox": screenbox,
            "regboxtop": mediacy,
            "regboxmiddle": tabuiation
        }
    });
});
