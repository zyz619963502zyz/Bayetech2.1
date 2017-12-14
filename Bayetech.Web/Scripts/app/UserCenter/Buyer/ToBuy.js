//我要买
define([], function () {
    var html=`<p>我要买</P>`;

    var data={};
    var components={
        name: "ToBuy",
        template: html,
        data: function () {
            return data;
        },
        created: function () {
            alert("初始化了!");
        },
        methods: {
        }
    };
    return components;
});