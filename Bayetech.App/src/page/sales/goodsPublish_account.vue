<!--
    *商品发布信息填写
    *游戏账号发布
    *
-->

<template>
  <div id="wrapper" style="height: 100%;">
    <div data-v-4fef8ba0="">
      <div data-v-4fef8ba0="" class="top-header border-bottom fixed-top">
        <div data-v-4fef8ba0="" class="top-back" @click="$router.go(-1)">
          <a data-v-4fef8ba0="" class=""></a>
        </div>
        <h2 data-v-4fef8ba0="" class="f36">地下城与勇士</h2>
      </div>
    </div>
    <div data-v-08a3bc62="" >
      <div data-v-08a3bc62="">
        <div data-v-08a3bc62="" id="wrapper" class="pb-30">
          <div data-v-509ef1b0="" class="fw px-30  notice_risk Mnotice_top mt-80" data-v-08a3bc62="">
            <div data-v-509ef1b0="" class="fl notice_public">
              <p data-v-509ef1b0="" class="f24  fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
            </div>
          </div>
          <div data-v-08a3bc62="" class="order-container bg-fff mt-174 color-000 f30 border-bottom Mmt-177">
            <span data-v-08a3bc62="">商品类型</span>
            <span data-v-08a3bc62="" style="position: absolute; top: 0.24rem; left: 2.4rem;">游戏帐号</span>
          </div>
          <div data-v-08a3bc62="" class="order-container bg-fff color-000 f30 ">
            <span data-v-08a3bc62="">游戏区服</span>
            <span data-v-08a3bc62="" style="position: absolute; top: 0.24rem; left: 2.4rem;">广东区/广东1区</span>
          </div>
          <div data-v-08a3bc62="" class="order-container bg-fff f30 border-bottom color-000 mt-20">
            <span data-v-08a3bc62="" class="span-icon-xinhao">商品标题</span>
            <input data-v-08a3bc62="" v-model="property.goodTitle" maxlength="20" type="text" placeholder="请勿留下联系方式" />
          </div>
          <div data-v-08a3bc62="" class="order-container bg-fff border-bottom f30 color-000">
            <span data-v-08a3bc62="" class="span-icon-xinhao">出售价格</span>
            <input data-v-08a3bc62="" v-model="property.goodPrice" type="number" oninput="if(value.length>7)value=value.slice(0,7)" placeholder="请输入出售价格" />
          </div>
          <p data-v-08a3bc62="" class="f22 mt-30 mb-30 color-999 pl-20 pr-20 p-tip" style="text-align: right;">
            <span data-v-08a3bc62="" class="coll lh-46" @click="showContent('fees')">了解收费标准</span>
          </p>
          <div data-v-08a3bc62="" class="mt-20"></div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">

              <a data-v-6027fbac="" href="javascript:void(0);" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    角色职业

                  </span>
                  <span data-v-6027fbac="" @click="showContent('prof')" class="danwei">{{property.profVal}} </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>
              <div data-v-5af57c0b="" class="bottom-bomb bomb-danxuan bg-f1" v-if="property.prof">
                <div data-v-5af57c0b="" class="bomb-title border-bottom border-top bg-fff">
                  <h1 data-v-5af57c0b="" class="f32 color-666 text-center">角色职业</h1>
                  <i data-v-5af57c0b="" @click="close('prof')" class="bomb-close"></i>
                </div>
                <div data-v-5af57c0b="" class="bomb-content">
                  <ul data-v-5af57c0b="" class="bomb-li-item bg-fff">
                    <li v-for="jobs in professionList" @click="selectLi('prof',jobs)" class="border-bottom">{{jobs}}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">
            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">

              <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                <span data-v-6027fbac="" class="span-icon-xinhao">角色性别</span>
              </div>

              <!--性别选择-->
              <div data-v-f82175a2="" class="new-pubilsh01 order-container bg-fff publish-type f30 fw">
                <ul data-v-f82175a2="" class="clearfix">
                  <li data-v-f82175a2="" class="border fl" :class="{selected:$isChoice('property','sex','man')}" @click="$chooseSingle('property','sex','man')">男</li>
                  <li data-v-f82175a2="" class="border fl" :class="{selected:$isChoice('property','sex','women')}" @click="$chooseSingle('property','sex','women')">女</li>
                </ul>
              </div>
            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">
            <section data-v-6027fbac="" data-i="选择职业" propertyid="32"></section>
            <div data-v-6027fbac="" class="order-container bg-fff f30 color-000 border-bottom">
              <span data-v-6027fbac="" class="span-icon-xinhao">角色等级</span>
              <input data-v-6027fbac="" v-model="property.profLevel" type="text" maxlength="90" placeholder="请输入角色等级" />
            </div>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    QQ等级

                  </span>
                  <span data-v-6027fbac="" class="danwei" @click="showContent('qqlevel')">{{property.qqlevelVal}} </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>
              <div data-v-5af57c0b="" class="bottom-bomb bomb-danxuan bg-f1" v-show="property.qqlevel">
                <div data-v-5af57c0b="" class="bomb-title border-bottom border-top bg-fff">
                  <h1 data-v-5af57c0b="" class="f32 color-666 text-center">QQ等级</h1>
                  <i data-v-5af57c0b="" class="bomb-close" @click="close('qqlevel')"></i>
                </div>
                <div data-v-5af57c0b="" class="bomb-content">
                  <ul data-v-5af57c0b="" class="bomb-li-item bg-fff">
                    <li v-for="levels in qqlevelList" @click="selectLi('qqlevel',levels)" class="border-bottom">{{levels}}</li>

                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">

              <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                <span data-v-6027fbac="" class="span-icon-xinhao">
                  QQ好友

                </span>
                <div data-v-f82175a2="" class="new-pubilsh01 order-container bg-fff publish-type f30 fw">
                  <ul data-v-f82175a2="" class="clearfix">
                    <li data-v-f82175a2="" class="border fl" :class="{selected:$isChoice('property','friend','have')}" @click="$chooseSingle('property','friend','have')">有</li>
                    <li data-v-f82175a2="" class="border fl" :class="{selected:$isChoice('property','friend','any')}" @click="$chooseSingle('property','friend','any')">没有</li>
                  </ul>
                </div>
              </div>


            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">历史处罚记录</span>
                  <span data-v-6027fbac="" class="danwei" @click="showContent('punish')">{{property.punishVal}} </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>
              <div data-v-5af57c0b="" class="bottom-bomb bomb-danxuan bg-f1" v-show="property.punish">
                <div data-v-5af57c0b="" class="bomb-title border-bottom border-top bg-fff">
                  <h1 data-v-5af57c0b="" class="f32 color-666 text-center">历史处罚记录</h1>
                  <i data-v-5af57c0b="" class="bomb-close" @click="close('punish')"></i>
                </div>
                <div data-v-5af57c0b="" class="bomb-content">
                  <ul data-v-5af57c0b="" class="bomb-li-item bg-fff">
                    <li v-for="punish in punishList" @click="selectLi('punish',punish)" class="border-bottom">{{punish}}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div data-v-08a3bc62="" class="mt-20"></div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏帐号</span>
              <input data-v-7a08d46c="" v-model="property.gameAccount" maxlength="10" type="text" placeholder="请输入游戏帐号" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">
            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏密码</span>
              <input data-v-7a08d46c="" v-model="property.gamePwd" maxlength="16" type="password" placeholder="请输入游戏密码" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏角色名</span>
              <input data-v-7a08d46c="" v-model="property.gameProfName" maxlength="50" type="text" placeholder="请输入游戏角色名" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">仓库密码</span>
              <input data-v-7a08d46c="" v-model="property.gameStrPwd" maxlength="50" type="password" placeholder="请输入仓库密码" />
            </div>
          </div>
          <p data-v-08a3bc62="" class="sec-tip">本站所有信息经过安全加密，请安心填写</p>

          <div data-v-08a3bc62="" class="color-000 mt-20">

            <div data-v-08a3bc62="">
              <div data-v-08a3bc62="" class="buyat-ease color-000 bg-fff ">
                <div data-v-08a3bc62="" class="f32 secbuy-ease border-bottom">
                  <em data-v-08a3bc62="" class="fl sec-text">开通安心买服务</em>
                  <i data-v-08a3bc62="" class="sease-wenh fl ml-20"></i>
                </div>
                <div data-v-08a3bc62="" class="secbuy-info">
                  <div data-v-08a3bc62="" class="sectems f30 color-000 border-bottom">
                    <i data-v-08a3bc62="" class="chrd-xms fl" :class="{'chrd-xms-hov':$isChoice('property','serviceDate','sixty')}" @click="$chooseSingle('property','serviceDate','sixty')"></i>
                    <span data-v-08a3bc62="" class="chterm fl">60天服务期限</span>
                    <em data-v-08a3bc62="" class="chcover fl">服务费：<i data-v-08a3bc62="" class="color-m1">{{property.servicePrice.shortTime}}</i>元</em>
                  </div>
                  <div data-v-08a3bc62="" class="sectems f30 color-000 border-bottom">
                    <i data-v-08a3bc62="" class="chrd-xms fl" :class="{'chrd-xms-hov':$isChoice('property','serviceDate','eighteen')}" @click="$chooseSingle('property','serviceDate','eighteen')"></i>
                    <span data-v-08a3bc62="" class="chterm fl">180天服务期限</span>
                    <em data-v-08a3bc62="" class="chcover fl">服务费：<i data-v-08a3bc62="" class="color-m1">{{property.servicePrice.longTime}}</i>元</em>
                  </div>
                  <div data-v-08a3bc62="" class="sectems f30 color-000 border-bottom">
                    <i data-v-08a3bc62="" class="chrd-xms fl " :class="{'chrd-xms-hov':$isChoice('property','serviceDate','not')}" @click="$chooseSingle('property','serviceDate','not')"></i>
                    <span data-v-08a3bc62="" class="chterm fl">不开通</span>
                    <em data-v-08a3bc62="" class="chcover fl">服务费：<i data-v-08a3bc62="" class="color-m1">0.00</i>元</em>
                  </div>
                </div>
              </div>
              <div data-v-08a3bc62="" class="buyat-tips pt-15">
                <div data-v-08a3bc62="" class="sec-text pr-20 color-999">
                  <p data-v-08a3bc62="" class="f22"><i data-v-08a3bc62="" class="p-icon-red-tip fl"></i>90%以上的用户更愿意购买开通安心买服务的商品！(卖出后收费)</p>
                </div>
              </div>
            </div>
          </div>
          <div data-v-08a3bc62="" class="mt-20 order-container color-000 bg-fff">
            <span data-v-08a3bc62="" class="f32 sec-buy-server">快捷发布</span>
            <div data-v-08a3bc62="" class=" f30">
              <span data-v-08a3bc62="" class="sec-price f36 color-999" :class="{'color-m1':property.rapidChecked}"> ￥{{property.rapidPrice}}</span><!--:class="{color-m1:!checkNames}"-->
              <span data-v-08a3bc62="" class="f28 pl-30 color-333">专业客服帮您截图，商品更易出售</span>
              <div data-v-08a3bc62="" class="button-switch fr">
                <label data-v-08a3bc62="" class="label-switch">
                  <input data-v-08a3bc62="" type="checkbox" id="label-switch" @click="shortcut($event)" /><!--v-model="checkNames"-->
                  <div data-v-08a3bc62="" class="checkbox"></div>
                </label>
              </div>
            </div>
            <div data-v-08a3bc62="" class="sec-text mt-10 color-999">
              <p data-v-08a3bc62="" class="f22"><i data-v-08a3bc62="" class="p-icon-red-tip fl"></i> 不用传图，轻松出售（卖出后收费） </p>
            </div>
          </div>
          <div class="new-pubilsh01 order-container bg-fff f30 fw color-000 mt-20 ">
            <span data-v-484bcaae="" class="span-icon-xinhao color-333">游戏截图</span>
            <fileUpload></fileUpload>
          </div>
          <div data-v-08a3bc62="" class="release mt-20  trlect-btn" style="text-align: left;">
            <p data-v-08a3bc62="" class="f22 color-m1"> 为保障地下城与勇士帐号交易安全，您出售的帐号将进行延迟4天打款，此期间请勿修改帐号资料，否则将会号财两空。 </p>
          </div>
          <div data-v-08a3bc62="" class="release mt-30  trlect-btn">
            <a data-v-08a3bc62="" class="next"><input data-v-08a3bc62="" @click="nextStep()" type="button" name="" value="下一步" class="bg-f54 " /></a>
          </div>
        </div>
        <div data-v-08a3bc62="" class="pb-200" style="display: none;">
          <div data-v-08a3bc62="" class="fixedFill-mx"></div>
          <div data-v-08a3bc62="" class="top-header border-bottom fixed-top">
            <div data-v-08a3bc62="" class="top-back">
              <a data-v-08a3bc62="">返回</a>
            </div>
            <h2 data-v-08a3bc62="" class="f36 color-000">地下城与勇士</h2>
            <div data-v-08a3bc62="" class="top-right">
              <a data-v-08a3bc62="" href="/" class="back-home"></a>
            </div>
          </div>
          <div data-v-c99e5564="" class="upload" data-v-08a3bc62="">
            <div data-v-c99e5564="">
              <div data-v-509ef1b0="" class="fw px-30  notice_risk Mnotice_top  mt-77" data-v-c99e5564="">
                <div data-v-509ef1b0="" class="fl notice_public">
                  <p data-v-509ef1b0="" class="f24  fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
                </div>
              </div>
              <div data-v-c99e5564="" class="order-container px-30 mt-79 bg-fff border-bottom">
                <span data-v-c99e5564="" class="f32 color-000 new-tip">图片上传的越全，帐号卖的越快</span>
              </div>
              <div data-v-c99e5564="" class="bg-fff new-upload-img p-30">
                <div data-v-c99e5564="">
                  <label data-v-c99e5564=""><input data-v-c99e5564="" type="file" name="imageFile" accept="image/jpeg,image/png" multiple="multiple" class="upload" /></label>
                  <p data-v-c99e5564="" class="f32 color-000 text-center">上传图片</p>
                </div>
              </div>
              <p data-v-c99e5564="" class="px-30 py-20 f24 color-666">注：单次最多可选15张</p>
            </div>
          </div>
          <div data-v-08a3bc62="" class="release  trlect-btn mt-20">
            <a data-v-08a3bc62="" class="next"><input data-v-08a3bc62="" type="button" value="下一步" class="bg-f54" /></a>
          </div>
        </div>
        <div data-v-08a3bc62="" class="pb-200" style="display: none;">
          <div data-v-08a3bc62="" class="fixedFill-mx"></div>
          <div data-v-08a3bc62="" class="top-header border-bottom fixed-top">
            <div data-v-08a3bc62="" class="top-back">
              <a data-v-08a3bc62="">返回</a>
            </div>
            <h2 data-v-08a3bc62="" class="f36 color-000">完善资料</h2>
          </div>
          <div data-v-509ef1b0="" class="fw px-30  notice_risk Mnotice_top mt-97" data-v-08a3bc62="">
            <div data-v-509ef1b0="" class="fl notice_public">
              <p data-v-509ef1b0="" class="f24  fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
            </div>
          </div>
          <div data-v-08a3bc62="" class="order-container px-30 mt-79 bg-fff border-bottom">
            <span data-v-08a3bc62="" class="span-icon-red-tip f32 color-000">为确保出售成功，请填写本人的联系方式</span>
          </div>
          <div data-v-08a3bc62="" style="" class="order-container bg-fff border-bottom">
            <span data-v-08a3bc62="" class="span-icon-xinhao f32 color-000">QQ号</span>
            <input data-v-08a3bc62="" maxlength="10" type="number" placeholder="请输入正确QQ号" />
          </div>


          <div data-v-08a3bc62="">
            <div data-v-08a3bc62="" class="order-container bg-fff f30 border-bottom mt-20 border-top">
              <i data-v-08a3bc62="" class="tip"></i>
              <span data-v-08a3bc62="">为了您的资金安全，请填写本人真实信息</span>
            </div>
            <div data-v-08a3bc62="" class="order-container bg-fff border-bottom">
              <span data-v-08a3bc62="" class="span-icon-xinhao f32 color-000">真实姓名</span>
              <input data-v-08a3bc62="" maxlength="14" type="text" placeholder="请输入您的真实姓名" />
            </div>

            <div data-v-08a3bc62="" class="order-container bg-fff border-bottom">
              <span data-v-08a3bc62="" class="span-icon-xinhao f32 color-000">身份证号</span>
              <input data-v-08a3bc62="" maxlength="18" type="text" placeholder="请输入您的身份证号" />
            </div>

            <div data-v-08a3bc62="" class="text-center color-m1 line-h46 f30 py-20">
              信息请认真填写，提交后如需修改
              <br data-v-08a3bc62="" />需提供本人真实信息资料
            </div>
          </div>
          <div data-v-08a3bc62="" class="release mt-20 trlect-btn border">
            <a data-v-08a3bc62="" class="next"><input data-v-08a3bc62="" type="button" value="确定" class="bg-f54" /></a>
          </div>
        </div>
        <!-- 安心买服务规定 -->
        <div data-v-08a3bc62="" id="pop_register" class="phlog hide" style="position: fixed; z-index: 1001; left: 50%; top: 50%; margin-left: -44%; margin-top: 0px;">
          <div data-v-08a3bc62="" class="pgbis">
            <h2 data-v-08a3bc62="" class="f30 color-000">安心买服务规定</h2>
            <p data-v-08a3bc62="" class="f28"> 鉴于5173作为网络第三方交易平台，仅能对卖家、买家、商品信息进行形式审查，为此5173特引入安心买服务。若卖家、买家任何一方选择了安心买服务，则卖家出售的商品，买家购买该商品出现被卖家找回、被运营商收回、封号等情况，您可以申请安心买服务，安心买保障体系会优先帮您找回帐号或者给予您购买商品的全额退款；并且本网站将根据该用户违规的情节和程度，对违规用户直接作出删除商品信息，限制交易权限甚至冻结用户帐号的处罚。若发生上述情况造成买家损失的，由本网站代卖家先行向买家退还购买上述商品的货款（服务费不退还）</p>
          </div>
        </div>
        <!--<div data-v-08a3bc62="" class="dialog_cover hide"></div>-->
      </div>
      <div data-v-5af57c0b="" class="dialog_cover" v-show="property.masked" @click="close()"></div>
      <!-- 了解收费标准-->
      <div data-v-08a3bc62="" v-show="property.fees" class="phlog" style="opacity: 1; position: fixed; z-index: 1001; left: 0px; right: 0px; top: 25%;">
        <div data-v-08a3bc62="" class="ts-rate">
          <h3 data-v-08a3bc62="" class="f30 color-000">移动端帐号收费标准：</h3>
          <table data-v-08a3bc62="">
            <thead data-v-08a3bc62="">
              <tr data-v-08a3bc62="">
                <th data-v-08a3bc62="" class="t1">交易金额（元）</th>
                <th data-v-08a3bc62="">收取比例</th>
                <th data-v-08a3bc62="">服务费（元）</th>
              </tr>
            </thead>
            <tbody data-v-08a3bc62="">
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">13 &lt; 交易金额 ≤ 30</td>
                <td data-v-08a3bc62="">固定</td>
                <td data-v-08a3bc62="">8</td>
              </tr>
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">30 &lt; 交易金额 ≤ 100</td>
                <td data-v-08a3bc62="">100&times;10%+5</td>
                <td data-v-08a3bc62="">15</td>
              </tr>
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">100 &lt; 交易金额 ≤ 200</td>
                <td data-v-08a3bc62="">200&times;10%+5</td>
                <td data-v-08a3bc62="">25</td>
              </tr>
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">200 &lt; 交易金额 ≤ 300</td>
                <td data-v-08a3bc62="">300&times;10%+5</td>
                <td data-v-08a3bc62="">35</td>
              </tr>
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">以此类推</td>
                <td data-v-08a3bc62="">以此类推</td>
                <td data-v-08a3bc62="">以此类推</td>
              </tr>
              <tr data-v-08a3bc62="">
                <td data-v-08a3bc62="" class="t1">10000 &lt; 交易金额</td>
                <td data-v-08a3bc62="">固定</td>
                <td data-v-08a3bc62="">1010</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>

  import "@/assets/content/css/fost-base-min.css";
  import "@/assets/content/css/style-min.css";
  import "@/assets/css/goodsPublish_account.css";
  import fileUpload from '@/components/FileUpload.vue'
  //import router from "vue-router";
  import { ProfessionData, qqlevelData, punishData} from "@/testdata/Data.js";

  let vmdata = {
    professionList: [], //角色职业列表
    qqlevelList: [],//qq等级列表
    punishList:[],//是否有惩罚列表
    property:{
      sex: '',//职业性别
      friend: '',//有无QQ好友
      serviceDate: '',//服务期限
      masked: false,//通用遮罩层
      prof: false,//职业下拉选择列表
      profVal: '请选择',//被选中的职业选项，默认'请选择'
      qqlevel: false,//qq等级下拉选择列表
      qqlevelVal: '请选择',//选中的qq等级范围
      fees: false,//收费标准
      punish: false,//处罚记录
      punishVal: '请选择',//选中的处罚记录
      rapidPrice: '0',//快捷发布费用
      rapidChecked: false, //是否选择快捷发布
      showSel: '', //选择要弹出的ul框
      servicePrice:{
          shortTime:'0.00',
          longTime:'0.00'
      },

      //各个输入框
      goodTitle:'',//商品标题（账号）
      goodPrice: '',//出售价格（账号）
      profLevel: '',//游戏角色等级
      gameAccount: '',//游戏账号
      gamePwd: '',//游戏密码
      gameProfName: '',//游戏角色名
      gameStrPwd:''//游戏仓库密码（dnf）
    }
  }
  export default {
    name: 'goodsPublish_account',
    data() {
      return vmdata;
    },
    watch:{
        'property.goodPrice': function(){
            let that = this;
            let goodPrice = that.property.goodPrice;

            if(goodPrice > 20000){
                goodPrice = 20000;
            }
            that.property.servicePrice.shortTime = (goodPrice * 0.22).toFixed(2); //安心买60天服务
            that.property.servicePrice.longTime = (goodPrice * 0.3).toFixed(2); //安心买180天服务
        }
    },
  mounted:function(){
    this.getProfessionList();
    this.getqqlevelList();
    this.getPunishList();
  },
  components: {
      
      fileUpload: fileUpload
    },
    methods:{
      //展示遮罩层以及ul
      showContent: function (options) {
        //debugger;
        this.property[options] = true;
        this.property.masked = true;
        this.property.showSel = options;
      },
      //关闭已打开的遮罩层和内容
      close: function (option) {
        let that = this;
        that.property.fees = false;
        that.property.masked = false;

        //点击遮罩层的时候分情况关闭
        if (option == undefined) {
            that.property[that.property.showSel] = false;
            that.property.showSel = '';
        } else {
          that.property[option] = false;
        }
        //清空要弹出的ul框
        that.property.showSel = '';
      },
      //获取职业列表
      getProfessionList: function (){
        let that = this;
        for(let datasList of ProfessionData){
          that.$set(that.professionList, that.professionList.length,datasList)
        }
      },
      //获取qq等级列表
      getqqlevelList: function () {
        let that = this;
        for (let datasList of qqlevelData) {
          that.$set(that.qqlevelList, that.qqlevelList.length, datasList)
        }
      },
      //获取是否有惩罚列表
      getPunishList: function () {
        let that = this;
        for (let datasList of punishData) {
          that.$set(that.punishList, that.punishList.length, datasList)
        }
      },
      //所选择的li
      selectLi: function (option,value) {
        let that = this;
        that.property[option+'Val'] = value;
        this.close(option);
      },
      //快捷发布选项
      shortcut: function (e) {
        let that = this;
        if (e.target.checked) {
          that.property.rapidChecked = true;
          that.property.rapidPrice = '10';
        } else {
          that.property.rapidChecked = false;
          that.property.rapidPrice = '0';
        }
          //console.log(e.target.checked)

      },
        nextStep:function(){
            let that = this;
            let tempVal = {};

            tempVal.goodTitle = that.property.goodTitle,
            tempVal.goodPrice = that.property.goodPrice,
            tempVal.profLevel = that.property.profLevel,
            tempVal.gameAccount = that.property.gameAccount,
            tempVal.gamePwd = that.property.gamePwd,
            tempVal.gameProfName = that.property.gameProfName,
            tempVal.gameStrPwd = that.property.gameStrPwd

            console.log(tempVal);
        }
    }
  }

</script>


