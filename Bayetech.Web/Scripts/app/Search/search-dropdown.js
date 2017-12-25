//搜索框下拉
define(["common"], function (common) {
    //var html = `<div class="b_blue_box" id="dropdown">
    //<div class="main_con">
    //    <ul v-if="data.Type > 1" class ="box_title">
    //        选择{{data.Title}}
    //        <a onclick="">全部{{data.Title}}</a>
    //        <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
    //    </ul>
    //    <ul v-if="data.Type <= 1" class ="main_name_select">
    //        <a href="javascript:void(0)" :class ="{hover:gameType==0}"  @click="changeGameType(0)">网络游戏</a>
    //        <a href="javascript:void(0)" :class ="{hover:gameType==1}" @click="changeGameType(1)">手机游戏</a>
    //        <ul class="gamename_quicksearch">
    //            <input type="text" placeholder="请输入游戏关键字或拼音" id="sselect_gamename" class ="q_input gray_a" @keyup="searchGameByName" v-model="searchGameName">
    //        </ul>
    //        <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
    //    </ul>

    //    <ul v-if="data.Type <= 1" class ="main_letter_select">
    //        <a href="javascript:void(0)" id="hotgame" class ="current" @click="loadDropdown(gameType)">热门游戏</a>
    //        <a v-for="item in alphabet" href="javascript:void(0)" @click="getGameListByLetter(item,data.Type)">{{item}}</a>
    //    </ul>
    //    <dl class="con_list">
    //        <dt v-for="item in data.List">
    //            <a href="javascript:void(0)" @click="loadDropdown(data.Child,item.Id,item.Name)">{{item.Name}}</a>
    //        </dt>
    //    </dl>
    //</div>
    //</div>`;
    var html=`
        <div class ="gs_box" id="gsBox">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort">
                    <li id="sortall" class ="">
                        <a href="javascript: void (0); " :class ="{active:gameType==0}" @click="changeGameType(0)">网络游戏</a>
                    </li>
                    <li id="mobilegame">
                       <a href="javascript: void (0); " :class ="{active:gameType==1}" @click="changeGameType(1)">手机游戏</a>
                    </li>
                    <li id="drop_search_input" class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class ="" @keyup="searchGameByName" v-model="searchGameName">
                    </li>
                    <li><button type="button" class ="btn btn-xs">CLOSE</button></li>
                </ul>
                <ul id="gsNav" class ="gs_nav">
                    <li class ="first_line"></li>
                    <li id="fastletter" class ="w_70" v-if="data.Type <= 1"><a href="javascript: void (0); ">搜索结果</a></li>
                    <li class ="w_70"><a class ="active" href="javascript: void (0); ">热门游戏</a></li>
                    <li v-for="item in alphabet">
                       <a href="javascript: void (0); " @click="getGameListByLetter(item,data.Type)">{{item}}</a>
                    </li>
                    <li class ="last_line"></li>
                </ul>
                <ul id="gsList" class ="gs_list gs_name">
                    <li lang="netgame" style="display: list-item; " v-for="item in data.List" @click="loadDropdown(data.Child,item.Id,item.Name)" ><a class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
                </ul><ul id="gsFastSearch" class="gs_list gs_name"></ul>
            </div>
            <s id="searchbar_arrow" class ="game_select_arrow" style="left: 37px;"></s>
    </div>`

    var data = {
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        list: [],
        searchGameName: "",
        gameType:0,
    }

    var components = {
        name: "search-dropdown",
        props: ['data'],
        template: html,
        data: function () {
            return data;
        },
        methods: {
            loadDropdown: function (type,id,name) {
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
                    _self.$props.data.List = data;
                });
            },
            searchGameByName: function () {
                var _self = this;
                common.getWebJson("/api/Game/GetGameByName", { type: this.gameType, name: this.searchGameName }, function (data) {
                    if (data.length > 0) {
                        _self.$props.data.List = data;
                    }
                });
            },
        }
    };
    return components;
});
