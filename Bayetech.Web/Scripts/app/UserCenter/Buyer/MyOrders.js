//我购买的订单
jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common,paginator) {
    var html=`
        <div class="personal_right">
            <div class="ddgl">
                <h1>我购买的订单 <span style="margin-left: 5px;font-weight: normal;font-style:italic;font:8px;">切换 </span>
                    <a href="javascript:void(0);" id="queryType" style="color:#3D86EA;font:12px;" onclick="changeQueryType()">历史查询</a>
                    <a id="queryHelp" style="font-weight: lighter;color:black;">
                        <img src="" style="height: 15px; width: 15px;; " alt="" />
                    </a>
                </h1>
                <form id="queryForm" method="post">

                <!--搜索框组件的位置-->
                    <div class="yxddcx">
                        <ul>
                            <li>
                                &nbsp;&nbsp;游戏：
                                <select  v-model="GameSelected" class ="js-states js-example-events form-control" @change="GetTypes(GameSelected)">
                                    <option v-for="item in Games" :value="item.GameId">{{item.GameName}}</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                商品类型：
                                <select v-model="TypeSelected" class ="sec-border" @change="GetServers(0)">
                                    <option v-for="item in Types" :value="item.TypeId" selected="selected">{{item.TypeName}}</option>
                                </select>
                            </li>
                            <li>
                                &nbsp;&nbsp; 游戏区：
                                <select v-model="GroupSelected" class ="sec-border" @change="GetServers(GroupSelected)">
                                    <option v-for="item in Groups" :value="item.Id">{{item.Name}}</option>
                                </select> &nbsp; &nbsp; &nbsp;
                                &nbsp; 游戏服：
                                <select v-model="ServerSelected" class ="sec-border">
                                    <option  v-for="item in Servers" :value="item.Id">{{item.Name}}</option>
                                </select>
                            </li>
                            <li>
                                订单时间：
                                <input readonly="readonly" value="2017-11-13" class="Wdate time" style=" width:140px;"/>
                                &nbsp;&nbsp;到&nbsp;&nbsp;
                                <input readonly="readonly" value="2017-12-13" class="Wdate time" style=" width:140px;"/>
                                <span style="margin-left:10px"></span>
                                <span class="search_time_span" id="today"><a href="javascript:void(0);">今天</a></span>
                                <span class="search_time_span" id="oneMonth"><a href="javascript:void(0);">最近1个月</a></span>
                                <span class="search_time_span" id="threeMonth"><a href="javascript:void(0);">3个月</a></span>
                                <span class="search_time_span" id="sixMonth"><a href="javascript:void(0);">6个月</a></span>
                                <span style="display:none;">自定义</span>
                            </li>
                            <li>
                                订单编号：
                                <input  :value="OrderNum" />
                                <input type="button" class="cxFormtime" @click="GetOrderInfo" value="查询" />
                                <p class="tjcg"><span class="jetj">统计金额</span>累计成功 <span>2</span> 笔订单，共 <span>250.00</span> 元</p>
                            </li>
                        </ul>
                    </div>
                <!--搜索框组件的位置-->

                    <div class="yxddlb">
                        <div class ="myxssl">
                            <span>每页显示数量：</span>
                            <a type="pageSize" size="10">10</a>
                            <a type="pageSize" size="20">20</a>
                            <a type="pageSize" size="30">30</a>
                        </div>
                        <div id="nave">
                            <ol querystatus=""><a class="a_hover">全部</a></ol>
                            <ol querystatus="6,60"><a class="">成功订单</a></ol>
                            <ol querystatus="4,40"><a class="">撤销订单</a></ol>
                            <ol querystatus="1"><a class="">等待付款</a></ol>
                            <ol querystatus="5"><a class="">等待取货</a></ol>
                        </div>
                        <div class="ddxq">
                            <ul>
                                <li class="spmc">商品名称</li>
                                <li class="zj">总价</li>
                                <li class="sl">数量</li>
                                <li class="khfw">客户服务</li>
                                <li class="ddzt">订单状态</li>
                            </ul>
                        </div>
                        <div id="menud_con">

                            <div class="ddlb" v-for="item in Orders">
                                <h1>
                                    订单编号：{{item.OrderNo}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{item.OrderCreatTime}}
                                    <span style="float: right;color:red;margin:0 7px 0 0; *margin:-30px 7px 0 0;">
                                        <a href="../goods-buying-G10-100001-1.html">
                                            <span class ="span1" style="color:#FF6600;size: 12px;font-family:'宋体';margin-right:10px;">
                                            </span>
                                        </a>
                                    </span>
                                </h1>
                                <ul class="clearfix" goodsid="1" ver="72411" gtid="100001" gameid="G10" :orderid="item.OrderNo" sellertype="B" billstatus="4">
                                    <ol class="spmc">
                                        <span style="color:#36c">
                                            <img src="http://pic.7881.com/7881/market/images/buy/buy_dan.png" />
                                            {{item.GoodTitle}}
                                        </span>
                                        <br />
                                        游戏区服：{{item.GameName}}/{{item.GroupName}}/{{item.ServerName}}
                                    </ol>
                                    <ol class="zj"><span style="color:#F90">{{item.OrderPrice}}</span>元</ol>
                                    <ol class="sl">1
                                        <br />
                                        <span class="button1" style="display: none"><a href='../goods-buying-G10-100001-1.html'>再来一单</a></span>
                                    </ol>
                                    <ol class="khfw">
                                        <a href="javascript:void(0)" class="list-kf" kfid="" gameId="G10" gtId="100001"
                                           tradeType="db" salerId="112348969" substatus="1"
                                           subbillId="117121015129162378667633">
                                            <img src="http://pic.7881.com/7881/market/images/list-kf-icon.png" alt="" />
                                        </a>
                                    </ol>
                                    <ol class="ddzt">取消
                                        <div class ="tsgrzx">
                                            <img src="http://pic.7881.com/7881/market/images/Personal/qxyy.png" />
                                        </div>
                                        <a class="ls" href="/payment/endPayout.action?orderid=127121015129162378197536&source=list" target="_blank">订单详情</a>
                                    </ol>
                                    <ol id="prompt_127121015129162378197536" marginpt="-1" type="revoke" class="prompt" superbillid="127121015129162378197536">
                                        <div style="width:205px; height:65px; margin:0 auto; margin-top:12px;"></div>
                                    </ol>
                                </ul>
                            </div>
                        </div>

                        <div id="paginator-test" class ="pagination">
                        </div>

                    </div>
                </form>
            </div>
        </div>

        `;
    var _GetOrderInfoUrl="/api/Order/GetOrderInfo";
    var _GetServersUrl="/api/Order/GetServers";
    var _GetMallTypeUrl="/api/Order/GetMallType";//交易类别
    var _GetOrdersUrl = "/api/Order/GetOrders"
    var data={
        times:0,
        Games: [{ GameId: "", GameName: "" }],
        GameSelected:"",
        Orders: [],//订单信息表 
        Types: [],//交易类别
        TypeSelected:"",
        Groups: [],
        GroupSelected: "",
        Servers: [],
        ServerSelected: "",
        OrderNum:""//订单编号
    };
    var components={
        name: "MyOrders",
        template: html,
        data() {
            return data;
        },
        created(){
            this.GetOrderInfo();
        },
        mounted(){
            var container=$('#paginator-test');
            options = {
                    containerClass:"pagination"
                    , currentPage:1
                    , numberOfPages: 3
                    , totalPages: 11
                    , pageUrl:function(type,page){
                        return null;
                    }
                    , onPageClicked: function (e,originalEvent,type,page) {
                         var  typeAct = type
                         var  pageAct = page
                         var originalEventAct=originalEvent; 

                    }
                    , onPageChanged: function (e) {
                        var b =1;
                    }
                };
            container.bootstrapPaginator(options);
        },
        methods: {
            GetTypes(gameId){
                var self=this;
                var param={gameId:gameId};
                common.getWebJson(_GetMallTypeUrl, param, function (data) {
                    if (data.result) {
                       self.Types = data.content;
                    }
                });
            },
            GetServers(gourp){
                var self=this;
                var gameId = self.GameSelected;
                var param={gameId:gameId,parentId:gourp};
                common.getWebJson(_GetServersUrl, param, function (data) {
                    if (data.result) {
                       gourp == 0? self.Groups = data.content : self.Servers =data.content;
                    }
                });
            },
            GetOrderInfo() {//获取订单信息
                var self= this;
                var param={
                    GameId: self.GameSelected,
                    GoodTypeId: self.TypeSelected,//先默认账号
                    GameGroupId: self.GroupSelected,
                    GameServerId: self.ServerSelected,
                    OrderNum: self.OrderNum,
                    //Time: "",//等待日历控件
                    PageObj: {
                        rows: 10,//每页行数
                        page: 1,//当前页
                        order: "GameId",//排序字段
                        records: 1000,//总记录数
                        total:10000 //总页数
                    }
                };
                common.postWebJson(_GetOrderInfoUrl, JSON.stringify(param), function (data) {
                    if (data.result) {
                        self.Orders = data.content;
                        self.times == 0?self.Games=data.Games:"";
                        self.times++;
                    }
                });
            },
        }
    };
    return components;
});