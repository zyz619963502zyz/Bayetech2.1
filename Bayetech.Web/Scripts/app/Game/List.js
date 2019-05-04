//搜索框下拉
define(["common"], function (common) {
    var html=`
        <div class ="">
            <div class ="gs_box_inner">
                <ul id="gsSort" class ="gs_sort">
                    <li>
                        <a href="javascript:void(0);" :class ="{hover:Type==0}" @click="ChangeType(0) ">网络游戏</a>
                    </li>
                    <li>
                       <a href="javascript:void(0);" :class ="{hover:Type==1}" @click="ChangeType(1)">手机游戏</a>
                    </li>
                    <li class ="drop_search_input">
                        <input type="text" placeholder="请输入游戏名称" class ="" @keyup="SearchByName" v-model="SearchName">
                    </li>
                </ul>
                <ul class ="gs_nav">
                    <li class ="w_70">
                       <a class ="active" href="javascript:void(0);"  @click="GetList(Type,'')" name="Letter">热门游戏</a>
                    </li>
                    <li v-for="item in Alphabet">
                       <a href="javascript: void (0);" @click="GetList(Type,item)" name="Letter">{{item}}</a>
                    </li>
                    
                </ul>
                <ul class ="gs_list gs_name">
                    <li lang="netgame" v-for="item in List" @click="action(item.Id,item.Name)" ><a :class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a></li>
                </ul>
                 <ul class="gs_list gs_name"></ul>
            </div>
            
    </div>`

    var nhtml = `<div class="game-box">
		<div class="game-top">
			<ul>
				<li class="game-hover"><a href="javascript:void(0)"><em class="pc"></em>网络游戏</a></li>
			</ul>
		</div>
		<div class="game-mid">

				<div class ="gameTitle">
					
					<ul class ="letter">
						<li class="on" name="hotGame"><a class ="" href="javascript:void(0);"  @click="GetList(Type,'')" >热门游戏</a></li>
                        <li v-for="(item,index) in Alphabet" name="Letter" >
                          <a href="javascript: void (0);" @click="GetList(Type,item)" >{{item}}</a>
                        </li>
					</ul>
				</div>
				<div class ="webGame">
					<ul class="hot-game-img">

                        <li v-for="item in HotGames">
                            <a href="javascript: void (0);" @click=ClickPic(item.Id)><img :src="item.Img"><p>{{item.Name}}</p></a>  
                        </li> 

					</ul>
					<ul class ="game-filter hide">
                        <li lang="netgame" v-for="item in List">
                            <a :class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);" @click=ClickPic(item.Id)>{{item.Name}}</a>
                        </li>
                    </ul>
				</div>

		</div>
	</div>`;

    var data={
        Alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        ListUrl:"",
        List: [],
        HotGames: [],
        SearchParam: "",
        SearchName: "",
        Type: 0,
    }

    var components={
        name: "GameList",
        props: ['action'],
        list:[],
        template: nhtml,
        created:function(){
            this.GetList(this.Type);
            this.GetHotPicGameList(10);
            $(document).on("click", "[name=hotGame]", function () {
				$('.hot-game-img').removeClass("hide");
				$(".game-filter").addClass("hide");
				$("[name=hotGame]").addClass("on");
				$("[name=Letter]").removeClass("on");
            })
            $(document).on("click", "[name=Letter]", function () {
				$("[name=hotGame]").removeClass("on");
            	$('.hot-game-img').addClass("hide");
            	$(".game-filter").removeClass("hide");
                $("[name=Letter]").not(this).removeClass("on");
                $(this).addClass("on");
            });
        },
        data: function () {
            return data;
        },
        methods: {
			//切换选项
        	toggleTab: function () {
				
            },
            GetHotPicGameList(count) {  //获取图片列表
                var self = this;
                common.getWebJson("/api/Game/GetHotGameList", { count: count }, function (data) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].Img = "http://pic.7881.com/7881/market/images/game170130/" + data[i].Img;
                    }
                    self.HotGames = data;
                });
            },
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
            ClickPic: function (gameId) {//点击图片的动作
                var self = this;
                self.SearchParam = common.GetSearchParam();
                self.SearchParam.GameId = gameId;
                localStorage.SearchParam = JSON.stringify(self.SearchParam);
                var TargetUrl = encodeURI(`${common.GetBaseUrl()}Good/GoodList.html`);
                window.open(TargetUrl);
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
