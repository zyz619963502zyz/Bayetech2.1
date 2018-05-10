//手机绑定
define([], function () {
    var html = `<div><p>修改手机绑定</P>
<input v-model="Phone" />
<button @click="UpdatePhone">修改</button>
</div>`;

    var data = {};
    var components = {
        name: "PhoneBinding",
        template: html,
        data: function () {
            return {
                Phone: "",
            };
        },
        created: function () {

        },
        methods: {
            UpdatePhone: function () {
                $.post("/api/User/UpdatePhone", { id: "1", phone: this.Phone }, function (data) {
                    alert(data ? "成功" : "失败");
                });
            }
        }
    };
    return components;
});
