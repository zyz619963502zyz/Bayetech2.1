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
                            <!--li for="item in gamelist">
                                <a href="item.url"><img src="'http://pic.7881.com/7881/market/images/game170130/' + item.url"><p>{{item.title}}</p></a>  
                            </li-->    

                           <li class ="">
                                <a href="/buy-G10.html"><img src="http://pic.7881.com/7881/market/images/game170130/G10.jpg"><p>地下城与勇士</p></a>
						    </li>
							<li class="">
								<a href="/buy-G3415.html"><img src="http://pic.7881.com/7881/market/images/game170130/G3415.jpg"><p>冒险岛2</p></a>
							</li>
							<li class="">
								<a hrcef="/buy-G975.html"><img src="http://pic.7881.com/7881/market/images/game170130/G975.jpg"><p>天涯明月刀</p></a>
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
					<ul class ="game-filter hide">
                        <li lang="netgame" v-for="item in List" @click="action(item.Id,item.Name)" >
                            <a :class ="{hot:item.IsHot}" :title="item.Name" href="javascript: void (0);">{{item.Name}}</a>
                        </li>
                    </ul>
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
        list:[],
        template: nhtml,
        created:function(){
            this.GetList(this.Type);
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
            //GetPicList(data) {  //获取图片列表
            //    var self = this;
            //    var param = 
            //        common.getWebJson("api/Game/GetGameListByHotAndLetter", param, function (data) {
            //        self.Professions = data.content;
            //    });
            //},
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
                //encodeURI(`${common.GetBaseUrl()}Good/GoodList.html`) 跳转到到list页面
                var searchParam = common.GetSearchParam();
                searchParam.GameId = gameId;
                localStorage.SearchParam = JSON.stringify(searchParam);
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
