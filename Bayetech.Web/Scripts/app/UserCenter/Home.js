//个人中心首页
define([], function () {
    var html=`<p>Home</P>`;

    var data={};
    var components={
        name: "Home",
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