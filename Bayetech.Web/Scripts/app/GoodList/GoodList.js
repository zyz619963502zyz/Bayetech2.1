define(jsconfig.baseArr, function (Vue, $, common) {
    var middleHtml = `<div class="list-box list-type-03">
        <div class ="list-item"  v-for="item in ListObj">
                <div class ="list-item-box" >
                    <div class="list-v part-01 clearfix">
                        <div class="img-box">
                            <a v-bind:href="item.ScreenshotsCertification" target="_blank">
                                <img v-bind:src="item.GoodFirstPicture" />
                                <h3 class="authenticate">截图认证</h3>
                                <h3>149图</h3>
                            </a>
                        </div>
                        <div class="txt-box">
                            <h2>
                                <a v-bind:href="item.aurl" target="_blank">
                                    <em class="tags icon-ptdf" ></em>
                                    <span>{{item.GoodTitle}} </span>
                                </a>
                            </h2>
                            <h4><i>游戏区服：</i><span>
                                {{item.GroupName}}/{{item.ServerName}}</span></h4>
                            <p>
                                <i>账号安全：</i><span class="stars-box  s5"></span>
                            </p>
                        </div>
                    </div>
                    <div class="list-v part-02">
                        <h5>¥ {{item.GoodPrice}}</h5>
                    </div>
                    <div class="list-v part-04">
                        <div class="tags-box">
                            <p title="此账号支持过户，购买更安全"><em class="tags icon-zhgh"></em>账号过户</p>
                            <p title="该账号由系统自动截图，信息展示更全面"><em class="tags icon-jtrz"></em>截图认证</p>
                            <p title="此帐号卖家已提供身份证扫描件，购买更安全"><em class="tags icon-sfyz"></em>身份验证</p>
                        </div>
                    </div>
                    <div class="list-v part-05">
                        <h5><a :goodNo="item.GoodNo" @click="GotoDetail" class ="list-btn">查看帐号</a></h5>
                    </div>
                </div>
            </div>
          </div>`

    //Api
    var GoodListUrl = "/api/GoodInfo/GetList"; //查询列表
    //筛选和列表整合数据
    var data = {
        BaseUrl: common.GetBaseUrl() + "DealCheck/DealCheck.html?GoodNo=",
        BaseTarget: "_blank",
        ListObj:[
            {
                GoodNo: "",
                GoodFirstPicture: "",
                aurl: "",
                GoodTitle: "",
                GroupName: "",
                ServerName:"",
                GoodPrice: ""
            }
        ]
    }

    //中间模板
    var goodComponent = {
        template: middleHtml,
        data(){
            return data;
        },
        created(){
            this.findList()
        },
        methods: {
            findList() {
                var self = this;
                var param = common.GetUrlParam();
                common.postWebJson(GoodListUrl, JSON.stringify(param), function (data) {
                    if (data.result) {
                        self.ListObj = data.content;
                    }
                });
            },
            GotoDetail(e) {//详情页跳转
                //this.currentGo = + $(e.target).attr("goodNo");
                //$(e.target).attr("href", this.GoodNo);
                window.location.href = this.BaseUrl + $(e.target).attr("goodNo");
            }
        }
    };

    return goodComponent;
});