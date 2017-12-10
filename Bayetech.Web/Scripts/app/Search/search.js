//搜索框
define(["common", "search-dropdown"], function (common, dropdown) {
//    var html = `<div class="search-box">
//    <div class="top_search clearfix">
//        <a href="javascript:void(0)" class="close_btn" title="关闭" alt="关闭">关闭</a>
//        <div class="t_search">
//            <a href="javascript:void(0)" :class ="accurateClass" @click="showAccuratetBox">精准搜索</a>
//            <a href="javascript:void(0)" :class ="simpleClass" @click="showSimpleBox">简单搜索</a>
//        </div>
//        <div class="s_blue_box">
//            <div id="accuratetBox" v-show="!isSimple">
//                <ul class="selectbox clearfix">
//                    <li class ="g_name" @click="showDropdown(0)">{{gameName}}</li>
//                    <li class ="g_area" @click="showDropdown(2)">{{groupName}}</li>
//                    <li class ="g_service" @click="showDropdown(3)">{{serverName}}</li>
//                    <li class ="g_type" @click="showDropdown(4)">{{typeName}}</li>
//                    <li class ="g_input"><label><input type="text" v-model="keyword" placeholder="商品编码或关键词"/></label></li>
//                </ul>
//            </div>
//            <div id="simplebox" v-show="isSimple">
//                <label>
//                    <input id="txt_search_simple" type="text" placeholder="商品编码或关键词">
//               </label>
//            </div>
//        </div>
//        <a href="javascript:void(0)" id="search_main" class="search" @click="search">搜 索</a>
//        <!--页面配置的热门搜索推荐-->
//        <div class="hotsearch new-hot">
//            <dl>
//                <dt>热门搜索：</dt>
//            </dl>
//        </div>
//        <i class ="arrow" v-show="isShow"></i>
//        <search-dropdown :data="dropdownData" v-show="isShow"></search-dropdown>
//    </div>
    //</div>`;
    //new
    var html=`
         <div class ="game_select game_select_main clearfix" id="gameSelectV2">
        <form id="gsForm" method="get" class ="clearfix">
            <div class ="game_select_box" id="gameSelectBox">
                <ul class ="tab_menu">
                    <li class ="current"><a href="#multipleSearch">普通搜索</a></li>
                    <li><a href="#simpleSearch">简单搜索</a></li>
                </ul>
                <div class ="tab_box clearfix" id="multipleSearch" style="display: block;">
                    <!--游戏选择菜单-->
                    <ul class ="gs_menu" id="gsMenu">
                        <li id="gs_game" class ="gs_name arrow" title="选择游戏名称">游戏名称</li>
                        <li id="gs_plat" class ="gs_plat arrow" title="选择游戏平台" style="display:none;">平台</li>
                        <li id="gs_operator" class ="gs_operators arrow" title="选择运营商" style="display: none;">
                            运营商
                        </li>
                        <li id="gs_area" class ="gs_area arrow" title="选择游戏区">游戏区</li>
                        <li id="gs_server" class ="gs_server arrow" title="选择游戏服务器">游戏服务器</li>
                        <li id="gs_type" class ="gs_type arrow" title="选择分类">全部分类</li>
                        <li class ="hide">
                            <input type="hidden" id="hide_game" value=""><input type="hidden" id="hide_plat" name="gp" value="">
                            <input type="hidden" id="hide_operator" name="op" value="">
                            <input type="hidden" id="hide_area" name="ga" value="">
                            <input type="hidden" id="hide_server" name="gs" value="">
                            <input type="hidden" id="hide_type" name="cate" value="">
                            <input type="hidden" id="gsKeyword" name="keyword" value="">
                        </li>
                        <li class ="gs_search_item">
                            <input class ="gs_search_box holderfont" id="gsSearchBox" type="text" placeholder="请输入任意关键字" autocomplete="off">
                        </li>
                    </ul>
                    <div class ="btn_box">
                        <input class ="gs_search_btn" id="gsSearchBtn" type="submit" value="搜索">
                    </div>
                </div>
                <div class ="tab_box clearfix tab_box_reset hide" id="simpleSearch" style="display: block;">
                   
                    <div class ="simple_search_box">
                        <input type="text" class ="simple_search_input holderfont" id="simpleSearchInput" placeholder="关键字找游戏、搜区服、寻商品" autocomplete="off">
                    </div>
                </div>
            </div>
        </form>
        <!--游戏选择列表-->
        <div class ="gs_box" id="gsBox" style="display: none;">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort">
                    <li id="sortall" class ="">
                        <a href="javascript: void (0); ">网络游戏</a>
                    </li>
                    <li id="mobilegame" class ="active"><a href="javascript: void (0); ">手机游戏</a></li>
                    <li id="drop_search_input" class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class="">
                    </li>
                </ul><ul id="gsNav" class="gs_nav">
                    <li class ="first_line"></li>
                    <li id="fastletter" class ="w_70" style="display: none; "><a href="javascript: void (0); ">搜索结果</a></li>
                    <li class ="w_70"><a class ="active" href="javascript: void (0); ">热门游戏</a></li>
                    <li><a href="javascript: void (0); ">A</a></li>
                    <li><a href="javascript: void (0); ">B</a></li>
                    <li><a href="javascript: void (0); ">C</a></li>
                    <li><a href="javascript: void (0); ">D</a></li>
                    <li><a href="javascript: void (0); ">E</a></li>
                    <li><a href="javascript: void (0); ">F</a></li>
                    <li><a href="javascript: void (0); ">G</a></li>
                    <li><a href="javascript: void (0); ">H</a></li>
                    <li><a href="javascript: void (0); ">I</a></li>
                    <li><a href="javascript: void (0); ">J</a></li>
                    <li><a href="javascript: void (0); ">K</a></li>
                    <li><a href="javascript: void (0); ">L</a></li>
                    <li><a href="javascript: void (0); ">M</a></li>
                    <li>
                        <a href="javascript: void (0); ">N</a>
                    </li>
                    <li><a href="javascript: void (0); ">O</a></li>
                    <li><a href="javascript: void (0); ">P</a></li>
                    <li><a href="javascript: void (0); ">Q</a></li>
                    <li><a href="javascript: void (0); ">R</a></li>
                    <li><a href="javascript: void (0); ">S</a></li>
                    <li><a href="javascript: void (0); ">T</a></li>
                    <li><a href="javascript: void (0); ">U</a></li>
                    <li><a href="javascript: void (0); ">V</a></li>
                    <li><a href="javascript: void (0); ">W</a></li>
                    <li><a href="javascript: void (0); ">X</a></li>
                    <li><a href="javascript: void (0); ">Y</a></li>
                    <li><a href="javascript: void (0); ">Z</a></li>
                    <li class ="last_line"></li>
                </ul><ul id="gsList" class="gs_list gs_name">
                    <li id="44343b06076d4a7a95a0ef22aac481ae" lang="netgame" style="display: list-item; "><a class ="hot" title="地下城与勇士" href="javascript: void (0); ">地下城与勇士</a></li>
                    <li id="20c8bbc1b9794fc98bd96859624d4769" lang="netgame" style="display: list-item; "><a class ="hot" title="新天龙八部" href="javascript: void (0); ">新天龙八部</a></li>
                    <li id="a36ead01453c40b584f8e1e687723f2d" lang="netgame" style="display: list-item; "><a class ="hot" title="剑侠情缘Ⅲ" href="javascript: void (0); ">剑侠情缘Ⅲ</a></li>
                    <li id="8bf9f68f4b7e4b7c9afcc3a257c60954" lang="netgame" style="display: list-item; "><a class ="hot" title="奇迹MU" href="javascript: void (0); ">奇迹MU</a></li>
                    <li id="d2665a7bb03645bfb16fb999891258ea" lang="netgame" style="display: list-item; "><a class ="hot" title="英雄联盟" href="javascript: void (0); ">英雄联盟</a></li>
                    <li id="1a0d128d66b24896bf7dcf7430083cf0" lang="netgame" style="display: list-item; "><a class ="hot" title="剑灵" href="javascript: void (0); ">剑灵</a></li>
                    <li id="0ab3b27dc612483cb06dc7cb92c390ad" lang="netgame" style="display: list-item; "><a class ="hot" title="最终幻想14(FF14) " href="javascript: void (0); ">最终幻想14(FF14) </a></li>
                    <li id="a0f93027884b4a1089650c1ba9fa9e69" lang="netgame" style="display: list-item; "><a class ="hot" title="魔域" href="javascript: void (0); ">魔域</a></li>
                    <li id="3cb8fe8afd2743e08ab577cbb525650f" lang="netgame" style="display: list-item; "><a class ="hot" title="天涯明月刀" href="javascript: void (0); ">天涯明月刀</a></li>
                    <li id="19217d865b294d88b775744afb7bdfa5" lang="netgame" style="display: list-item; "><a class ="hot" title="冒险岛2" href="javascript: void (0); ">冒险岛2</a></li>
                    <li id="880" lang="netgame" style="display: list-item; "><a class ="hot" title="魔兽世界(国服) " href="javascript: void (0); ">魔兽世界(国服) </a></li>
                    <li id="2fdfb7d3fcd84b97b1e702d02c9ee7a7" lang="netgame" style="display: list-item; "><a class ="hot" title="斗战神" href="javascript: void (0); ">斗战神</a></li>
                    <li id="cadf72f401484ef4bf6e2a918fab7558" lang="netgame" style="display: list-item; "><a class ="hot" title="御龙在天" href="javascript: void (0); ">御龙在天</a></li>
                    <li id="ff1c43a22868486db2f44b32f2688f23" lang="netgame" style="display: list-item; "><a class ="hot" title="穿越火线" href="javascript: void (0); ">穿越火线</a></li>
                    <li id="da451dc0df8d40e9a7aa54842687a127" lang="netgame" style="display: list-item; "><a class ="hot" title="QQ三国" href="javascript: void (0); ">QQ三国</a></li>
                    <li id="f3823b6683834acdbfbd82f67b394b88" lang="netgame" style="display: list-item; "><a class ="hot" title="问道" href="javascript: void (0); ">问道</a></li>
                    <li id="e51ff7d827024ea1981f7c3a754d6b80" lang="netgame" style="display: list-item; "><a class ="hot" title="反恐精英OL" href="javascript: void (0); ">反恐精英OL</a></li>
                    <li id="a00e6f8f5e6e49208435b0f1cf05ad4b" lang="netgame" style="display: list-item; "><a class ="hot" title="梦三国2" href="javascript: void (0); ">梦三国2</a></li>
                    <li id="3ec7fa40c54344f387b382b602e02f1b" lang="netgame" style="display: list-item; "><a class ="hot" title="仙侠世界" href="javascript: void (0); ">仙侠世界</a></li>
                    <li id="3bd434ef232d4c5aab2581a153d9f8a0" lang="mobilegame" style="display: list-item; "><a class ="hot" title="剑与家园" href="javascript: void (0); ">剑与家园</a></li>
                    <li id="122db931f309470883948d66766f91c8" lang="mobilegame" style="display: list-item; "><a class ="hot" title="阴阳师" href="javascript: void (0); ">阴阳师</a></li>
                    <li id="125" lang="netgame" style="display: list-item; "><a class ="hot" title="热血传奇" href="javascript: void (0); ">热血传奇</a></li>
                    <li id="4be16105d53049d8bed553f515d9f2e3" lang="mobilegame" style="display: list-item; "><a class ="hot" title="卧虎藏龙2" href="javascript: void (0); ">卧虎藏龙2</a></li>
                    <li id="11ad8e11d5ae4f639aba09df34cc722e" lang="mobilegame" style="display: list-item; "><a class ="hot" title="梦幻诛仙" href="javascript: void (0); ">梦幻诛仙</a></li>
                    <li id="14ddde7abbb54e7292d3f26c26da111c" lang="mobilegame" style="display: list-item; "><a class ="hot" title="欢乐斗地主(手游版) " href="javascript: void (0); ">欢乐斗地主(手游版) </a></li>
                    <li id="187" lang="chessgame" style="display: list-item; "><a title="850游戏中心" href="javascript: void (0); ">850游戏中心</a></li>
                    <li id="194" lang="chessgame" style="display: list-item; "><a title="597游戏（原1977）" href="javascript: void (0); ">597游戏（原1977）</a></li>
                    <li id="198" lang="chessgame" style="display: list-item; "><a title="91y游戏" href="javascript: void (0); ">91y游戏</a></li>
                    <li id="104" lang="chessgame" style="display: list-item; "><a title="集结号棋牌" href="javascript: void (0); ">集结号棋牌</a></li>
                    <li id="101" lang="chessgame" style="display: list-item; "><a title="九乐棋牌" href="javascript: void (0); ">九乐棋牌</a></li>
                    <li id="1" lang="chessgame" style="display: list-item; "><a title="JJ棋牌" href="javascript: void (0); ">JJ棋牌</a></li>
                    <li id="22" lang="chessgame" style="display: list-item; "><a title="QQ游戏" href="javascript: void (0); ">QQ游戏</a></li>
                    <li id="6" lang="chessgame" style="display: list-item; "><a title="游戏茶苑" href="javascript: void (0); ">游戏茶苑</a></li>
                    <li id="261" lang="chessgame" style="display: list-item; "><a title="畅游岛棋牌" href="javascript: void (0); ">畅游岛棋牌</a></li>
                    <li id="262" lang="chessgame" style="display: list-item; "><a title="润发棋牌" href="javascript: void (0); ">润发棋牌</a></li>
                </ul><ul id="gsFastSearch" class="gs_list gs_name"></ul>
            </div>
        </div>
        
        <s id="searchbar_arrow" class ="game_select_arrow" style="left: 37px; display: none;"></s>
    </div>


        `
    //<ul class ="hot_game_list">
    //        <li><a href="http://s.5173.com/dnf-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('地下城与勇士'));">地下城与勇士</a></li>
    //        <li><a href="http://s.5173.com/jx3-0-0-0-0-kb0ewi-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('剑侠情缘Ⅲ'));">剑侠情缘Ⅲ</a></li>
    //        <li><a href="http://sy.5173.com/BizOffer/GoodsList?gameId=c646190d768f4ab6913ab9d2b8e1ac07" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('炉石传说'));">炉石传说</a></li>
    //        <li><a href="http://s.5173.com/wuxia-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('天涯明月刀'));">天涯明月刀</a></li>
    //        <li><a href="http://sy.5173.com/BizOffer/GoodsList?gameId=76bae5aefec047e89bcb6aa4e417f138&amp;gameCateId=91831dc2fe6a42de8fc5cbe16168ae6e" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('王者荣耀'));">王者荣耀</a></li>
    //        <li><a href="http://sy.5173.com/bizoffer/goodslist?PageIndex=1&amp;GameId=122db931f309470883948d66766f91c8&amp;GamePlatformId=&amp;GameCateId=5342e2f9499e456ca70538862fa181af&amp;GameAreaId=&amp;Keyword=&amp;Prices=&amp;TradingType=&amp;OrderBy=&amp;GameServerId=" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('阴阳师'));">阴阳师</a></li>
    //        <li><a href="http://s.5173.com/search/49cc73ef145a4328a716828c5b5f7be7-0-0-0-0-0-0-0-0-a-a-a-a-a-0-0-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('流放之路'));">流放之路</a></li>
    //        <li><a href="http://s.5173.com/search/19217d865b294d88b775744afb7bdfa5-0-0-0-0-21pjpw-0-0-0-a-a-a-a-a-0-itemprice_asc-0-0.shtml" onclick="__utmTrackEvent(encodeURIComponent('新版首页'),encodeURIComponent('热门游戏'),encodeURIComponent('冒险岛2'));">冒险岛2</a></li>
    //    </ul>


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