<!--
    * 下订单页
    * equipment装备，account账号，coins金币，stone（挑战书）
    *
 -->
<template>

  <div data-v-7e6830d1="" id="wrapper" style="height: 100%;">
    <div data-v-7e6830d1="" class="goodslist-01" style="display: block;">
      <div data-v-7e6830d1="" class="top-header border-bottom fixed-top">
        <div data-v-7e6830d1="" class="top-back">
          <a data-v-7e6830d1="" href="javascript:history.go(-1)">返回</a>
        </div>
        <h2 data-v-7e6830d1="" class=" f32"> 下单 </h2>
      </div>
      <div data-v-7e6830d1="" class="member-tab mt-97">
        <div data-v-7e6830d1="" class="pro-list p-30 border-bottom bg-fff">
          <a data-v-7e6830d1="" href="#">
            <div data-v-7e6830d1="" class="pro-pic mr-20 bg-f1">
              <img data-v-7e6830d1="" src="http://bo.5173cdn.com/5173_2/data/201811/02/0F/RAKowFv1aGkAAAAAAADNCC9cy7457.jpg" />
              <div data-v-7e6830d1="" class="photoNumBg" style=""></div>
              <div data-v-7e6830d1="" class="photoNum f24 pl-30 color-fff" style="">
                1
              </div>
            </div>
            <div data-v-7e6830d1="" class="tabPc-title">
              <p data-v-7e6830d1="" class="title2 f30">【有效期至2018年12月21日】【有效期至2018年12月21日】【+12钻石装备增幅劵】12钻石装备增幅劵</p>
            </div>
          </a>
        </div>
        <div data-v-7e6830d1="" class="pcOrder01 px-30 bg-fff border-bottom">
          <p data-v-7e6830d1="" class="p1 f30 fl color-000">游戏区服</p>
          <p data-v-7e6830d1="" class="p1 f30 fr color-000"> 广东区/广东1区 </p>
        </div>
        <div data-v-7e6830d1="" class="pcOrder01 px-30 bg-fff border-bottom">
          <p data-v-7e6830d1="" class="p1 f30 fl">商品单价</p>
          <p data-v-7e6830d1="" class="p1 f30 fr color-m1">￥2270</p>
        </div>
        <div data-v-7e6830d1="" class="pcOrder01 bg-fff mb-20">
          <div data-v-7731dbb9="" class="weui-cells" data-v-7e6830d1="">
            <div data-v-7731dbb9="" class="weui-cell" style="height: 1rem;">
              <div data-v-7731dbb9="">
                <p data-v-7731dbb9="">购买数量</p>
              </div>
              <div data-v-7731dbb9="" class="weui-cell__ft vux-cell-primary " style="font-size: 0px;">
                <div data-v-7731dbb9="" style="float: right;">
                  <div data-v-7731dbb9="" class="vux-number-selector vux-number-selector-sub ch_sub no-select vux-number-disabled"></div>
                  <input data-v-7731dbb9="" readonly="readonly" pattern="[0-9]*" type="number" class="vux-number-input " style="width: 1rem;" />
                  <div data-v-7731dbb9="" class="vux-number-selector vux-number-selector-plus ch_add no-select vux-number-disabled"></div>
                </div>
              </div>
              <div data-v-7731dbb9="" class="weui-cell__ft vux-cell-primary" style="display: none;">
                1
              </div>
            </div>
          </div>
        </div>
        <div data-v-7e6830d1="" class="pcOrder01 px-30 mb-20 bg-f8">
          <p data-v-7e6830d1="" class="p2 f26 color-666 fl">友情提示</p>
          <p data-v-7e6830d1="" class="p2 f32 fr color-m1"><i data-v-7e6830d1="" class="right"></i></p>
        </div>
        <div data-v-92724c4c="">
          <div data-v-92724c4c="" class="order-container bg-fff f30 border-bottom">
            <i data-v-92724c4c="" class="tip"></i>
            <span data-v-92724c4c="">优惠信息</span>
          </div>
          <div data-v-92724c4c="" class="order-container bg-fff f30 mb-20">
            <a data-v-92724c4c="">
              <span data-v-92724c4c="">5173红包</span>
              <div data-v-92724c4c="" class="redbags fr">
                <span data-v-92724c4c="">无可用</span>
                <span data-v-92724c4c="" class="packet" style="display: none;">0个可用</span>
                <span data-v-92724c4c="" class="packet" style="display: none;">使用红包</span>
                <span data-v-92724c4c="" class="ml-15" style="display: none;">-￥</span>
              </div>
            </a>
          </div>
        </div>
        <div class="vux-x-switch weui-cell weui-cell_switch bg-fff mb-20 mt-20 " data-v-7e6830d1="">
          <div class="weui-cell__bd">
            <label class="label5 f30">安心买</label>
            <i class=" pcOrder02-left fl"></i>
          </div>
          <span class="price f30" style="">￥68.09</span>
          <div class="weui-cell__ft" style="">
            <input type="checkbox" class="weui-switch" />
          </div>
        </div>
        <div data-v-7e6830d1="" class="pcOrder03 bthead bg-fff">
          <h3 data-v-7e6830d1="" class="border-bottom px-30 color-000 f30"><em data-v-7e6830d1="" class="fl pr-20"></em>收货信息</h3>
          <div data-v-b0cdc27e="" id="coins" class="js-msg bg-fff clearfix" data-v-7e6830d1="" style="margin-bottom: 0.3rem;">
            <ul data-v-b0cdc27e="" class="bg-fff">
              <li data-v-b0cdc27e="" class="w-100 border-bottom clearfix lh110 px-30 f30 pr"><span data-v-b0cdc27e="" class="f30">收货角色</span> <input data-v-b0cdc27e="" type="text" name="" value="" id="username" placeholder="请输入接收装备的角色名" class="coin-input lh110 pa" style="width: 57%;" /> </li>
              <li data-v-b0cdc27e="" class="w-100 border-bottom clearfix lh110 px-30 f30 pr"><span data-v-b0cdc27e="" class="f30">角色等级</span> <input data-v-b0cdc27e="" type="tel" placeholder="请填写收货角色等级" class="coin-input lh110 pa" maxlength="4" /></li>
              <li data-v-b0cdc27e="" class=" select-qufu clearfix f30 pl-30 border-bottom"><span data-v-b0cdc27e="" class="f30">交易区服</span> <em data-v-b0cdc27e="" class="coin-input pa coindis">请选择交易区服</em> <span data-v-b0cdc27e="" class="to-right"></span></li>
              <li data-v-b0cdc27e="" class="w-100 border-bottom clearfix lh110 px-30 f30 pr"><span data-v-b0cdc27e="" class="f30">我的手机号</span> <input data-v-b0cdc27e="" type="tel" name="" id="phoneFrom" placeholder="请输入手机号" class="coin-input lh110 pa" /></li>
              <li data-v-b0cdc27e="" class="w-100 clearfix lh110 px-30 f30 pr"><span data-v-b0cdc27e="" class="f30">我的QQ号</span> <input data-v-b0cdc27e="" type="tel" name="" id="QQFrom" placeholder="请输入QQ号" class="coin-input lh110 pa" /></li>
            </ul>
            <div data-v-b0cdc27e="" id="coinsbox">
              <div data-v-64038a77="" id="drop_down" data-v-b0cdc27e="" style="display: none;">
                <div data-v-64038a77="" class="drop-down-list w-100 showlist pa">
                  <ul data-v-64038a77="" id="coins_list"></ul>
                </div>
                <div data-v-64038a77="" class="shade eqshade" style="display: block;"></div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-7e6830d1="" class="fixed-button4 bg-fff">
          <div data-v-7e6830d1="" class="fleft fl pl-30 ">
            <em data-v-7e6830d1="" class="e1 f32">合计</em>
            <em data-v-7e6830d1="" class="e2 f36">￥</em>
            <em data-v-7e6830d1="" class="e3 f40">2270</em>
          </div>
          <a data-v-7e6830d1="" class="fright f36 fr">提交订单</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";

  let vmdata = {

  };

  export default {
    name: 'gameOrder',
    data() {
      return vmdata;
    }

  }
