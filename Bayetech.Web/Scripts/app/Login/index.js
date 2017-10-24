require(jsconfig.baseArr, function ($, Vue, common) {
    var _loginUrl = "/api/Account/LoginIn"

    //登录的数据
    //var _data = {
    //    GameUser: "",
    //    GamePass: "",
    //}

    new Vue({
        el: '#LoginMain',
        data: {
            GameUser: "1111",
            GamePass: "2222",
        },
        methods:{
            SubmitLogin: function () {
                common.postWebJson(_loginUrl, JSON.stringify(this.data), function (data) {
                    alert(data == true ? "登录成功" : "账号或密码错误!");
                });
            }
        }
    });
});