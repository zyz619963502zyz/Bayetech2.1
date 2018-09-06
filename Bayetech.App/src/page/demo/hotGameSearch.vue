<template>
    <div id="wrapper" class="search2">
        <h2>{{gname}}</h2>
        <div>
            <div class="header pl-30 clearfix border-bottom">
                <div class="header-l ps-r">
                    <input type="text" placeholder="请输入游戏名称或首字母" class="f30">
                    <!---->
                </div>
                <a class="color-f7 f30 header-r">取消</a>
            </div>
            <!---->
        </div>
        <!---->
        <div class="rake pl-30 bg-fff"  style="position:absolute; width:100%;">
            <div class="rake-con clearfix border-bottom" v-for="item in gamelist">
                <a href="/vue/search-all-app/search-class?gid=44343b06076d4a7a95a0ef22aac481ae&amp;gname=%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB&amp;gameType=1&amp;type=special&amp;goodsType=" class="dis-b clearfix ps-r">
                    <div class="search-all-head rake-con-l  ps-a">
                        <i></i>
                        <!--<h4 class="f30 color-000 dis-in">地下城与勇士</h4>-->
                        <h4 class="f30 color-000 dis-in">{{item.Name}}</h4>
                    </div>
                    <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
                </a>
                <!---->
                <!---->
            </div>
           
        </div>
        <div class="pl-30 bg-fff mb-20  " style="display:none">
            <div class="his clearfix border-bottom">
                <h3 class="f30 fl color-999">搜索历史</h3>
                <div class="fr del-icon">
                    <img src="/dist/src/assets/images/common/del.png?a3d03c0678b2f6cefeb71365d6021b90">
                </div>
            </div>
            <div class="Warrior clearfix border-bottom">
                <div class="rake-con clearfix border-bottom">
                    <a href="/vue/search-all-app/search-class?gid=44343b06076d4a7a95a0ef22aac481ae&amp;gname=%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB&amp;gameType=1&amp;type=special&amp;goodsType=" class="dis-b clearfix ps-r">
                        <div class="search-all-head rake-con-l  ps-a">
                            <i></i>
                            <h4 class="f30 color-000 dis-in">地下城与勇士</h4>
                        </div>
                        <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
                    </a>
                    <!---->
                    <!---->
                </div>
            </div>
            <div class="Warrior clearfix border-bottom">
                <div class="rake-con clearfix border-bottom">
                    <a href="/vue/search-all-app/search-class?gid=880&amp;gname=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C%28%E5%9B%BD%E6%9C%8D%29&amp;gameType=1&amp;type=special&amp;goodsType=" class="dis-b clearfix ps-r">
                        <div class="search-all-head rake-con-l  ps-a">
                            <i></i>
                            <h4 class="f30 color-000 dis-in">魔兽世界(国服)</h4>
                        </div>
                        <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
                    </a>
                    <!---->
                    <!---->
                </div>
            </div>
            <div class="Warrior clearfix border-bottom">
                <div class="rake-con clearfix border-bottom">
                    <a href="/vue/search-all-app/search-class?gid=ff1c43a22868486db2f44b32f2688f23&amp;gname=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF&amp;gameType=1&amp;type=special&amp;goodsType=" class="dis-b clearfix ps-r">
                        <div class="search-all-head rake-con-l  ps-a">
                            <i></i>
                            <h4 class="f30 color-000 dis-in">穿越火线</h4>
                        </div>
                        <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
                    </a>
                    <!---->
                    <!---->
                </div>
            </div>
            <div class="Warrior clearfix border-bottom">
                <div class="rake-con clearfix border-bottom">
                    <a href="/vue/search-all-app/search-class?gid=d2665a7bb03645bfb16fb999891258ea&amp;gname=%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F&amp;gameType=1&amp;type=special&amp;goodsType=" class="dis-b clearfix ps-r">
                        <div class="search-all-head rake-con-l  ps-a">
                            <i></i>
                            <h4 class="f30 color-000 dis-in">英雄联盟</h4>
                        </div>
                        <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
                    </a>
                    <!---->
                    <!---->
                </div>
            </div>
        </div>
        <div data-v-f8bac10c="" class="hot pl-30 bg-fff border-bottom " style="display:none">
            <h4 data-v-f8bac10c="" class="f30 color-999 border-bottom">5173热搜</h4>
            <div data-v-f8bac10c="" class="search-all-hot game-n ps-r clearfix border-bottom">
                <a href="/vue/search-all-app/search-class?gid=44343b06076d4a7a95a0ef22aac481ae&amp;gname=%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">地下城与勇士</a>
                <!---->
                <!---->
                <i data-v-f8bac10c="" class="pa"></i>
                <a href="/vue/search-all-app/search-class?gid=a36ead01453c40b584f8e1e687723f2d&amp;gname=%E5%89%91%E4%BE%A0%E6%83%85%E7%BC%98%E2%85%A2&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">
                    <span data-v-f8bac10c="">剑侠情缘Ⅲ</span>
                </a>
                <!---->
                <!---->
            </div>
            <div data-v-f8bac10c="" class="search-all-hot game-n ps-r clearfix border-bottom">
                <a href="/vue/search-all-app/search-class?gid=d2665a7bb03645bfb16fb999891258ea&amp;gname=%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">英雄联盟</a>
                <!---->
                <!---->
                <i data-v-f8bac10c="" class="pa"></i>
                <a href="/vue/search-all-app/search-class?gid=ff1c43a22868486db2f44b32f2688f23&amp;gname=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">
                    <span data-v-f8bac10c="">穿越火线</span>
                </a>
                <!---->
                <!---->
            </div>
            <div data-v-f8bac10c="" class="search-all-hot game-n ps-r clearfix border-bottom">
                <a href="/vue/search-all-app/search-class?gid=880&amp;gname=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C%28%E5%9B%BD%E6%9C%8D%29&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">魔兽世界(国服)</a>
                <!---->
                <!---->
                <i data-v-f8bac10c="" class="pa"></i>
                <a href="/vue/search-all-app/search-class?gid=3cb8fe8afd2743e08ab577cbb525650f&amp;gname=%E5%A4%A9%E6%B6%AF%E6%98%8E%E6%9C%88%E5%88%80&amp;gameType=1&amp;type=special" class="fl f30 color-000" data-v-f8bac10c="">
                    <span data-v-f8bac10c="">天涯明月刀</span>
                </a>
                <!---->
                <!---->
            </div>
            <div data-v-f8bac10c="" class="search-all-hot game-n ps-r clearfix border-bottom">
                <a data-v-f8bac10c="" href="/vue/mobile-game/goods-list2/76bae5aefec047e89bcb6aa4e417f138/王者荣耀/2" class="fl f30 color-000">王者荣耀</a>
                <!---->
                <!---->
                <i data-v-f8bac10c="" class="pa"></i>
                <a data-v-f8bac10c="" href="/vue/mobile-game/goods-list2/122db931f309470883948d66766f91c8/阴阳师/2" class="fl f30 color-000">
                    <span data-v-f8bac10c="">阴阳师</span>
                </a>
                <!---->
                <!---->
            </div>
            <div data-v-f8bac10c="" class="search-all-hot game-n ps-r clearfix border-bottom">
                <a data-v-f8bac10c="" href="/vue/mobile-game/goods-list2/5b636ece8704425c93355086cfff5fa5/魔法禁书目录/2" class="fl f30 color-000">魔法禁书目录</a>
                <!---->
                <!---->
                <i data-v-f8bac10c="" class="pa"></i>
                <a data-v-f8bac10c="" href="/vue/mobile-game/goods-list2/933bf2d5a4644f4b9bf997e37c1958f9/奇迹MU-觉醒/2" class="fl f30 color-000">
                    <span data-v-f8bac10c="">奇迹MU-觉醒</span>
                </a>
                <!---->
                <!---->
            </div>
        </div>
    </div>
