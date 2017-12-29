//搜索框下拉
define(["common"], function (common) {
    var html=`
        <div class ="" id="gsBox">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort">
                    <li>
                        <a href="javascript:void(0);" :class ="{hover:Type==0}" @click="ChangeType(0) ">网络游戏</a>
                    </li>
                    <li>
                       <a href="javascript:void(0);" :class ="{hover:Type==1}" @click="ChangeType(1)">手机游戏</a>
                    </li>
                    <li id="drop_search_input" class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class ="" @keyup="SearchByName" v-model="SearchName">
                    </li>
                </ul>
                <ul id="gsNav" class ="gs_nav">
                    <li class ="first_line"></li>
                    <li id="fastletter" class ="w_70"><a href="javascript: void (0);">搜索结果</a></li>
                    <li class ="w_70">
                       <a class ="active" href="javascript:void(0);"  @click="GetList(Type,'')" name="Letter">热门游戏</a>
                    </li>
                    <li v-for="item in Alphabet">
                       <a href="javascript: void (0);" @click="GetList(Type,item)" name="Letter">{{item}}</a>
                    </li>
                    <li class ="last_line"></li>
                </ul>
                <ul id="gsList" class ="gs_list gs_name">
                    <li lang="netgame" style="display: list-item; " v-for="item in List" @click="action(item.Id,item.Name)" ><a class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
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
        name: "GameList",
        props: ['action'],
        template: html,
        created:function(){
            this.GetList(this.Type);

            $(document).on("click", "[name=Letter]", function () {
                $("[name=Letter]").not(this).removeClass("active");
                $(this).addClass("active");
            });
        },
        data: function () {
            return data;
        },
        methods: {
            ChangeType: function (type) {
                this.Type=type;
                this.GetList(type);
                this.SearchName="";
            },
            GetList: function (type, letter) {
                letter=letter||"";
                var _self=this;
                $.get("/api/Game/GetGameListByHotAndLetter", { type: type, str: letter}, function (data) {
                    _self.List=data;
                });
            },
            SearchByName: function () {
                var _self=this;
                $.get("/api/Game/GetGameByName", { type: this.Type, name: this.SearchName }, function (data) {
                    if (data.length>0) {
                        _self.List=data;
                    }
                });
            },
        }
    };
    return components;
});
