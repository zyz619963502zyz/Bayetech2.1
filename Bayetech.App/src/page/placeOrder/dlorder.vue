
<!---->

<template>
    <div id="wrapper">
        <div class="dlHeader">
            <div class="top-header border-bottom bg-fff fixed-top">
                <div class="top-back" @click="$router.go(-1)"><a></a></div>
                <h2 class="f36">立即购买</h2>
            </div>
        </div> <div class="dlBuy mt-97 pb-200">
            <div class="prov-conn px-30 bg-fff border-bottom list_detail"><span class="recode_detail f30">帐号信息</span></div> <div class="dlbox border-bottom">
                <span class="f32 color-000">购买件数</span>
                <div class="count2">
                    <input name="" @click="sub" type="button" value="-" class="reduce fl f48 dlGray">
                    <input name="" v-model="countnum" type="number" class="num fl f36" >
                    <input name="" @click="add" type="button" value="+" class="add fl common-color f48 dlGray">
                </div>
            </div>
            <div class="dl-msg bg-fff clearfix">
              <ul class="bg-fff">
                <li class="choose-list clearfix f32 pl-30"><span class="f32">系统平台</span> <input type="text" name="" placeholder="请输入系统平台" class="dl-input"></li>
                <li class="choose-list clearfix f32 pl-30"><span class="f32">具体区服</span> <input type="text" name="" placeholder="请输入具体区服" class="dl-input"></li>
                <li class="choose-list clearfix f32 pl-30"><span class="f32">游戏帐号</span> <input type="text" name="" placeholder="请输入游戏帐号" class="dl-input"></li>
                <li class="choose-list clearfix f32 pl-30"><span class="f32">游戏密码</span> <input type="text" name="" placeholder="请输入游戏密码" class="dl-input"></li>
                <li class="error_ts border-bottom">请确认帐号密码准确，以免造成不必要的麻烦</li>
                <li class="choose-list clearfix f32 pl-30"><span class="f32">游戏角色名</span> <input type="text" name="" placeholder="请输入游戏角色名" class="dl-input"></li>
                <li class="choose-list clearfix f32 pl-30">
                  <span class="f32">代练时间</span>
                  <input disabled="disabled" type="text" name="" placeholder="请选择代练时间" class="dl-input"> <span class="to-right"></span>
                </li>
                <li class="choose-list clearfix f32 pl-30"><span class="f32">其他信息</span> <textarea type="text" name="" placeholder="如有其他补充信息，请填写" class="tearea"></textarea></li>
              </ul>
            </div> <div class="prov-conn px-30 bg-fff border-bottom list_detail mt-20"><span class="recode_detail f30">个人信息</span></div>
            <div class="dl-msg bg-fff clearfix">
                <ul class="bg-fff">
                    <li class="choose-list clearfix f32 pl-30"><span class="f32">姓名</span> <input type="text" name="" placeholder="请输入姓名" class="dl-input"></li>
                    <li class="choose-list clearfix f32 pl-30"><span class="f32">联系方式</span> <input type="text" name="" placeholder="请输入联系方式" class="dl-input"></li>
                    <li class="choose-list clearfix f32 pl-30"><span class="f32">QQ号</span> <input type="text" name="" placeholder="请输入QQ号" class="dl-input"></li>
                    <li class="warndl">*请确认联系方式准确，如无法联系到您导致工作室退单，佣金费 用需您自行承担</li>
                </ul>
            </div>
            <div class="order-submit bg-fff clearfix border-top fixed-bottom" style="z-index: 40;">
                <div class="fl w50 clear_item"><span class="color-000 f32">合计</span> <span class="color-m1  f40">￥{{total}}</span></div>
                <div class="fr clear_item"><a class="submits text-center color-fff f36">去支付</a></div>
            </div> <!---->
            <!--代练时间选择-->

            <div class="maskdiv" style="display:none"></div>
            <div class="rankpop fixed-bottom bg-fff" style="display:none">
                <div class="rankpop-titl border-bottom">
                    <a class="cancel f32 pl-30">取消</a>
                    <span class="f32 color-000 text-center">请选择代练时间</span>
                    <a class="finish f32 pr-30">完成</a>
                </div> <div class="rankpop-conn">
                    <div class="list fl text-center f32">
                        <ul data-v-57a213d0="">
                            <li class="">0天</li>
                            <li class="active">1天</li>
                            <li class="">2天</li>
                        </ul>
                    </div> <div class="list fr text-center f32">
                        <ul data-v-57a213d0="">
                            <li class="">
                                0小时
                            </li>
                            <li class="active">
                                6小时
                            </li>
                            <li class="">
                                12小时
                            </li>
                            <li class="">
                                18小时
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";


  let vmdata = {
    countnum: 1,
    total:1
  };
  export default {
    name: 'dlorder',
    data() {
      return vmdata;
    },
    watch: {
      countnum: function () {
        let that = this;
        that.count();
      }
    },
    mounted: function() {

    },
    methods: {
      add: function () {
        this.countnum++;
      },
      sub: function () {
        this.countnum--;
        if (this.countnum <= 1 || this.countnum == null) {
          this.countnum = 1;
        };
      },
      count: function () {
        //计算总价
        let totalPrice = 0;
        totalPrice += this.countnum * 1;
        this.total = totalPrice.toFixed(2)
      }
    }
  }
