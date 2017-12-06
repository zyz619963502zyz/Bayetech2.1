//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var accountorderHtml = `<ul id="DealBuy">
                    <li><span>购买数量：<strong style="color:#F00">* </strong></span><input type="text":value="BuyNum" readonly="readonly" /> (可购1件) </li>
                    <li><span>收货方式：<strong style="color:#F00">* </strong></span> {{GoodTypeName}}交易</li>
                    <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                    <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone" /></li>
                    <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"/></li>
                    <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text" :value="PromoNum" /></li>
                </ul>`;

    var data = {
        BuyNum: "1",
        GoodTypeName:"账号",
        GameName: "地下城与勇士",
        GroupName: "浙江区",
        ServerName: "浙江7区",
        BuyerPhone: "123456789",
        BuyerQQ: "987654321",
        PromoNum: "13246"
    }

    //账号下订单
    var accountordercomponent = {//全局注册
        template: accountorderHtml,
        data() {
            return data;
        },
        methods: {
            CheckOut() {//数据校验

            }
        }
    }
    return accountordercomponent;
})