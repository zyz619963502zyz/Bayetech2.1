
   <!--个人中心-->
<template>
 
  <div>
    <div >
      <div id="wrapper">
        <div class="top-header border-bottom">
          <!---->
          <div class="top-bt3" style="text-align: center;">
            <!---->
            <span id="member-bt" class="f36">个人中心</span>
          </div>
          <!---->
        </div>
        <!---->
        <div class="maskdiv" style="z-index: 6; display: none;"></div>
        <div class="fw po-re mb192 member-main">
          <a id="aLogin">
            <div class="po-re fw bg-fff  member-list-user">
              <div class="fl text-left po-re list-left-user">
                <img src="https://m.5173.com/images/Icon/tx_nologin.png" class="loginImg">
                <span id="spLoginInfo" class="notlogin" style="padding-top: 0.16rem;">
                  <!---->
                  <em id="member-name" class="color-000">幸运柠檬</em>
                  <em class="color-666">pa_84pwmsqjz</em>
                </span>
              </div>
              <div class="list-right-user fr po-re text-left">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/buyerCenter/buyOrderList/-1" class="" >
            <div class="member-list border-bottom po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon01 ml-30 f32 color-000 d-inline-block">我是买家</span>
              </div>
              <div class="list-right fr po-re text-right color-333">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/membersellers" class="" >
            <div class="member-list po-re fw bg-fff">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon02 ml-30 f32 color-000 d-inline-block">我是卖家</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/my-collect/collect-lists" class="" >
            <div class="member-list border-bottom po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon06 ml-30 f32 color-000 d-inline-block">我的收藏</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/browsing-history/history-lists" class="" >
            <div class="member-list border-bottom po-re fw bg-fff">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon07 ml-30 f32 color-000 d-inline-block">浏览记录</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/redPaper" class="" >
            <div class="member-list po-re fw bg-fff">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon14 ml-30 f32 color-000 d-inline-block">我的红包</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/my-account" class="tixian_gc">
            <div class="member-list po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left withdrawal-cash">
                <span class="newm-icon04 ml-30 f32 color-000 d-inline-block">
                  我的账户
                  <i >0元</i>
                </span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                提现
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/dlCenter/member/dl-my-center">
            <div class="member-list po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon08 ml-30 f32 color-000 d-inline-block">我的代练</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <em class="f24 color-999">适用3月28日前订单</em>
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/kf" class="" >
            <div class="member-list po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left">
                <span class="newm-icon13 ml-30 f32 color-000 d-inline-block">客服中心</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/memberseller/publish" class="" style="display: none;">
            <div class="member-list border-top border-bottom po-re fw bg-fff mt-20">
              <div class="list-left fl po-re text-left">
                <span class="icon-s01 ml-30 f32 color-000 d-inline-block">发布单管理</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30 mWidth">
                <span ></span>
              </div>
            </div>
          </a>
          <a href="/vue/memberseller?orderstatus=" class="" style="display: none;">
            <div class="member-list po-re fw bg-fff ">
              <div class="list-left fl po-re text-left">
                <span class="icon-s02 ml-30 f32 color-000 d-inline-block">订单管理</span>
              </div>
              <div class="list-right fr po-re text-right color-333 f30 mWidth">
                <span ></span>
              </div>
            </div>
          </a>
        </div>
        <div id="centerId"></div>
        <div >
          <BottomNav></BottomNav>
          <!---->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";
  import BottomNav from "@/components/bottomNav.vue";

let vmdata = {
  gname:'',
  gid:''
};

export default {
  name: "gameDL",
  data() {
    return vmdata;
  },
    components: {
      BottomNav
    },
  mounted: function() {

  }
};
</script>

<style>
  .input-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    background-color: #fff;
    transform: translate(-300px) scale(4);
    height: 40px;
    opacity: 0;
    filter: alpha(opacity=0)
  }

  input[type=number], input[type=tel], input[type=text] {
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    border: 0
  }

  .po-re {
    position: relative
  }

  .mb192 {
    margin-bottom: 1.92rem
  }
