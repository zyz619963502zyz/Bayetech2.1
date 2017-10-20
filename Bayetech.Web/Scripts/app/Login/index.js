require(jsconfig.baseArr, function (Vue, $) {
    var _loginUrl = "/api/Account/LoginIn"

    //登录的数据
    var _data = {
        GameUser: "",
        GamePass: "",
    }

    new Vue({
        el: '#LoginMain',
        data: _data,
        created: function () {

        },
        methods:{
            SubmitLogin: function () {
                postWebJson(_loginUrl, JSON.stringify(this.data), function () {
                    var a = 1;
                });
            }
        }
    });
});