//注册模块
define("OrderGoodInfo", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _DealCheckUrl = "/api/DealCheck/GetCheckInfo"; //查找当前页面的数据
    var _GetGoodInfoUrl = "/api/DealCheck/GetGoodInfo";

    //模板
    var goodInfoHtml = `<div class="info-good">
            <h3 class ="title">{{GoodTitle}}</h3>
            <div class="package-price">
                <div class="price-con">
                    <h3>
                        <p class ="nowprice">价格: <span><em>￥</em>{{GoodPrice}}</span></p>
                        <p class ="wantprice"><em class ="tags icon-jgxs"></em><a href="wantPriceUrl">我要议价</a></p>
                    </h3>
                </div>
                <h4>
                    等级：<em :class ="level"></em>
                    <span>{{HistoryAccount == '0'?'此账号首次在游戏联盟出售': '此账号有'+HistoryAccount+'次交易记录'}}</span>
                </h4>
            </div>
            <div class ="game-ensure" >
                <p :class ="[HistoryAccount>=0?'type':'hide']">账号：<span>{{GroupName}}</span></p>
                <p :class ="[HistoryAccount>=0?'type':'hide']">区服：<span>{{ServerName}}</span></p>
            </div>
            <div class="role-info">
                <ul>
                    <li v-for="item in mallGoodInfo"><span>{{item.DescriptionName}}：</span><em>{{item.DescriptionValue}}</em></li>
                </ul>
            </div>
            <div class="detail_ico">
                <label>服务：</label>
                <a href="javascript:void(0)" class="curr"><i class="tags icon-wl"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-zhyz"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-zhbp"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-jgxs"></i></a>
                <div class="ico_text">
                    <p><i class="tags icon-ptdf"></i>寄售商品：货在游戏联盟，款到立即发货。</p>
                    <p style="display: none;"><i class ="tags icon-zhyz"></i>此帐号注册资料已通过游戏联盟验证。</p>
                    <p style="display: none;"><i class ="tags icon-zhbp"></i>找回包赔：如交易成功后您购买的商品三个月内出现被卖家找回，游戏联盟将负责损失赔偿</p>
                    <p style="display: none;"><i class="tags icon-jgxs"></i>价格协商：此商品可以联系客服进行议价</p>
                </div>
            </div>
            <div class="rent-btn">
                <a href="#" @click = "BuyNow">立即购买</a> 
            </div>
        </div>`

    var data = {
        GoodTitle: "",
        GoodPrice: 280,
        GroupName: "东北区",
        ServerName: "东北1区",
        wantPriceUrl: "http://search.7881.com/201612376390646.html#",
        level: "stars-box",
        HistoryAccount: "此账号首次在7881出售",
        mallGoodInfo: [
            { DescriptionName: "", DescriptionValue: "" }
        ]
        //acountInfo: [
        //    { type: "类型:", text: "账号" },
        //    { type: "区服:", text: "上海区/上海1区" },
        //    { type: "送积分:", text: "12分" }
        //]
    }  

    var goodInfoComponent = {//全局注册
        template: goodInfoHtml,
        data() {
            return data;
        },
        created() {
           this.GetGoodInfo("201711151714130001");//获取商品信息。
        },
        methods: {
            GetGoodInfo(goodno) {
                var _self = this;
                common.getWebJson(_GetGoodInfoUrl, { goodNo: goodno }, function (data) {
                    if (data.result) {
                        _self.GoodTitle = data.content.GoodTitle;
                        _self.GoodPrice = data.content.GoodPrice;
                        _self.GroupName = data.content.GroupName;
                        _self.ServerName = data.content.ServerName;
                        _self.HistoryAccount = data.content.HistoryAccount;
                        _self.$data.mallGoodInfo = data.content.mallGoodInfo;
                    }
                });
            },
            GetNavBar() {
                common.getWebJson(_GetNavBarUrl, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data.content;
                    }
                });
            },
            //GetGoodInfo() {
            //    common.getWebJson(_GetGoodInfo, { accountName: this.$props.value.Iphone }, function (data) {
            //        if (data == false) {
            //            this.data = data;
            //        }
            //    });
            //},
            BuyNow() {

            }
        }
    }

    return goodInfoComponent;
})