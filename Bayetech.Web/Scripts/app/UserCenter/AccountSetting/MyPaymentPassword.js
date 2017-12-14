//我的支付密码
define([], function () {
    var html=`<p>我的支付密码</P>`;

    var data={};
    var components={
        name: "MyPaymentPassword",
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