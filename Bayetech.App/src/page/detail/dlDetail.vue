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
        <img :src="vmdata.GoodImg">
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
  </div>


</template>
<style scoped></style>
<script>
  import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";
  import "@/assets/css/dl-detail.css";
  import { dlDetailData } from "@/testdata/Data.js";

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
    ContentImg: []
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


