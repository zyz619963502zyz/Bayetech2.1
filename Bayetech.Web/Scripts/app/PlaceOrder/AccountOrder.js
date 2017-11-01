//注册模块
define("AccountOrder", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var accountorderHtml = `<ul id="DealBuy">
                    <li><span>购买数量：<strong style="color:#F00">* </strong></span><input type="text" value="buyNum" readonly="readonly" /> (可购1件) </li>
                    <li>
                        <span>收货方式：<strong style="color:#F00">* </strong></span> 账号交易
                    </li>
                    <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{gameName}}/{{bigArea}}/{{smallArea}}</li>
                    <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text" value="phoneNum" /></li>
                    <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text" value="qqNum" /></li>
                    <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text" value="promo" /></li>
                </ul>`;

    var data = {
        buyNum: "1",
        gameName: "地下城与勇士",
        bigArea: "浙江区",
        smallArea: "浙江7区",
        phoneNum: "123456789",
        qqNum: "987654321",
        signal: "1231123",
        promo: "13246"
    }

    var accountordercomponent = {//全局注册
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
    }

    return accountordercomponent;
})