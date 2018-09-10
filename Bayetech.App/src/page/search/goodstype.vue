
    

<template>


    <div id="wrapper">
        <div class="top-header fixed-top border-bottom" style="z-index: 61;">
            <div class="top-back">
              <router-link :to="{ path: '/gameSearch'}" class="color-f7 f30 header-r">
                取消
              </router-link>
            </div>
            <h2 class="f36">{{gname}}</h2>
            <div class="top-right"></div>
        </div>
        <div class="fixedspace2" style="height: 0.96rem;"></div>
        <div class="search-game border-bottom fw">
            <div class="sgame fw bg-fff f30">
                <span>请选择商品类型</span>
            </div>
        </div>
        <div class="search-list pb-200 fw ">
            <div class="slist fw f30">
                <!---->
                <ul class="style03">
                    <li class="bg-fff"  v-for="goodsType in goodsTypes">
                      <router-link :to="{ path: '/goodsList', query: goodsType.queryModel }" class="dis-b clearfix ps-r">
                         {{goodsType.Name}}
                      </router-link>
                    </li>
                
                </ul>
            </div>
        </div>
        <div data-v-9a6d962a="">
            <div data-v-9a6d962a="" id="navigation"></div>
            <div data-v-9a6d962a="" id="navigationModal">
                <span data-v-9a6d962a="">
                    <div data-v-9a6d962a="" id="navigationList" class="navigationList" style="display: none;">
                        <div data-v-9a6d962a="" class="navigationBody f28 fw">
                            <a data-v-9a6d962a="" href="https://m.5173.com/" class="nav01">
                                <span data-v-9a6d962a=""></span>主页
                            </a>
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=3&amp;typename=%E6%B8%B8%E6%88%8F%E5%B8%81" class="nav02">
                                <span data-v-9a6d962a=""></span>买游戏币
                            </a>
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=2&amp;typename=%E5%B8%90%E5%8F%B7" class="nav03">
                                <span data-v-9a6d962a=""></span>买帐号
                            </a>
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/dl" class="nav04">
                                <span data-v-9a6d962a=""></span>代练
                            </a>
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=1&amp;typename=%E8%A3%85%E5%A4%87" class="nav07">
                                <span data-v-9a6d962a=""></span>买装备
                            </a>
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/center" class="nav08">
                                <span data-v-9a6d962a=""></span>我的
                            </a>
                        </div>
                        <div data-v-9a6d962a="" class="navigationBuy f32 fw">
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/sell-home/2" class="toBuy">我要卖</a>
                        </div>
                        <div data-v-9a6d962a="" class="navigationClose fw">
                            <a data-v-9a6d962a="" href="https://m.5173.com/vue/search-all-app/search-class?gid=44343b06076d4a7a95a0ef22aac481ae&amp;gname=%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB&amp;gameType=1&amp;type=special#" class="toClose">关闭</a>
                        </div>
                    </div>
                    <div data-v-9a6d962a="" class="maskdiv4" style="display: none;"></div>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
  import "@/assets/css/goodtype.css";
 
  let vmdata ={
  goodsTypes:[],
  gname:'',
  gid:'',
  gameList:[]
  };
  export default {
  name: "goodtype",
  data() {
  return vmdata;
  },
  mounted:function(){
  this.gname=this.$route.query.name;
  this.gid=this.$route.query.id;
  this. getGoodsType();
  },
  methods:
  {
  getGoodsType:function (params) {
  let self = this;
  try {
  self.$get("web/api/GoodType/GetGoodType", { gameid: 1,type:'good' }).then(function(result) {
  self.goodsTypes = result.content;
  console.log( self.goodsTypes);
  for (let goodsType of self.goodsTypes) {
  goodsType.queryModel = {};
  goodsType.queryModel.gameId = self.gid;
  goodsType.queryModel.gameName=self.gname;
  goodsType.queryModel.goodsType = goodsType.Id;
  goodsType.queryModel.goodsTypeName = goodsType.Name;
  }

  });
  } catch (err) {
  console.log(err);
  }
  }

  }

  };
</script>