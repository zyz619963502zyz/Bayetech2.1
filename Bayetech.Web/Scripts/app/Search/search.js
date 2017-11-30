//搜索框
define(["common", "search-dropdown"], function (common, dropdown) {
    var html = `<div class="search-box">
    <div class="top_search clearfix">
        <a href="javascript:void(0)" class="close_btn" title="关闭" alt="关闭">关闭</a>
        <div class="t_search">
            <a href="javascript:void(0)" class ="hover" @click="showAccuratetBox">精准搜索</a>
            <a href="javascript:void(0)" class ="gray" @click="showSimpleBox">简单搜索</a>
        </div>
        <div class="s_blue_box">
            <div id="accuratetBox" v-show="!isSimple">
                <ul class="selectbox clearfix">
                    <li class ="g_name" @click="showDropdown(0)">{{gameName}}</li>
                    <li class ="g_area" @click="showDropdown(2)">{{groupName}}</li>
                    <li class ="g_service" @click="showDropdown(3)">{{serverName}}</li>
                    <li class ="g_type" @click="showDropdown(4)">{{typeName}}</li>
                    <li class ="g_input"><label><input type="text" v-model="keyword" placeholder="商品编码或关键词"/></label></li>
                </ul>
            </div>
            <div id="simplebox" v-show="isSimple">
                <label>
                    <input id="txt_search_simple" type="text" placeholder="商品编码或关键词">
               </label>
            </div>
        </div>
        <a href="javascript:void(0)" id="search_main" class="search" @click="searchGood">搜 索</a>
        <!--页面配置的热门搜索推荐-->
        <div class="hotsearch new-hot">
            <dl>
                <dt>热门搜索：</dt>
            </dl>
        </div>
        <i class ="arrow" v-show="isShow"></i>
        <search-dropdown :data="dropdownData" v-show="isShow"></search-dropdown>
    </div>
</div>`;
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
            };
        },
        template: html,
        methods: {
            //显示精确搜索框
            showAccuratetBox: function () {
                this.isSimple = false;
            },
            //显示简单搜索框
            showSimpleBox: function () {
                this.isSimple = true;
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
                let typeName = this.getParentTypeName(type);
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
            searchGood: function () {
                common.getWebJson("/api/GoodInfo/GetList", {
                    gameId: this.gameId, groupId: this.groupId, serverId: this.serverId,
                    typeId: this.typeId, keyword: this.keyword,
                }, function (data) {
                    
                });
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