</script>


<style scoped>
  /*代练buy 输入信息页面*/
  .prov-conn {
    height: auto;
    display: block;
    overflow: hidden;
  }

    .prov-conn .list_code, .prov-conn .recode_detail {
      display: inline-block;
      height: 1.05rem;
      line-height: 1.05rem;
      padding-left: .23rem;
    }

    .prov-conn .recode_detail {
      background: url(/content/images/dl/curent.jpg?fbc7f18…) no-repeat 0;
      background-size: .06rem .35rem;
    }

  /*代练填单*/
  .dlbox {
    width: 100%;
    padding: 0 .3rem;
    background: #fff;
    position: relative;
    height: 1.04rem;
    line-height: 1.04rem;
  }

    .dlbox .count2 {
      width: 2.28rem;
      height: .65rem;
      position: absolute;
      right: .3rem;
      top: .2rem;
    }

      .dlbox .count2 .add, .reduce {
        width: .66rem;
        height: .65rem;
        border: 1px solid #e8e8e8;
        font-family: arial;
        background: #fff;
        cursor: pointer;
      }

  .dlGray {
    color: #999;
  }

  .dlbox .count2 .num {
    width: .96rem;
    height: .65rem;
    border: none;
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    text-align: center;
  }

  input[type=tel], input[type=text] {
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 0;
    border: none;
  }

  .dl-msg, .dl-msg ul li {
    position: relative;
  }

    .dl-msg ul li {
      line-height: .5rem;
      padding-top: .265rem;
      padding-bottom: .265rem;
      border-bottom: 1px solid #e8e8e8;
    }

      .dl-msg ul li .dl-input {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: .3rem;
        width: 60%;
        border: none;
        left: 30%;
        vertical-align: top !important;
        position: absolute;
        background: #fff;
      }

  .choose-list .tearea, .prov-conn .tearea {
    display: block;
    border: none;
    width: 95%;
    resize: none;
  }

  .to-right {
    width: .8rem;
    height: 100%;
    background: url(/content/images/dl/right2.png?8d1c222…)100% no-repeat;
    position: absolute;
    right: .3rem;
    background-size: .18rem .32rem;
    top: 0;
  }

  .error_ts {
    height: .72rem;
    line-height: .72rem;
    background-color: #fffdf4;
    font-size: .24rem;
    color: #be8600;
    padding-left: .3rem;
  }

  .warndl {
    background-color: #f1f1f1;
    padding: .1rem .3rem;
    line-height: .4rem;
    color: #f60;
    font-size: .24rem;
  }

  .order-submit {
    padding: .2rem .3rem;
  }

    .order-submit .clear_item {
      width: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .order-submit .submits, .order-submit span {
      display: inline-block;
      height: .85rem;
      line-height: .85rem;
      text-align: center;
    }

    .order-submit .submits {
      width: 100%;
      background: #f60;
    }


  /*底部时间选择*/
  .maskdiv0, .maskdiv, .maskdiv4 {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
  }

  .rankpop, .rankpop .rankpop-titl {
    height: auto;
    display: block;
    overflow: hidden;
    z-index: 99;
  }

    .rankpop .rankpop-titl {
      position: relative;
    }

      .rankpop .rankpop-titl a {
        position: absolute;
      }

      .rankpop .rankpop-titl a, .rankpop .rankpop-titl span {
        display: block;
        line-height: .9rem;
        height: .9rem;
      }

        .rankpop .rankpop-titl a.cancel {
          top: 0;
          left: 0;
        }

        .rankpop .rankpop-titl a.finish {
          top: 0;
          right: 0;
        }

  .rankpop-conn {
    height: 4.4rem;
    display: block;
    overflow: hidden;
  }

    .rankpop-conn .list {
      width: 50%;
      height: 4.09rem;
      margin-top: .2rem;
      overflow-x: auto;
    }

      .rankpop-conn .list ul li {
        height: .7rem;
        line-height: .7rem;
        color: #aeaeae;
      }
</style>
