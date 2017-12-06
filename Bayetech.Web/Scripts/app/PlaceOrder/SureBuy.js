//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var surebuyhtml = `<div class="center">
            <div class="qrgmxx">
                <h1>确认购买信息</h1>
                <div class="kuang">
                    <ul>
                        <li class="cpbt"><span>商品标题</span></li>
                        <li class="dj">价格</li>
                    </ul>
                    <ul>
                        <li class="cpbt">
                            <img src="http://pic.ofcard.com/7881/market/images/buy/buy_zhang.png" />
                            <em style="color:#0099FF">
                                {{SureBuyModel.GoodTitle}}
                            </em><br />
                            物品类型： {{SureBuyModel.GoodTypeName}}<br/>
                            游戏区服： {{SureBuyModel.GameName}} /{{SureBuyModel.GroupName}} /{{SureBuyModel.ServerName}}
                        </li>
                        <li class ="dj"><strong style="color:#F90">{{SureBuyModel.GoodPrice.toFixed(2)}}</strong>元</li>
                    </ul>
                </div>
            </div>
        </div>`;

    var data = {
        SureBuyModel: {
            GoodTitle: "地下城与勇士测试title",
            GoodTypeName: "账号",
            GameName: "地下城与勇士",
            GroupName: "浙江区",
            ServerName: "浙江7区",
            GoodPrice: "500",
        }
    }

    //账号下订单
    var surebuycomponent = {//全局注册
        template: surebuyhtml,
        data() {
            this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        methods: {
            GetGoodInfo(goodno) {
                var _self = this;
                common.getWebJson(_GetGoodInfoUrl, { goodNo: goodno }, function (data) {
                    if (data.result) {
                         
                    }
                });
            },
        }
    }
    return surebuycomponent;
})