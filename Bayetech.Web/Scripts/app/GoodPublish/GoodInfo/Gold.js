//金币
//模块之间的操作
define(['jquery', 'common'], function ($, common) {
    var html=`<div class="one-step-con">
                  <div class="ftitle">为了帮助您更快的出售商品，请仔细填写以下信息</div>
                  <div class="gold-type-deal">
                      <dl class="on" value="js">
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
                      <dl class="right " value="db">
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
                  </div>
                  <div class="gold-way-deal">
                      <h3>
                          <span><i>*</i>交易方式：</span>
                          <label class="on"><input type="radio" name="dealway" value="邮寄交易" checked="checked">邮寄交易</label><em>手续费由卖家担 </em>
                          <label><input type="radio" name="dealway" value="拍卖交易">拍卖交易</label><em>所产生5%拍卖手续费由买家承担</em>
                          <label><input type="radio" name="dealway" value="当面交易">当面交易</label><em>16线沙兰处交易</em>
                      </h3>
                  </div>
                  <div class="refer-price">
                      <h2>今日成交价参考（广东区/广东1区 ）：<span>1 万金=<i class="singlepr">0.02021</i>元(1元=49.48045522018803万金)</span></h2>
                      <div class="publish-area">
                          <div class="gold-num">
                              <span><i>*</i>数量：</span>
                              <input maxlength="9" type="text" name="perNum" value="" class="common-input gdnum onlynum" datatype="howmany"><span>金 </span>
                              <span class="Validform_checktip"></span>
                          </div>
                          <div class="sxf-div">
                              <p class="sxfp">手续费<em>0.0</em> 元 </p>
                              <p class="sxftip"><a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank">了解手续费规则</a></p>
                          </div>
                          <div class="case-num">
                              <span><i>*</i>想卖多少钱：</span>
                              <input maxlength="12" type="text" name="price" value="" class="common-input cenum onlynums" datatype="howmuch"><span元 </span>
                              <em>（可自行调整）</em>
                              <span class="Validform_checktip"></span>
                          </div>
                          <h3 class="htips"></h3>
                      </div>
                      <div class="goods-num">
                          <h3>
                              <span><i>*</i>发布件数：</span>
                              <input maxlength="6" type="text" name="stock" class="common-input onlynum" datatype="n,howmany" value="1">
                              <em class="zhu">注:为确保成功出售，请勿超库存发布，如有疑问请查看<a href="http:// www.7881.comhelpcenter/365809715870535056.html" target="_blank">《发布件数说明》</a></em>         <span class="Validform_checktip"></span>
                          </h3>
                      </div>
                      <div class="goods-title">
                          <h3>
                              <span><i>*</i>商品标题：</span>
                              <em class="typedl" id="titleLText">【邮寄交易】</em>
                              <input type="hidden" name="title">
                              <em class="typepr" id="titleRText"></em>
                          </h3>
                      </div>
                  </div>
               </div>`;
    var components={
        name: "step1",
        template: html,
    };
    return components;
});