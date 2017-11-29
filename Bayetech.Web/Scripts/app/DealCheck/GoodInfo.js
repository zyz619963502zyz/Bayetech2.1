//注册模块
define("OrderGoodInfo", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    //var _DealCheckUrl = "/api/DealCheck/GetCheckInfo"; //查找当前页面的数据
    var _GetGoodInfoUrl = "/api/DealCheck/GetGoodInfo";

    //模板
    var goodInfoHtml = `<div>
        <div class ="info-pic">
                <div class="picFocus">
                    <ul>
                        <li>
                            <img src="../../Content/Images/b123f30809434931a6e623fad7b166cf.png" width="338" height="338" />
                        </li>
                    </ul>
                </div>
                <div class="good-id">
                    <p class ="bianhao">编号：<span>{{GoodNo}}</span></p>
                    <p class ="riqi">日期：<span>{{AddTime.replace('T',' ')}}</span></p>
                    <div class="sharep">
                        <div class="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1">
                            <a class="bds_more" data-cmd="more">分享</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class ="info-good">
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
                    <p class ="type">类型：<span>{{MallTypeName}}</span></p>
                    <p class ="type">区服：<span>{{GroupName}}/{{ServerName}}</span></p>
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
            </div>

            <div class ="seller-info" style="height: 500px;">
                <div class ="sellhead">
                    <img src="../../Content/Images/sellicon.jpg" />
                </div>
                <div class ="sellstar">
                    <p>
                        卖家信誉：<a href="http://www.7881.com/helpcenter/36057564234053938.html" target="_blank">
                            <em class ="startall"></em>
                            <em class ="startall"></em>
                            <em class ="startall"></em>
                            <em class ="startall"></em>
                        </a>
                    </p>
                </div>
                <div class ="selldata">
                    <p>成交订单：<span>{{TotalNum}}笔</span></p>
                    <p>取消订单：<span>5笔</span></p>
                    <p>成交概率：<span> 96%  </span></p>
                </div>
                </div>
            </div>
        </div>`

    var data = {
        AddTime:"",
        GoodNo:"",
        GoodTitle: "",
        GoodPrice: 280,
        MallTypeName:"",
        GroupName: "",
        ServerName: "",
        TotalNum:"",
        wantPriceUrl: "http://search.7881.com/201612376390646.html#",
        level: "stars-box",
        HistoryAccount: "此账号首次在7881出售",
        mallGoodInfo: [
            { DescriptionName: "", DescriptionValue: "" }
        ]
    }  

    var goodInfoComponent = {//全局注册
        template: goodInfoHtml,
        data() {
            return data;
        },
        created() {
            this.GetGoodInfo("201711151714130003");//获取商品信息。
        },
        methods: {
            GetGoodInfo(goodno) {
                var _self = this;
                common.getWebJson(_GetGoodInfoUrl, { goodNo: goodno }, function (data) {
                    if (data.result) {
                        _self.AddTime = data.content.AddTime;
                        _self.GoodNo = data.content.GoodNo;
                        _self.GoodTitle = data.content.GoodTitle;
                        _self.GoodPrice = data.content.GoodPrice;
                        _self.GroupName = data.content.GroupName;
                        _self.ServerName = data.content.ServerName;
                        _self.HistoryAccount = data.content.HistoryAccount;
                        _self.MallTypeName = data.content.MallTypeName;
                        _self.TotalNum = data.content.TotalNum;
                        _self.$data.mallGoodInfo = data.content.mallGoodInfo;
                        _self.$parent.$emit('GoodInfoHere', data);//触发事件并传播
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