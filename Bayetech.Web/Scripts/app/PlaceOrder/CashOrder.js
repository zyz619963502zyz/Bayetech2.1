//注册模块
define("CashOrder", jsconfig.baseArr, function (Vue, $, common) {
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
                            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{gameName}}/{{bigArea}}/{{smallArea}}</li>
                            <li style="position: relative;overflow: visible;">
                                <span>游戏账号：<strong style="color:#F00">* </strong></span><input type="text" :value="account">
                                <div class="fed-toolstip" id="tipFrame" style="left: 230px;position: absolute;display:none">
                                    <div class="fed-tipcon">
                                        <div>如有人提供游戏账号让您填写，以做任务或刷信用为由，均为骗子，请勿受骗！</div>
                                        <a class="fed-tipsclose" id="tipClose" href="javascript:$('#tipFrame').hide();">×</a>
                                    </div>
                                </div>
                            </li>
                            <li><span>确认游戏账号：<strong style="color:#F00">* </strong></span><input type="text" :value="accountAgain"></li>
                            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text" :value="phoneNum"></li>
                            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text"  :value="qqNum"></li>
                            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text" :value="promo"></li>
                        </ul>`;

    var data = {
        buyNum: "1",
        gameName: "地下城与勇士",
        bigArea: "浙江区",
        account: "1321456464",
        accountAgain:"1321456464",
        smallArea: "浙江7区",
        phoneNum: "123456789",
        qqNum: "987654321",
        promo: "13246"
    }

    var cashordercomponent = {//全局注册
        template: cashorderHtml,
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

    return cashordercomponent;
})