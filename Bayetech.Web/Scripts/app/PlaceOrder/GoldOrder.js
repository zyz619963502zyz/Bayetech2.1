//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var goldorderHtml = `<ul id="GoldBuy">
            <li class="buyNum">
                <span>购买数量：<strong style="color:#F00">* </strong></span><input type="hidden"/>{{BuyNum}}
                <p class="txcpdd_default"> (可购1件)</p>
            </li>
            <li>
                <span>交易方式：<strong style="color:#F00">* </strong></span>
                <input type="radio" name="goodsPurchaseBea" value="face" checked="checked" />&nbsp; 当面交易
                <div style="border:solid red 1px; background:#f4faff;padding:5px;line-height:20px; margin-left:95px;color: red">
                    请拍单后前往16线行会莎兰处进行交易
                </div>
            </li>
            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone"/></li>
            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"/></li>
            <li><span>交易暗码：<strong style="color:#F00">* </strong></span><input type="text" :value="Signal"/></li>
            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum" /></li>
        </ul>`;

        //数据
        var data = {
            BuyNum: "1",
            GameName: "地下城与勇士",
            GroupName: "浙江区",
            ServerName: "浙江7区",
            BuyerPhone: "123456789",
            BuyerQQ: "987654321",
            Signal:"12314",
            PromoNum: "13246"
        }

        var goldordercomponent = {//全局注册
            template: goldorderHtml,
            data() {
                return data;
            },
            methods: {
                CheckOut() {//数据校验

                }
            }
        }

        return goldordercomponent;
})