//我购买的订单
define(jsconfig.baseArr, function () {

    var html=`<div class="personal_right">
            <div class="ddgl">
                <h1>我购买的订单 <span style="margin-left: 5px;font-weight: normal;font-style:italic;font:8px;">切换 </span><a href="javascript:void(0);" id="queryType" style="color:#3D86EA;font:12px;" onclick="changeQueryType()">历史查询</a> <a id="queryHelp" title="为了方便您的查询，在您切换到历史查询状态时，您可以查询您的所有历史订单明细。" style="font-weight: lighter;color:black;"><img src="../../market/images/common/helper.png" style="height: 15px;width: 15px;;" alt="" /></a></h1>
                <form id="queryForm" method="post">
                    <!-- 标识查询方式：1最近查询 2历史查询 -->
                    <input id="queryType" name="procureOrderBean.queryType" value="1" type="hidden" />
                    <div class="yxddcx">
                        <ul>
                            <li>
                                &nbsp;&nbsp;游 戏：
                                <select id="gameid" class="js-states js-example-events form-control">
                                    <option v-for="var item in GameNames" :value="item.GameId">{{item.GameName}}</option>
                                    <option value="G10">D - 地下城与勇士</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                商品类型：
                                <select name="procureOrderBean.gtid" id="newgid" class="sec-border">
                                    <option v-for="var item in Types" :value="item.Id" selected="selected">{{item.Name}}</option>
                                </select>
                            </li>
                            <li>
                                &nbsp; &nbsp; 游 戏 区：
                                <select id="groupid" class ="sec-border">
                                    <option v-for="var item in Groups" :value="item.Id">{{item.Name}}</option>
                                </select> &nbsp; &nbsp; &nbsp;
                                &nbsp; 游 戏 服：
                                <select id="serverid" v-for="var item in Servers" :value="item.Id" class ="sec-border">
                                    <option value="">{{item.Name}}</option>
                                </select>
                            </li>
                            <li>
                                订 单 时 间：
                                <input id="starttime" name="procureOrderBean.starttime" size="20" readonly="readonly" value="2017-11-13 00:00:00" class="Wdate time" style=" width:140px;" onclick="WdatePicker({startDate:'%y-%M-%d',dateFmt:'yyyy-MM-dd HH:mm:ss'})" />
                                &nbsp;&nbsp;到&nbsp;&nbsp;
                                <input id="endtime" name="procureOrderBean.endtime" size="20" readonly="readonly" value="2017-12-13 23:59:59" class="Wdate time" style=" width:140px;" onclick="WdatePicker({startDate:'%y-%M-%d',dateFmt:'yyyy-MM-dd HH:mm:ss'})" />
                                <span style="margin-left:10px"></span>
                                <span class="search_time_span" id="today" onclick="searchSelectTimeZone(this)"><a href="javascript:void(0);">今天</a></span>
                                <span class="search_time_span" id="oneMonth" onclick="searchSelectTimeZone(this)"><a href="javascript:void(0);">最近1个月</a></span>
                                <span class="search_time_span" id="threeMonth" onclick="searchSelectTimeZone(this)"><a href="javascript:void(0);">3个月</a></span>
                                <span class="search_time_span" id="sixMonth" onclick="searchSelectTimeZone(this)"><a href="javascript:void(0);">6个月</a></span>
                                <span style="display:none;">自定义</span>
                            </li>
                            <li>
                                订 单 编 号：
                                <input name="procureOrderBean.superbillid" size="28" value="" onkeyup="this.value=this.value.replace(/\s+/g, '');" />
                                <input type="button" class="cxFormtime" id="btnQuery" value="查询" />
                                <p class="tjcg"><span class="jetj">统计金额</span>累计成功 <span>2</span> 笔订单，共 <span>250.00</span> 元</p>
                            </li>
                        </ul>
                    </div>
                    <!-- 	<span style="color: red">&nbsp;&nbsp;&nbsp;&nbsp;温馨提示：亲，目前只能查询2015年的订单哦，后期将为您恢复，给您带来不便，敬请谅解。</span> -->
                    <div class="yxddlb">

                        <div class="myxssl"><span>每页显示数量：</span><a type="pageSize" size="10">10</a> <a type="pageSize" size="20">20</a> <a type="pageSize" size="30">30</a></div>
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

                            //一笔订单开始
                            <div class="ddlb" v-for="var item in Orders">
                                <h1>
                                    订单编号：{{item.OrderNo}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建时间：{{item.OrderCreatTime}}
                                    <span style="float: right;color:red;margin:0 7px 0 0; *margin:-30px 7px 0 0;">
                                        <a href="../goods-buying-G10-100001-1.html"><span class="span1" style="color:#FF6600;size: 12px;font-family:'宋体';margin-right:10px;"></span></a>
                                    </span>
                                </h1>
                                <ul class="clearfix" goodsid="1" ver="72411" gtid="100001" gameid="G10" :orderid="Orders.OrderNo" sellertype="B" billstatus="4">
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
                                        <span class="button1" style="display: none"><a href='../goods-buying-G10-100001-1.html' style='background:url(http://pic.7881.com/7881/market/images/huodong/20150805-qixi/zlyd.png) no-repeat;margin-top:26px;color:#ffffff;width:69px;height:21px;line-height:21px;display:inline-block;'>再来一单</a></span>
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
                                        <div :style="width:205px; height:65px; margin:0 auto; margin-top:12px;"></div>
                                    </ol>
                                </ul>
                            </div>
                            //一笔订单结束

                        </div>
                        <div class="cpfy">
                            <dl currentNo="0" pageCount="1" totalRecords="9">
                                <dd class="fy_l">上一页</dd>
                                <dd class="fy2" onclick="return locatePage(0);">1</dd>
                                <dd class="fy_r">下一页</dd>
                                <dd><span>共1页 到第 <input id="pageNumber" maxlength="4" /> 页 <img src="http://pic.7881.com/7881/market/images/pageLook.png" onclick="return gotoPage()" /></span></dd>
                            </dl>
                        </div>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
        </div>`;
    var _GetOrderInfoUrl="/api/Order/GetOrderInfo"
    var data={
        Orders:[],//订单信息表
        Types: [],//交易类别
        Groups: [],
        Servers:[],
    };
    var components={
        name: "MyOrders",
        template: html,
        data: function () {
            return data;
        },
        methods: {
            GetOrderInfo: function () {//根据条件获取订单的收发信息
                var param={};
                common.getWebJson(_GetOrderInfoUrl, param, function (data) {

                });
            }
        }
    };
    return components;
});