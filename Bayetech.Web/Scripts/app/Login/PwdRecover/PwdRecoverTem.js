//找回密码中间页
define("PwdRecoverTem", jsconfig.baseArr, function (Vue, $, common) {
    var temHtml = `<form id="theForm" method="post">
                       <slot><slot/>
                    </form>`;

    var data = {};

    var tmpcomponent = {
        template: accountorderHtml,
        data() {
            return data;
        },
        created() {
            //this.GetNavBar();
        },
        methods: {
            GetNavBar: function () {
                common.getWebJson(_GetGoodInfo, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data;
                    }
                });
            }
        }
    };

    return tmpcomponent;
})