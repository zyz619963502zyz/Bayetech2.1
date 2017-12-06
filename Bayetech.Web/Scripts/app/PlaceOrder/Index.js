jsconfig.baseArr.push("AccountOrder");
jsconfig.baseArr.push("GoldOrder");
jsconfig.baseArr.push("CashOrder");
jsconfig.baseArr.push("SureBuy");
require(jsconfig.baseArr, function (Vue, $, common, account, gold, cashorder,surebuy) {
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
            'accountorder': account,
            'goldorder': gold,
            'cashorder': cashorder,
            'surebuy': surebuy
       }
    });
});