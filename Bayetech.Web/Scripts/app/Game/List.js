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



//<div class="game-box">
//		<div class="game-top">
//			<ul>
//				<li class="game-hover"><a href="javascript:void(0)"><em class="pc"></em>网络游戏</a></li>
//				<li><a href="javascript:void(0)"><em class="apple"></em>苹果手游</a></li>
//				<li><a href="javascript:void(0)"><em class="android"></em>安卓手游</a></li>
//			</ul>
//		</div>
//		<div class="game-mid">
//			<div class="game" style="display: block;">
//				<div class="gameTitle intgame">
//					<b style="left: 42px; width: 68px; overflow: hidden;"></b>
//					<span selected="true"><a href="javascript:void(0)">热门游戏</a></span>
//					<ul class="letter">
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">A</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">B</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">C</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">D</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">E</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">F</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">G</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">H</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">I</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">J</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">K</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">L</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">M</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">N</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">O</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">P</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Q</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">R</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">S</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">T</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">U</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">V</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">W</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">X</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Y</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Z</a></li>
						
//					</ul>
//				</div>
//				<div class="webGame" style="display: block;">
//					<ul>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G10.jpg"><p>地下城与勇士</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G3415-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G3415.jpg"><p>冒险岛2</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G975-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G975.jpg"><p>天涯明月刀</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G21-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G21.jpg"><p>魔兽世界</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G33-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G33.jpg"><p>蜀门</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G479-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G479.jpg"><p>征途2S</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G603-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G603.jpg"><p>英雄联盟</p></a>
								
//							</li>
						
//							<li class="on">
								
								
//									<a href="http://www.7881.com/buy-G611-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G611.jpg"><p>刀剑2</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G521-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G521.jpg"><p>醉逍遥</p></a>
								
//							</li>
						
//							<li class="">
								
								
//									<a href="http://www.7881.com/buy-G769-0-100003-0-0-0-0-0-0-0-1a1500.html"><img src="./allGameSelect_files/G769.jpg"><p>剑灵BNS</p></a>
								
//							</li>
						
//					</ul>
//				</div>
//				<div class="gameName" style="display: none;">
//					<ul><li><a href="http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-1a1500.html">地下城与勇士</a></li><li><a href="http://www.7881.com/buy-G641-0-100003-0-0-0-0-0-0-0-1a1500.html">斗战神</a></li><li><a href="http://www.7881.com/buy-G2369-0-100003-0-0-0-0-0-0-0-1a1500.html">DOTA2</a></li><li><a href="http://www.7881.com/buy-G143-0-100003-0-0-0-0-0-0-0-1a1500.html">大明龙权</a></li><li><a href="http://www.7881.com/buy-G2418-0-100003-0-0-0-0-0-0-0-1a1500.html">大国</a></li><li><a href="http://www.7881.com/buy-G2463-0-100003-0-0-0-0-0-0-0-1a1500.html">大圣西游</a></li><li><a href="http://www.7881.com/buy-G643-0-100003-0-0-0-0-0-0-0-1a1500.html">东方故事</a></li><li><a href="http://www.7881.com/buy-G673-0-100003-0-0-0-0-0-0-0-1a1500.html">斗仙</a></li><li><a href="http://www.7881.com/buy-G726-0-100003-0-0-0-0-0-0-0-1a1500.html">斗破苍穹</a></li><li><a href="http://www.7881.com/buy-G611-0-100003-0-0-0-0-0-0-0-1a1500.html">刀剑2</a></li><li><a href="http://www.7881.com/buy-G73-0-100003-0-0-0-0-0-0-0-1a1500.html">大航海时代OL</a></li><li><a href="http://www.7881.com/buy-G08-0-100003-0-0-0-0-0-0-0-1a1500.html">刀剑英雄</a></li><li><a href="http://www.7881.com/buy-G139-0-100003-0-0-0-0-0-0-0-1a1500.html">大唐无双2</a></li><li><a href="http://www.7881.com/buy-G1860-0-100003-0-0-0-0-0-0-0-1a1500.html">大明帝国</a></li><li><a href="http://www.7881.com/buy-G2189-0-100003-0-0-0-0-0-0-0-1a1500.html">刀锋铁骑</a></li><li><a href="http://www.7881.com/buy-G3083-0-100003-0-0-0-0-0-0-0-1a1500.html">代号朕</a></li></ul>
//				</div>
//			</div>
//			<div class="game">
//				<div class="gameTitle appgame">
//					<b></b>
//					<span selected="true"><a href="javascript:void(0)">热门游戏</a></span>
//					<ul class="letter">
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">A</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">B</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">C</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">D</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">E</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">F</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">G</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">H</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">I</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">J</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">K</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">L</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">M</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">N</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">O</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">P</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Q</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">R</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">S</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">T</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">U</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">V</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">W</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">X</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Y</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Z</a></li>
						
