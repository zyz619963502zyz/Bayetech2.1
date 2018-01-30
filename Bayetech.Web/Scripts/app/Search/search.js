//搜索框
define(["common", "search-dropdown"], function (common, dropdown) {
    var html=`
         <div class ="g-select clearfix" id="SelectBox">
        <form id="gsForm" method="get" class ="clearfix">
            <div class ="game_select_box" id="gameSelectBox">
                <ul class ="tab_menu">
                    <li :class ="{current:!IsSimple}"><a href="javascript:void(0);" @click="showAccuratetBox">精确搜索</a></li>
                    <li :class ="{current:IsSimple}"><a href="javascript:void(0);" @click="showSimpleBox">简单搜索</a></li>
                </ul>
                <div class ="tab_box clearfix" id="multipleSearch" v-show="!IsSimple">

                    <ul class ="gs_menu" id="gsMenu">
                        <li id="gs_game" :title="'选择'+Param.GameName" @click="showDropdown(0)">{{Param.GameName}}</li>
                        <li id="gs_area" :title="'选择'+Param.GameGroupName" @click="showDropdown(2)">{{Param.GameGroupName}}</li>
                        <li id="gs_server" :title="'选择'+Param.GameServerName" @click="showDropdown(3)">{{Param.GameServerName}}</li>

                        <li id="gs_type"  :title="'选择'+Param.GoodTypeName" @click="showDropdown(4)" v-if="!DL">{{Param.GoodTypeName}}</li>
                        <li id="gs_DlType" :title="'选择'+Param.DlTypeName" @click="showDropdown(5)" v-if="DL">{{Param.DlTypeName}}</li>

                        <li class ="gs_search_item">
                            <input class ="gs_search_box holderfont" id="gsSearchBox" type="text" placeholder="请输入任意关键字" autocomplete="off" v-model="Param.GoodKeyWord">
                        </li>
                    </ul>
                    <div class ="btn_box">
                        <input class ="gs_search_btn" type="submit" value="搜索" @click="search">
                    </div>
                </div>
                <div class ="tab_box clearfix tab_box_reset" id="simpleSearch" v-show="IsSimple">

                    <div class ="simple_search_box">
                        <input type="text" class ="simple_search_input holderfont" id="simpleSearchInput" placeholder="关键字找游戏、搜区服、寻商品" autocomplete="off" v-model="Param.GoodKeyWord">
                    </div>
					<div class ="btn_box">
                        <input class ="gs_search_btn" type="submit" value="搜索" @click="search">
                    </div>
                </div>
            </div>
        </form>
         <search-dropdown :data="DropdownData" v-show="IsShow"></search-dropdown>
    </div>
       `
    var dropdownComponents = dropdown;
    var components = {
        name: "v-search",
        template: html,
        data:function() {
            return {
                DL: window.location.href.indexOf("DLService")>0?true:false,
                SearchIndex:0,
                IsSimple: false,
                IsShow: false,
                DropdownData: {},
                TypeObj: {
                    0: "Game",
                    1: "Game",
                    2: "GameGroup",
                    3: "GameServer",
                    4: "GoodType",
                },
                Param:{
                    GameId: 0,
                    GameName: "游戏名称",
                    GameGroupId: 0,
                    GameGroupName: "游戏区",
                    GameServerId: 0,
                    GameServerName: "服务器",
                    GoodTypeId: 0,
                    GoodTypeName: "物品类型",
                    DlTypeName:"代练类型",
                    GoodKeyWord: "",
                },
                SimpleClass: "gray",
                AccurateClass: "hover",
            };
        },
        created: function () {
            if (location.href.split('?')[0].split('Page/')[1]==="Good/GoodList.html") {
                common.MergeObj(this.Param, JSON.parse(localStorage.SearchParam));
            }
            //显示框点击框外隐藏效果
            var self=this;
            $(document).click(function () {
                self.IsShow=false;
            });
            $(document).on('click', '#SelectBox', function (event) {
                event=event||window.event;
                event.stopPropagation();
            });
        },
        methods: {
            //显示精确搜索框
            showAccuratetBox: function () {
                this.IsSimple = false;
            },
            //显示简单搜索框
            showSimpleBox: function () {
                this.IsSimple = true;
                this.IsShow = false;
            },
            //显示下拉框
            showDropdown: function (type) {
                this.IsShow = true;
                pid=this.Param[`${this.getParentTypeName(type)}Id`]||0;
                if (type == 4||type == 5) {
                    pid = this.GameId;
                }
                this.setData(type, pid, this);
            },
            //隐藏下拉框
            hideDropdown: function () {
                this.IsShow = false;
            },
            //下拉框内点击加载数据
            loadDropdown: function (type, pid, pname) {
                pid = pid || 0;
                var typeName = this.getParentTypeName(type);
                if (type) {
                    this.Param[`${typeName}Id`] = pid;
                }
                if (pname) {
                    this.Param[`${typeName}Name`]=pname;
                }
                switch (type) {
                    case 2:
                        this.Param.GameGroupId=0;
                        this.Param.GameGroupName="游戏区";
                        this.Param.GameServerId=0;
                        this.Param.GameServerName="服务器";
                        this.Param.GoodTypeId=0;
                        this.Param.GoodTypeName = "物品类型";
                        break;
                    case 3:
                        this.Param.GameServerId=0;
                        this.Param.GameServerName = "服务器";
                        break;
                    case 4://交易类型
                        pid=this.Param.GameId;
                        break;
                    case 5:
                         this.hideDropdown();
                        break;
                }
                this.setData(type, pid, this);
            },
            GetTurnPageType:function(){
                  //判断search跳转
                var _type=common.GetSearchType();
                var TargetUrl= "";
                switch (_type) {
                    case "NewIndex":
                       TargetUrl=encodeURI(`${common.GetBaseUrl()}Good/GoodList.html?page=1&GameId=
                                ${this.Param.GameId}&GameName=${this.Param.GameName}&GameGroupId=
                                ${this.Param.GameGroupId}&GameGroupName=
                                ${this.Param.GameGroupName}&GameServerId=
                                ${this.Param.GameServerId}&&GameServerName=
                                ${this.Param.GameServerName}GoodTypeId=
                                ${this.Param.GoodTypeId}&GoodTypeName=
                                ${this.Param.GoodTypeName}&GoodKeyWord= 
                                ${this.Param.GoodKeyWord.trim()}`);
                        break;
                    case "GoodList":
                       TargetUrl = "";
                        break;
                    case "DLIndex":
                       TargetUrl=encodeURI(`${common.GetBaseUrl()}DLService/DLList.html?page=1&GameId=
                                ${this.Param.GameId}&GameName=${this.Param.GameName}&GameGroupId=
                                ${this.Param.GameGroupId}&GameGroupName=
                                ${this.Param.GameGroupName}&GameServerId=
                                ${this.Param.GameServerId}&&GameServerName=
                                ${this.Param.GameServerName}GoodTypeId=
                                ${this.Param.GoodTypeName}&GoodKeyWord= 
                                ${this.Param.GoodKeyWord.trim()}`);
                        break;
                    case "DLList":
                        TargetUrl = "";
                        break;
                    default:
                        break;
                }
                return TargetUrl;
            },
            //搜索
            search: function () {
                var self=this;
                var _type=common.GetSearchType();//获取页面的类型。
                var TargetUrl = self.GetTurnPageType();
                localStorage.SearchParam=JSON.stringify(this.Param);
                if (TargetUrl!="") {
                    window.open(TargetUrl);
                } else {
                   self.$root.$emit("SearchAgain",_type);//兄弟组件通信方式。
                }
            },           
            getParentTypeName: function (type) {
                var self =this;
                var parentTypeObj = {
                    0: "",
                    1: "",
                    2: "Game",
                    3: "GameGroup",
                    4: "GameServer",
                    5: self.DL?"DlType":"GoodType",
                };
                return parentTypeObj[type];
            },
            //设置下拉框数据
            setData: function (type,pid,self) {
                common.getWebJson("/api/Search/GetData", { type: type, id: pid,serviceType:(self.DL?4:1) }, function (data) {
                    self.DropdownData = data;
                });
            },
        },
        components: {
            "search-dropdown": dropdownComponents
        },
    };
    return components;
});