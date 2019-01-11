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
    <div data-v-08a3bc62="">
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
            <input data-v-08a3bc62="" maxlength="20" type="text" placeholder="请勿留下联系方式" />
          </div>
          <div data-v-08a3bc62="" class="order-container bg-fff border-bottom f30 color-000">
            <span data-v-08a3bc62="" class="span-icon-xinhao">出售价格</span>
            <input data-v-08a3bc62="" type="tel" maxlength="7" placeholder="请输入出售价格" />
          </div>
          <p data-v-08a3bc62="" class="f22 mt-30 mb-30 color-999 pl-20 pr-20 p-tip" style="text-align: right;"><span data-v-08a3bc62="" class="coll lh-46">了解收费标准</span></p>
          <div data-v-08a3bc62="" class="mt-20"></div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <div data-v-5af57c0b="" class="dialog_cover" v-if="property.ulShow"></div>
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    角色职业

                  </span>
                  <span data-v-6027fbac="" @click="showList()" class="danwei">{{property.selectVal}} </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>
              <div data-v-5af57c0b="" class="bottom-bomb bomb-danxuan bg-f1" v-if="property.ulShow">
                <div data-v-5af57c0b="" class="bomb-title border-bottom border-top bg-fff">
                <h1 data-v-5af57c0b="" class="f32 color-666 text-center">角色职业</h1> <i data-v-5af57c0b="" @click="close()" class="bomb-close"></i>
                </div>
                <div data-v-5af57c0b="" class="bomb-content">
                  <ul data-v-5af57c0b="" class="bomb-li-item bg-fff">
                    <li v-for="jobs in ProfessionList" @click="selectLi(jobs)" class="border-bottom">{{jobs}}</li>
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
              <input data-v-6027fbac="" type="text" maxlength="90" placeholder="请输入角色等级" />
            </div>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    QQ等级

                  </span>
                  <span data-v-6027fbac="" class="danwei">请选择 </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>

            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    QQ好友

                  </span>
                  <span data-v-6027fbac="" class="danwei">请选择 </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>

            </section>
          </div>
          <div data-v-6027fbac="" data-v-08a3bc62="">

            <section data-v-6027fbac="" data-i="选择职业" propertyid="32">
              <a data-v-6027fbac="" href="javascript:;" class="aRight">
                <div data-v-6027fbac="" class="order-container bg-fff f30  border-bottom ">
                  <span data-v-6027fbac="" class="span-icon-xinhao">
                    历史处罚记录

                  </span>
                  <span data-v-6027fbac="" class="danwei">请选择 </span>
                  <i data-v-6027fbac="" class="toRight fr"></i>
                </div>
              </a>

            </section>
          </div>
          <div data-v-08a3bc62="" class="mt-20"></div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏帐号</span>
              <input data-v-7a08d46c="" maxlength="10" type="text" placeholder="请输入游戏帐号" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">
            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏密码</span>
              <input data-v-7a08d46c="" maxlength="16" type="text" placeholder="请输入游戏密码" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">游戏角色名</span>
              <input data-v-7a08d46c="" maxlength="50" type="text" placeholder="请输入游戏角色名" />
            </div>
          </div>
          <div data-v-7a08d46c="" data-v-08a3bc62="">

            <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
            <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
              <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">仓库密码</span>
              <input data-v-7a08d46c="" maxlength="50" type="text" placeholder="请输入仓库密码" />
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
                    <i data-v-08a3bc62="" class="chrd-xms fl"></i>
                    <span data-v-08a3bc62="" class="chterm fl">60天服务期限</span>
                    <em data-v-08a3bc62="" class="chcover fl">服务费：<i data-v-08a3bc62="" class="color-m1">0.00</i>元</em>
                  </div>
                  <div data-v-08a3bc62="" class="sectems f30 color-000 border-bottom">
                    <i data-v-08a3bc62="" class="chrd-xms fl"></i>
                    <span data-v-08a3bc62="" class="chterm fl">180天服务期限</span>
                    <em data-v-08a3bc62="" class="chcover fl">服务费：<i data-v-08a3bc62="" class="color-m1">0.00</i>元</em>
                  </div>
                  <div data-v-08a3bc62="" class="sectems f30 color-000 border-bottom">
                    <i data-v-08a3bc62="" class="chrd-xms fl "></i>
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
              <span data-v-08a3bc62="" class="sec-price f36 color-999"> ￥0</span>
              <span data-v-08a3bc62="" class="f28 pl-30 color-333">专业客服帮您截图，商品更易出售</span>
              <div data-v-08a3bc62="" class="button-switch fr">
                <label data-v-08a3bc62="" class="label-switch">
                  <input data-v-08a3bc62="" type="checkbox" id="label-switch" />
                  <div data-v-08a3bc62="" class="checkbox"></div>
                </label>
              </div>
            </div>
            <div data-v-08a3bc62="" class="sec-text mt-10 color-999">
              <p data-v-08a3bc62="" class="f22"><i data-v-08a3bc62="" class="p-icon-red-tip fl"></i> 不用传图，轻松出售（卖出后收费） </p>
            </div>
          </div>
          <div data-v-08a3bc62="" class="release mt-20  trlect-btn" style="text-align: left;">
            <p data-v-08a3bc62="" class="f22 color-m1"> 为保障地下城与勇士帐号交易安全，您出售的帐号将进行延迟4天打款，此期间请勿修改帐号资料，否则将会号财两空。 </p>
          </div>
          <div data-v-08a3bc62="" class="release mt-30  trlect-btn">
            <a data-v-08a3bc62="" class="next"><input data-v-08a3bc62="" type="button" name="" value="下一步" class="bg-f54 " /></a>
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
      
      <div data-v-08a3bc62="" class="phlog" style="opacity: 1; position: fixed; z-index: 1001; left: 0px; right: 0px; top: 25%; display: none;">
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
  import {ProfessionData} from "@/testdata/Data.js";

  let vmdata = {
    ProfessionList:[], //角色职业列表
    property:{
      sex:[],
      ulShow:false,
      selectVal:'请选择'
    }
  }
  export default {
    name: 'goodsPublish_account',
    data() {
      return vmdata;
    },
  mounted:function(){
    //this.getProfessionList();
  },
    methods:{
      //展示遮罩层以及ul
      showList:function(){
        this.property.ulShow = true;
        this.getProfessionList();
      },
      close:function(){
        this.property.ulShow = false;
      },
      //获取职业列表
      getProfessionList: function (){
        let that = this;
        for(let datasList of ProfessionData){
          that.$set(that.ProfessionList,that.ProfessionList.length,datasList)
        }
      },
      //所选择的职业
      selectLi:function(value){
        let that = this;
        that.property.selectVal = value;
        this.close();
      }
    }
  }

