//我购买的订单
define([], function () {
    var html=`<p>我购买的订单</P>`;

    var data={};
    var components={
        name: "MyOrders",
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