</style>
<style scoped>
  

  .member-list-user {
    box-sizing: border-box;
    line-height: 1.3rem;
    padding: .3rem
  }

    .member-list-user .list-left-user img {
      float: left;
      width: 1.3rem;
      height: 1.3rem
    }

    .member-list-user .list-left-user span {
      float: left;
      padding-left: .27rem;
      line-height: 1.3rem;
      padding-top: .16rem
    }

      .member-list-user .list-left-user span em {
        display: block;
        font-size: .3rem;
        line-height: 1.6
      }

    .member-list-user .list-right-user {
      width: .48rem
    }

      .member-list-user .list-right-user span {
        display: block;
        background: url(../../assets/images/right.png) 100% no-repeat;
        height: 1.3rem;
        width: .48rem;
        background-size: .13rem
      }

  .member-list {
    line-height: 1.1rem;
    clear: both
  }

    /* .member-list .list-left {
      width: 60%
    }

      .member-list .list-left .m-icon01 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon01.png?a2792efec55fec727b17a984626057b8) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .4rem
      }

      .member-list .list-left .m-icon02 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon02.png?70319677389b11ed215f5ed35257d0ac) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .4rem
      }

      .member-list .list-left .m-icon03 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon08.png?2598662431dadbae253bad4738ec99cc) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .4rem
      }

      .member-list .list-left .m-icon10 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon10.png?e4d686c094b25f849d68a81c8651698f) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .4rem
      }

      .member-list .list-left .m-icon12 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon12.png?06ee4bf4052c9524eb98f3b5770d5f9f) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .4rem
      }

      .member-list .list-left .m-icon13 {
        padding-left: .7rem;
        background: url(../../assets/images/Icon/newm-icon13.png?f6c2fbf4c02bb787f3ba2392a2b90c40) 0 no-repeat;
        line-height: 1.1rem;
        background-size: .51rem
      }*/

      .member-list .list-left span i {
        color: #f60;
        padding-left: .2rem
      }

    .member-list .list-right {
      width: 40%
    }

      .member-list .list-right span {
        background: url(../../assets/images/right.png) 100% no-repeat;
        margin-right: .3rem;
        padding-left: .45rem;
        background-size: .13rem
      }

  .member-setup .setup-list-tx {
    line-height: 1rem;
    padding: .3rem;
    box-sizing: border-box;
    margin-bottom: .2rem
  }

    .member-setup .setup-list-tx .list-left-tx span {
      display: block;
      font-size: .32rem;
      color: #333;
      line-height: 1rem
    }

  .member-setup .list-right-tx span img {
    height: 1rem;
    width: 1rem;
    margin-right: .48rem
  }

  .member-setup .list-right-tx span {
    background: url(../../assets/images/right.png) 100% no-repeat;
    background-size: .13rem
  }

  .member-setup .setup-list {
    line-height: 1rem
  }

    .member-setup .setup-list .list-left span {
      display: block;
      padding-left: .3rem;
      font-size: .32rem;
      color: #333;
      line-height: 1rem
    }

  .member-setup .list-right span {
    display: block;
    background: url(../../assets/images/right.png) 100% no-repeat;
    margin-right: .3rem;
    padding-right: .48rem;
    background-size: .13rem;
    font-size: .32rem
  }

  .fixed-button5 a {
    display: block;
    line-height: 1.08rem;
    background: #fff;
    color: #f60;
    font-size: .36rem;
    text-align: center
  }

  .top-right a {
    display: inline-block;
    padding-right: .3rem
  }

    .top-right a img {
      font-size: 0;
      width: .45rem
    }

  .messge-tuis {
    padding: .2rem .3rem;
    box-sizing: border-box
  }

    .messge-tuis .tuis-titl {
      height: .48rem;
      line-height: .48rem
    }

      .messge-tuis .tuis-titl span {
        font-size: .26rem;
        color: #999;
        float: right
      }

    .messge-tuis .tuis-conn {
      height: auto;
      display: block;
      overflow: hidden
    }

      .messge-tuis .tuis-conn p {
        font-size: .3rem;
        line-height: .45rem;
        color: #333
      }

  .border-bottom2 {
    border-bottom: .2rem solid #f1f1f1 !important
  }

  .member-tab, .member-tab .pro-col {
    float: left;
    width: 100%
  }

    .member-tab .pro-list {
      padding: .3rem;
      width: 100%;
      box-sizing: border-box
    }

      .member-tab .pro-list .pro-pic {
        width: 1.28rem;
        overflow: hidden;
        height: 1.28rem;
        line-height: 1.28rem;
        z-index: 3;
        float: left
      }

        .member-tab .pro-list .pro-pic img {
          height: 1.28rem;
          width: 100%;
          vertical-align: top
        }

  .pro-list .pro-pic .cata-jin {
    z-index: 1;
    position: absolute;
    top: 0;
    left: .95rem;
    width: .33rem;
    height: .33rem;
    background: #e7b955;
    line-height: .33rem
  }

  .member-tab .pro-list .pro-title {
    box-sizing: border-box;
    overflow: hidden;
    line-height: .44rem
  }

    .member-tab .pro-list .pro-title p.catagory {
      height: .4rem;
      line-height: .4rem;
      white-space: nowrap;
      overflow: Hidden
    }

    .member-tab .pro-list .pro-title p.title4 {
      display: block;
      line-height: .4rem;
      padding-top: .072rem
    }

    .member-tab .pro-list .pro-title p.title {
      display: block;
      overflow: hidden
    }

  .member-tab .pro-list2 {
    padding: .15rem .3rem;
    width: 100%;
    box-sizing: border-box
  }

    .member-tab .pro-list2 .buyer-status6 {
      display: inline-block;
      padding-left: .2rem;
      margin: .15rem 0;
      vertical-align: middle;
      background: url(/dist/src/assets/images/curent.jpg?fbc7f18e85cda413e70becd06d7c8ab6) left .104rem no-repeat;
      line-height: .45rem;
      box-sizing: border-box;
      background-size: .06rem
    }

    .member-tab .pro-list2 .buyer-chat {
      background: url(../../assets/images/right.png) 100% no-repeat;
      width: 1.25rem;
      height: .65rem;
      text-indent: -9999px;
      background-size: .13rem
    }

  .pro-list .pro-pic .cata-a {
    background: #8fabf5
  }

  .pro-list .pro-pic .cata-a, .pro-list .pro-pic .cata-xu {
    z-index: 1;
    position: absolute;
    top: 0;
    left: .95rem;
    width: .33rem;
    height: .33rem;
    line-height: .33rem
  }

  .pro-list .pro-pic .cata-xu {
    background: #7dd662
  }

  .pro-list .pro-pic .cata-dai {
    background: #66c6fb
  }

  .pro-list .pro-pic .cata-dai, .pro-list .pro-pic .cata-shou {
    z-index: 1;
    position: absolute;
    top: 0;
    left: .95rem;
    width: .33rem;
    height: .33rem;
    line-height: .33rem
  }

  .pro-list .pro-pic .cata-shou {
    background: #ef83ee
  }

  .pro-list .pro-pic .pro-cata3 {
    background: #356fcc
  }

  .pro-list .pro-pic .pro-cata2, .pro-list .pro-pic .pro-cata3 {
    z-index: 1;
    position: absolute;
    top: 0;
    left: .95rem;
    width: .33rem;
    height: .33rem;
    line-height: .33rem
  }

  .pro-list .pro-pic .pro-cata2 {
    background: #d7663f
  }

  .pro-list .pro-pic .pro-cata {
    z-index: 1;
    position: absolute;
    top: 0;
    left: .95rem;
    width: .33rem;
    height: .33rem;
    background: #4bd934;
    line-height: .33rem
  }

  .member-tab .pro-list2 .buyer-btn-zf {
    display: inline-block;
    font-size: .3rem;
    vertical-align: middle;
    color: #2d70ff;
    height: .76rem;
    line-height: .76rem
  }

    .member-tab .pro-list2 .buyer-btn-zf a {
      color: #2d70ff
    }

  #clipArea {
    height: 6.48rem
  }

  #clipBtn {
    margin: .48rem .96rem;
    background: #f75f47;
    color: #fff
  }

  #clipBtn, .member-main .input-file {
    display: inline-block;
    float: left;
    width: 5.76rem;
    height: .96rem;
    line-height: .96rem;
    text-align: center;
    font-size: .3rem;
    font-family: \\5FAE\8F6F\96C5\9ED1
  }

  .member-main .input-file {
    position: relative;
    overflow: hidden;
    margin: 0 .96rem .48rem;
    background: #fff;
    color: #000;
    border: 1px solid #dedede;
    box-sizing: border-box
  }

  .member-setup2 .setup-input {
    padding: .2rem 0
  }

    .member-setup2 .setup-input input {
      padding: 0 .3rem;
      height: .8rem;
      line-height: .8rem;
      border: 0;
      box-sizing: border-box
    }

  .fixed-button {
    z-index: 3
  }

    .fixed-button .redbutton a {
      margin: .3rem;
      display: block;
      line-height: .82rem;
      background: #f60;
      color: #fff;
      font-size: .36rem;
      text-align: center
    }

  .login-mobile .login-content {
    box-sizing: border-box;
    padding: 0 .3rem;
    clear: both
  }

    .login-mobile .login-content .login-bt {
      width: 20%
    }

      .login-mobile .login-content .login-bt span {
        display: block;
        font-size: .32rem;
        color: #000;
        line-height: 1.64rem
      }

    .login-mobile .login-content .login-input2 {
      width: 70%
    }

      .login-mobile .login-content .login-input2 input {
        height: 1.64rem;
        line-height: .6rem;
        border: 0
      }

    .login-mobile .login-content .login-del {
      width: 10%
    }

      .login-mobile .login-content .login-del a {
        float: right;
        width: 100%;
        height: 1.64rem;
        background: url(/dist/src/assets/images/del.png?a537a56f4088ef5981d19f125d0ea7ae) 100% no-repeat;
        text-indent: -9999px;
        background-size: .41rem
      }

        .login-mobile .login-content .login-del a img {
          width: .41rem
        }

  #slider {
    margin: .3rem .48rem;
    height: 1.06rem;
    position: relative;
    border-radius: 2px;
    background-color: #ddd;
    overflow: hidden;
    text-align: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none
  }

  #slider_bg {
    height: 100%;
    background-color: #7ac23c;
    z-index: 1
  }

  #label, #slider_bg {
    position: absolute;
    left: 0;
    top: 0
  }

  #label {
    width: .96rem;
    height: 1.06rem;
    line-height: 1.04rem;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 3;
    cursor: move;
    color: #ddd;
    font-size: .36rem;
    font-weight: 900;
    font-family: none;
    box-sizing: border-box
  }

  #labelTip {
    position: absolute;
    left: .48rem;
    width: 100%;
    height: 100%;
    font-size: .36rem;
    font-family: Microsoft Yahei,serif;
    color: #000;
    line-height: 1.06rem;
    text-align: center;
    z-index: 2
  }

  .withdrawal {
    font-family: Microsoft Yahei,Arial,sans-serif
  }

    .withdrawal .list-left5 {
      line-height: .6rem;
      padding: .48rem 0
    }

      .withdrawal .list-left5 span {
        color: #f60;
        padding: 0 10px
      }

    .withdrawal .list-left3 {
      width: 65%;
      font-size: 0;
      letter-spacing: normal;
      word-spacing: normal;
      line-height: 1.2rem
    }

      .withdrawal .list-left3 span {
        float: left;
        font-size: .32rem;
        padding-right: .2rem
      }

      .withdrawal .list-left3 input {
        float: left;
        width: 60%;
        font-size: .32rem;
        color: #000;
        height: 1.2rem;
        line-height: 1.2rem;
        border: 0
      }

    .withdrawal .list-right3 {
      width: 35%;
      line-height: 1.2rem;
      height: 1.2rem;
      text-align: right
    }

      .withdrawal .list-right3 .countdown {
        border: 1px solid #ccc;
        color: #000
      }

      .withdrawal .list-right3 span {
        display: inline-block;
        width: 2.08rem;
        text-align: center;
        color: #f60;
        border: 1px solid #f60;
        line-height: .8rem
      }

  .top-right .wtihdr img {
    width: .33rem
  }

  .order-pay, .order-pay .pay-money {
    height: auto;
    display: block;
    overflow: hidden
  }

    .order-pay .pay-money ul li {
      height: 1.1rem;
      line-height: 1.1rem;
      background-color: #fff;
      border-bottom: 1px solid #e8e8e8;
      padding: 0 .3rem
    }

      .order-pay .pay-money ul li span {
        display: block;
        float: left;
        line-height: 1.1rem;
        font-size: .32rem;
        color: #000;
        width: 1.7rem
      }

      .order-pay .pay-money ul li em {
        font-size: .36rem;
        color: #f60;
        font-family: Arial
      }

        .order-pay .pay-money ul li em i {
          font-size: .32rem;
          font-family: Microsoft Yahei
        }

      .order-pay .pay-money ul li .paon-input {
        display: inline-block;
        border: 0;
        width: 4.78rem;
        height: 1.1rem;
        line-height: 1.1rem;
        padding: .25rem 0
      }

    .order-pay .pay-conn {
      height: auto;
      display: block;
      overflow: hidden
    }

      .order-pay .pay-conn ul li {
        height: 1.4rem;
        border-bottom: 1px solid #e8e8e8;
        padding: 0 .3rem
      }

        .order-pay .pay-conn ul li i.lease-ico {
          display: block;
          width: .18rem;
          height: .32rem;
          background: url(/dist/src/assets/images/pay-ico.png?53756881420b95a227903113a6c6e8c4) no-repeat 0 0;
          margin-top: .56rem;
          background-size: .18rem
        }

        .order-pay .pay-conn ul li span {
          display: block;
          float: left;
          width: 4rem;
          line-height: 1.4rem;
          font-size: .32rem;
          color: #000
        }

          .order-pay .pay-conn ul li span i.pay-weix {
            background: url(/dist/src/assets/images/pay-weix.png?087bc8165193a70bda23843acc125c0f) no-repeat 0 0;
            background-size: .9rem
          }

          .order-pay .pay-conn ul li span i.pay-weix, .order-pay .pay-conn ul li span i.pay-zfb {
            width: .9rem;
            height: .9rem;
            display: inline-block;
            float: left;
            margin-top: .28rem;
            margin-right: .25rem
          }

          .order-pay .pay-conn ul li span i.pay-zfb {
            background: url(/dist/src/assets/images/pay-zfb.png?de3458de1a57422f5f7f6e1bed751df2) no-repeat 0 0;
            background-size: .9rem
          }

          .order-pay .pay-conn ul li span i.pay-cup {
            width: .9rem;
            height: .9rem;
            background: url(/dist/src/assets/images/pay-cup.png?ab2c3c619f5ef8cd04ba284c2243abea) no-repeat 0 0;
            display: inline-block;
            float: left;
            margin-top: .28rem;
            margin-right: .25rem;
            background-size: .9rem
          }

  .withdrawal .list-left4 {
    line-height: 1.2rem
  }

    .withdrawal .list-left4 em {
      color: #f60;
      font-size: .38rem
    }

  .withdrawal .list-left {
    width: 35%;
    line-height: 1.2rem;
    box-sizing: border-box
  }

  .withdrawal .list-right {
    width: 65%;
    box-sizing: border-box;
    line-height: 1.2rem
  }

    .change-alipay, .withdrawal .list-right p {
      line-height: 1.2rem
    }

      .change-alipay a {
        display: inline-block;
        color: #0043ec
      }

      .change-alipay span {
        display: inline-block;
        color: #ccc;
        padding: 0 .24rem
      }

    .withdrawal .list-right input.code {
      float: left;
      box-sizing: border-box;
      width: 50%;
      height: 1.2rem;
      line-height: .6rem;
      border: 0;
      font-size: .3rem;
      color: #000
    }

    .withdrawal .list-right a {
      box-sizing: border-box;
      width: 50%;
      text-align: right;
      display: block;
      float: right
    }

    .withdrawal .list-right em {
      display: inline-block;
      text-align: center;
      width: 85%;
      margin: 15px 0;
      font-size: .3rem;
      color: #f60;
      border: 1px solid #f60;
      line-height: .8rem
    }

  .top-header .mycard {
    position: absolute;
    right: .3rem
  }

  .withdrawal .list-left2 {
    width: 50%;
    font-size: 0;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: 1.2rem
  }

    .withdrawal .list-left2 span {
      vertical-align: middle;
      display: inline-block;
      font-size: .3rem;
      width: .8rem;
      text-align: center
    }

    .withdrawal .list-left2 img {
      float: left;
      width: .8rem
    }

    .withdrawal .list-left2 em {
      vertical-align: middle;
      display: inline-block;
      font-size: .3rem
    }

  .withdrawal .list-right2 {
    width: 50%;
    line-height: 1.2rem;
    height: 1.2rem;
    text-align: right
  }

    .withdrawal .list-right2 span {
      background: url(/dist/src/assets/images/right2.png?8d1c22296c6f3cd9451d319e98c4394d) 100% no-repeat;
      color: #999;
      padding-right: .5rem;
      background-size: .18rem
    }

  .withdrawal .list-left2 .add {
    background: url(/dist/src/assets/images/add.png?94acc96cbbb0205d9bb90b4d96bf21b3) 50% no-repeat;
    height: 1.2rem;
    background-size: .61rem
  }

  .branch {
    display: none
  }

  .withdrawal .withdrawal-list2 {
    line-height: 1.2rem
  }

    .withdrawal .withdrawal-list2 section {
      color: #000
    }

      .withdrawal .withdrawal-list2 section font {
        float: left;
        width: 35%;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .3rem
      }

      .withdrawal .withdrawal-list2 section label {
        float: right;
        width: 65%;
        text-align: left;
        height: 1.2rem;
        cursor: pointer
      }

        .withdrawal .withdrawal-list2 section label em {
          display: inline-block;
          line-height: 1.2rem;
          font-size: .3rem;
          color: #000
        }

        .withdrawal .withdrawal-list2 section label i {
          display: block;
          float: right;
          width: .18rem;
          height: 1.2rem;
          background: url(/dist/src/assets/images/right3.png?b8b15a66bcfc16eb88bf38487f4e0750) no-repeat 100%;
          margin-left: .4rem;
          background-size: .18rem !important
        }

        .withdrawal .withdrawal-list2 section label em input {
          line-height: 1rem;
          font-size: .3rem;
          color: #000;
          font-family: \\5FAE\8F6F\96C5\9ED1
        }

  .list-empty2 span {
    display: block;
    padding-top: .25rem;
    font-size: .32rem;
    color: #666
  }

  .withdrawal .withdrawal-detail {
    box-sizing: border-box;
    height: 1.4rem
  }

  .withdrawal .detail-time {
    width: 25%;
    color: #999;
    line-height: .45rem;
    vertical-align: middle;
    height: 1.4rem
  }

  .withdrawal .detail-add {
    background: url(/dist/src/assets/images/cny-red.png?e56ed56ae910f81394791ca4cc14105c) 100% no-repeat;
    background-size: .74rem
  }

  .withdrawal .detail-reduction {
    background: url(/dist/src/assets/images/cny-green.png?abf8a26fb2642281ebf2fdd9e57bd4dd) 100% no-repeat;
    background-size: .74rem
  }

  .withdrawal .detail-time .week {
    padding-top: .25rem
  }

  .withdrawal .detail-info {
    width: 75%;
    padding-left: .4rem;
    box-sizing: border-box;
    line-height: .5rem
  }

  .top-header .top-close {
    position: absolute;
    left: 0;
    min-width: 10%;
    height: .96rem
  }

    .top-header .top-close a {
      display: block;
      background: url(/dist/src/assets/images/close.png?6fa4a6f563bbc845621a362a097fc209) .3rem no-repeat;
      height: .96rem;
      padding: 0 0 0 .3rem;
      text-indent: -9999px;
      background-size: .33rem
    }

  .withdrawal .list-left6 {
    padding: .7rem 0
  }

    .withdrawal .list-left6 span img {
      width: 1.82rem
    }

    .withdrawal .list-left6 p {
      font-size: .36rem;
      color: #000;
      padding: .4rem 0 0
    }

  .withdrawal .list-left7 {
    width: 40%;
    line-height: 1.1rem;
    height: 1.1rem
  }

    .withdrawal .list-left7 span {
      color: #000;
      font-size: .3rem
    }

  .withdrawal .list-right7 {
    width: 60%;
    line-height: 1.1rem
  }

    .withdrawal .list-right7 span {
      padding-left: .1rem
    }

  .seller-list {
    height: auto;
    display: block;
    overflow: hidden
  }

    .seller-list .selist-manage {
      height: .78rem;
      line-height: .87rem
    }

    .seller-list .selist-tegory {
      height: auto;
      display: block;
      overflow: hidden
    }

      .seller-list .selist-tegory ul li {
        width: 25%
      }

        .seller-list .selist-tegory ul li .gory-main {
          display: block;
          height: auto;
          overflow: hidden;
          text-align: center
        }

          .seller-list .selist-tegory ul li .gory-main i {
            display: block;
            height: .78rem
          }

            .seller-list .selist-tegory ul li .gory-main i.tngory-01 {
              background: url(/dist/src/assets/images/Icon/tngory-01.png?6ad788649ca1b84ebb945e24e205282d) no-repeat 50%;
              background-size: .54rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-02 {
              background: url(/dist/src/assets/images/Icon/tngory-02.png?12c9e95e6fa09480e7539f57273cc838) no-repeat 50%;
              background-size: .44rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-03 {
              background: url(/dist/src/assets/images/Icon/tngory-03.png?ba8fe99ee77750a5ec138e576002504a) no-repeat 50%;
              background-size: .5rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-04 {
              background: url(/dist/src/assets/images/Icon/tngory-04.png?c53780e74b50dfb5e79abe52688af498) no-repeat 50%;
              background-size: .59rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-05 {
              background: url(/dist/src/assets/images/Icon/tngory-05.png?cb2ece120dd44c36f551296336f3cb06) no-repeat 50%;
              background-size: .53rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-06 {
              background: url(/dist/src/assets/images/Icon/tngory-06.png?8a68f2b98ee8fa42b80a89c0fd64d5be) no-repeat 50%;
              background-size: .46rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-07 {
              background: url(/dist/src/assets/images/Icon/tngory-07.png?f2dbacb1c7d03717dd1d5ceb6923ee6e) no-repeat 50%;
              background-size: .49rem
            }

            .seller-list .selist-tegory ul li .gory-main i.tngory-08 {
              background: url(/dist/src/assets/images/Icon/tngory-08.png?f0e34fcc225b7d412cd8c2b57315feee) no-repeat 50%;
              background-size: .5rem
            }

          .seller-list .selist-tegory ul li .gory-main p {
            height: .36rem;
            line-height: .36rem
          }

          .seller-list .selist-tegory ul li .gory-main i.tngory-09 {
            background: url(/dist/src/assets/images/Icon/tngory-09.png?2e2483d96ddc9e5872503579107af5f5) no-repeat 50%;
            background-size: .44rem
          }

          .seller-list .selist-tegory ul li .gory-main i.tngory-10 {
            background: url(/dist/src/assets/images/Icon/tngory-10.png?d9b37e6a5ccb6e10dcdc2fb8155c6321) no-repeat 50%;
            background-size: .44rem
          }

          .seller-list .selist-tegory ul li .gory-main i.tngory-11 {
            background: url(/dist/src/assets/images/Icon/tngory-11.png?b1147821716fdecd1fbf0b173d0cd13a) no-repeat 50%;
            background-size: .48rem
          }

          .seller-list .selist-tegory ul li .gory-main i.tngory-12 {
            background: url(/dist/src/assets/images/Icon/tngory-12.png?7327994568b86da4cb09bd3ed1de37b1) no-repeat 50%;
            background-size: .5rem
          }

  .sellmanage-main, .sellnage-nav {
    height: auto;
    display: block;
    overflow: hidden
  }

  .sellnage-nav {
    background-color: #fff;
    z-index: 10
  }

    .sellnage-nav ul li {
      width: 25%;
      height: .86rem;
      text-align: center
    }

  .websellnv ul li {
    width: 50%
  }

  .sellnage-nav ul li a {
    display: block;
    width: auto;
    height: .86rem;
    line-height: .86rem
  }

  .sellnage-nav ul li.active {
    background-color: #fff
  }

    .sellnage-nav ul li.active a {
      color: #f60;
      border-bottom: .04rem solid #f60
    }

  .manage-caption, .manage-caption .manage-titl, .sellnage-connt {
    height: auto;
    display: block;
    overflow: hidden
  }

    .manage-caption .manage-titl {
      line-height: .4rem
    }

      .manage-caption .manage-titl .manage-titl-ico {
        height: .4rem;
        background: url(/dist/src/assets/images/Icon/manage-titl-ico.png?c6ef30a8e56b23f5927bcc561ac3cd8c) no-repeat 100%;
        background-size: .14rem .18rem;
        display: inline-block;
        width: .16rem
      }

      .manage-caption .manage-titl span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 92%;
        display: inline-block
      }

    .manage-caption .manage-contn {
      height: auto;
      display: block;
      overflow: hidden
    }

    .manage-caption .mancon-img {
      width: 1.5rem;
      height: 1.5rem;
      position: relative
    }

      .manage-caption .mancon-img img {
        vertical-align: middle;
        width: 100%;
        height: 100%
      }

      .manage-caption .mancon-img i {
        display: block;
        width: 100%;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        position: absolute;
        bottom: 0;
        left: 0
      }

    .manage-caption .mancon-tn {
      margin-left: 1.73rem;
      height: auto;
      display: block
    }

      .manage-caption .mancon-tn .tn-hxtxt {
        height: .4rem;
        line-height: .4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
      }

      .manage-caption .mancon-tn .tn-title {
        height: .35rem
      }

      .manage-caption .mancon-tn .tn-equal {
        height: auto;
        line-height: .56rem
      }

      .manage-caption .mancon-tn .tn-money {
        height: .37rem;
        line-height: .45rem
      }

        .manage-caption .mancon-tn .tn-money .tnico {
          height: .37rem
        }

        .manage-caption .mancon-tn .tn-money em.axm {
          display: inline-block;
          width: .34rem;
          height: .37rem;
          background: url(/dist/src/assets/images/axm-icon.png?b34b5e06b32bce4c30ef9d6748749ce9) no-repeat 100%;
          background-size: .34rem
        }

  .mancon-titl {
    height: auto;
    display: block;
    overflow: hidden
  }

    .mancon-titl span {
      display: block;
      height: auto;
      line-height: .45rem;
      width: auto;
      min-width: 46%
    }

      .mancon-titl span i.titcur {
        background: url(/dist/src/assets/images/anfw-ico.png?949a644b98701f138cf1a50ef3e40b3f) no-repeat .3rem;
        height: 1.1rem;
        background-size: .32rem;
        width: .65rem;
        display: block
      }

      .mancon-titl span.buyct-why {
        background-position: left .05rem
      }

  .mancon-btn {
    height: auto;
    display: block;
    overflow: hidden;
    text-align: right
  }

    .mancon-btn i.titcur {
      background: url(/dist/src/assets/images/anfw-ico.png?949a644b98701f138cf1a50ef3e40b3f) no-repeat .3rem;
      height: .7rem;
      background-size: .32rem;
      width: .65rem;
      display: block
    }

    .mancon-btn a {
      display: inline-block;
      width: 22%;
      height: .7rem;
      line-height: .68rem;
      text-align: center;
      margin-left: 2%;
      border-radius: .06rem
    }

  .saleso-btn {
    height: auto;
    display: block;
    overflow: hidden
  }

    .saleso-btn a, .saleso-btn span {
      display: inline-block;
      height: .75rem;
      line-height: .75rem
    }

    .saleso-btn a {
      width: 28%;
      text-align: center
    }

  .badge2 {
    position: absolute;
    padding: 0;
    width: .2rem;
    height: .2rem;
    margin: .09rem 0 0 1.24rem;
    white-space: nowrap;
    vertical-align: baseline;
    background-color: #f60;
    border-radius: .2rem .2rem;
    text-indent: -9999px
  }

  .fixedspace {
    width: 100%;
    height: .96rem;
    margin-top: 1px
  }

  .order-container {
    padding: .24rem .3rem;
    position: relative
  }

    .order-container span {
      display: inline-block;
      height: .6rem;
      line-height: .6rem
    }

    .order-container input {
      height: .6rem;
      width: 60%;
      border: none;
      position: absolute;
      font-size: .3rem;
      top: .24rem;
      left: 2.2rem
    }

  .miaoshu {
    width: 100%;
    height: 2rem;
    border: none;
    line-height: 1.3
  }

  .upload-img {
    padding: .4rem
  }

    .upload-img .add_photo {
      width: 1.5rem;
      height: 1.5rem
    }

    .upload-img .photo_img {
      width: .54rem;
      height: .44rem;
      margin-top: .5rem;
      background: url(/dist/src/assets/images/Icon/photo.png?bf9dd3d9c0b1a47e4a5fbbe9abb823d4) no-repeat 50%;
      display: inline-block;
      cursor: pointer;
      background-size: .54rem
    }

    .upload-img div input {
      visibility: hidden
    }

  .upload-img2 {
    height: auto
  }

    .upload-img2 .img_add {
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #e8e8e8;
      background: url(/dist/src/assets/images/expo-increase-hov.png?0b955a77457d4ddeea8a7cf35cb9144f)no-repeat 50%;
      background-size: cover;
      display: inline-block
    }

    .upload-img2 .img_ad {
      position: relative;
      padding-top: .3rem
    }

      .upload-img2 .img_ad a {
        display: inline-block
      }

        .upload-img2 .img_ad a, .upload-img2 .img_ad a img {
          width: 1.5rem;
          height: 1.5rem
        }

      .upload-img2 .img_ad .close-img {
        width: .36rem;
        height: .36rem;
        position: absolute;
        top: .12rem;
        left: -.18rem
      }

  .mt-80 {
    margin-top: .8rem
  }

  .mb-80 {
    margin-bottom: .8rem
  }

  .p-40 {
    padding: .4rem 1rem
  }

  .bg-f60 {
    background: #f60
  }

  .bg-f90 {
    background: #f90
  }

  .subit_suc {
    width: 1.52rem;
    height: 1.52rem;
    background: url(/dist/src/assets/images/Icon/pay_success.png?7c62217aa37e4de9fed62a86cceda6f5) no-repeat 50%;
    display: inline-block;
    background-size: 1.52rem
  }

  .color-2a {
    color: #05942a
  }

  .order-container {
    padding: .24rem .4rem;
    position: relative
  }

  .appeal-left {
    width: 32%;
    height: auto;
    text-align: right
  }

  .appeal-right {
    width: 64%
  }

    .appeal-right .li_miaoshu {
      line-height: 1.5
    }

  .success-continue {
    box-sizing: border-box;
    width: 100%
  }

    .success-continue a {
      display: inline-block;
      width: 48%;
      height: 1.1rem;
      border-radius: .2rem;
      line-height: 1.1rem;
      box-sizing: border-box
    }

      .success-continue a:first-of-type {
        margin-right: 4%
      }

  .succ_pay p {
    width: 78%;
    display: inline-block;
    text-align: left;
    line-height: 1.5
  }

  .succ_pay a {
    border-radius: .1rem !important
  }

  .member-main .list-left-user span.notlogin {
    float: left;
    padding-left: .27rem;
    padding-top: .41rem
  }

  .bordlogin {
    border: 2px solid #f85e46
  }

  .member-main .list-left i.zh, .member-main .list-left i.zq {
    display: inline-block;
    width: .62rem;
    height: .34rem;
    padding: 0;
    margin-left: .2rem;
    vertical-align: -.048rem
  }

  .member-main .list-left i.zq {
    background: url(/dist/src/assets/images/bg-zq.png?b92b7e016f7e0f2ecf4c799b6d7bab3f) 0 no-repeat;
    background-size: 100%
  }

  .member-main .list-left i.zh {
    background: url(/dist/src/assets/images/Icon/bg-zh.png?0fc07d3cb1109d6d29206a9f25fb46e9) 0 no-repeat;
    background-size: 100%
  }

  .member-main .list-right i.hd {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    margin-right: .098rem;
    background: #f60;
    border-radius: 100%
  }

  .member-list-user .list-left-user img {
    border-radius: 50%
  }

  .member-list .list-left .newm-icon01 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon01.png?cb29a03398e2086179de1c0a64832251) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon02 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon02.png?16b87d691ca0fb44e619c3bf5ddd760f) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon03 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon03.png?9ea635f0d7339c5e70f2ae84f7e6e166) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon04 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon04.png?c72859f2e797bdb0384a8705d407c307) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon05 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon05.png?6070482be33727ed2c4fdec98d92703b) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon06 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon06.png?3df332dd83b986e827a5eafe29bf4f66) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon07 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon07.png?87312c2127a246008ae19abd91a2bd60) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon08 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon08.png?81b38f5b9cb6ab673c21f57bd45803eb) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon12 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon12.png?1bcca52c30f14810d04c3d8b74b018fc) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .member-list .list-left .newm-icon13 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon13.png?2d998daba55bf9e5c15a34d59e4dff8e) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .51rem
  }

  .member-list .list-left .newm-icon22 {
    padding-left: .7rem;
    background: url(../../assets/images/Icon/newm-icon22.png?f5bee1f8e288e056d2dd3f5708b9d6c7) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .4rem
  }

  .color-be8600 {
    color: #be8600
  }

  .bg-fffdf4 {
    background: #fffdf4
  }

  .pt-70 {
    padding-top: .7rem
  }

  .pb-70 {
    padding-bottom: .7rem
  }

  .f86 {
    font-size: .86rem
  }

  .font-bold {
    font-weight: 700
  }

  .display-block {
    display: block
  }

  .border-radius {
    border-radius: .1rem
  }

  .member-tip {
    height: .8rem;
    line-height: .8rem;
    padding-left: .6rem
  }

  .member-list .icon_toRight {
    width: .6rem;
    line-height: 1.1rem;
    height: 1.1rem;
    display: inline-block;
    background: url(../../assets/images/right.png) no-repeat 50%;
    background-size: .13rem
  }

  .member-list .list-left .newm-icon25 {
    padding-left: .7rem;
    background: url(/images/Icon/newm-icon25.png) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .51rem
  }

  .icon_coins {
    width: 2.08rem;
    height: 2.08rem;
    display: inline-block;
    background: url(/assets/images/Icon/icon_coins.png) no-repeat 50%;
    background-size: 2.08rem
  }

  .member-list .list-left .newm-icon28 {
    padding-left: .7rem;
    background: url(/assets/images/Icon/steam-num.png) 0 no-repeat;
    line-height: 1.1rem;
    background-size: .39rem
  }
</style>


