//修改登录密码
define([], function () {
    var html=`<p>修改登录密码</P>`;

    var data={};
    var components={
        name: "ChangePassword",
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