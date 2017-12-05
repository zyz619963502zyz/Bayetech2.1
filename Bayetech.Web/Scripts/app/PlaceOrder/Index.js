require(jsconfig.baseArr, function (Vue, $, common) {
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created(){
            this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data: {
            FirstStep: {//交易信息
                GameId:"",
                GoodNo: "",
                GameGroupId:"",
                GoodTitle: "",
                GoodTypeName: "",
                GameName: "",
                GroupName: "",
                GameServerId:"",
                ServerName: "",
                GoodPrice: "",
                BuyNum:""
            },
            SecondStep: {

            },
            ThirdStep: {}
        },
        methods: {
            GetGoodInfo(goodno) {
                var _self = this;
                common.getWebJson(_GetGoodInfoUrl, { goodNo: goodno }, function (data) {
                    if (data.result) {
                        _self.FirstStep = data.content;
                    }
                });
            },
       }
    });
});