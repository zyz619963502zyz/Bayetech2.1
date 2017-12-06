require(jsconfig.baseArr, function (Vue, $, common) {
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created() {
            this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data: {
            FirstStep: {
                BaseUrl: common.GetBaseUrl() + "PlaceOrder/PlaceOrder.html?GoodNo=",
                AddTime: "",
                GoodNo: "",
                GoodTitle: "",
                GoodPrice: 280,
                GoodTypeName: "",
                GroupName: "",
                ServerName: "",
                TotalNum: "",
                CancelNum: "",
                wantPriceUrl: "http://search.7881.com/201612376390646.html#"
            },
            SecondStep: {

            },
            ThirdStep: {

            }
        },
        methods: {

        },
        components: {
            'accountorder': account,
            'goldorder': gold,
            'cashorder': cash
       }
    });
});