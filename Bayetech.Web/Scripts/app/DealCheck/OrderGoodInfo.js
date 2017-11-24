//注册模块
define("OrderGoodInfo", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    var GetGoodInfoUrl = "/api/DealCheck/GetCheckInfo";

    //模板
    var goodInfoHtml = `<div class="info-good">
            <h3 class ="title">{{goodTitle}}</h3>
            <div class="package-price">
                <div class="price-con">
                    <h3>
                        <p class ="nowprice">价格: <span><em>￥</em>{{goodprice}}</span></p>
                        <p class ="wantprice"><em class ="tags icon-jgxs"></em><a href="wantPriceUrl">我要议价</a></p>
                    </h3>
                </div>
                <h4>
                    等级：<em class ="level"></em>
                    <span>{{saleTime}}</span>
                </h4>
            </div>
            <div class ="game-ensure" >
                <p class ="type" v-for="item in acountInfo">{{item.type}}<span>{{item.text}}</span></p>
            </div>
            <div class="role-info">
                <ul>
                    <li v-for="item in roleInfo"><span>{{item.type}}</span><em>{{item.text}}</em></li>
                </ul>
            </div>
            <div class="detail_ico">
                <label>服务：</label>
                <a href="javascript:void(0)" class="curr"><i class="tags icon-wl"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-zhyz"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-zhbp"></i></a>
                <a href="javascript:void(0)"><i class="tags icon-jgxs"></i></a>
                <div class="ico_text">
                    <p><i class="tags icon-ptdf"></i>寄售商品：货在7881，款到立即发货。</p>
                    <p style="display: none;"><i class="tags icon-zhyz"></i>此帐号注册资料已通过7881验证。</p>
                    <p style="display: none;"><i class="tags icon-zhbp"></i>找回包赔：如交易成功后您购买的商品三个月内出现被卖家找回，7881将负责损失赔偿</p>
                    <p style="display: none;"><i class="tags icon-jgxs"></i>价格协商：此商品可以联系客服进行议价</p>
                </div>
            </div>
            <div class="rent-btn">
                <a href="#" @click = "BuyNow">立即购买</a>
            </div>
        </div>`

    var data = {
        goodTitle : "【 85级 女 暗殿骑士 身份证未设置 QQ等级0级 无QQ好友】《蛋总专卖》12个角色78-85-满深渊票-87767--交易时间8:00-凌晨1:00",
        goodprice: 280,
        wantPriceUrl: "http://search.7881.com/201612376390646.html#",
        level: "stars-box",
        saleTime: "此账号首次在7881出售",
        acountInfo: [
            { type: "类型:", text: "账号" },
            { type: "区服:", text: "上海区/上海1区" },
            { type: "送积分:", text: "12分" }
        ],
        roleInfo: [
            { type: "等级:", text: "86" },
            { type: "性别:", text: "女" },
            { type: "职业:", text: "暗殿骑士" },
            { type: "身份证:", text: "身份证未设置" },
            { type: "QQ等级:", text: "QQ等级0级" },
            { type: "QQ好友:", text: "无QQ好友" }
        ]
    }  

    var goodInfoComponent = {//全局注册
        template: goodInfoHtml,
        data() {
            return data;
        },
        created() {
            common.postWebJson(url, data, function (data) {
                var a = data;
            });
        },
        methods: {
            GetGoodInfo(){
                common.getWebJson(_GetGoodInfoUrl, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data;
                    }
                });
            },
            GetNavBar() {
                common.getWebJson(_GetNavBarUrl, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data;
                    }
                });
            },
            BuyNow() {

            }
        }
    }

    return goodInfoComponent;
})