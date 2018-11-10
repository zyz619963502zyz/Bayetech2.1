<!--<link rel="stylesheet" href="../../content/css/fost-base-min.css">
<link rel="stylesheet" href="../../content/css/common.css"/>
<link rel="stylesheet" href="../../content/css/game-dl.css"/>-->
<template>
    <div id="wrapper">
        <div class="dlHeader">
            <div class="top-header border-bottom bg-fff fixed-top">
                <div class="top-back" @click="$router.go(-1)"><a></a></div>
                <h2 class="f36">{{gname}}</h2>
                <!--<div class="dl-right f24 color-666">
                    切换游戏
                </div>-->
            </div>
        </div>
        <!--列表-->
        <div class="dlGame mt-97">
          <div class="prov-conn px-30 bg-fff border-bottom mt-20 py-20">
            <span class="color-m1 f28 default-sort border-right">默认排序</span>
            <input name="" @change="filterShop" v-model="condition.checkVal" type="checkbox" class="num-radio fl">
            <span class="default-sort01 f28 color-333">仅显示商城店铺</span>
          </div>

          <div class="mageslt bg-faf px-30 pb-30 border-bottom" v-for="(DlGood,index) in dlList" :key="index">
            <div class="mancon-img fl mt-30">
              <img :src="DlGood.GoodImg">
            </div>
            <router-link :to="{ path: '/dlDetail', query:{id:DlGood.Id}}" class="open-indicator">
              <div class="mancon-tn mt-15">
                <div class="tn-hxtxt01 f32 color-000">{{DlGood.Title}}</div>
                <div class="tn-hxtxt02 f24 color-bbb" v-bind:class="(DlGood.WorkerType == 'individual')?'bgNone':''">QQ888</div>
                <div class="tn-hxtxt03 f26 color-666">
                  <em class="fl f30 color-m1">￥{{DlGood.Price}}</em>
                  <em class="fr f24 color-bbb">近30天成交{{DlGood.MonthVolume}}笔</em>
                </div>
              </div>
            </router-link>
          </div>
          <div class="page-infinite-loading" v-show="waterInfo.loading">
            <span class="loading">加载中...</span>
          </div>
        </div>
    </div>

</template>
<style scoped></style>
<script>
import "@/assets/content/css/fost-base-min.css";
import "@/assets/content/css/style-min.css";
import "@/assets/css/dl-list.css";
import { dlListData } from "@/testdata/Data.js";
  let vmdata = {
    waterInfo: {
      loading: false,
      index: 0,
      lastPageIndex: 3,
      loadLock: false,
      isEnd: false
    },
    condition: {
      checkVal: false //复选按钮，是否为商家
    },
    dlList: [],
    gname: '游戏名称',
    Pagenation: {
      rows: 10,
      page: 1,
      order: "GoodNo",
      sord: "asc",
      records: 10,
      total: 10
    }
    /*postdata 或者 getdata 等接口确定再定*/
    //,postData: {
    //    Id:'',  //
    //    Title:'',
    //    Price:'',
    //    WorkerType:''
    //    MonthVolume:'',
    //    GoodImg:''
    //}
  };
    //vmdata.PageType = "czxv";
    //vmdata.goodinfoarray = 2;

  export default {
    name: "dlList",
    metaInfo: {
      title: '地下城与勇士',
    },
    data() {
      return vmdata;
    },
    mounted: function () {
      this.gname = this.$route.query.gname;      
      this.getGoodsList();
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        let that = this;
        // console.log(document.body.clientHeight)  // 网页可见区域高
        
        console.log(
         '距离:'+(document.body.clientHeight -
          window.scrollY -
          document.documentElement.clientHeight)
        );
        if (
          document.body.clientHeight -
          window.scrollY -
          document.documentElement.clientHeight <
          10 &&
          !that.waterInfo.loadLock &&
          !that.waterInfo.isEnd
        ) {
          that.waterInfo.loadLock = true;
          console.log("加载");
          that.getGoodsList(false);
        }
      },
      
      getGoodsList: function (isreset = true) {
        //testData();
        let that = this;
        //debugger;
        if (!!isreset) {
          that.dlList = [];
          that.waterInfo.index = 0;
          that.waterInfo.isEnd = false;
        }
        try {
          //console.log(dlListData)
          that.waterInfo.loading = true;
          //let data = [];
          //data = dlListData;
          //console.log(data)
          if (dlListData) {
            for (let datas of dlListData) {
              that.$set(that.dlList, that.dlList.length, datas)
            }
          } else {
            that.waterInfo.isEnd = true;
          }
          that.waterInfo.loadLock = false;
          that.waterInfo.index++;

          if (that.waterInfo.index >= that.waterInfo.lastPageIndex) {
            that.waterInfo.isEnd = true;
          }
          that.waterInfo.loading = false;
          //let data = {};
          //data.Pagenation = that.Pagenation;
          //data.Param = that.postData;
          //that.$post('http://localhost:15786/api/GoodInfo/GetList', data).then(function(res){
          //    console.log(res)
          //    if(res.result){
          //        for(let datas of res.content.datas){
          //            that.$set(that.dlList, that.dlList.length, datas)
          //        }
          //    }
          //})
        } catch (err) {
          console.log(err)
        }
      },
      filterShop() {
        let that = this;
        let tempArr = [];
        if (that.condition.checkVal) {
          that.condition.checkVal = true;
          for (let datas of dlListData) {
            console.log(datas)
            
          }
        } else {

        }
      }
    }
  }
</script>