</script>

<style>
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
      .notice_risk[data-v-509ef1b0] {
        height: auto;
        display: block;
        overflow: hidden;
        background-color: #fffdf4;
        z-index: 9;
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
      .mt-174[data-v-08a3bc62] {
        margin-top: 1.74rem;
      }
      .order-container {
        padding: .24rem .4rem;
        position: relative;
        height: auto;
        display: block;
        overflow: hidden;
      }
        .order-container span {
          display: inline-block;
          line-height: .6rem;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .order-container input, .order-container textarea {
          border: none;
          position: absolute;
          font-size: .3rem;
          top: .24rem;
        }
        .order-container input {
          height: .6rem;
          width: 55%;
          left: 2.9rem;
          line-height: .6rem;
        }
          .order-container input[type=tel] {
            font-size: .32rem;
          }
      .p-tip .coll {
        color: #0000d3;
        font-size: .25rem;
      }
      .toRight {
        height: .32rem;
        top: .38rem;
        background: url('../../assets/images/right2.png') 50% no-repeat;
        background-size: .12rem;
      }
      .danwei {
        float: right;
        width: 63%;
        line-height: .6rem;
        text-align: right;
        padding-right: .2rem;
      }
      .span-icon-xinhao {
        display: inline-block;
        line-height: .48rem;
        padding-left: .2rem;
        background: url(../../assets/images/common/icon-red.png) no-repeat 0;
        background-size: .14rem .14rem;
      }
      .sec-tip {
        margin: .3rem auto;
        text-align: center;
        color: #666;
      }
      .buyat-ease, .buyat-ease .secbuy-ease {
        height: auto;
        display: block;
        overflow: hidden;
      }
        .buyat-ease .secbuy-ease .sec-text {
          padding-left: .4rem;
          height: 1rem;
          line-height: 1rem;
        }
        .buyat-ease .secbuy-ease .sease-wenh {
          width: .4rem;
          height: 1rem;
          display: inline-block;
          background: url(../../assets/images/anfw-ico.png)no-repeat 50%;
          background-size: .35rem;
        }
        .buyat-ease .secbuy-info .sectems {
          padding-left: .4rem;
          line-height: 1rem;
        }
          .buyat-ease .secbuy-info .sectems .chrd-xms {
            width: 9%;
            height: 1rem;
            display: block;
            background: url(../../assets/images/dlpub-list-hov.png) no-repeat 0;
            background-size: .38rem;
          }
          .buyat-ease .secbuy-info .sectems .chterm {
            width: 32%;
            display: block;
            line-height: 1rem;
          }
          .buyat-ease .secbuy-info .sectems .chcover {
            width: 49%;
            display: block;
          }
      .buyat-tips {
        height: auto;
        display: block;
        overflow: hidden;
        padding-left: .4rem;
      }
      .sec-text {
        line-height: .4rem;
      }
      .p-icon-red-tip {
        width: .28rem;
        height: .36rem;
        display: inline-block;
        background: url(../../assets/images/common/icon-red-tip.png) 0 no-repeat;
        background-size: .22rem;
      }
      .order-container span.sec-buy-server {
        padding-right: .5rem;
      }
      .order-container .button-switch {
        position: absolute;
        top: 50%;
        margin-top: -.36rem;
        right: .3rem;
      }
      .label-switch, .label-switch .checkbox {
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        cursor: pointer;
      }
      .label-switch {
        display: inline-block;
        vertical-align: middle;
        border-radius: .4rem;
        -webkit-align-self: center;
        align-self: center;
      }
        .label-switch input[type=checkbox] {
          display: none;
        }
        .label-switch .checkbox, .label-switch .checkbox:before {
          background: #dcdcdc;
        }
        .label-switch .checkbox {
          border-radius: .4rem;
          background: #9f9d9d;
          z-index: 0;
          margin: 0;
          padding: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          appearance: none;
          border: none;
          margin-top: .06rem;
        }
        .label-switch, .label-switch .checkbox {
          width: 100%;
          box-sizing: border-box;
          height: 100%;
          position: relative;
          cursor: pointer;
        }
          .label-switch input[type=checkbox] + .checkbox, .label-switch input[type=checkbox] + .checkbox:after, html.android .label-switch input[type=checkbox] + .checkbox:before {
            transition-duration: 0;
          }
          .label-switch .checkbox:after, .label-switch .checkbox:before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            margin: 2%;
            border-radius: .4rem;
            transition-duration: .3s;
          }
          .label-switch .checkbox:before {
            width: 96%;
            box-sizing: border-box;
            height: 98%;
            background: #9f9d9d;
            z-index: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          .label-switch .checkbox:after {
            height: 92%;
            width: 50%;
            background: #fff;
            z-index: 2;
            box-shadow: 0 0.05rem 0.12rem rgba(0,0,0,.4);
            -webkit-transform: translateX(0);
            transform: translateX(0);
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
        .release a {
          width: 100%;
          height: .86rem;
          display: inline-block;
        }
          .release a input {
            width: 100%;
            height: .86rem;
            border: none;
            color: #fff;
            font-size: .36rem;
          }
      .show[data-v-08a3bc62] {
        display: block !important;
      }
      .label-switch input[type=checkbox]:checked + .checkbox:before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      .label-switch input[type=checkbox]:checked + .checkbox:after {
        -webkit-transform: translateX(92%);
        transform: translateX(92%);
      }
      /*安心买服务规定*/
      .phlog {
        width: 85%;
        min-width: 6.9rem;
        height: auto;
        border-radius: .2rem;
        margin: .35rem auto .25rem;
        position: relative;
        background-color: #fff;
        opacity: 1;
      }

      /*bottom-bomb*/
  .dialog_cover{
    z-index:19;
  }
      .bottom-bomb {
        width: 100%;
        max-width: 768px;
        max-height: 8.7rem;
        position: fixed;
        bottom: 0;
        overflow: hidden;
      }
      .bomb-danxuan {
        min-height: 2.96rem;
      }
      .bottom-bomb {
        z-index: 20;
      }
    .bomb-danxuan {
      min-height: 2.96rem;
  }
      .bomb-title {
        width: 100%;
        height: 1.06rem;
        line-height: 1.06rem;
        position: relative;
      }
        .bomb-title .bomb-close {
          width: 1.06rem;
          height: 1.06rem;
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          background: url(../../assets/images/close.png) 50% no-repeat;
          background-size: .24rem;
        }
      .bomb-danxuan .bomb-content {
        width: 100%;
        max-height: 7.64rem;
        overflow-y: auto;
      }
      .bomb-danxuan .bomb-content .bomb-li-item li {
        line-height: .96rem;
        height: .96rem;
        padding-left: .48rem;
        font-size: .3rem;
        color: #000;
    }
</style>
