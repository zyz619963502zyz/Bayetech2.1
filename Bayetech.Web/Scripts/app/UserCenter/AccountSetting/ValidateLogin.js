//登录验证
define([], function () {
    var html = `<button @click="UpdateIsValiteLogin">{{IsValiteLogin?"关闭":"开启"}}</button>`;

    var components = {
        name: "ValidateLogin",
        template: html,
        data: function () {
            return {
                IsValiteLogin: false,
            };;
        },
        created: function () {
            this.GetIsValiteLogin();
        },
        methods: {
            GetIsValiteLogin: function () {
                _self = this;
                $.get("/api/User/GetIsValiteLogin", { id: "1" }, function (data) {
                    _self.IsValiteLogin = data;
                });
            },
            UpdateIsValiteLogin: function () {
                _self = this;
                var isValiteLogin = !this.IsValiteLogin
                $.post("/api/User/UpdateIsValiteLogin", { id: "1", isValiteLogin: isValiteLogin }, function (data) {
                    _self.IsValiteLogin = isValiteLogin;
                    alert(data ? "成功" : "失败");
                });
            }
        }
    };
    return components;
});

//登录验证
define(['jquery'], function ($) {
    var html = `<div><p>登录验证</P>
<button @click="UpdatePhone">{{IsValiteLogin?"关闭":"开启"}}</button>
</div>`;


    var components = {
        name: "ChangePassword",
        template: html,
        data: function () {
            return {
                IsValiteLogin: false,

            };
        },
        created: function () {
            _self = this;
            $.get("/api/User/GetIsValiteLogin", { id: "1" }, function (data) {
                _self.IsValiteLogin = data;
            });
        },
        methods: {
            UpdatePhone: function () {
                $.post("/api/User/UpdateIsValiteLogin", { id: "1", isValiteLogin: !this.IsValiteLogin }, function (data) {
                    alert(data ? "成功" : "失败");
                });
            }
        }
    };
    return components;
});