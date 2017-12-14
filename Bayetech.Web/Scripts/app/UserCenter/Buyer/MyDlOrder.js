//我的代练订单
define([], function () {
    var html=`<p>我的代练订单</P>`;

    var data={};
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