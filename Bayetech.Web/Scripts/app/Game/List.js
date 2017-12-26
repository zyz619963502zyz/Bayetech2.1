//搜索框下拉
define(["common"], function (common) {
    var html=`
        <div class ="gs_box" id="gsBox">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort" v-if="data.Type <= 1">
                    <li>
                        <a href="javascript: void (0); ": class ="{active:Type==0}" @click="ChangeType(0)">网络游戏</a>
                    </li>
                    <li>
                       <a href="javascript: void (0); ": class ="{active:Type==1}" @click="ChangeType(1)">手机游戏</a>
                    </li>
                    <li id="drop_search_input" class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class ="" @keyup="SearchByName" v-model="SearchName">
                    </li>
                    <li><button type="button" class ="btn btn-xs">CLOSE</button></li>
                </ul>
                <ul id="gsNav" class ="gs_nav">
                    <li class ="first_line"></li>
                    <li id="fastletter" class ="w_70"><a href="javascript: void (0); ">搜索结果</a></li>
                    <li class ="w_70"><a class ="active" href="javascript: void (0); "  @click="GetList(data.Type,"")">热门游戏</a></li>
                    <li v-for="item in Alphabet">
                       <a href="javascript: void (0); " @click="GetList(data.Type,item)">{{item}}</a>
                    </li>
                    <li class ="last_line"></li>
                </ul>
                <ul id="gsList" class ="gs_list gs_name">
                    <li lang="netgame" style="display: list-item; " v-for="item in List" @click="loadDropdown(data.Child,item.Id,item.Name)" ><a class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
                </ul><ul id="gsFastSearch" class="gs_list gs_name"></ul>
            </div>
            <s id="searchbar_arrow" class ="game_select_arrow" style="left: 37px;"></s>
    </div>`

    var data={
        Alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        List: [],
        SearchName: "",
        Type: 0,
    }

    var components={
        name: "Game-List",
        props: ['data'],
        template: html,
        created:function(){

        },
        data: function () {
            return data;
        },
        methods: {
            loadDropdown: function (type, id, name) {
                //this.$parent.loadDropdown(type, id, name);
            },
            ChangeType: function (type) {
                this.Type=type;
                this.loadDropdown(type);
                this.SearchName="";
            },
            GetList: function (letter, type) {
                var _self=this;
                common.getWebJson("/api/Game/GetGameListByHotAndLetter", { letter: letter, type: type }, function (data) {
                    _self.$props.data.List=data;
                });
            },
            SearchByName: function () {
                var _self=this;
                common.getWebJson("/api/Game/GetGameByName", { type: this.Type, name: this.SearchName }, function (data) {
                    if (data.length>0) {
                        _self.$props.data.List=data;
                    }
                });
            },
        }
    };
    return components;
});
