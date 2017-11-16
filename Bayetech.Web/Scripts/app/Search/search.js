//搜索框
define(["common", "search-dropdown"], function (common, dropdown) {
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
                    <li class ="g_name" @click="loadDropdown('0')">游戏名称</li>
                    <li class ="g_area" @click="loadDropdown('2')">游戏区</li>
                    <li class ="g_service" @click="loadDropdown('3')">服务器</li>
                    <li class ="g_type" @click="loadDropdown('4')">物品类型</li>
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
    var dropdownComponents = dropdown;
    var components = {
        name: "v-search",
        data:function() {
            return {
                isSimple: false,
                showDropdown: false,
                dropdownData: {},
                typeObj: {
                    0: "game",
                    1: "game",
                    2: "group",
                    3: "server",
                    4: "mallType",
                },
                gameId: 0,
                groupId: 0,
                serverId: 0,
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
            loadDropdown: function (type, id) {
                id = id || this[`${this.typeObj[type]}Id`];
                type === "4" && (id = this.gameId);
                this.showDropdown = true;
                this[`${type}id`] = id;
                let nowVue = this;
                debugger;

                common.getWebJson("/api/Search/GetData", { type: type, id: id }, function (data) {
                    nowVue.dropdownData = data;
                });
            },
        },
        components: {
            "search-dropdown": dropdownComponents,
        },
    };
    return components;
});