//step1
define(['jquery', 'common'], function ($, common) {
    var html=`<div>
            <div class="release_search W980" style="margin-top:20px;">
                <div class="gametitle">
                    <a id="gametitle_hlk_network" class="on" @click="GetGameList(0)">网络游戏</a>
                    <a id="gametitle_hlk_ios" @click="GetGameList(1)">手机游戏</a>
                </div>
                <div class="right">
                    <input type="text" id="txt_gamename_search" class ="release_search_input" placeholder="请输入您要搜索游戏名" @keyup="SearchByName(TypeModel.Game)" v-model="SearchGameName">
                    <a onclick="return game_search_quickly();" class="btn btn-dBlue1 pushl">快速查询</a>
                </div>
                <div id="light" class="white_content_2">
                    <div class="kscx">
                        <ul>
                            <ol><b class="left">快速查询</b><span class="right" style="cursor: pointer;"><img id="img_close_goods_release" onclick="$('#light').hide();$('#fade').hide();$('#dl_game_item').empty();" src="http://pic.ofcard.com/7881/market/images/blue_close.png"></span></ol>
                            <dl id="dl_game_item" style="height: 200px;overflow: auto;"></dl>
                        </ul>
                    </div>
                </div>
                <div id="fade" class="black_overlay_2"></div>
            </div>
            <div class="release" style="overflow-x:scroll;">
                <div class="relcon">
                    <dl type="game">
                        <dt class="orange">请选择游戏</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称"  v-model="SearchGameName" @keyup="SearchByName(TypeModel.Game)"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="gamelist">
                            <a class ="" @click="ClickLoad(TypeModel.Game,item.Id,item.Name)" v-for="item in GameList">
                                <span class="left">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="gtid" style="">
                        <dt class="orange">请选择商品类型</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchGoodTypeName" @keyup="SearchByName(TypeModel.Type)"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="gtidlist">
                            <a gtid="item.Id" @click="ClickLoad(TypeModel.Type,item.Id,item.Name)" class ="" v-for="item in TypeList">
                                <span class="left">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="group" style="">
                        <dt class="orange">请选择所在的游戏区</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchGameGroupName" @keyup="SearchByName(TypeModel.Group)"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="grouplist">
                            <a groupid="item.Id" @click="ClickLoad(TypeModel.Group,item.Id,item.Name)" class ="" v-for="item in GroupList">
                                <span class="left reduce">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="server" style="">
                        <dt class="orange">请选择所在服务器</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchGameServerName" @keyup="SearchByName(TypeModel.Server)"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="serverlist">
                            <a serverid="item.Id" class ="reduce" @click="ClickLoad(TypeModel.Server,item.Id,item.Name)" v-for="item in ServerList">
                                <span class="reduce">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="go_ahead W980">
                <p class="orange">
                    您当前选择的是：
                    <span id="span_game" gameid="G10">{{GameName}}</span>
                    <span class="span_gt"></span>
                    <span id="span_carrier" carrierid="" goodstype=""></span>
                    <span class="span_gt"> &gt; </span>
                    <span id="span_gtid" gtid="100001">{{GoodTypeName}}</span>
                    <span class="span_gt"> &gt; </span>
                    <span id="span_group" groupid="G10P001">{{GameGroupName}}</span>
                    <span class ="span_gt">&gt; </span>
                    <span id="span_server" serverid="">{{GameServerName}}</span>
                    <span class="span_gt"></span>
                    <span id="span_camp"></span>
                </p>
                <form id="releaseForm" action="http://search.7881.com/publish.html" method="get">
                    <input type="hidden" id="gtid" name="gtId">
                    <input type="hidden" id="gameid" name="gameId">
                    <input type="hidden" id="gamename" name="gameName">
                    <input type="hidden" id="carrierid" name="carrierId">
                    <input type="hidden" id="carriername" name="carrierName">
                    <input type="hidden" id="groupid" name="groupId">
                    <input type="hidden" id="groupname" name="groupName">
                    <input type="hidden" id="serverid" name="serverId">
                    <input type="hidden" id="servername" name="serverName">
                    <input type="hidden" id="goodsTypeName" name="goodsTypeName">
                    <input type="hidden" id="camp" name="camp">
                </form>
                <div class ="publish-btn"><a href="javascript:void(0)" class ="com-btn-01 color01 btn-pub">好了，继续发布</a></div>
            </div>
        </div>`;
	    var data={
	        GameType: 0,
	        GameList: [],
	        TypeList: [],
	        GroupList: [],
	        ServerList: [],
	        GameId: 0,
	        GameName: "",
	        GameGroupId: 0,
	        GameGroupName: "",
	        GameServerId: 0,
	        GameServerName: "",
	        GoodTypeId: 0,
	        GoodTypeName: "",
	        SearchGameName: "",
	        SearchGameGroupName: "",
	        SearchGameServerName: "",
	        SearchGoodTypeName: "",
	        TypeModel: {
	            Game: 0,
	            Group: 1,
	            Server: 2,
	            Type: 4,
	        },
	    }

	    var components={
	        name: "step1",
	        template: html,
	        data() {
	            return data
	        },
	        created() {
	            this.GetGameList(0);
	        },
	        methods: {
	            ClickLoad:function(type,id,name){
	                switch (type) {
	                    case this.TypeModel.Game:
	                        this. GetTypeList(id);
	                        this.GetGroupList(id);
	                        this.ServerList
	                        this.GameId=id;
	                        this.GameName=name;
	                        break;
	                    case this.TypeModel.Group:
	                        this.GetServerList(id);
	                        this.GameGroupId=id;
	                        this.GameGroupName=name;
	                        break;
	                    case this.TypeModel.Server:
	                        this.GameServerId=id
	                        this.GameServerName=name;
	                        break;
	                    case this.TypeModel.Type:
	                        this.GoodTypeId=id;
	                        this.GoodTypeName=name;
	                        break;
	                }
	            },
	            SearchByName: function (type) {
	                switch (type) {
	                    case this.TypeModel.Game:
	                        this.GetGameByName(this.SearchGameName);
	                        break;
	                    case this.TypeModel.Group:
	                        this.GetGroupList(this.GameId, this.SearchGameGroupName);
	                        break;
	                    case this.TypeModel.Server:
	                        this.GetServerList(this.GameGroupId, this.SearchGameServerName);
	                        break;
	                    case this.TypeModel.Type:
	                        this.GetTypeList(this.GameId, this.SearchGoodTypeName);
	                        break;
	                }
	            },
	            GetGameList: function (gameType) {
	                var self=this;
	                $.get("/api/Game/GetGameList", { type: gameType }, function (data) {
	                    self.GameList=data.content;
	                });
	            },
	            GetGameByName: function (name) {
	                name=name.trim();
	                if (name) {
	                    var self=this;
	                    $.get("/api/Game/GetGameByName", { type: this.GameType, name: name }, function (data) {
	                        self.GameList=data.content;
	                    });
	                } else {
	                    this.GetGameList(this.GameType);
	                }
	            },
	            GetTypeList: function (gameId,name) {
	                var self=this;
	                name=name||"";
	                $.get("/api/GoodType/GetGoodType", { gameId: gameId, name, name }, function (data) {
	                    self.TypeList=data.content;
	                });
	            },

	            GetGroupList: function (gameId,name) {
	                var self=this;
	                name=name||"";
	                $.get("/api/GameServer/GetGroup", { gameId: gameId, name: name }, function (data) {
	                    self.GroupList=data.content;
	                });
	            },

	            GetServerList: function (groupId, name) {
	                var self=this;
	                name=name||"";
	                $.get("/api/GameServer/GetServer", { parenId: groupId, name: name }, function (data) {
	                    self.ServerList=data.content;
	                });
	            },
	        },
	    };
	    return components;
	});