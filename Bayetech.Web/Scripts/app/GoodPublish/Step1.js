//step1
define(['jquery', 'common', 'API'], function ($, common, API) {
    var html=`<div>
            <div class="release_search W980" style="margin-top:20px;">
                <div class="gametitle">
                    <a name="gametitle" class ="on" value="0">网络游戏</a>
                    <a name="gametitle" value="1">手机游戏</a>
                </div>
                <div class="right">
                    <input type="text" id="txt_gamename_search" class ="release_search_input" placeholder="请输入您要搜索游戏名" @keyup="SearchByName('Game')" v-model="SearchGameName">
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
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称"  v-model="SearchGameName" @keyup="SearchByName('Game')"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="gamelist">
                            <a class ="" @click="ClickLoad('Game',item.Id,item.Name)" v-for="item in GameList">
                                <span class="left" name="game">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="gtid" style="">
                        <dt class="orange">请选择商品类型</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchGoodTypeName" @keyup="SearchByName('GoodType')"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="goodtypelist">
                            <a gtid="item.Id" @click="ClickLoad('GoodType',item.Id,item.Name)" class ="" v-for="item in GoodTypeList">
                                <span class="left">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="group" style="">
                        <dt class="orange">请选择所在的游戏区</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchGroupName" @keyup="SearchByName('Group')"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="grouplist">
                            <a groupid="item.Id" @click="ClickLoad('Group',item.Id,item.Name)" class ="" v-for="item in GroupList">
                                <span class="left reduce">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                    <dl type="server" style="">
                        <dt class="orange">请选择所在服务器</dt>
                        <dt><input type="text" search="search" class ="rele_input" placeholder="输入名称" v-model="SearchServerName" @keyup="SearchByName('Server')"><label style="display: none;">正在努力查询中...</label></dt>
                        <dd id="serverlist">
                            <a serverid="item.Id" class ="reduce" @click="ClickLoad('Server',item.Id,item.Name)" v-for="item in ServerList">
                                <span class="reduce">{{item.Name}}</span>
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="go_ahead W980">
                <p class="orange">
                    您当前选择的是：{{GameInfo.ServerName}}
                    <span>{{GameInfo.GameName}}</span><span> &gt; </span>
                    <span>{{GameInfo.GoodTypeName}}</span><span> &gt; </span>
                    <span>{{GameInfo.GroupName}}</span><span>&gt; </span>
                    <span>{{GameInfo.ServerName}}</span>
                </p>
                <div class ="publish-btn">
                   <a href="javascript:void(0)" class ="com-btn-01 color01 btn-pub" @click="Next('step2')">好了，继续发布</a>
                </div>
            </div>
        </div>`;
	    var data={
	        GameList: [],
	        GoodTypeList: [],
	        GroupList: [],
	        ServerList: [],
	        SearchGameName: "",
	        SearchGroupName: "",
	        SearchServerName: "",
	        SearchGoodTypeName: "",
            GoodTypeName:"",
            GameInfo: {//游戏信息
                GameTypeId: 0,
                GameId: 0,
                GameName: "",
                GroupId: 0,
                GroupName: "",
                ServerId: 0,
                ServerName: "",
                GoodTypeId: 0,
                GoodTypeName: "",
            },
	    }

	    var components={
	        name: "step1",
	        template: html,
	        data() {
	            return data;
	        },
	        created() {
	            var self=this;
	            self.GetList('Game', 0);//加载游戏列表
                //添加选中样式
	            common.AddSelectedClass("#gamelist a", "cur");
	            common.AddSelectedClass("#goodtypelist a", "cur");
	            common.AddSelectedClass("#grouplist a", "cur");
	            common.AddSelectedClass("#serverlist a", "cur");
	            common.AddSelectedClass("[name=gametitle]", "on", function (e) {
	                self.ChangeGameType($(e).attr('value'));
	            });
	        },
	        methods: {
	            //点击下一步
	            Next: function (to) {
                    this.$parent.GameInfo=this.GameInfo;
	                this.$parent.Next(to);
	            },
                //更改游戏类型
	            ChangeGameType:function(type){
	                this.GameInfo.GameTypeId=type;
	                this.GetList('Game', type);
	            },
	            //选择框点击事件
	            ClickLoad: function (type, id, name) {
	                this.GameInfo[`${type}Id`]=id;
	                this.GameInfo[`${type}Name`]=name;
	                switch (type) {
	                    case "Game":
	                        this.GetList('GoodType', id);
	                        this.GetList('Group', id);
	                        this.ServerList=[];
	                        this.GameInfo.GroupId=0;
	                        this.GameInfo.GroupName="";
	                        this.GameInfo.ServerId=0
	                        this.GameInfo.ServerName="";
                            this.GameInfo.GoodTypeId=0;
                            this.GameInfo.GoodTypeName="";
	                        break;
	                    case "Group":
	                        this.GetList('Server', id);
                            this.GameInfo.ServerId=0
	                        this.GameInfo.ServerName="";
	                        break;
	                }
	            },
	            //根据名字检索
	            SearchByName: function (type) {
	                this.GetList(type, this.GameInfo[`${API.Game.GetParentType(type)}Id`], this[`Search${type}Name`]);
	            },
	            //获取数据
	            GetList: function (type, id, name) {
	                var self=this;
	                name=name||"";
	                API.Game[`Get${type}List`](id, name, function (result) {
	                    self[`${type}List`]=result.content;
	                });
	            },
	        },
	    };
	    return components;
	});