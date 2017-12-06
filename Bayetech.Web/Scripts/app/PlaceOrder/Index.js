jsconfig.baseArr.push("SureBuy");
jsconfig.baseArr.push("GoldOrder");
require(jsconfig.baseArr, function (Vue, $, common, surebuy, order) {
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created() {
            //this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data: {
        },
        methods: {

        },
        components: {
            'surebuy': surebuy,
            'order': order,
       }
    });
});