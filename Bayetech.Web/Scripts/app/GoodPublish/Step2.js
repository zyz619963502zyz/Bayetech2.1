//step2
define(['vue', 'jquery', 'common', 'Scripts/app/GoodPublish/GoodInfo/Gold', 'Scripts/app/GoodPublish/GoodInfo/Account', 'Scripts/app/GoodPublish/GoodInfo/Common', 'Scripts/app/GoodPublish/AccountInfo/Gold', 'Scripts/app/GoodPublish/AccountInfo/SecurityCode'],
    function (Vue, $, common, GoldGoodInfo, AccountGoodInfo, CommonGoodInfo, GoldAccountInfo, SecurityCode) {
        var html=`<div class="panel-body" style="background: url(http://pic.7881.com/7881-2016/images/goods-publish/publish-account-bg.png) center top no-repeat;">
  <form id="publishForm" action="/publish" method="post">
    <div class="main-content">
      <div class="publish-box w1190">
        <input type="hidden" name="gameId" :value="GameInfo.GameId">
        <input type="hidden" name="gameName" :value="GameInfo.GameName">
        <input type="hidden" name="groupId" :value="GameInfo.GroupId">
        <input type="hidden" name="groupName" :value="GameInfo.GroupName">
        <input type="hidden" name="serverId" :value="GameInfo.ServerId">
        <input type="hidden" name="serverName" :value="GameInfo.ServerName">
        <input type="hidden" name="goodTypeId" :value="GameInfo.GoodTypeId">
        <input type="hidden" name="goodTypeName" :value="GameInfo.GoodTypeName">
        <div class="publish-header w980">
          <h2>
            <span>
              <img src="http://pic.7881.com/7881/market/images/pc_game_logo/G10.png" alt=""></span>
          </h2>
          <h3>
            <a class="btn-back" href="javascript:void(0)" @click="Next('step1')">&lt; 返回修改</a>
            <span>《{{GameInfo.GameName}}》{{GameInfo.GroupName}}/{{GameInfo.ServerName}}/{{GameInfo.GoodTypeName}}</span></h3>
          <p class="orange-stip">
            <span>7881温馨提示：</span>
            <br><span v-html="tip"></span></p></div>
        <div class="publish-step-01 fill-goods-info">
          <div class="pub-tit">
            <div class="line-left"></div>
            <div class="steptit">01-填写商品信息</div>
            <div class="line-right"></div>
          </div>
          <component class="one-step-con" v-bind:is="good_info_com"></component>
        </div>
        <div class="publish-step-02 fill-account-info">
          <div class="pub-tit">
            <div class="line-left"></div>
            <div class="steptit">02-填写账号资料</div>
            <div class="line-right"></div>
          </div>
          <div class="account-info-con account-info-con">
            <component class="common-form height-30" v-bind:is="account_info_com"></component>
          </div>
        </div>
        <div class="publish-step-03 perfect-deal-info">
          <div class="pub-tit">
            <div class="line-left"></div>
            <div class="steptit">03-完善交易选项</div>
            <div class="line-right"></div>
          </div>
          <div class="deal-info-con">
            <div class="common-form height-30">
              <div class="form-item clearfix">
                <div class="form-item-l">
                  <i>*</i>
                  <span>商品有效期：</span></div>
                <div class="form-item-r">
                  <div class="comselect h-30">
                    <select>
                      <option value="">选择有效期</option>
                      <option value="1">1天</option>
                      <option value="3">3天</option>
                      <option value="5">5天</option>
                      <option value="7">7天</option>
                      <option value="15">15天</option>
                      <option value="30">30天</option></select>
                  </div>
                </div>
              </div>
              <div class="form-item clearfix timefb">
                <div class="form-item-l">
                  <i>*</i>
                  <span>交易方便时间：</span></div>
                <div class="form-item-r">
                  <div class="yesorno">每天
                    <div class="comselect w90 h-30">
                      <div class="comselect-val">
                        <input type="text" readonly="readonly" class="comselect-input" placeholder="00:00" value="00:00" data-value="00:00">
                        <input type="hidden" name="tradeStartTime" value="00:00" class="value">
                        <div class="comselect-icon">
                          <em class="iconfont icon-down"></em>
                          <em class="iconfont icon-up"></em></div>
                      </div>
                    </div>到
                    <div class="comselect w90 h-30">
                      <div class="comselect-val">
                        <input type="text" readonly="readonly" class="comselect-input" placeholder="24:00" value="24:00" data-value="24:00">
                        <input type="hidden" datatype="comselect|hideTe" name="tradeEndTime" value="24:00" class="value">
                        <div class="comselect-icon">
                          <em class="iconfont icon-down"></em>
                          <em class="iconfont icon-up"></em></div>
                      </div>
                      <ul class="comselect-menu">
                        <li data-value="01:00">01: 00</li>
                        <li data-value="02:00">02: 00</li>
                        <li data-value="03:00">03: 00</li>
                        <li data-value="04:00">04: 00</li>
                        <li data-value="05:00">05: 00</li>
                        <li data-value="06:00">06: 00</li>
                        <li data-value="07:00">07: 00</li>
                        <li data-value="08:00">08: 00</li>
                        <li data-value="09:00">09: 00</li>
                        <li data-value="10:00">10: 00</li>
                        <li data-value="11:00">11: 00</li>
                        <li data-value="12:00">12: 00</li>
                        <li data-value="13:00">13: 00</li>
                        <li data-value="14:00">14: 00</li>
                        <li data-value="15:00">15: 00</li>
                        <li data-value="16:00">16: 00</li>
                        <li data-value="17:00">17: 00</li>
                        <li data-value="18:00">18: 00</li>
                        <li data-value="19:00">19: 00</li>
                        <li data-value="20:00">20: 00</li>
                        <li data-value="21:00">21: 00</li>
                        <li data-value="22:00">22: 00</li>
                        <li data-value="23:00">23: 00</li>
                        <li data-value="24:00">24: 00</li></ul>
                    </div>
                    <span>请选择交易方便时间，商品只在该时间内上架出售。如不选择，系统默认为24小时方便交易</span></div>
                </div>
              </div>
              <div class="form-item clearfix">
                <div class="form-item-l">
                  <i>*</i>
                  <span>无货赔付押金：</span></div>
                <div class="form-item-r">
                  <div class="yesorno">
                    <label>
                      <input type="radio" class="yes" value="1" name="deposit">是</label>
                    <label>
                      <input type="radio" class="no" name="deposit" value="0" checked="checked">否</label>
                    <span>需预交押金，5元/单，您将获得“无货赔付”标签，提高商品关注度</span></div>
                </div>
              </div>
              <div class="form-item clearfix">
                <div class="form-item-l">
                  <i>*</i>
                  <span>资金转移到：</span></div>
                <div class="form-item-r">
                  <div class="yesorno">
                    <label>
                      <input type="radio" name="withdrawCash" class="no" value="0" checked="checked">我的7881账户</label>
                    <span>交易成功后，请选择将资金转移到哪一个账户</span></div>
                  <p class="orange-stip hidediv">对不起，您尚未设置提现账户，
                    <a href="http://www.7881.com/financecharge/toAddExtractcash.action">去设置</a></p>
                </div>
              </div>
              <div class="form-item clearfix">
                <div class="form-item-l">
                  <i>*</i>
                  <span>联系手机：</span></div>
                <div class="form-item-r w170">
                  <div class="game-ipt">
                    <input type="text" class ="common-input h-30" placeholder="请输入手机号码" name="phone" id="phone" value="" datatype="m" nullmsg="请留下可以联系到您的手机号码" errormsg="请留下可以联系到您的手机号码"></div>
                </div>
                <div class="form-item-l w110">
                  <i>*</i>
                  <span>联系QQ：</span></div>
                <div class="form-item-r game-ipt w170">
                  <div class="game-ipt">
                    <input type="text" class ="common-input h-30" placeholder="请输入QQ号码" name="qq" id="qq" value="" datatype="n6-11" nullmsg="请留下可以联系到您的QQ号" errormsg="请留下可以联系到您的QQ号"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="publish-btn">
          <a href="javascript:void(0)" class="com-btn-01 color01 btn-pub" @click="Next('step3')">确认无误，立即发布</a></div>
      </div>
    </div>
  </form>
</div>`;
    var data={
        good_info_com: "CommonGoodInfo",
        account_info_com: "",
        tip: `为保障您的商品的成交速率，请完整填写商品信息；<br>
            私下交易有风险，涉及钱财莫大意，谨防诈骗，官方客服咨询QQ：4001877881`,
    }

    var components={
        name: "step1",
        template: html,
        data() {
            return data
        },
        created() {
            //进度显示修改
            $("[name=process]").eq(1).removeClass('bg').addClass('gc');
            //加载组件
            LoadComponent();
            //变更交易方式
            $(document).on('click', "[name=tradeType]", function () {
                this.account_info_com="GoldAccountInfo";
            });
        },
        components: {
            CommonGoodInfo:CommonGoodInfo,
            GoldGoodInfo: GoldGoodInfo,
            AccountGoodInfo: AccountGoodInfo,
            GoldAccountInfo: GoldAccountInfo,
            SecurityCode: SecurityCode,
        },
        methods: {
            //点击下一步
            Next: function (to) {
                this.$parent.Next(to);
            },
            //加载组件
            LoadComponent: function () {
                this.account_info_com="GoldAccountInfo",
                this.GameInfo=this.$parent.GameInfo;
                var type=this.GameInfo.GoodTypeId;
                var gameid=this.GameInfo.GameId;
                if (type==1) {//金币
                    this.good_info_com="GoldGoodInfo";
                    //this.account_info_com="GoldAccountInfo";
                    this.tip=`1.DNF每日06:00更新当日游戏币交易限制，请您注意【角色交易上限】 。<br>
              2.如果您使用多角色发货，请在“游戏角色名”处填写每个角色发货的金额，例：A角色3000W，B角色4000W。<br>
              3.因游戏限制，请绑定正确的密保工具。<br>
              涉及钱财莫大意，电话确认才放心，谨防诈骗！`;
                } else if (type==3) {//账号
                    this.good_info_com="AccountGoodInfo";
                    this.tip=`为保障地下城与勇士帐号交易安全，您出售的帐号将进行延迟7天打款，此期间请勿修改帐号资料，否则将号财两空。<br>
                如果您出售的帐号出现找回情况，我们将把您在7881登记的所有信息提供给买家，由买家在各大网站公布并向公安机关报案。<br>
                被骗用户都有出现被假客服联系的情况，因此有客服联系时，可点击【 客服验证中心】验证客服真假或者联系QQ 4001877881为您验证客服真假。`;
                }
            },
        },
    };
    return components;
});