//注册模块
define("GoldOrder", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var goldorderHtml = `<ul id="GoldBuy">
                            <li class="buyNum">
                                <span>购买数量：<strong style="color:#F00">* </strong></span><input type="hidden"/>{{buyNum}}
                                <p class="txcpdd_default"> (可购1件)</p>
                            </li>
                            <li>
                                <span>交易方式：<strong style="color:#F00">* </strong></span>
                                <input type="radio" name="goodsPurchaseBea" value="face" checked="checked" />&nbsp; 当面交易
                                <div style="border:solid red 1px; background:#f4faff;padding:5px;line-height:20px; margin-left:95px;color: red">
                                    请拍单后前往16线行会莎兰处进行交易
                                </div>
                            </li>
                            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{gameName}}/{{bigArea}}/{{smallArea}}</li>
                            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text" value="phoneNum" /></li>
                            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text"  value="phoneNum" /></li>
                            <li><span>交易暗码：<strong style="color:#F00">* </strong></span><input type="text" value="signal" /></li>
                            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text" value="promo" /></li>
                        </ul>`;

        var data = {
            buyNum: "5000万金",
            gameName : "地下城与勇士",
            bigArea: "浙江区",
            smallArea: "浙江7区",
            phoneNum: "123456789",
            qqNum: "987654321",
            signal: "1231123",
            promo: "13246"
        }

        var goldordercomponent = {//全局注册
            template: goldorderHtml,
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

        return goldordercomponent;
})