</template>

<script>
    import "@/assets/css/gameSearch.css";
    let vmdata = {
        gname:'',
        gamelist:[]
        };
    
    export default {
      name: "gameSearch",
      data() {
          return vmdata;
      },
      mounted: function() {
          let id = this.$route.query.goodsType;
          let gname = this.$route.query.typeName;
          console.log(id);
          console.log(this.$route.query);
          this.getdata();
          this.gnamek(id)
      },
      methods: {
          getdata(){
            this.gamelist = [{
	        "Id": 1,
	        "Name": "地下城与勇士",
	        "Alias": "dnf",
	        "Letter": "d",
	        "IsHot": true,
	        "Parentid": 4,
	        "Order": 1,
	        "Platform": 0,
	        "Img":  "http://192.168.0.88/file/upload/201605/24/21-47-24-21-1.jpg",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
            }, {
	        "Id": 14,
	        "Name": "欢乐斗地主苹果版",
	        "Alias": "huanledoudizhupingguoban",
	        "Letter": "h",
	        "IsHot": true,
	        "Parentid": 7,
	        "Order": 96,
	        "Platform": 1,
	        "Img":  "http://192.168.0.88/file/upload/201605/24/22-01-21-63-1.png",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 10,
	        "Name": "剑灵",
	        "Alias": "jianling",
	        "Letter": "j",
	        "IsHot": true,
	        "Parentid": 4,
	        "Order": 4,
	        "Platform": 0,
	        "Img": "http://192.168.0.88/file/upload/201605/24/21-52-01-12-1.jpg",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 12,
	        "Name": "雷霆战机苹果版",
	        "Alias": "leizhanjipingguoban",
	        "Letter": "l",
	        "IsHot": true,
	        "Parentid": 7,
	        "Order": 94,
	        "Platform": 1,
	        "Img":  "http://192.168.0.88/file/upload/201605/24/22-00-47-64-1.png",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 5,
	        "Name": "魔兽世界",
	        "Alias": "moshoushijie",
	        "Letter": "m",
	        "IsHot": true,
	        "Parentid": 4,
	        "Order": 2,
	        "Platform": 0,
	        "Img": "http://192.168.0.88/file/upload/201605/24/21-49-13-17-1.jpg",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 6,
	        "Name": "蜀门",
	        "Alias": "shumen",
	        "Letter": "s",
	        "IsHot": true,
	        "Parentid": 4,
	        "Order": 12,
	        "Platform": 0,
	        "Img":  "http://192.168.0.88/file/upload/201605/24/21-49-41-20-1.jpg",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 15,
	        "Name": "太极熊猫苹果版",
	        "Alias": "taijixiongmaopingguoban",
	        "Letter": "t",
	        "IsHot": true,
	        "Parentid": 7,
	        "Order": 97,
	        "Platform": 1,
	        "Img":  "http://192.168.0.88/file/upload/201605/24/22-01-38-14-1.png",
	        "I":"",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 11,
	        "Name": "天天炫斗苹果版",
	        "Alias": "tiantiandoupingguoban",
	        "Letter": "t",
	        "IsHot": true,
	        "Parentid": 7,
	        "Order": 92,
	        "Platform": 1,
	        "Img": "http://192.168.0.88/file/upload/201605/24/22-00-21-52-1.png",
	        "I": "",
	        "IsDelete": false,
	        "FirstLetter": null
        }, {
	        "Id": 13,
	        "Name": "天天酷跑苹果版",
	        "Alias": "tiantiankupaopingguoban",
	        "Letter": "t",
	        "IsHot": true,
	        "Parentid": 7,
	        "Order": 95,
	        "Platform": 1,
	        "Img": "http://192.168.0.88/file/upload/201605/24/22-01-04-14-1.png",
	        "I": "",
	        "IsDelete": false,
	        "FirstLetter": null
        }]
           
          },

          gnamek(id){
          //    if(id == 0){
          //    this.gname = '手机充值';
          //}else{
          //    alert('other pages')
          //}
              //var that = this;
              switch(id){
                  case 0 : this.vmdata.gname = '手机充值'
                      break;
        case 1: this.vmdata.gname = '游戏币'
            break;
        case 3: this.vmdata.gname = '账号'
            break;
        case 5: this.vmdata.gname = '代练'
            break;
        case 2: this.vmdata.gname = '装备'
            break;
    }
          }
      }
    };
</script>