//					</ul>
//				</div>
//				<div class="appleGame" style="display:block;">
//					<ul><li><a href="http://shouyou.7881.com/hyxd-ios.html"><img src="./allGameSelect_files/A4607.png"><p>荒野行动苹果版</p></a></li><li><a href="http://shouyou.7881.com/cyhxqzwz-ios.html"><img src="./allGameSelect_files/A2804.png"><p>穿越火线枪战王者苹果版</p></a></li><li><a href="http://shouyou.7881.com/wzry-ios.html"><img src="./allGameSelect_files/A2705.png"><p>王者荣耀苹果版</p></a></li><li><a href="http://shouyou.7881.com/ascz-ios.html"><img src="./allGameSelect_files/A3856.png"><p>AppStore充值</p></a></li><li><a href="http://shouyou.7881.com/lzjd-ios.html"><img src="./allGameSelect_files/A3093.png"><p>龙珠激斗苹果版</p></a></li><li><a href="http://shouyou.7881.com/blct-ios.html"><img src="./allGameSelect_files/A1000.png"><p>部落冲突苹果版</p></a></li><li><a href="http://shouyou.7881.com/qqdzz-ios.html"><img src="./allGameSelect_files/A3183.png"><p>球球大作战苹果版</p></a></li><li><a href="http://shouyou.7881.com/wd-ios.html"><img src="./allGameSelect_files/A3115.png"><p>问道苹果版</p></a></li></ul>
//				</div>
//			</div>
//			<div class="game">
//				<div class="gameTitle aorgame">
//					<b></b>
//					<span selected="true"><a href="javascript:void(0)">热门游戏</a></span>
//					<ul class="letter">
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">A</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">B</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">C</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">D</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">E</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">F</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">G</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">H</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">I</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">J</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">K</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">L</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">M</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">N</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">O</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">P</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Q</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">R</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">S</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">T</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">U</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">V</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">W</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">X</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Y</a></li>
						
//							<li><a href="http://www.7881.com/gamelistshow.html?goodsType=100003#">Z</a></li>
						
//					</ul>
//	            </div>
//				<div class="appleGame" style="display:block;">
//					<ul>
//					<li><a href="http://shouyou.7881.com/zjz2spr-android.html"><img src="./allGameSelect_files/A4602.png"><p>终结者2审判日</p></a></li><li><a href="http://shouyou.7881.com/qmqj-android.html"><img src="./allGameSelect_files/A1694.png"><p>全民奇迹</p></a></li><li><a href="http://shouyou.7881.com/wx-android.html"><img src="./allGameSelect_files/A817.png"><p>忘仙</p></a></li><li><a href="http://shouyou.7881.com/kdygfk-android.html"><img src="./allGameSelect_files/A2655.png"><p>口袋妖怪复刻</p></a></li><li><a href="http://shouyou.7881.com/tlbb3d-android.html"><img src="./allGameSelect_files/A1581.png"><p>天龙八部3D</p></a></li><li><a href="http://shouyou.7881.com/zxa-android.html"><img src="./allGameSelect_files/A3411.png"><p>诛仙</p></a></li><li><a href="http://shouyou.7881.com/qh98zjzzol-android.html"><img src="./allGameSelect_files/A2491.png"><p>拳皇98终极之战OL</p></a></li><li><a href="http://shouyou.7881.com/snsgz-android.html"><img src="./allGameSelect_files/A1959.png"><p>少年三国志</p></a></li><li><a href="http://shouyou.7881.com/hzhy-android.html"><img src="./allGameSelect_files/A3120.png"><p>魂之幻影</p></a></li><li><a href="http://shouyou.7881.com/qbpkq-android.html"><img src="./allGameSelect_files/A1390.png"><p>去吧皮卡丘</p></a></li><li><a href="http://shouyou.7881.com/xcqzj-android.html"><img src="./allGameSelect_files/A1705.png"><p>新苍穹之剑</p></a></li><li><a href="http://shouyou.7881.com/ahlm-android.html"><img src="./allGameSelect_files/A1699.png"><p>暗黑黎明</p></a></li><li><a href="http://shouyou.7881.com/xbbcq-android.html"><img src="./allGameSelect_files/A1168.png"><p>小冰冰传奇</p></a></li><li><a href="http://shouyou.7881.com/qqhcs-android.html"><img src="./allGameSelect_files/A3067.png"><p>青丘狐传说</p></a></li><li><a href="http://shouyou.7881.com/zcfy-android.html"><img src="./allGameSelect_files/A2767.png"><p>中超风云</p></a></li><li><a href="http://shouyou.7881.com/gcld-android.html"><img src="./allGameSelect_files/A1309.png"><p>攻城掠地</p></a></li><li><a href="http://shouyou.7881.com/xdzz-android.html"><img src="./allGameSelect_files/A2833.png"><p>新大主宰</p></a></li><li><a href="http://shouyou.7881.com/tkfy-android.html"><img src="./allGameSelect_files/A1261.png"><p>坦克风云</p></a></li><li><a href="http://shouyou.7881.com/jyqxz-android.html"><img src="./allGameSelect_files/A2766.png"><p>江湖侠客令</p></a></li></ul>
//				</div>
//			</div>
//		</div>
//	</div>