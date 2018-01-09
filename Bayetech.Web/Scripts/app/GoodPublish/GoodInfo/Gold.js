//金币
define(['jquery', 'common', 'Scripts/app/GoodPublish/TradeType'], function ($, common, TradeType) {
    var html=`<div class="one-step-con">
                  <div class="ftitle">为了帮助您更快的出售商品，请仔细填写以下信息</div>
                  <TradeType :fn="ChangeTradeType"></TradeType>
                  <div class="gold-way-deal">
                      <h3>
                          <span><i>*</i>交易方式：</span>
                          <label class ="on"><input type="radio" name="Dealway" value="邮寄交易" checked="checked" v-model="dealway">邮寄交易</label>
                          <em>手续费由卖家担 </em>
                          <label><input type="radio" name="Dealway" value="拍卖交易" v-model="dealway">拍卖交易</label>
                          <em>所产生5%拍卖手续费由买家承担</em>
                          <label><input type="radio" name="Dealway" value="当面交易" v-model="dealway">当面交易</label>
                          <em>16线沙兰处交易</em>
                      </h3>
                  </div>
                  <div class="refer-price">
                      <h2>今日成交价参考（{{GameInfo.GroupName}}/{{GameInfo.ServerName}} ）：<span>1 万金=<i class ="singlepr">{{percent}}</i>元(1元={{10000/percent}}) </span></h2>
                      <div class="publish-area">
                          <div class="gold-num">
                              <span><i>*</i>数量：</span>
                              <input maxlength="9" type="text" name="GoldNum" v-model="num" class ="common-input gdnum onlynum" datatype="howmany"><span>万金</span>
                              <span class="Validform_checktip"></span>
                          </div>
                          <div class="sxf-div">
                              <p class="sxfp">手续费<em>0.0</em> 元 </p>
                              <p class="sxftip"><a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank">了解手续费规则</a></p>
                          </div>
                          <div class="case-num">
                              <span><i>*</i>想卖多少钱：</span>
                              <input maxlength="12" type="text" name="GoodPrice" v-model="price" class ="common-input cenum onlynums" datatype="howmuch"><span>元 </span>{{price}}
                              <em>（可自行调整）</em>
                              <span class="Validform_checktip"></span>
                          </div>
                          <h3 class="htips"></h3>
                      </div>
                      <div class="goods-num">
                          <h3>
                              <span><i>*</i>发布件数：</span>
                              <input maxlength="6" type="text" name="Stock" class ="common-input onlynum" datatype="n,howmany" value="1">
                              <em class="zhu">注:为确保成功出售，请勿超库存发布，如有疑问请查看<a href="http:// www.7881.comhelpcenter/365809715870535056.html" target="_blank">《发布件数说明》</a></em>         <span class="Validform_checktip"></span>
                          </h3>
                      </div>
                      <div class="goods-title">
                          <h3>
                              <span><i>*</i>商品标题：</span>
                              <em class ="typedl" id="titleLText">【{{dealway}}】</em>
                              <input type="hidden" name="GoodTitle" :value="'【'+dealway+'】'">
                              <em class="typepr" id="titleRText"></em>
                          </h3>
                      </div>
                  </div>
               </div>
                `;

    var components={
        name: "Gold",
        template: html,
        watch: {
            num: function (newQuestion) {
               // this.price;
            },
        },
        data:function(){
            return {
                dealway: "邮寄交易",
                num:0,
                percent: 0.02,
                GameInfo: [],
            }
        },
        created() {
            this.GameInfo=this.$parent.GameInfo;
        },
        methods: {
            ChangeTradeType: function (type) {
                this.$parent.account_info_com=type===1?"SecurityCode":"GoldAccountInfo"; 
            },
        },
        computed: {
            // 计算属性的 getter
            price: function () {
                return this.num*this.percent;
            }
        },
        components: {
            "TradeType": TradeType,
        },
    };
    return components;
});