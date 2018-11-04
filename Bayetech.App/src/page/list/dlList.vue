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
            <input name="" type="checkbox" value="" class="num-radio fl">
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

        <!--选择游戏-->
        <!--<div class="dlSearchGame hide">
            <div class="top-search py-20 px-30 bg-c9c fixed-top mt-97">
                <div class="container-ms">
                    <div class="container-inp bg-fff"><input type="text" placeholder="搜索游戏" class="search-game"></div>
                </div>
            </div>
            <div class="search-game">
                <div class="tab">
                    <div class="tab-body" v-show="false">
                        <div id="tab-class01" class="tab-panel active">
                            <div class="tab-class01">
                                <ul>
                                    <li><a href="/vue/dl/dl-game?gname=%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F&amp;gid=d2665a7bb03645bfb16fb999891258ea" class=""><p>英雄联盟</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C%28%E5%9B%BD%E6%9C%8D%29&amp;gid=880" class=""><p>魔兽世界(国服)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&amp;gid=76bae5aefec047e89bcb6aa4e417f138" class=""><p>王者荣耀</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB&amp;gid=44343b06076d4a7a95a0ef22aac481ae" class=""><p>地下城与勇士</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%80%86%E5%86%B0%E5%A1%9EOL&amp;gid=732b38fdeb254b55a0c4d66c9ee8e164" class=""><p>逆冰塞OL</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%80%86%E6%88%98&amp;gid=28635cacb9ec416fa4109cc0d10212e1" class=""><p>逆战</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=QQ%E7%82%AB%E8%88%9E%E6%89%8B%E6%B8%B8&amp;gid=224bc1404fe246ceb1a8d35765c730a5" class=""><p>QQ炫舞手游</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%A2%A6%E5%B9%BB%E8%A5%BF%E6%B8%B82&amp;gid=1900" class=""><p>梦幻西游2</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=QQ%E9%A3%9E%E8%BD%A6%E6%89%8B%E6%B8%B8&amp;gid=b7d975e76441430e9bd782cd2f34d200" class=""><p>QQ飞车手游</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%89%91%E7%81%B5&amp;gid=1a0d128d66b24896bf7dcf7430083cf0" class=""><p>剑灵</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%A4%A9%E6%B6%AF%E6%98%8E%E6%9C%88%E5%88%80&amp;gid=3cb8fe8afd2743e08ab577cbb525650f" class=""><p>天涯明月刀</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%89%91%E4%BE%A0%E6%83%85%E7%BC%98%E2%85%A2&amp;gid=a36ead01453c40b584f8e1e687723f2d" class=""><p>剑侠情缘Ⅲ</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%9A%97%E9%BB%91%E7%A0%B4%E5%9D%8F%E7%A5%9E3%28%E5%9B%BD%E6%9C%8D%29&amp;gid=7a7ca82cf6c043b9a57d816eac7bc7c1" class=""><p>暗黑破坏神3(国服)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%9C%80%E7%BB%88%E5%B9%BB%E6%83%B314&amp;gid=0ab3b27dc612483cb06dc7cb92c390ad" class=""><p>最终幻想14</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%A9%BF%E8%B6%8A%E7%81%AB%E7%BA%BF&amp;gid=ff1c43a22868486db2f44b32f2688f23" class=""><p>穿越火线</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E4%BC%A0%E5%A5%87%E6%B0%B8%E6%81%92&amp;gid=e3409460d1024f4b84906af8af7ff18a" class=""><p>传奇永恒</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%AE%88%E6%9C%9B%E5%85%88%E9%94%8B&amp;gid=362dcec6517d4b5e9cf4b4af11e36511" class=""><p>守望先锋</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%85%B6%E5%AE%83%E6%B8%B8%E6%88%8F%E4%BB%A3%E7%BB%83&amp;gid=222222222222" class=""><p>其它游戏代练</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=QQ%E9%A3%9E%E8%BD%A6&amp;gid=5dc78ec3580b419b9e1da50def40f678" class=""><p>QQ飞车</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%BE%99%E4%B9%8B%E8%B0%B7%28%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F%29&amp;gid=62313ad921e647b6a27ec094579bec68" class=""><p>龙之谷(手机游戏)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%9D%A6%E5%85%8B%E4%B8%96%E7%95%8C&amp;gid=b7fc03af88ec46ac89e67f93817a94c2" class=""><p>坦克世界</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C&amp;gid=cc91276c877f46ceb2f98000cce03a02" class=""><p>战舰世界</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%83%A8%E8%90%BD%E5%86%B2%E7%AA%81%EF%BC%9A%E7%9A%87%E5%AE%A4%E6%88%98%E4%BA%89%EF%BC%88Clash%20Royale%EF%BC%89&amp;gid=a2e1105cb9a94f19a233f58632d6b4f9" class=""><p>部落冲突：皇室战争（Clash Royale）</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%A0%A1%E5%9E%92%E4%B9%8B%E5%A4%9C&amp;gid=8927ae8d9a4a4a5ab0430754f2a5559d" class=""><p>堡垒之夜</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%A5%9A%E7%95%99%E9%A6%99&amp;gid=0a66256d294e4488b95ccbe53ab4bb02" class=""><p>楚留香</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%AC%AC5%E4%BA%BA%E6%A0%BC%28%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%29&amp;gid=2f517e5e91104a63a1db6cab5a10a20a" class=""><p>第5人格(第五人格)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%9D%9E%E4%BA%BA%E5%AD%A6%E5%9B%AD&amp;gid=e1605edd88b64f62b7e82d1b7d15b0d0" class=""><p>非人学园</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BA%E4%B8%96%E7%95%8C&amp;gid=d845d55982a347808ec79b1a796637a5" class=""><p>怪物猎人世界</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%80%AA%E7%89%A9%E7%8C%8E%E4%BA%BAOL&amp;gid=c96417a69a86411d95be5d5e5c0c12fa" class=""><p>怪物猎人OL</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%BA%A2%E8%8E%B2%E4%B9%8B%E7%8E%8B&amp;gid=106afa10cc5f4e30ab1311a28ad17ff5" class=""><p>红莲之王</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E8%8D%92%E9%87%8E%E8%A1%8C%E5%8A%A8&amp;gid=3ca2b74bf9c44d73a53c3e22ec5133b1" class=""><p>荒野行动</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F%EF%BC%9A%E5%85%A8%E5%86%9B%E5%87%BA%E5%87%BB&amp;gid=60a2233360de4940a7704f04277f8306" class=""><p>绝地求生：全军出击</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&amp;gid=12cf597de1874a3e8fef2a4d71bc3553" class=""><p>绝地求生</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F%EF%BC%9A%E5%88%BA%E6%BF%80%E6%88%98%E5%9C%BA&amp;gid=2974d4ddb7ad4764a4977c84762e9db9" class=""><p>绝地求生：刺激战场</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%8C%8E%E9%AD%82%E8%A7%89%E9%86%92&amp;gid=3be550f651264343bae77c1574e94815" class=""><p>猎魂觉醒</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%81%B5%E5%B1%B1%E5%A5%87%E7%BC%98&amp;gid=0d1991698bcf4dcb94476d04de799de5" class=""><p>灵山奇缘</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%82%89%E7%9F%B3%E4%BC%A0%E8%AF%B4&amp;gid=c646190d768f4ab6913ab9d2b8e1ac07" class=""><p>炉石传说</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%B5%81%E6%94%BE%E4%B9%8B%E8%B7%AF&amp;gid=db296d3ce0314a45bdfa2843fb90a349" class=""><p>流放之路</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C%28%E5%8F%B0%E6%9C%8D%29&amp;gid=b1f64b1bb907418987a2c5def84baec4" class=""><p>魔兽世界(台服)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%86%92%E9%99%A9%E5%B2%9B2&amp;gid=19217d865b294d88b775744afb7bdfa5" class=""><p>冒险岛2</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%AD%94%E5%8A%9B%E5%AE%9D%E8%B4%9D%28%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F%29&amp;gid=47c01dc9d6564aa8a9dc876cccd5db0e" class=""><p>魔力宝贝(手机游戏)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%A2%A6%E5%B9%BB%E8%A5%BF%E6%B8%B8%28%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F%29&amp;gid=9ebdb1e338d64a45ac2a25d35324200d" class=""><p>梦幻西游(手机游戏)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%8B%B3%E7%9A%87%E5%91%BD%E8%BF%90&amp;gid=cb3c7cf5485d4baabc368fb839b0c078" class=""><p>拳皇命运</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E7%90%83%E7%90%83%E5%A4%A7%E4%BD%9C%E6%88%98&amp;gid=db1eac09c4bc4df5a6175f00aea05cc9" class=""><p>球球大作战</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%9C%A3%E6%96%97%E5%A3%AB%E6%98%9F%E7%9F%A2%28%E8%85%BE%E8%AE%AF%29&amp;gid=47b272f9a94c4630b5517fa7552706bc" class=""><p>圣斗士星矢(腾讯)</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%B3%B0%E4%BA%9A%E5%8F%B2%E8%AF%97&amp;gid=2c15c6907cf446fbb9d30536ff7769c6" class=""><p>泰亚史诗</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%88%91%E5%8F%ABMT4&amp;gid=cbfe7becd35f4108a42646e5291caef6" class=""><p>我叫MT4</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%98%9F%E9%99%85%E4%BA%89%E9%9C%B8II&amp;gid=49de3d3c548f455084f8eaf5421e8265" class=""><p>星际争霸II</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E9%98%B4%E9%98%B3%E5%B8%88&amp;gid=122db931f309470883948d66766f91c8" class=""><p>阴阳师</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%BD%B1%E4%B9%8B%E8%AF%97&amp;gid=d251b75f8b2d4a6e9709f1869477401f" class=""><p>影之诗</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E6%88%98%E6%84%8F&amp;gid=9ffa88ed9dc64c45b5e372ac9c1644aa" class=""><p>战意</p></a></li>
                                    <li><a href="/vue/dl/dl-game?gname=%E5%BE%81%E9%80%942%28%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F%29&amp;gid=8fa7bac118ae429d93f2532ea91bfbe2" class=""><p>征途2(手机游戏)</p></a></li>
                                </ul>
                            </div>
                            <div class="tab-letter fixed" style="margin-top: 2rem; padding-bottom: 4.6rem; height: 667px;">
                                <a class="active">
                                    <span class="hot-img"></span>
                                </a>
                                <a class="">A</a><a class="">B</a>
                                <a class="">C</a><a class="">D</a>
                                <a class="">F</a><a class="">G</a>
                                <a class="">H</a><a class="">J</a>
                                <a class="">L</a><a class="">M</a>
                                <a class="">N</a><a class="">P</a>
                                <a class="">Q</a>
                                <a class="">R</a><a class="">S</a>
                                <a class="">T</a><a class="">V</a>
                                <a class="">W</a><a class="">X</a>
                                <a class="">Y</a><a class="">Z</a>
                                <div class="letter-bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
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
    /*postdata  或者 getdata 等接口确定再定*/
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
        //  console.log(window.scrollY+document.documentElement.clientHeight)

        // console.log(document.body.clientHeight)  // 网页可见区域高
        //console.log(
        //   'clientHeight:' + (document.body.clientHeight) + ',',
        //  'window.scrollY:' + (window.scrollY) + ',',
        //  'Element.clientHeight:' + (document.documentElement.clientHeight) + ',',
        //  'result:' + (document.body.clientHeight -
        //    window.scrollY -
        //    document.documentElement.clientHeight)
        //);

        console.log(
         'result:'+(document.body.clientHeight -
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
      }
    }
  }
</script>
