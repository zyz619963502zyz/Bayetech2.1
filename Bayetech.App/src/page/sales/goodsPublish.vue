<!--*
    *商品发布选择
    *
    *-->
<template>
  <div id="wrapper" style="height: 100%;">
    <div data-v-dfc73fe2="" v-show="!open_dialog">
      <div data-v-dfc73fe2="" class="top-header border-bottom fixed-top">
        <div data-v-dfc73fe2="" class="top-back" @click="$router.go(-1)">
          <a data-v-dfc73fe2="" class=""></a>
        </div>
        <h2 data-v-dfc73fe2="" class="f36">商品发布</h2>
        <div data-v-dfc73fe2="" class="top-right">
          <a data-v-dfc73fe2="" href="/" class="back-home" style="display: none;"></a>
        </div>
        <div data-v-dfc73fe2="" class="dl_seek f30">发布流程</div>
      </div>
    </div>

    <div data-v-484bcaae="" v-show="!open_dialog">
      <div data-v-484bcaae="">
        <div data-v-509ef1b0="" class="fw px-30 notice_risk Mnotice_top mt-97" data-v-484bcaae="">
          <div data-v-509ef1b0="" class="fl notice_public">
            <p data-v-509ef1b0="" class="f24 fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
          </div>
        </div>
        <div data-v-484bcaae="" style="position: absolute; width: 100%; top: 0.77rem;">
          <div data-v-484bcaae="" class="new-pubilsh01 order-container mt-97 bg-fff f30 fw">
            <span data-v-484bcaae="" class="fl f32">所属游戏</span>
            <span data-v-484bcaae="" class="fr color-000">地下城与勇士</span>
          </div>
          <div data-v-484bcaae="" class="new-pubilsh01 order-container bg-fff mt-20 f30 fw border-bottom">
            <span data-v-484bcaae="" class="f32 span-icon-xinhao color-333">商品种类</span>
          </div>
          <div data-v-484bcaae="" class="new-pubilsh01 order-container bg-fff publish-type f30 fw">
            <ul data-v-484bcaae="" class="clearfix">
              <li data-v-484bcaae="" class="fl border" :class="{selected:$isChoice('property','goodsType','account')}" @click="$chooseSingle('property','goodsType','account')">游戏帐号</li>
              <li data-v-484bcaae="" class="fl border" :class="{selected:$isChoice('property','goodsType','equip')}" @click="$chooseSingle('property','goodsType','equip')">游戏装备</li>
              <li data-v-484bcaae="" class="fl border" :class="{selected:$isChoice('property','goodsType','material')}" @click="$chooseSingle('property','goodsType','material')">材料</li>
              <li data-v-484bcaae="" class="fl border" :class="{selected:$isChoice('property','goodsType','gold')}" @click="$chooseSingle('property','goodsType','gold')">硬币批发</li>

              <!--<li data-v-484bcaae="" :class="{selected:isChoice('coins','0'),fl:true,border:true}">游戏币</li>
            <li data-v-484bcaae="" :class="{selected:isChoice('equip','0'),fl:true,border:true}">装备</li>
            <li data-v-484bcaae="":class="{selected:isChoice('tzs','0'),fl:true,border:true}">挑战书</li>
            <li data-v-484bcaae="" :class="{selected:isChoice('coinspf','0'),fl:true,border:true}">游戏币批发</li>
            <li data-v-484bcaae="" :class="{selected:isChoice('wsxjk','0'),fl:true,border:true}">无色小晶块</li>
            <li data-v-484bcaae="" :class="{selected:isChoice('mss','0'),fl:true,border:true}">魔刹石</li>
            <li data-v-484bcaae="" :class="{selected:isChoice('jjt','0'),fl:true,border:true}">矛盾的结晶体</li>-->
            </ul>
            <div data-v-484bcaae="" class="open-more-select">
              <i data-v-484bcaae="" class="icon-open active"></i>
              <span data-v-484bcaae="" class="f30 color-999">收起</span>
            </div>
          </div>
          <!-- 游戏区服 -->
          <div data-v-484bcaae="" class="new-pubilsh01 order-container bg-fff f30 fw color-000 mt-20 ">
            <span data-v-484bcaae="" class="span-icon-xinhao color-333">游戏区服</span>
            <span data-v-484bcaae="" class="danwei" @click="open_dialog=!open_dialog">{{server.Name}}</span>
            <i data-v-484bcaae="" class="toRight fr"></i>
          </div>

          <div data-v-484bcaae="" class="release fw mt-20">
            <router-link :to="{path:'/goodsPublish_' + property.goodsType}">
              <input data-v-484bcaae="" type="button" name="" value="下一步" class="bg-f54" />
            </router-link>
            <!--<a class="next"><input data-v-484bcaae="" type="button" name="" value="下一步" class="bg-f54" /></a>-->
          </div>
          <div data-v-484bcaae="" class="opacity-bomb" style="display: none;">
            <i data-v-484bcaae="" class="icon-alert fl"></i>
            <span data-v-484bcaae="" class="opacity-bomb-tip fl f32">该类商品，手机端暂时不支持发布请去PC端进行发布</span>
          </div>
        </div>
      </div>
    </div>

    <div v-show="open_dialog">
      <choose_server @cancel="cancel_choose_server" @submit="submit_choose_server"></choose_server>
    </div>
    
  </div>
  
 
</template>

