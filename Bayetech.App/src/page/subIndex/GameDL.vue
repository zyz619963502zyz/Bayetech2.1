
    <!--<link rel="stylesheet" href="../../content/css/fost-base-min.css">
    <link rel="stylesheet" href="../../content/css/common.css"/>
    <link rel="stylesheet" href="../../content/css/game-dl.css"/>-->
<template>
  <div class="app app-touch ">
    <div id="wrapper">
      <div class="dlHeader">
        <div class="top-header border-bottom bg-fff fixed-top">
          <div class="top-back" @click="$router.go(-1)"><a></a></div>
          <h2 class="f36">代练主页</h2>
          <!---->
          <!---->
          <div class="dl-right">
            <a href="/vue/dl/dl-center/1" class="">
              <span class="dl">我的代练</span>
            </a>
          </div>
        </div>
      </div>
      <div class="dlIndex">
        <section class="wh_content border-bottom  mt-97">
          <swiper></swiper>
        </section>
        <div class="index-swiper bg-fff border-bottom pb-30 pt-10">
          <ul>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://html.5173.com/yunyin/201705/txtb/lol.jpg">
                                </span>
                <p class="f26 color-000">英雄联盟</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://bo.5173cdn.com/5173_2/data/201803/02/DD/RAKowFq9khEAAAAAAAQb1hUQDl82..png">
                                </span>
                <p class="f26 color-000">魔兽世界(国服)</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://html.5173.com/yunyin/201705/txtb/wzry.jpg">
                                </span>
                <p class="f26 color-000">王者荣耀</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <router-link :to="{ path: '/dlList', query: { goodsType: 5,gname:'地下城与勇士'}}" class="open-indicator">

                <span>
                  <img src="http://bo.5173cdn.com/5173_2/data/201803/02/DD/RAKowFq9k3EAAAAAAAj_plLZdz08..png">
                                </span>
                <p class="f26 color-000">地下城与勇士</p>
              </router-link>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://bo.5173cdn.com/5173_2/data/201807/00/EA/RAKowFtEE1QAAAAAAAAZ2QuNJjc2..jpg">
                                </span>
                <p class="f26 color-000">逆冰塞OL</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://bo.5173cdn.com/5173_2/data/201807/00/3D/RAKowFs62Y0AAAAAAAEIXEnlwEc8..jpg">
                                </span>
                <p class="f26 color-000">逆*寒</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a class="open-indicator">
                <span>
                  <img src="http://html.5173.com/yunyin/201705/txtb/nz.jpg">
                                </span>
                <p class="f26 color-000">逆战</p>
              </a>
            </li>
            <li class="swiper-slide fl text-center pt-20">
              <a href="/vue/dl/dl-search-game" class="open-indicator">
                <span>
                  <img src="../../assets/images/mold-md.png">
                                </span>
                <p class="f26 color-000">其他游戏</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="index-swiper bg-fff border-bottom mt-20">
          <span class="dl-hot f30">热门推荐</span>
        </div>
        <div class="index-swiper bg-fff">
          <ul class="active_enter">
            <a>
              <li>
                <img src="http://bo.5173cdn.com/5173_2/data/201803/02/D4/RAKowFq86icAAAAAAAEDJiJ4XuI2..jpg">
                            </li>
            </a>
            <a>
              <li>
                <img src="http://bo.5173cdn.com/5173_2/data/201803/02/D4/RAKowFq86o8AAAAAAADzlgulpRs8..jpg">
                            </li>
            </a>
            <a>
              <li>
                <img src="http://bo.5173cdn.com/5173_2/data/201804/00/3B/RAKowFrDB4wAAAAAAACgHWDl6F43..jpg">
                            </li>
            </a>
            <a>
              <li>
                <img src="http://bo.5173cdn.com/5173_2/data/201804/00/B7/RAKowFrJtd8AAAAAAAEL2zV3Pdc3..jpg">
                            </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Swiper from "@/components/swiper.vue";
import "@/assets/content/css/fost-base-min.css";
import "@/assets/content/css/style-min.css";
import "@/assets/css/game-dl.css";

let vmdata = {
  gname:'',
  gid:''
};
vmdata.PageType = "czxv";
vmdata.goodinfoarray = 2;
export default {
  name: "gameDL",
  data() {
    return vmdata;
  },
  components: {
    Swiper
  },
  mounted: function() {

  }
};
</script>


