//修改登录密码
define([], function () {
    var html = `<div><p>修改登录密码</P>
<input v-model="newPassword" />
<button @click="UpdatePassword">修改密码</button>
</div>`;newPassword


    var components={
        name: "ChangePassword",
        template: html,
        data: function () {
            return {
                newPassword: "",
            };
        },
        created: function () {

        },
        methods: {
            UpdatePassword: function () {
                $.post("/api/User/UpdatePassword", { Id: "1", Password: this.newPassword }, function (data) {
                    alert(data ? "成功" : "失败");
                });
            }
        }
    };
    return components;
});