//我的支付密码
define([], function () {
    var html = `<div><p>修改支付密码</P>
<input v-model="PayPassword" />
<button @click="UpdatePayPassword">修改</button>
</div>`;


    var components = {
        name: "MyPaymentPassword",
        template: html,
        data: function () {
            return {
                PayPassword: "",
            };
        },
        created: function () {

        },
        methods: {
            UpdatePayPassword: function () {
                $.post("/api/User/UpdatePayPassword", { id: "1", payPassword: this.PayPassword }, function (data) {
                    alert(data ? "成功" : "失败");
                });
            }
        }
    };
    return components;
});