//搜索框
define(["search-gamedropdown", "search-dropdown"], function (gamedropdown, dropdown) {
    var html = `<div class="search-box">
    <div class="top_search clearfix">
        <a href="javascript:void(0)" class="close_btn" title="关闭" alt="关闭">关闭</a>
        <div class="t_search">
            <a href="javascript:void(0)" class ="hover" @click="accuratetBoxShow">精准搜索</a>
            <a href="javascript:void(0)" class ="gray" @click="simpleBoxShow">简单搜索</a>
        </div>
        <div class="s_blue_box">
            <div id="accuratetBox" v-show="!isSimple">
                <ul class="selectbox clearfix">
                    <li class ="g_name" @click="loadDropdown('game')">游戏名称</li>
                    <li class="g_gameplatform" gameplatform="" style="display: none;">游戏平台</li>
                    <li class="g_run" carrierid="" style="display: none;">运营商</li>
                    <li class ="g_area" @click="loadDropdown('group')">游戏区</li>
                    <li class ="g_service" @click="loadDropdown('server')">服务器</li>
                    <li class ="g_type" @click="loadDropdown('type')">物品类型</li>
                    <li class ="g_input"><label><input type="text" placeholder="商品编码或关键词"/></label></li>
                </ul>
            </div>
            <div id="simplebox" v-show="isSimple">
                <label>
                    <input id="txt_search_simple" type="text" placeholder="商品编码或关键词">
               </label>
            </div>
        </div>
        <a href="javascript:void(0)" id="search_main" class="search">搜 索</a>
        <!--页面配置的热门搜索推荐-->
        <div class="hotsearch new-hot">
            <dl>
                <dt>热门搜索：</dt>
            </dl>
        </div>
        <i class ="arrow" v-show="showDropdown"></i>
        <search-dropdown :data="dropdownData" v-show="showDropdown"></search-dropdown>
    </div>
</div>`;

    var components = {
        name: "v-search",
        data:function() {
            return {
                isSimple: false,
                dropdown: dropdown,
                showDropdown: false,
                dropdownData:{},
                gameData: {
                    title: "游戏",
                    type:"game",
                    list: [{
                        id: 1,
                        title:"地下城与勇士",
                    }],
                },
                groupData: {
                    title: "游戏区",
                    type:"group",
                    list: [{
                        id: 1,
                        title:"广东区",
                    }],
                },
                serverData: {
                    title: "服务器",
                    type: "server",
                    list: [{
                        id: 1,
                        title: "广东1区",
                    }],
                },
                typeData: {
                    title: "物品类型",
                    type: "type",
                    list: [{
                        id: 1,
                        title: "游戏币",
                    }],
                },
            };
        },
        template: html,
        methods: {
            accuratetBoxShow: function () {
                this.isSimple = false;
            },
            simpleBoxShow: function () {
                this.isSimple = true;
            },
            loadDropdown: function (type) {
                debugger;
                this.dropdown = type === "game" ? gamedropdown : dropdown;
                this.showDropdown = true;
                switch (type) {
                    case "game":
                        this.dropdownData = this.gameData;
                        break;
                    case "group":
                        this.dropdownData = this.groupData;
                        break;
                    case "server":
                        this.dropdownData = this.serverData;
                        break;
                    case "type":
                        this.dropdownData = this.typeData;
                        break;
                }
            },
        },
        components: {
            "search-dropdown": dropdown,
        },
    };
    return components;
});

//<li class ="g_name" @click="loadDropdown('game')">游戏名称</li>
//                   <li class="g_gameplatform" gameplatform="" style="display: none;">游戏平台</li>
//                   <li class="g_run" carrierid="" style="display: none;">运营商</li>
//                   <li class ="g_area" @click="loadDropdown('group')">游戏区</li>
//                   <li class ="g_service" @click="loadDropdown('server')">服务器</li>
//                   <li class ="g_type" @click="loadDropdown('type')">物品类型</li>