<script>
  import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";
  import choose_server from '@/components/choose_server.vue'

  let vmdata = {
    open_dialog: false,
    show_choose_server: false,
    server: {Name:'请选择'},
    property: {
      goodsType: 'account'
    }
  }
  export default {
    name: 'goodsPublish',
    data() {
      return vmdata;
    },
    mounted: function () {
      let self = this;
      //this.$isChoice("test", "sex", "男");
      //this.$choose("test", "sex", "女");
      //this.$chooseSingle("test","sex","男")
    },
    methods: {
      
      nextStep: function () {

      },
      cancel_choose_server: function () {
        this.open_dialog = false;
      },
      submit_choose_server: function (server) {
        this.open_dialog = false;
        this.server = server;
      }
    },
    components: {
      choose_server: choose_server
    }
    
  }
</script>

<style>
  .top-header[data-v-dfc73fe2] {
    z-index: 62 !important;
  }
  .top-header .top-right {
    font-size: .3rem;
    color: #1864ff;
    padding-right: .3rem;
  }
  .dl_seek[data-v-dfc73fe2] {
    height: .96rem;
    line-height: .96rem;
    position: fixed;
    top: 0;
    right: 0;
    padding-right: .3rem;
    color: #1864ff;
  }

.notice_risk[data-v-509ef1b0] {
    height: auto;
    display: block;
    overflow: hidden;
    background-color: #fffdf4;
    z-index: 9;
}
  .Mnotice_top {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .notice_risk .notice_public[data-v-509ef1b0] {
    padding: .2rem 0;
    width: 95%;
  }
  .notice_risk .notice_public p[data-v-509ef1b0] {
    height: .35rem;
    line-height: .35rem;
    color: #be8600;
    overflow: hidden;
  }
  .order-container {
    padding: .24rem .4rem;
    position: relative;
    height: auto;
    display: block;
    overflow: hidden;
  }
  .new-pubilsh01.order-container {
    padding: .2rem .3rem .2rem .2rem;
  }
  .order-container span {
    display: inline-block;
    line-height: .6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .new-pubilsh01.order-container .span-icon-xinhao {
    color: #333;
  }
  .span-icon-xinhao {
    display: inline-block;
    line-height: .48rem;
    padding-left: .2rem;
    background: url(../../assets/images/common/icon-red.png) no-repeat 0;
    background-size: .14rem .14rem;
  }
  .new-pubilsh01.publish-type {
    padding: .3rem .4rem 0;
    text-align: center;
  }
    .new-pubilsh01.publish-type ul li {
      width: 31%;
      height: .76rem;
      line-height: .76rem;
      border-color: #b5b5b5;
      color: #000;
      margin-bottom: .3rem;
      margin-right: .24rem;
      border-radius: .06rem;
    }
  /*.publish-type ul li.selected {
    border-color: #f60;
    background: url(/dist/src/assets/images/check.png) no-repeat 100% 100%;
    background-size: 22%;
  }*/
  .new-pubilsh01.publish-type ul li.selected {
    border-color: #f60;
    background-image: url(../../assets/images/common/icon-new-check.png);
    background-repeat: no-repeat;
    background-position:100% 100%;
    background-color: #fff7f5;
    background-size: 22%;
  }
  
      .new-pubilsh01.publish-type ul li:nth-child(3n) {
        margin-right: 0;
      }
    .new-pubilsh01.publish-type .open-more-select {
      padding-bottom: .4rem;
    }
      .new-pubilsh01.publish-type .open-more-select .icon-open.active {
        transform: rotate(180deg);
      }
      .new-pubilsh01.publish-type .open-more-select .icon-open {
        width: .22rem;
        height: .13rem;
        display: inline-block;
        background: url(../../assets/images/Icon/mold-sv.png) no-repeat 50%;
        margin-bottom: .02rem;
        background-size: 100%;
        transition: all .2s linear;
      }
      .new-pubilsh01.publish-type .open-more-select span {
        line-height: .34rem;
        overflow: visible;
      }
  .danwei {
    float: right;
    width: 63%;
    line-height: .6rem;
    text-align: right;
    padding-right: .2rem;
  }
  .new-pubilsh01.order-container .danwei {
    right: .6rem;
  }
.toRight { height: .32rem; top: .38rem; background: url('../../assets/images/right2.png') 50% no-repeat; background-size: .12rem; }
  .new-pubilsh01.order-container .toRight {
    top: .35rem;
  }
  .release {
    padding: .3rem;
    text-align: center;
    background: #fff;
  }
    .release a {
      width: 100%;
      height: .86rem;
      display: inline-block;
    }
      .release a input {
        background: #f60;
        border-radius: .1rem;
      }
      .release a input {
        width: 100%;
        height: .86rem;
        border: none;
        color: #fff;
        font-size: .36rem;
      }

      /*发布提示*/
  .opacity-bomb {
    width: 90%;
    padding: .4rem;
    background: rgba(0,0,0,.7);
    border-radius: .1rem;
    position: fixed;
    margin-left: 5%;
    z-index: 999;
    top: 50%;
    margin-top: -1.42rem;
  }
    .opacity-bomb .icon-alert {
      width: .7rem;
      height: .7rem;
      display: inline-block;
      background: url(../../assets/images/Icon/icon-alert.png) no-repeat 50%;
      background-size: 100%;
      margin-right: .28rem;
      margin-top: .1rem;
    }
    .opacity-bomb .opacity-bomb-tip {
      width: 5rem;
      color: #fff;
      line-height: .52rem;
      display: inline-block;
    }
    /*加载动画  见style-min*/
  
  
</style>
