  jsconfig.baseArr.push("bootstrap-paginator");
  define(jsconfig.baseArr, function (Vue, $, common, paginator) {
      var DetailHtml=`<div class="w1190 dnfbuess">
                <div class="jiaobiao jb01"></div>
                <div class="info-pic">
                    <div class="picFocus">
                        <img src="http://pic.7881.com/7881-2016/images/dl-dnf/details/dnfpic.jpg1" width="338" height="338">
                    </div>
                    <div class="good-id">
                        <p>商品编号：<span>{{DlObj.DlNo}}</span></p>
                        <div class="sharep">
                            <div class="bdsharebuttonbox">
                                <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#"
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-good yjs">
                    <h3 class="title">{{DlObj.Title}}</h3>
                    <div class="package-price">
                        <div class="price-con">
                            <p>套餐价格：<span class="prnum">￥<em>{{DlObj.Price}}</em></span></p>
                            <p>
                                为保障玩家利益，工作室已预缴
                                <span v-for="item in Terms">
                                    <em class ="iconfont">&#xe903; </em>
                                    <i>{{item.PropertyName}}<b>{{item.PropertyValue}}</b>元</i>
                                </span>
                            </p>
                        </div>
                        <div class="dltj">
                            <p>游戏奖励：<em>{{DlObj.GameAward}} </em></p>
                            <p class="lastp">加工会：<em>{{DlObj.SocietyUnion}}  </em></p>
                        </div>
                    </div>
                    <div class="game-ensure">
                        <p><span>代练类型：</span>{{DlObj.DlTypeName}}</p>
                        <p><span>游戏区服：</span>{{DlObj.GameName}}/{{DlObj.GroupName}}/{{DlObj.ServerName}}</i></p>
                        <p>
                            <span>代练时间：</span><em>  {{DlObj.PeriodDays}}</em>天<em>{{DlObj.PeriodHours}}</em>小时
                        </p>
                    </div>
                    <div class="rent-btn">
                        <a href="/goods/buying/22862" class="com-btn-o color01" @click ="WantBuy">我要购买</a>
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
            SocietyUnion:"",
            level: "stars-box",
            Terms: []//条款
        },
        Terms: []
    }
    
    //获取商品信息的链接
    var _GetDlDetailInfo = "/api/Dl/GetDlDetailInfo";

    var dlInfoComponent = {
        template: DetailHtml,
        data() {
            return data;
        },
        created() {
            var self = this;
            self.GetDlDetailInfo(common.GetUrlParam("","DlNo"));//获取商品信息。
        },
        methods: {
            GetDlDetailInfo(dlNo) {
                var _self = this;
                common.getWebJson(_GetDlDetailInfo, { dlNo: dlNo }, function (data) {
                    if (data.main.result) {
                        _self.DlObj = data.main.content.datas[0];
                    }
                    if (data.detail.result) {
                        _self.Terms = data.detail.content;
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
            WantBuy(DlNo) {//立即购买
                window.open(this.BaseUrl + GoodNo);
            }
        }
    }

    return dlInfoComponent;
})
     