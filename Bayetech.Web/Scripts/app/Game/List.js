//搜索框下拉
define(["common"], function (common) {
    //var html=`
    //    <div class ="" id="gsBox">
    //        <div class ="gs_box_inner">
    //            <ul id="gsSort" class ="gs_sort">
    //                <li>
    //                    <a href="javascript:void(0);" :class ="{hover:Type==0}" @click="ChangeType(0) ">网络游戏</a>
    //                </li>
    //                <li>
    //                   <a href="javascript:void(0);" :class ="{hover:Type==1}" @click="ChangeType(1)">手机游戏</a>
    //                </li>
    //                <li id="drop_search_input" class ="drop_search_input">
    //                    <input type="text" placeholder="请输入游戏名称" class ="" @keyup="SearchByName" v-model="SearchName">
    //                </li>
    //            </ul>
    //            <ul id="gsNav" class ="gs_nav">
    //                <li class ="w_70">
    //                   <a class ="active" href="javascript:void(0);"  @click="GetList(Type,'')" name="Letter">热门游戏</a>
    //                </li>
    //                <li v-for="item in Alphabet">
    //                   <a href="javascript: void (0);" @click="GetList(Type,item)" name="Letter">{{item}}</a>
    //                </li>
    //                <li class ="last_line"></li>
    //            </ul>
    //            <ul id="gsList" class ="gs_list gs_name">
    //                <li lang="netgame" style="display: list-item; " v-for="item in List" @click="action(item.Id,item.Name)" ><a class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
    //            </ul>
                   //<ul id="gsFastSearch" class="gs_list gs_name"></ul>
    //        </div>
    //        <s id="searchbar_arrow" class ="game_select_arrow" style="left: 37px;"></s>
    //</div>`

    var html = `<div class="game-box">
		<div class="game-top">
			<ul>
				<li class="game-hover"><a href="javascript:void(0)"><em class="pc"></em>网络游戏</a></li>
			</ul>
		</div>
		<div class="game-mid">
			<div class="game">
				<div class="gameTitle">
					<span selected="true"><a href="javascript:void(0)" @click=''>热门游戏</a></span>
					<ul class ="letter">
                        <li v-for="item in Alphabet">
                          <a href="javascript: void (0);" @click="GetList(Type,item)" name="Letter">{{item}}</a>
                        </li>
					</ul>
				</div>
                
				<div class ="webGame">
                    <ul class ="game-filter">
                        <li lang="netgame" v-for="item in List" @click="action(item.Id,item.Name)" >
                            <a class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a>
                        </li>
                    </ul>
					<ul class="hot-game-img">
                        <li class ="">
                            <a href="/buy-G10.html"><img src="http://pic.7881.com/7881/market/images/game170130/G10.jpg"><p>地下城与勇士</p></a>
							</li>
							<li class="">
								<a href="/buy-G3415.html"><img src="http://pic.7881.com/7881/market/images/game170130/G3415.jpg"><p>冒险岛2</p></a>
							</li>
							<li class="">
								<a href="/buy-G975.html"><img src="http://pic.7881.com/7881/market/images/game170130/G975.jpg"><p>天涯明月刀</p></a>
							</li>
							<li class="">
								<a href="/buy-G21.html"><img src="http://pic.7881.com/7881/market/images/game170130/G21.jpg"><p>魔兽世界</p></a>
							</li>
							<li class="">
								<a href="/buy-G33.html"><img src="http://pic.7881.com/7881/market/images/game170130/G33.jpg"><p>蜀门</p></a>
							</li>

							<li class="">
								<a href="/buy-G479.html"><img src="http://pic.7881.com/7881/market/images/game170130/G479.jpg"><p>征途2S</p></a>
							</li>
							<li class="">
								<a href="/buy-G603.html"><img src="http://pic.7881.com/7881/market/images/game170130/G603.jpg"><p>英雄联盟</p></a>
							</li>
							<li class="">
								<a href="/buy-G611.html"><img src="http://pic.7881.com/7881/market/images/game170130/G611.jpg"><p>刀剑2</p></a>
							</li>

							<li class="">
								<a href="/buy-G521.html"><img src="http://pic.7881.com/7881/market/images/game170130/G521.jpg"><p>醉逍遥</p></a>
							</li>
							<li class="">
								<a href="/buy-G769.html"><img src="http://pic.7881.com/7881/market/images/game170130/G769.jpg"><p>剑灵BNS</p></a>
					    </li>
					</ul>
				</div>				
			</div>
		</div>
	</div>`;

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
            //更改游戏类型
            ChangeType: function (type) {
                this.Type=type;
                this.GetList(type);
                this.SearchName="";
            },
            //获取数据
            GetList: function (type, letter) {
                letter=letter||"";
                var _self=this;
                $.get("/api/Game/GetGameListByHotAndLetter", { type: type, str: letter}, function (data) {
                    _self.List=data.content;
                });
            },
            //按名称检索
            SearchByName: function () {
                var _self=this;
                $.get("/api/Game/GetGameByName", { type: this.Type, name: this.SearchName }, function (data) {
                    if (data.length>0) {
                        _self.List=data.content;
                    }
                });
            },
        }
    };
    return components;
});
