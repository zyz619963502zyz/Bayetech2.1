//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var goldorderHtml = `
        <ul id="BuyGold" v-if="GoodTypeId==1"><!--金币-->
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
        </ul>

        <ul id="BuyAccount" v-else-if="GoodTypeId==3"><!--账号-->
            <li><span>购买数量：<strong style="color:#F00">* </strong></span><input type="text":value="BuyNum" readonly="readonly" /> (可购1件) </li>
            <li><span>收货方式：<strong style="color:#F00">* </strong></span> {{GoodTypeName}}交易</li>
            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone" /></li>
            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"/></li>
            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum" /></li>
        </ul>

        <ul v-else-if="GoodTypeId==4"><!--点券-->
            <li class ="buyNum">
                    <span>购买数量：<strong style="color:#F00">* </strong></span><input type="text":value="BuyNum"><p class ="zq">&nbsp; </p>
                </li>
                <li>
                    <span>收货方式：<strong style="color:#F00">* </strong></span> 邮寄 交易
                </li>
                <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                <li style="position: relative;overflow: visible;">
                    <span>游戏账号：<strong style="color:#F00">* </strong></span><input type="text" :value="GameAccount">
                    <div class ="fed-toolstip" id="tipFrame" style="left: 230px;position: absolute;display:none">
                        <div class ="fed-tipcon">
                            <div>如有人提供游戏账号让您填写，以做任务或刷信用为由，均为骗子，请勿受骗！</div>
                            <a class ="fed-tipsclose" id="tipClose">×</a>
                        </div>
                    </div>
                </li>
                <li><span>确认游戏账号：<strong style="color:#F00">* </strong></span><input type="text":value="GameAccountAgain"></li>
                <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone"></li>
                <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"></li>
                <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum"></li>
            </ul>`;

        //数据
        var data={//填写的数据
            GoodTypeId: 1,
            GoodTypeName: "账号",
            BuyNum: "1",
            GameName: "地下城与勇士",
            GameAccount: "124132115",
            GameAccountAgain: "124132115",
            GroupName: "浙江区",
            ServerName: "浙江7区",
            BuyerPhone: "123456789",
            BuyerQQ: "987654321",
            Signal:"12314",
            PromoNum: "13246",
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