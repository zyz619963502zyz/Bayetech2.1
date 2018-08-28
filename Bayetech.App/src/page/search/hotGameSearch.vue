<template>
  <div>
    {{ $route.params.userId }}
    <div id="wrapper" class="search2">

      <div data-v-f8bac10c="" class="hot pl-30 bg-fff border-bottom ">
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
  import '@/assets/css/gameSearch.css';
  let vmdata = new Object();
  vmdata.gameList=new Array();
  export default {
  name: "hotGameSearch",
  data() {
  return vmdata;
  },
  mounted: function ()
  {
  console.log(this.$route.params.userId);
  this.getHotGame();
  }, methods: {
  getHotGame:function()
  {
  try
  {
    this.$get("web/api/Game/GetHotGameList", { type: 0, count: 10})
    .then(
      function(result)
        {
          console.log(result);
          vmdata.gameList=result;
         })
  }
  catch(err)
  {
  console.log(err)
  }
  }

  }
  };
</script>

