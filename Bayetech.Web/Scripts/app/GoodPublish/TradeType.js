//交易方式
define(['jquery', 'common'], function ($, common) {
    var html=`<div class="gold-type-deal">
                      <dl :class ="class1" @click="ChangeTradeType(0)" name="seltradeType">
                          <dt>
                              <img src="http://pic.7881.com/7881-2016/images/goods-publish/jspicon.png" class="ritag">
                              <img src="http://pic.7881.com/7881-2016/images/goods-publish/jsdealon-icon.png" class="gray">
                              <h3>平台代发</h3>
                          </dt>
                          <dd>
                              <h3>您需要留下游戏账号资料(更方便，推荐选择)</h3>
                              <p>商品被购买后，7881客服会登录账号，替您和买家完成交易。我们承诺您的账号资料经过5星加密保存，保障您的账号安全！</p>
                          </dd>
                      </dl>
                      <dl class ="right" :class ="class2" @click="ChangeTradeType(1)" name="seltradeType">
                          <dt>
                              <img src="http://pic.7881.com/7881-2016/images/goods-publish/dbpic.png" class="ritag">
                              <img src="http://pic.7881.com/7881-2016/images/goods-publish/dbdeal-icon.png" class="gray">
                              <h3>卖家发货</h3>
                          </dt>
                          <dd>
                              <h3>您无须填写游戏帐号资料</h3>
                              <p>商品被购买后，7881客服会在第一时间通过电话或微信通知您，由您自己登陆游戏，和买家完成交易。</p>
                          </dd>
                      </dl>
                      <input type="hidden" id="TradeType" name="TradeType" :value="type">
                  </div>`;
    var components={
        template: html,
        data:function(){
            return {
                class1: "on",
                class2: "",
                type:0,
            }
        },
        methods: {
            ChangeTradeType: function (type) {
                this.type=type;
                if (type===0) {
                    this.class1="on";
                    this.class2="";
                } else {
                    this.class1="";
                    this.class2="on";
                }
            }
        }
    };
    return components;
});