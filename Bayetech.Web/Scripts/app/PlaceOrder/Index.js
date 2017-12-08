jsconfig.baseArr.push("SureBuy");
jsconfig.baseArr.push("OrderType");
require(jsconfig.baseArr, function (Vue, $, common, surebuy, order) {
    var OrderUrl="api/Order/CreatOrder";
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created() {
            //this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data: {
            goodNo: common.GetUrlParam("", "GoodNo")
        },
        components: {
            'surebuy': surebuy,
            'order': order,
       }
    });
});