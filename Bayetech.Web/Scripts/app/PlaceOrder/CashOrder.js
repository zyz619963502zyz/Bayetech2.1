//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var cashorderHtml = `<ul>
                <li class="buyNum">
                    <span>购买数量：<strong style="color:#F00">* </strong></span><input type="text" :value="buyNum"><p class ="zq">&nbsp; </p>
                </li>
                <li>
                    <span>收货方式：<strong style="color:#F00">* </strong></span> 邮寄 交易
                </li>
                <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                <li style="position: relative;overflow: visible;">
                    <span>游戏账号：<strong style="color:#F00">* </strong></span><input type="text" :value="GameAccount">
                    <div class="fed-toolstip" id="tipFrame" style="left: 230px;position: absolute;display:none">
                        <div class="fed-tipcon">
                            <div>如有人提供游戏账号让您填写，以做任务或刷信用为由，均为骗子，请勿受骗！</div>
                            <a class="fed-tipsclose" id="tipClose">×</a>
                        </div>
                    </div>
                </li>
                <li><span>确认游戏账号：<strong style="color:#F00">* </strong></span><input type="text" :value="GameAccountAgain"></li>
                <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone"></li>
                <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text" :value="BuyerQQ"></li>
                <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text" :value="PromoNum"></li>
            </ul>`;

    //数据
    var data = {
        BuyNum: "1",
        GameName: "地下城与勇士",
        GameAccount: "124132115",
        GameAccountAgain:"124132115",
        GroupName: "浙江区",
        ServerName: "浙江7区",
        BuyerPhone: "123456789",
        BuyerQQ: "987654321",
        PromoNum: "13246"
    }

    //组装成组件
    var cashordercomponent = {//全局注册
        template: cashorderHtml,
        data() {
            return data;
        },
        methods: {
            CheckOut() {//数据校验

            }
        }
    }

    //返回供调用
    return cashordercomponent;
})