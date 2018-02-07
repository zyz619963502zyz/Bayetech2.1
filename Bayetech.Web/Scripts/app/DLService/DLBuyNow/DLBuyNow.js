define(jsconfig.baseArr, function (vue,$,common) {
    var dlbuyNowHtml=`<div class="package-info">
                <h2 class="package-tit"><em class="iconfont">&#xe984;</em><span>代练套餐信息</span></h2>
                <div class="package-con clearfix">
                    <div class="package-con-l">
                        <dl>
                            <dt><i>服务名称：</i><em>{{DlInfo.Title}}</em></dt>
                            <dd>
                                <span>
                                    <i>代练类型：</i><em class="blue1">{{DlInfo.DlTypeName}}</em>
                                </span>
                                <span>
                                    <i>代练价格：</i><em class="blue1">{{DlInfo.Price}}</em> 元</span>
                                <span><i>代练时间：</i>
                                    <em class="blue1">{{DlInfo.PeriodDays}}</em>天
                                    <em class="blue1">{{DlInfo.PeriodHours}}</em>时
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <div class="package-con-line"></div> 
                    <div class="package-con-r">
                        <h5>如果代练出现问题，玩家可获得赔付：</h5>
                        <p>
                            <span v-for="item in Terms">{{item.PropertyName}}：<em class ="blod">{{item.PropertyValue}}</em> 元</span>
                        </p>
                    </div>
                </div>
                <div class="bor-bot"></div>
         </div>`;

    var _buyNowUrl="/api/Dl/GetDlDetailInfo";

    var data={
        GroupSelected: "",
        ServerSelected:"",
        DlInfo:{
            Title: "",
            DlTypeName: "",
            Price: "",
            PeriodDays: "",
            PeriodHours:""
        },
        Terms: [],
        DlForm: {
            GameId: "",

        },
    };

    var buyNowCompnent={
        name : "DlBuyNow",
        template: dlbuyNowHtml,
        data() {
            return data;
        },
        created() {
            var self = this;
            self.BuyNowInfo(common.GetUrlParam("","DlNo"));
        },
        methods: {
            BuyNowInfo(dlNo) {
                var _self = this;
                common.getWebJson(_buyNowUrl, { dlNo: dlNo }, function (data) {
                    if (data.main.result) {
                        _self.DlInfo=data.main.content.datas[0];
                        _self.$root.subMitObj.OrderPrice = _self.DlInfo.Price;
                    }
                    if (data.detail.result) {
                        _self.Terms = data.detail.content;
                    }
                });
            }
        }
    };

    return buyNowCompnent;
});
