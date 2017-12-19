//我的代练订单
jsconfig.baseArr.push('Scripts/app/UserCenter/Buyer/MyOrders');
define(jsconfig.baseArr, function (Vue,$,common,order) {
    var html = order.template;

    var data= order.data();
    var components={
        name: "MyDlOrder",
        template: html,
        data: function () {
            return data;
        },
        created: function () {

        },
        methods: {
        }
    };
    return components;
});