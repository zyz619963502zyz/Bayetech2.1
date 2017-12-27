//我购买的订单
jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common,paginator) {
    var html=`
        <div class="col-md-9 col-lg-10">
            <div class ="panel panel-default">
				<div class ="panel-heading">
					<h5 class ="right-buy-title">我购买的订单 <span style="margin-left: 5px;font-style:italic;font:8px;">切换 </span>
						<a href="javascript:void(0);" id="queryType" style="color:#3D86EA;font:12px;" onclick="changeQueryType()">历史查询</a>
						<a id="queryHelp" style="font-weight: lighter;color:black;">
							<span class ="fa fa-question-circle" title="为了方便您的查询，在您切换到历史查询状态时，您可以查询您的所有历史订单明细。"></span>
						</a>
					</h5>
				</div>
				<div class ="panel-body">
					<form id="queryForm" method="post" class="form-horizontal" role="form">

                <!--搜索框组件的位置 start-->
						<div class ="form-group form-group-sm">
							<label for="game" class ="col-md-2 control-label">游戏</label>
							<div class ="col-md-4">
								<select  v-model="GameSelected" id="game" class ="form-control" @change="GetTypes(GameSelected)">
                                    <option v-for="item in Games" :value="item.GameId">{{item.GameName}}</option>
                                </select>
							</div>
							<label for="goodsType" class ="col-md-2 control-label">商品类型</label>
							<div class ="col-md-4">
								<select v-model="TypeSelected" id="goodsType" class ="form-control" @change="GetServers(0)">
                                    <option v-for="item in Types" :value="item.TypeId" selected="selected">{{item.TypeName}}</option>
                                </select>
							</div>
						</div>
						<div class ="form-group form-group-sm">
							<label for="gameArea" class ="col-md-2 control-label">游戏区</label>
							<div class ="col-md-4">
								<select v-model="GroupSelected" id="gameArea" class ="form-control" @change="GetServers(GroupSelected)">
                                    <option v-for="item in Groups" :value="item.Id">{{item.Name}}</option>
                                </select>
                            </div>
							<label for="gameServer" class ="col-md-2 control-label">游戏服</label>
							<div class ="col-md-4">
								<select v-model="ServerSelected" id="gameServer" class ="form-control">
                                    <option  v-for="item in Servers" :value="item.Id">{{item.Name}}</option>
                                </select>
							</div>
						</div>
						<div class ="form-group form-group-sm">
							<label class ="col-md-2 control-label">订单时间</label>
							<div class ="col-md-6">
								<div class ="input-daterange input-group" id="">
									<input type="text" class ="input-sm form-control" name="start" value="">
									<span class ="input-group-addon">to</span>
									<input type="text" class ="input-sm form-control" name="end" value="">
								</div>
							</div>
							<div class ="col-md-4">
								<div class ="btn-group btn-group-justified">
									<div class ="btn-group btn-group-sm"><button type="button" class ="btn btn-default">今天</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" class ="btn btn-primary">近1个月</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" class ="btn btn-default">3个月</button></div>
									<div class ="btn-group btn-group-sm"><button type="button" class ="btn btn-default">6个月</button></div>
								</div>
							</div>
						</div>
						<div class ="form-group form-group-sm">
							<label class ="col-md-2 control-label">订单编号</label>
							<div class ="col-md-4">
								<div class ="input-group">
									<input type="text" value="" class ="form-control"/>
									<span class ="input-group-btn">
										<button type="button" @click="GetOrderInfo" class ="btn btn-warning btn-sm">查询</button>
									</span>
								</div>
							</div>
						</div>

                <!--搜索框组件的位置 end-->

                    <div class ="yxddlb">
                        <div class ="myxssl">
                            <span>每页显示数量：</span>
                            <a type="pageSize" size="10">10</a>
                            <a type="pageSize" size="20">20</a>
                            <a type="pageSize" size="30">30</a>
                        </div>
                        <div id="nave">
                            <ol querystatus=""><a class ="a_hover">全部</a></ol>
                            <ol querystatus="6,60"><a class ="">成功订单</a></ol>
                            <ol querystatus="4,40"><a class ="">撤销订单</a></ol>
                            <ol querystatus="1"><a class ="">等待付款</a></ol>
                            <ol querystatus="5"><a class ="">等待取货</a></ol>
                        </div>
                        <div class ="ddxq">
                            <ul>
                                <li class ="spmc">商品名称</li>
                                <li class ="zj">总价</li>
                                <li class ="sl">数量</li>
                                <li class ="khfw">客户服务</li>
                                <li class ="ddzt">订单状态</li>
                            </ul>
                        </div>
                        <div id="menud_con">
                            <div class ="ddlb" v-for="item in Orders">
                                <h1>
                                    订单编号：{{item.OrderNo}}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 创建时间：{{item.OrderCreatTime}}
                                    <span style="float: right;color:red;margin:0 7px 0 0; *margin:-30px 7px 0 0;">
                                        <a href="../goods-buying-G10-100001-1.html">
                                            <span class ="span1" style="color:#FF6600;size: 12px;font-family:'宋体';margin-right:10px;">
                                            </span>
                                        </a>
                                    </span>
                                </h1>
                                <ul class ="clearfix" goodsid="1" ver="72411" gtid="100001" gameid="G10" :orderid="item.OrderNo" sellertype="B" billstatus="4">
                                    <ol class ="spmc">
                                        <span style="color:#36c">
                                            <img src="http://pic.7881.com/7881/market/images/buy/buy_dan.png" />{{item.GoodTitle}}
                                        </span>
                                        <br />
                                        游戏区服：{{item.GameName}}/{{item.GroupName}}/{{item.ServerName}}
                                    </ol>
                                    <ol class ="zj"><span style="color:#F90">{{item.OrderPrice}}</span>元</ol>
                                    <ol class ="sl">1
                                        <br />
                                        <span class ="button1" style="display: none"><a href='../goods-buying-G10-100001-1.html'>再来一单</a></span>
                                    </ol>
                                    <ol class ="khfw">
                                        <a href="javascript:void(0)" class ="list-kf" kfid="" gameId="G10" gtId="100001"
                                           tradeType="db" salerId="112348969" substatus="1"
                                           subbillId="117121015129162378667633">
                                            <img src="http://pic.7881.com/7881/market/images/list-kf-icon.png" alt="" />
                                        </a>
                                    </ol>
                                    <ol class ="ddzt">取消
                                        <div class ="tsgrzx">
                                            <img src="http://pic.7881.com/7881/market/images/Personal/qxyy.png" />
                                        </div>
                                        <a class ="ls" href="/payment/endPayout.action?orderid=127121015129162378197536&source=list" target="_blank">订单详情</a>
                                    </ol>
                                    <ol id="prompt_127121015129162378197536" marginpt="-1" type="revoke" class ="prompt" superbillid="127121015129162378197536">
                                        <div style="width:205px; height:65px; margin:0 auto; margin-top:12px;"></div>
                                    </ol>
                                </ul>
                            </div>
                        </div>
                        <nav aria-label="fenye" class="text-center">
							<ul id="paginator-test" class ="pagination"></ul>
						</nav>
                    </div>
                </form>
            </div>
            </div>
        </div>`;
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
        OrderNum: "",//订单编号,
        Pagination:{
             //后端分页字段
             rows: 10,//每页行数，
             page: 1,//当前页码
             order: "OrderNo",//排序字段
             sord: "asc",//排序类型
             records: 10,//总记录数
             total: 10//总页数。
        }
    };
   
    var components={
        name: "MyOrders",
        template: html,
        data() {
            return data;
        },
        created(){
            this.GetOrderInfo(self.Pagination);
        },
        mounted() {

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
                    PageObj: self.Pagination
                };
                common.postWebJson(_GetOrderInfoUrl, param, function (data) {
                    if (data.result) {
                        self.Orders = data.content.datas;
                        self.times==0?self.Games=data.Games:"";
                        self.Pagination=data.content.pagination;
                        self.SetPagination(self.Pagination);
                        self.times++;
                    }
                });
            },
            SetPagination(page) {
                 var self = this;
                 var container=$('#paginator-test');
                 options = {
				        size:'small',
            	        bootstrapMajorVersion:3,     	
                        currentPage:page==undefined?1:page.page,
                        numberOfPages: 5,//控件显示出来的页码可以写死,默认5
                        totalPages:page==undefined?1:page.total,//根据实际查询数据算出总页码
                        pageUrl:function(type,page){
                            return null;
                        },
                        onPageClicked: function (e, originalEvent, type, page) {
                            self.Pagination.page = page;//获取当前页
                            self.GetOrderInfo();//再次查询
                        },
                        //onPageChanged: function (e) {
                        //    var b =1;
                        //}
                   };
                 container.bootstrapPaginator(options);
            }
        }
    };
    return components;
});