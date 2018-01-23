//我的代练订单
define(jsconfig.baseArr, function (Vue,$,common) {
       var html=`
        <div class="col-md-9 wd-lg">
            <div class ="panel panel-default">
				<div class ="panel-heading">
					<h5 class ="right-buy-title">收货角色管理 <span style="margin-left: 5px;font-style:italic;font:8px;">切换 </span>
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
						<label for="" class ="col-md-1 control-label">游戏</label>
						<div class ="col-md-4">
							<select  v-model="GameSelected" class ="form-control" @change="GetTypes(GameSelected)">
                                <option v-for="item in Games" :value="item.GameId">{{item.GameName}}</option>
                            </select>
						</div>
						<label for="" class ="col-md-2 control-label">商品类型</label>
						<div class ="col-md-4">
							<select v-model="TypeSelected" class ="form-control" @change="GetServers(0)">
                                <option v-for="item in Types" :value="item.TypeId" selected="selected">{{item.Name}}</option>
                            </select>
						</div>
					</div>
                <!--搜索框组件的位置 end-->
                        
                <!--收货角色模块-->
                    <div class="jsmc">
                        <p>收货商角色（最多可保存<strong style="color:#F00">5</strong>个收货角色）：</p>
                        <ul>
                            <li style="width:40px">序号</li>
                            <li class="dj">游戏</li>
                            <li class="dj">运营商/区/服</li>
                            <li class="wdshjs">收货角色</li>
                            <li class="dj" style="width:110px">等级</li>
                            <li class="cz">操作</li>
                        </ul>

                        <dl>
                            <dd style="width:40px">1</dd>
                            <dd class="dj">地下城与勇士</dd>
                            <dd class="dj">上海区 / 上海2区</dd>
                            <dd class="wdshjs" title="启明星的碎片">
                                启明星的碎片
                            </dd>
                            <dd class="dj" style="width:110px">90</dd>
                            <dd class="cz" prid="1904240" rolename="启明星的碎片" dj="90">
                                <a type="update" style="cursor:pointer;">修改</a> | <a type="delete" style="cursor:pointer;">删除</a>
                            </dd>
                        </dl>
                    </div>
                <!--收货角色模块-->
                    <div id="paginator-test" class ="pagination"></div>
            </form>
        </div>
        </div>
    </div>`;

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
        name: "MyGetRoles",
        template: html,
        data: function () {
            return data;
        },
        created: function () {

        },
        methods: {
        }
    };
    return components;
});