<!--<link rel="stylesheet" href="../../content/css/fost-base-min.css">
<link rel="stylesheet" href="../../content/css/common.css"/>
<link rel="stylesheet" href="../../content/css/game-dl.css"/>-->
<template>
  <div id="wrapper">
    <div class="dlHeader">
      <div class="top-header border-bottom bg-fff fixed-top">
        <div class="top-back" @click="$router.go(-1)"><a></a></div>
        <h2 class="f36">代练商品详情</h2>
        <!---->
        <!---->
        <!---->
      </div>
    </div>
    <div class="dlGoodsDetail mt-97 pb-200">
      <div class="det01">
        <img :src="vmdata.GoodImg" preview="1">
        <img :src="vmdata.GoodImg" preview="1">
      </div>
      <div class="det02 f30  px-30">
        <p class="catagory">地下城与勇士</p>
        <span style="padding: 0px;">{{vmdata.Title}}</span>
      </div>
      <div class="det03">
        <span class="f40">
          <i data-v-ed1c4f4e="">￥</i>{{vmdata.Price}}
        </span>
        <em class="f26">销量{{vmdata.MonthVolume}}元</em>
      </div>
      <div class="det04">
        <div class="studio mt-20">
          <div class="studio01">
            <img :src="vmdata.GoodImg">
          </div>
          <div class="studio02">
            <p class="p1 f28"></p>
            <p class="p2 f26">
              已交{{(vmdata.WorkerType == 'individual')? '':'10000元'}}保证金
            </p>
          </div>
          <div class="studio03 f26">
            <p class="s1">
              <span data-v-ed1c4f4e="">97%</span>
            </p>
            <p class="s2">
              好评率
              <em data-v-ed1c4f4e="">{{vmdata.PraisePct}}</em>
            </p>
          </div>
        </div>
      </div>
      <div class="detail-img bg-fff px-30 mt-10 pt-20">
        {{vmdata.ContentTxt}}
      </div>
      <div class="detail-img bg-fff px-30 pt-20">
        <p data-v-ed1c4f4e="" v-for="index in vmdata.ContentImg">
          <img :src="vmdata.ContentImg[index]">
        </p>
      </div>
      <div class="warcraft-button f36 fixed-bottom">
        <!--<router-link id="playerContact" class="button01" style="">联系商家</router-link>-->
        <a id="playerContact" class="button01" style="">联系商家</a>
        <router-link id="buy" :to="{path:'/dlorder',query:'123'}" class="button02" style="">立即购买</router-link>
        <!--<a id="buy" class="button02" style="">立即购买</a>-->
      </div>
    </div>

    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="img_des"><span>{{vmdata.Title}}</span></div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption pswp__caption--empty">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import Vue from 'vue';

  import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";
  import "@/assets/css/dl-detail.css";
  import { dlDetailData } from "@/testdata/Data.js";

  // photoswipe
  import preview from 'vue-photo-preview';
  import "@/assets/css/plugin/photoswipe/photoswipe.css";
  import "@/assets/css/plugin/photoswipe/default-skin/default-skin.css";
  //import "@/assets/scripts/utils/photoswipe/photoswipe.js";
  //import "@/assets/scripts/utils/photoswipe/photoswipe-ui-default.js";

  let opt = {
    fullscreenEl: false,//关闭全屏按钮
    captionEl: false,//不用默认的标题栏
    arrowEl: false,//不使用左右箭头
    tapToClose:true //点击背景关闭
  }

  Vue.use(preview,opt)

  let vmdata = {
    Id: '',
    Title: '',
    Price: '',
    WorkerType: '',
    DlNo: '',
    DLAccountId: '',
    MonthVolume: '',
    GoodImg: '',
    PraisePct: '',
    Guaranty: '',
    ContentTxt: '',
    ContentImg: [],

  };
  vmdata.PageType = "czxv";
  vmdata.goodinfoarray = 2;
  export default {
    name: "dlDetail",
    data() {
      return vmdata;
    },
    mounted: function () {

    },
    methods: {

    },
    created: function () {
      let that = this;
      let newID = this.$route.query.id;
      console.log(newID)
      if (dlDetailData && dlDetailData.length > 0) {
        that.vmdata = dlDetailData[newID]
      }

    }
  };
</script>

<style>
  .pswp__counter {
    position: absolute;
    left: 50%;
    /*margin-left: -.5rem;
    top: 0;
    color: #fff;
    opacity: .75;
    height: .96rem;
    line-height: .96rem;
    font-size: .32rem;
    width: 2.5rem;*/
  }
  .pswp__scroll-wrap .img_des {
    width: 100%;
    padding: .3rem;
    color: #fff;
    font-size: .3rem;
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,.6);
  }
    .pswp__scroll-wrap .img_des span {
      display: inline-block;
      line-height: .42rem;
      max-height: .84rem;
      overflow: hidden;
    }
</style>
