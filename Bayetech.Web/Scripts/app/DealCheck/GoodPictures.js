//注册模块
define("GoodPictures", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var pictureHtml = ``

    var data = {
        pictureInfo: [
            { id: "等级:", src: "" },
            { id: "等级:", src: "" }
        ]
    }

    var goodInfoComponent = {//全局注册
        template: goodInfoHtml,
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
    }

    return goodInfoComponent;
})