</script>
<style>
  .top-header .top-back, .top-header .top-home {
    position: absolute;
    left: 0;
    min-width: 10%;
    height: .96rem;
  }

    .top-header .top-back a, .top-header .top-home a {
      display: inline-block;
      min-width: .55rem;
      width: 100%;
      height: .96rem;
      text-indent: -9999px;
    }

  .member-tab, .member-tab .pro-list {
    height: auto;
    display: block;
    overflow: hidden;
  }

    .member-tab .pro-list {
      width: 100%;
      box-sizing: border-box;
    }

      .member-tab .pro-col, .member-tab .pro-list a {
        float: left;
        width: 100%;
      }

      .member-tab .pro-list .pro-pic {
        float: left;
        width: 1.28rem;
        overflow: hidden;
        position: relative;
        height: 1.28rem;
        line-height: 1.28rem;
        z-index: 3;
      }

        .member-tab .pro-list .pro-pic img {
          height: 1.28rem;
          width: 100%;
          vertical-align: top;
        }

    .member-tab .pro-pic .photoNumBg {
      z-index: 1;
      position: absolute;
      bottom: 0;
      right: 0;
      background: #000;
      width: .72rem;
      height: .33rem;
      opacity: .7;
      filter: alpha(opacity=70);
    }

    .member-tab .pro-pic .photoNum {
      z-index: 2;
      position: absolute;
      bottom: .07rem;
      right: .3rem;
      width: .3rem;
      height: .2rem;
      line-height: .2rem;
      background: url(../../assets/images/icon-photo.png) 0 no-repeat;
      background-size: .24rem;
    }

    .member-tab .tabPc-title p.title2 {
      line-height: 1.5;
      color: #000;
      height: auto;
      display: block;
      overflow: hidden;
    }

    .member-tab .pcOrder01 {
      height: auto;
      display: block;
      overflow: hidden;
      box-sizing: border-box;
    }

      .member-tab .pcOrder01 p.p1 {
        line-height: 1rem;
      }

  .weui-cells[data-v-7731dbb9] {
    background-color: #fff;
    line-height: .3rem;
    font-size: .3rem;
    overflow: hidden;
    position: relative;
    margin-top: -1px;
  }

    .weui-cells[data-v-7731dbb9]:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      color: #d9d9d9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }

  .weui-cell[data-v-7731dbb9] {
    padding: 5px .3rem;
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

    .weui-cell[data-v-7731dbb9]:before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }

  .weui-cell__ft[data-v-7731dbb9] {
    text-align: right;
    color: #999;
  }

  .vux-cell-primary[data-v-7731dbb9] {
    flex: 1;
  }

  .vux-number-disabled.ch_sub[data-v-7731dbb9] {
    background: url(../../assets/images/ch_redu_hov.png) no-repeat 50%;
    background-color: #fff;
    background-size: .25rem;
  }

  .vux-number-selector-sub[data-v-7731dbb9] {
    border-right: none;
    padding: 4px 8px 2px;
    border-radius: 2px 0 0 2px;
    background: #fff;
  }

  .vux-number-selector[data-v-7731dbb9] {
    float: left;
    height: .64rem;
    font-size: .25rem;
    line-height: .64rem;
    color: #f90;
    border: 1px solid #ececec;
    width: .64rem;
    text-align: center;
  }

  .vux-number-input[data-v-7731dbb9] {
    float: left;
    height: .64rem;
    font-size: .3rem;
    color: #000;
    appearance: none;
    border: 1px solid #ececec;
    padding: 3px 0;
    text-align: center;
    border-radius: 1px;
    font-family: Arial;
  }
  button, input:not([type=radio]):not([type=checkbox]), select {
    vertical-align: middle;
  }
  .vux-number-disabled.ch_add[data-v-7731dbb9] {
    background: url(../../assets/images/ch_add_hov.png) no-repeat 50%;
    background-color: #fff;
    background-size: .25rem;
  }
  .vux-number-selector-plus[data-v-7731dbb9] {
    border-left: none;
    padding: 3px 8px;
    border-radius: 0 2px 2px 0;
  }
  .member-tab .pcOrder01 p.p2 {
    line-height: .8rem;
    height: .8rem;
  }
    .member-tab .pcOrder01 p.p2 i.right {
      display: inline-block;
      background: url(../../assets/images/Icon/equright-ico.png) no-repeat 100%;
      background-size: .17rem;
      width: .17rem;
      height: .8rem;
    }
  .order-container {
    padding: .24rem .4rem;
    position: relative;
    height: auto;
    display: block;
    overflow: hidden;
  }
  .tip {
    width: .06rem;
    height: .3rem;
    background: #f60;
    display: inline-block;
    margin-top: -.06rem;
  }
  .order-container .tip {
    position: absolute;
    top: .45rem;
    left: .2rem;
  }
  .order-container span {
    display: inline-block;
    line-height: .6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .order-container .redbags {
    height: auto;
    display: block;
    overflow: hidden;
    background: url(../../assets/images/Icon/equright-ico.png) no-repeat 100%;
    padding-right: .4rem;
    background-size: .13rem;
  }
    .order-container .redbags span {
      display: inline-block;
      font-size: .3rem;
      color: #000;
      height: .6rem;
      line-height: .6rem;
    }
      .order-container .redbags span.packet {
        display: inline-block;
        height: .34rem;
        line-height: .34rem;
        padding: 0 .08rem;
        background-color: #f60;
        border-radius: .04rem;
        color: #fff;
        font-size: .24rem;
      }
        .order-container .redbags span.packet[data-v-92724c4c] {
          margin-bottom: .1rem;
          margin-top: .13rem;
        }
  .weui-cell {
    padding: .1rem .3rem;
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .vux-x-switch.weui-cell_switch {
    padding-top: .24rem;
    padding-bottom: .24rem;
  }
  .weui-cell__bd {
    flex: 1;
  }
  .label5 {
    float: left;
    line-height: .56rem;
  }
  i.pcOrder02-left {
    display: inline-block;
    background: url(../../assets/images/anfw-ico.png) 0 no-repeat;
    background-size: .33rem;
    width: .75rem;
    height: .56rem;
    margin-left: .2rem;
  }
  .price {
    margin-right: .28rem;
  }
  .weui-cell_switch .weui-cell__ft {
    font-size: 0;
  }
  .weui-switch, .weui-switch-cp__box {
    position: relative;
    width: 54px;
    height: 26px;
    border: 1px solid #dfdfdf;
    outline: 0;
    border-radius: 13px;
    box-sizing: border-box;
    background-color: #dfdfdf;
    transition: background-color .1s,border .1s;
  }
    .weui-switch-cp__input:checked ~ .weui-switch-cp__box, .weui-switch:checked {
      border-color: #4cd964;
      background-color: #4cd964;
    }
  input[type=checkbox], input[type=radio] {
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
  }
  input[type=button], input[type=number], input[type=submit], input[type=tel], input[type=text] {
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 0;
  }
  .bthead h3 {
    height: 1rem;
    line-height: 1rem;
  }
    .bthead h3 em {
      height: 1rem;
      background: url(../../assets/images/curent.jpg) no-repeat 0;
      background-size: .06rem;
    }
  .js-msg[data-v-b0cdc27e] {
    position: relative;
  }
  .js-msg ul li {
    position: relative;
    line-height: 1.1rem;
  }
  .bg-fff li[data-v-b0cdc27e] {
    line-height: .5rem !important;
    padding-top: .3rem !important;
    padding-bottom: .3rem !important;
  }
  
  .bg-fff li input[data-v-b0cdc27e] {
    line-height: .5rem !important;
  }
  .coindis-hov {
    color: #333;
    -webkit-text-fill-color: #333;
    -webkit-opacity: 1;
  }
  .coin-input {
    width: 60%;
    border: none;
    left: 30%;
    vertical-align: top !important;
  }
  .to-right, .toRight {
    width: .18rem;
    position: absolute;
    right: .3rem;
  }
  .to-right {
    height: .3rem;
    top: .31rem;
    background: url(../../assets/images/right2.png) 50% no-repeat;
    background-size: .12rem;
  }
  .fixed-button4 {
    height: auto;
    display: block;
    overflow: hidden;
  }
    .fixed-button4 .fleft {
      line-height: .98rem;
      height: .98rem;
    }
      .fixed-button4 .fleft .e1 {
        color: #000;
        margin-right: .15rem;
      }
      .fixed-button4 .fleft .e2, .fixed-button4 .fleft .e3 {
        color: #f60;
      }
    .fixed-button4 a.fright {
      display: inline-block;
      width: 50%;
      background: #f60;
      text-align: center;
      line-height: .98rem;
      height: .98rem;
      color: #fff;
    }
</style>
