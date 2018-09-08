<template>
  <div>
    <h1>{{gname}}</h1>
    <div id="wrapper" class="search2">
      <div>
        <div class="header pl-30 clearfix border-bottom">
          <div class="header-l ps-r">
            <input type="text" placeholder="请输入游戏名称或首字母" class="f30" ref="txtkeywords"    v-model="keyWords" v-on:compositionstart="compositionstart()" v-on:compositionend="compositionend()" v-on:input="input()"   />
            <!---->
          </div>
          <router-link :to="{ path: '/'}" class="color-f7 f30 header-r">
            取消
          </router-link>

        </div>
        <!---->
      </div>
      <!---->
      <div class="rake pl-30 bg-fff " style=" position: absolute; width: 100%;" v-show="searchGameList.length>0">
        <div class=" rake-con clearfix border-bottom" v-for="game in searchGameList" v-bind:key="game.Id">
          <router-link :to="{ path: '/goodstype', query: game.queryModel }" class="dis-b clearfix ps-r">
            <div class="search-all-head rake-con-l  ps-a">
              <i></i>
              <h4 class=" f30 color-000 dis-in">{{game.Name}}</h4>
            </div>
            <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a "/>
          </router-link>
          <!---->
          <!---->
        </div>

      </div>
      <div class="pl-30 bg-fff mb-20  " v-show="searchGameList.length==0">
        <div class="his clearfix border-bottom">
          <h3 class="f30 fl color-999">搜索历史</h3>
          <div class="fr del-icon">
            <img src="/dist/src/assets/images/common/del.png?a3d03c0678b2f6cefeb71365d6021b90"/>
          </div>
        </div>
        <div class="Warrior clearfix border-bottom" v-for="game in historyGameList">
          <div class="rake-con clearfix border-bottom">
            <router-link :to="{ path: '/goodstype', query: game.queryModel }" class="dis-b clearfix ps-r">
              <div class="search-all-head rake-con-l  ps-a">
                <i></i>
                <h4 class=" f30 color-000 dis-in">{{game.Name}}</h4>
              </div>
              <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a "/>
            </router-link>

            <!---->
            <!---->
          </div>
        </div>

      </div>
      <div data-v-f8bac10c="" class="hot pl-30 bg-fff border-bottom " v-show="searchGameList.length==0">
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
  </div>

</template>
<script>
  import "@/assets/css/gameSearch.css";
    let vmdata = {
        flag: false,
        gname: "",
        gameList: [],
        keyWords: "",
        searchGameList: [],
        historyGameList:[]
    };
  export default {
    name: "gameSearch",
    data() {
        return vmdata;
    },
    mounted: function() {
        let id = this.$route.query.goodsType;

        this.getGameList();
    },
    watch: {
            keyWords: function(newval) {
                let self = this;
                if (newval) {
                    this.search();
                } else {
                    self.searchGameList = [];
                }
            }
    },
    methods: {
            compositionstart: function() {
                this.flag = true;
            },
            compositionend: function() {
                this.flag = false;
            },
            input: function() {
                var _this = this;
                setTimeout(function() {
                    if (_this.flag) {
                        _this.keyWords = _this.$refs.txtkeywords.value;
                        console.log(_this.$refs.txtkeywords.value);
                    }
                }, 0);
            },
            getGameList: function() {
                let self = this;
                try {
                    this.$get("web/api/Game/GetGameList", { game: "" }).then(function(
                    result
                    ) {
                        console.log(result);
                        console.log(self);
                        self.gameList = result.content;

                        for (let game of self.gameList) {
                            game.queryModel = {};
                            game.queryModel.id = game.Id;
                            game.queryModel.name=game.Name;
                            game.queryModel.goodsType = self.goodsType;
                        }
                        self.getHistory();
                    });
                } catch (err) {
                    console.log(err);
                }
            },
            search: function() {
                var self = this;
                self.searchGameList = self.gameList.filter(function(game) {
                    return (
                    game.Name.indexOf(self.keyWords) >= 0 ||
                    game.FirstLetter.indexOf(self.keyWords) >= 0
                    );
                });
            },
            getHistory:function(){
                var self = this;
                self.historyGameList = self.gameList.filter(function(game) {
                    return (
                    game.Name==='地下城与勇士' ||
                    game.Name==='英雄联盟'
                    );
                });
            }
    }
    };
</script>

