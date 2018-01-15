  jsconfig.baseArr.push("bootstrap-paginator");
  define(jsconfig.baseArr, function (Vue, $, common, paginator) {
      var DetailHtml=`<div class="w1190 dnfbuess">
                <div class="jiaobiao jb01"></div>
                <div class="info-pic">
                    <div class="picFocus">
                        <img src="http://pic.7881.com/7881-2016/images/dl-dnf/details/dnfpic.jpg" width="338" height="338">
                    </div>
                    <div class="good-id">
                        <p>商品编号：<span>{{DlNo}}</span></p>
                        <div class="sharep">
                            <div class="bdsharebuttonbox">
                                <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#"
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-good yjs">
                    <h3 class="title">&#26032;&#20154;&#25171;&#25163;&#25509;&#20840;&#21306;&#28145;&#28170;&#65292;156/188&#65292;&#32431;&#25163;&#25171;&#65292;&#21253;&#26376;&#21487;&#20248;&#24800;&#65292;&#32477;&#23545;&#20449;&#35465;</h3>
                    <div class="package-price">
                        <div class="price-con">
                            <p>套餐价格：<span class="prnum">￥<em>{{Price}}</em></span></p>
                            <p>
                                为保障玩家利益，工作室已预缴
                                <span v-for="item in Terms">
                                    <em class ="iconfont">&#xe903; </em>
                                    <i>安全保证金<b>{{item.PropertyValue}}</b>元</i>
                                </span>
                            </p>
                        </div>
                        <div class="dltj">
                            <p>游戏奖励：<em>{{GameAward}} </em></p>
                            <p class="lastp">加工会：<em>{{SocietyUion}}  </em></p>
                        </div>
                    </div>
                    <div class="game-ensure">
                        <p><span>代练类型：</span>{{}}</p>
                        <p><span>游戏区服：</span>&#22320;&#19979;&#22478;&#19982;&#21191;&#22763;/&#35199;&#21271;&#21306;/&#35199;&#21271;2/3&#21306;</i></p>
                        <p>
                            <span>代练时间：</span><em>  1</em>天<em>0</em>小时
                        </p>
                    </div>
                    <div class="rent-btn">
                        <a href="/goods/buying/22862" class="com-btn-o color01">我要购买</a>
                    </div>
                </div>
                <div class="sotre-info">
                    <div class="store-hd"></div>
                    <div class="store-icon">
                        <img src="http://pic.7881.com/7881-2016/images/dl-dnf/details/ds-icon.png">
                        <p>
                            f10b34a62efb45fb...
                        </p>
                    </div>
                    <div class="store-est">
                        <p>
                            商家信誉：
                            新用户
                        </p>
                        <p>
                            商家等级：
                            普通打手
                        <p>
                            联系客服：<a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1"
                                    target="_blank">
                                <img src="http://pic.7881.com/7881-2016/images/dl-dnf/details/kf-icon.gif">
                            </a>
                        </p>
                    </div>
                    <div class="store-score">
                        <h2><img src="http://pic.7881.com/7881-2016/images/dl-dnf/tiao-02.png"></h2>
                        <ul>
                            <li class="wdli">
                                <h3>0笔</h3>
                                <p>成交订单</p>
                            </li>
                            <li>
                                <h3>0笔</h3>
                                <p>取消订单</p>
                            </li>
                            <li>
                                <h3>0%</h3>
                                <p>成交率</p>
                            </li>
                        </ul>
                    </div>
                    <div class="store-option">
                        <p>举报工作室线下交易，收集证据联系客服，您最高可获得10000元奖励。</p>
                    </div>
                </div>
            </div>`;

        //定义数据
    var data={
        DlObj:{
            BaseUrl: common.GetBaseUrl()+"PlaceOrder/PlaceOrder.html?GoodNo=",
            AddTime: "",
            DlNo: "",
            Title: "",
            Price: 280,
            GameName:"",
            GroupName: "",
            ServerName: "",
            DlType:"",
            DLAlias: "",
            CancelNum: "",
            GameAward: "",
            SocietyUion:"",
            level: "stars-box",
            Terms: []//条款
        },
        mallGoodInfo: [
            { DescriptionName: "", DescriptionValue: "" }
        ]
    }
    
    //获取商品信息的链接
    var _GetDlDetailInfo = "/api/Dl/GetDlDetailInfo";

    var data = {
        resultObj: {//主信息模板

        },
        propertys: [],//动态属性部分
    };

    var dlInfoComponent = {//全局注册
        template: DetailHtml,
        data() {
            return data;
        },
        created() {
            var self = this;
            self.GetDlInfo("S201711151714130029");//获取商品信息。
        },
        methods: {
            GetDlInfo(dlNo) {
                var _self = this;
                common.getWebJson(_GetDlDetailInfo, { dlNo: dlNo }, function (data) {
                    if (data.result) {
                        _self.DlObj = data.content;
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
            BuyNow(GoodNo) {//立即购买
                window.open(this.BaseUrl + GoodNo);
            }
        }
    }

    return dlInfoComponent;
})
     