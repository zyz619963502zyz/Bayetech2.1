//模块之间的操作
define(['jquery', 'common'], function ($, common) {
    var html=`<div>
            <div class="release_search W980" style="margin-top:20px;">
                <div class="gametitle">
                    <a id="gametitle_hlk_network" class="on" @click="GetGameList(0)">网络游戏</a>
                    <a id="gametitle_hlk_ios" @click="GetGameList(1)">手机游戏</a>
                </div>
                <div class="right">
                    <input type="text" id="txt_gamename_search" class="release_search_input" value="请输入您要搜索游戏名" onfocus="if(this.value=='请输入您要搜索游戏名'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入您要搜索游戏名'){this.value='请输入您要搜索游戏名';this.style.color='black';}">
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
                        <dt><input type="text" search="search" class="rele_input" value="输入中文或拼音" onfocus="if(this.value=='输入中文或拼音'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='输入中文或拼音'){this.value='输入中文或拼音';this.style.color='gray';}"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="gamelist">
                            <a class ="" @click="GetTypeList(item.Id);GetGroupList(item.Id)" v-for="item in GameList">
                                <span class="left">{{item.Name}}</span> 
                            </a>
                        </dd>
                    </dl>
                    <dl type="gtid" style="">
                        <dt class="orange">请选择商品类型</dt>
                        <dt><input type="text" search="search" class="rele_input" value="输入中文或拼音" onfocus="if(this.value=='输入中文或拼音'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='输入中文或拼音'){this.value='输入中文或拼音';this.style.color='gray';}"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="gtidlist">
                            <a gtid="item.Id" @click="" class="" v-for="item in TypeList">
                                <span class="left">{{item.Name}}</span> 
                            </a>
                        </dd>
                    </dl>
                    <dl type="group" style="">
                        <dt class="orange">请选择所在的游戏区</dt>
                        <dt><input type="text" search="search" class="rele_input" value="输入中文或拼音" onfocus="if(this.value=='输入中文或拼音'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='输入中文或拼音'){this.value='输入中文或拼音';this.style.color='gray';}"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="grouplist">
                            <a groupid="item.Id" @click="GetServerList(item.Id)" class ="" v-for="item in GroupList">
                                <span class="left reduce">{{item.Name}}</span> 
                            </a>
                        </dd>
                    </dl>
                    <dl type="server" style="">
                        <dt class="orange">请选择所在服务器</dt>
                        <dt><input type="text" search="search" class="rele_input" value="输入中文或拼音" onfocus="if(this.value=='输入中文或拼音'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='输入中文或拼音'){this.value='输入中文或拼音';this.style.color='gray';}"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="serverlist">
                            <a serverid="item.Id" class="reduce" @click="" v-for="item in ServerList">
                                <span class="reduce">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="go_ahead W980">
                <p class="orange">
                    您当前选择的是：
                    <span id="span_game" gameid="G10">地下城与勇士</span>
                    <span class="span_gt"></span>
                    <span id="span_carrier" carrierid="" goodstype=""></span>
                    <span class="span_gt"> &gt; </span>
                    <span id="span_gtid" gtid="100001">游戏币</span>
                    <span class="span_gt"> &gt; </span>
                    <span id="span_group" groupid="G10P001">广东区</span>
                    <span class="span_gt"></span>
                    <span id="span_server" serverid=""></span>
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
                <p><a id="hlkNext" class="btn btn-orange3">好了，继续发布</a><a target="_blank" href="/toQuFuCollection.action?entrance=2" style="font-size: 14px;float: right;">找不到您要的游戏或区服？</a></p>
            </div>
        </div>`;
	    var data={
	        GameType: 0,
	        GameList: [],
	        TypeList: [],
	        GroupList: [],
	        ServerList: [],
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
	            GetGameList: function (type) {
	                var self=this;
	                $.get("/api/Game/GetGameList", { type: type }, function (data) {
	                    self.GameList=data;
	                });
	            },
	            GetTypeList: function (gameId) {
	                var self=this;
	                $.get("/api/GoodType/GetGoodTypeByGameId", { gameId: gameId }, function (data) {
	                    self.TypeList=data.content;
	                });
	            },

	            GetGroupList: function (gameId) {
	                var self=this;
	                $.get("/api/GameServer/GetGroupByGameId", { gameId: gameId }, function (data) {
	                    self.GroupList=data.content;
	                });
	            },

	            GetServerList: function (groupId) {
	                var self=this;
	                $.get("/api/GameServer/GetServerByParentId", { parenId: groupId }, function (data) {
	                    self.ServerList=data.content;
	                });
	            },
	        },
	    };
	    return components;
	});