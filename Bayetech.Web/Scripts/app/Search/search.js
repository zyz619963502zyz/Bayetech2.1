//搜索框
define(["common", "search-dropdown"], function (common, dropdown) {
    var html=`
         <div class ="game_select game_select_main clearfix" id="gameSelectV2">
        <form id="gsForm" method="get" class ="clearfix">
            <div class ="game_select_box" id="gameSelectBox">
                <ul class ="tab_menu">
                    <li class ="current"><a href="#multipleSearch" @click="showAccuratetBox">普通搜索</a></li>
                    <li><a href="#simpleSearch" @click="showSimpleBox">简单搜索</a></li>
                </ul>
                <div class ="tab_box clearfix" id="multipleSearch" v-show="!isSimple">

                    <ul class ="gs_menu" id="gsMenu">
                        <li id="gs_game" class ="gs_name arrow" :title="'选择'+gameName" @click="showDropdown(0)">{{gameName}}</li>
                        <li id="gs_area" class ="gs_area arrow" :title="'选择'+groupName" @click="showDropdown(2)">{{groupName}}</li>
                        <li id="gs_server" class ="gs_server arrow" :title="'选择'+serverName" @click="showDropdown(3)">{{serverName}}</li>
                        <li id="gs_type" class ="gs_type arrow" :title="'选择'+typeName" @click="showDropdown(4)">{{typeName}}</li>
                        <li class ="gs_search_item">
                            <input class ="gs_search_box holderfont" id="gsSearchBox" type="text" placeholder="请输入任意关键字" autocomplete="off"  @click="search">
                        </li>
                    </ul>
                    <div class ="btn_box">
                        <input class ="gs_search_btn" id="gsSearchBtn" type="submit" value="搜索">
                    </div>
                </div>
                <div class ="tab_box clearfix tab_box_reset hide" id="simpleSearch" v-show="isSimple">

                    <div class ="simple_search_box">
                        <input type="text" class ="simple_search_input holderfont" id="simpleSearchInput" placeholder="关键字找游戏、搜区服、寻商品" autocomplete="off" @click="search">
                    </div>
                </div>
            </div>
        </form>
         <search-dropdown :data="dropdownData" v-show="isShow"></search-dropdown>
    </div>
       `

    var dropdownComponents = dropdown;
    var components = {
        name: "v-search",
        data:function() {
            return {
                keyword: "",
                isSimple: false,
                isShow: false,
                dropdownData: {},
                typeObj: {
                    0: "game",
                    1: "game",
                    2: "group",
                    3: "server",
                    4: "type",
                },
                gameId: 0,
                gameName:"游戏名称",
                groupId: 0,
                groupName:"游戏区",
                serverId: 0,
                serverName:"服务器",
                typeId: 0,
                typeName: "物品类型",
                simpleClass: "gray",
                accurateClass: "hover",
            };
        },
        template: html,
        mounted: function () {
            //$(document).click(function (e) {
            //    if (!$("#dropdown").is(":hidden"))
            //        $("#dropdown").hide();
            //});

            //$(".search-box").on("click", function (event) {
            //    event.stopPropagation();
            //});
        },
        methods: {
            //显示精确搜索框
            showAccuratetBox: function () {
                this.isSimple = false;
                this.accurateClass = "hover";
                this.simpleClass = "gray";
            },
            //显示简单搜索框
            showSimpleBox: function () {
                this.isSimple = true;
                this.isShow = false;
                this.accurateClass = "gray";
                this.simpleClass = "hover";
            },
            //显示下拉框
            showDropdown: function (type) {
                this.isShow = true;
                pid = this[`${this.getParentTypeName(type)}Id`] || 0;
                if (type == 4) {
                    pid = this.gameId;
                }
                this.setData(type, pid, this);
            },
            //隐藏下拉框
            hideDropdown: function () {
                this.isShow = false;
            },
            //下拉框内点击加载数据
            loadDropdown: function (type, pid, pname) {
                pid = pid || 0;
                var typeName = this.getParentTypeName(type);
                if (type) {
                    this[`${typeName}Id`] = pid;
                }
                if (pname) {
                    this[`${typeName}Name`] = pname;
                }
                switch (type) {
                    case 2:
                        this.groupId = 0;
                        this.groupName = "游戏区";
                        this.serverId = 0;
                        this.serverName = "服务器";
                        this.typeId = 0;
                        this.typeName = "物品类型";
                        break;
                    case 3:
                        this.serverId = 0;
                        this.serverName = "服务器";
                        break;
                    case 4:
                        pid = this.gameId;
                        break;
                    case 5:
                        this.hideDropdown();
                        return;
                }
                this.setData(type, pid, this);
            },
            //搜索
            search: function () {
                var url = `${common.GetBaseUrl()}GoodList/GoodList.html?page=1&GameId=${this.gameId}&GameGroupId=${this.groupId}&GameServerId=${this.serverId}&GoodType=${this.typeId}&GoodKeyWord=${this.keyword.trim()}`;
                window.open(url); 
                //var param =  {
                //    GameId: this.gameId, GameGroupId: this.groupId, GameServerId: this.serverId,
                //    GoodType: this.typeId, GoodKeyWord: this.keyword.trim(),
                //};
                //common.postWebJson("/api/GoodInfo/GetList", JSON.stringify(param), function (data) { });
            },           
            getParentTypeName: function (type) {
                var parentTypeObj = {
                    0: "",
                    1: "",
                    2: "game",
                    3: "group",
                    4: "server",
                    5: "type",
                };
                return parentTypeObj[type];
            },
            //设置下拉框数据
            setData: function (type,pid,self) {
                common.getWebJson("/api/Search/GetData", { type: type, id: pid }, function (data) {
                    self.dropdownData = data;
                });
            },
        },
        components: {
            "search-dropdown": dropdownComponents
        },
    };
    return components;
});