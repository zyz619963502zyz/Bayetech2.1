//修改登录密码
define([], function () {
    var html = `<div><p>修改登录密码</P>
<input v-model="Password" />
<button @click="UpdatePassword">修改</button>
</div>`;


    var components={
        name: "ChangePassword",
        template: html,
        data: function () {
            return {
                Password: "",
            };
        },
        created: function () {
        },
        methods: {
            UpdatePassword: function () {
                $.post("/api/User/UpdatePassword", { id: "1", password: this.Password, }, function (data) {
                    alert(data ? "成功" : "失败");
                }, "json");
            }
        }
    };
    return components;
});


