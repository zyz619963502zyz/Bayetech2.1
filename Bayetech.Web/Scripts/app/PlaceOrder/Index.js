require(jsconfig.baseArr, function (Vue, $, common) {
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created(){
            this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data: {
            FirstStep: {},
            SecondStep: {},
            ThirdStep: {}
        },
        methods: {

       }
    });
});