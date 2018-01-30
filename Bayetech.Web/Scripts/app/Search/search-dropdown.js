//搜索框下拉
define(["common"], function (common) {
    var html=`
        <div class ="gs_box" id="gsBox">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort" v-if="data.Type <= 1">
                    <li id="sortall" :class ="{active:gameType==0}" @click="changeGameType(0)">
                        <a href="javascript: void (0); " >网络游戏</a>
                    </li>
                    <li id="mobilegame" :class ="{active:gameType==1}" @click="changeGameType(1)">
                       <a href="javascript: void (0); ">手机游戏</a>
                    </li>
                    <li id="drop_search_input" class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class ="" @keyup="searchGameByName" v-model="searchGameName">
                    </li>
                    <li class="btn-close"><button type="button" @click="CloseDropdown" class ="btn btn-xs">X</button></li>
                </ul>
                <ul id="gsSort" class ="gs_sort" v-else>
                    <li><a href="javascript: void (0);" @click="SwitchAcross(false)">选择{{data.Title}}</a></li> 
                    <li v-if="hasAcross"><a href="javascript: void (0);" @click="SwitchAcross(true)">选择跨区</a></li>
                    <li class ="btn-close"><button type="button" @click="CloseDropdown" class ="btn btn-xs">X</button></li>
                </ul>
                <ul id="gsNav" class ="gs_nav" v-if="data.Type <= 1">
                    <li id="fastletter" class ="w_70"><a href="javascript: void (0);">搜索结果</a></li>
                    <li class ="w_70"><a class ="active" href="javascript: void (0);">热门游戏</a></li>
                    <li v-for="item in alphabet">
                       <a href="javascript: void (0);" @click="getGameListByLetter(item,data.Type)">{{item}}</a>
                    </li>
                </ul>
                 <ul id="gsList" class ="gs_list gs_name">
                    <li v-for="item in data.List" @click="loadDropdown(data.Child,item.Id,item.Name)" ><a :class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
                </ul>
            </div>
    </div>`

    var data = {
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        list: [],
        searchGameName: "",
        gameType: 0,
        hasAcross: false,
    }

    var components = {
        name: "search-dropdown",
        props: ['data'],
        template: html,
        data: function () {
            return data;
        },
        mounted: function () {
            if (this.$parent.Param.GameId === 1 && this.$props.data.type === 2) {
                this.hasAcross = true;
            }
        },
        watch: {
            data: function () {
                this.hasAcross = this.$parent.Param.GameId === 1 && this.$props.data.Type === 2;
            },
        },
        methods: {
            loadDropdown: function (type, id, name) {
                //if (type==4&&this.$parent.DL) {
                //     this.$parent.IsShow = false;
                //} 
                this.$parent.loadDropdown(type, id,name);
            },
            changeGameType: function (type) {
                this.gameType = type;
                this.loadDropdown(type);
                this.searchGameName = "";
            },
            getGameListByLetter: function (letter, type) {
                var _self = this;
                common.getWebJson("/api/Game/GetGameListByLetter", { letter:letter, type: type }, function (data) {
                    _self.$props.data.List=data.content;
                });
            },
            searchGameByName: function () {
                var _self = this;
                common.getWebJson("/api/Game/GetGameByName", { type: this.gameType, name: this.searchGameName }, function (data) {
                    if (data.length > 0) {
                        _self.$props.data.List=data.content;
                    }
                });
            },
            CloseDropdown: function () {//隐藏当前模态框
                this.$parent.$data.IsShow = false;
            },
            SwitchAcross: function (bol) {
                this.$parent.IsAcross = bol;
                this.loadDropdown(bol ? 6 : 2, 1, "地下城与勇士");
            },
        }
    };
    return components;
});
