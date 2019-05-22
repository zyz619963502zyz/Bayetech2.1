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
    <div  >
      <div >
        <div id="wrapper" class="pb-30">
          <div data-v-509ef1b0="" class="fw px-30  notice_risk Mnotice_top mt-80">
            <div data-v-509ef1b0="" class="fl notice_public">
              <p data-v-509ef1b0="" class="f24  fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
            </div>
          </div>
          <div class="order-container bg-fff mt-174 color-000 f30 border-bottom Mmt-177">
            <span>商品类型</span>
            <span style="position: absolute; top: 0.24rem; left: 2.4rem;">游戏帐号</span>
          </div>
          <div class="order-container bg-fff color-000 f30 ">
            <span>游戏区服</span>
            <span style="position: absolute; top: 0.24rem; left: 2.4rem;">广东区/广东1区</span>
          </div>
          <div class="mt20">&nbsp;</div>
          <textBox label="商品标题"></textBox>
          <textBox label="出售价格"></textBox>


          <p class="f22 mt-30 mb-30 color-999 pl-20 pr-20 p-tip" style="text-align: right;">
            <span class="coll lh-46" @click="showContent('fees')">了解收费标准</span>
          </p>
          <div class="mt-20"></div>

          <commonFilter title="角色职业" :multiSelected="false" :search="searchJob" val="ProfessionId" text="ProfessionName" v-model="property.profVal"></commonFilter>

          <cardFilter title="性别" :options="{male:'男',female:'女'}" :multiSelected="false" v-model="property.sex"></cardFilter>


          <textBox label="角色等级"></textBox>
          <cardFilter title="QQ等级" :options="{'1to5':'QQ等级1-5级','6to10':'QQ等级6-10级','11to20':'QQ等级11-20级','21to30':'QQ等级21-30级','31to40':'QQ等级31-40级','40up':'QQ等级40级以上'}" v-model="property.qqlevelVal" :multiSelected="false"></cardFilter>

          
          <cardFilter title="QQ好友" :options="{1:'有',female:'没有'}" :multiSelected="false" v-model="property.friend"></cardFilter>


          <cardFilter title="历史记录" :options="{1:'不存在5天封号记录',2:'存在5天封号记录',3:'存在1小时封号记录',4:'存在3小时封号记录',5:'存在3天封号记录'}" :multiSelected="false" v-model="property.friend"></cardFilter>

          <div class="mt-20"></div>

          <textBox label="游戏账号" v-model="property.gameAccount"></textBox>
          <textBox label="游戏密码"></textBox>
          <textBox label="游戏角色名"></textBox>
          <textBox label="仓库密码"></textBox>

          <p class="sec-tip">本站所有信息经过安全加密，请安心填写</p>

          <div class="color-000 mt-20">

            <div>
              <div class="buyat-ease color-000 bg-fff ">
                <div class="f32 secbuy-ease border-bottom">
                  <em class="fl sec-text">开通安心买服务</em>
                  <i class="sease-wenh fl ml-20"></i>
                </div>
                <div class="secbuy-info">
                  <div class="sectems f30 color-000 border-bottom">
                    <i class="chrd-xms fl" :class="{'chrd-xms-hov':$isChoice('property','serviceDate','sixty')}" @click="$chooseSingle('property','serviceDate','sixty')"></i>
                    <span class="chterm fl">60天服务期限</span>
                    <em class="chcover fl">服务费：<i class="color-m1">{{property.servicePrice.shortTime}}</i>元</em>
                  </div>
                  <div class="sectems f30 color-000 border-bottom">
                    <i class="chrd-xms fl" :class="{'chrd-xms-hov':$isChoice('property','serviceDate','eighteen')}" @click="$chooseSingle('property','serviceDate','eighteen')"></i>
                    <span class="chterm fl">180天服务期限</span>
                    <em class="chcover fl">服务费：<i class="color-m1">{{property.servicePrice.longTime}}</i>元</em>
                  </div>
                  <div class="sectems f30 color-000 border-bottom">
                    <i class="chrd-xms fl " :class="{'chrd-xms-hov':$isChoice('property','serviceDate','not')}" @click="$chooseSingle('property','serviceDate','not')"></i>
                    <span class="chterm fl">不开通</span>
                    <em class="chcover fl">服务费：<i class="color-m1">0.00</i>元</em>
                  </div>
                </div>
              </div>
              <div class="buyat-tips pt-15">
                <div class="sec-text pr-20 color-999">
                  <p class="f22"><i class="p-icon-red-tip fl"></i>90%以上的用户更愿意购买开通安心买服务的商品！(卖出后收费)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20 order-container color-000 bg-fff">
            <span class="f32 sec-buy-server">快捷发布</span>
            <div class=" f30">
              <span class="sec-price f36 color-999" :class="{'color-m1':property.rapidChecked}"> ￥{{property.rapidPrice}}</span><!--:class="{color-m1:!checkNames}"-->
              <span class="f28 pl-30 color-333">专业客服帮您截图，商品更易出售</span>
              <div class="button-switch fr">
                <label class="label-switch">
                  <input type="checkbox" id="label-switch" @click="shortcut($event)" /><!--v-model="checkNames"-->
                  <div class="checkbox"></div>
                </label>
              </div>
            </div>
            <div class="sec-text mt-10 color-999">
              <p class="f22"><i class="p-icon-red-tip fl"></i> 不用传图，轻松出售（卖出后收费） </p>
            </div>
          </div>
          <div class="new-pubilsh01 order-container bg-fff f30 fw color-000 mt-20 ">
            <span data-v-484bcaae="" class="span-icon-xinhao color-333">游戏截图</span>
            <fileUpload></fileUpload>
          </div>
          <div class="release mt-20  trlect-btn" style="text-align: left;">
            <p class="f22 color-m1"> 为保障地下城与勇士帐号交易安全，您出售的帐号将进行延迟4天打款，此期间请勿修改帐号资料，否则将会号财两空。 </p>
          </div>
          <div class="release mt-30  trlect-btn">
            <a class="next"><input @click="nextStep()" type="button" name="" value="下一步" class="bg-f54 " /></a>
          </div>
        </div>
        <div  class="pb-200" style="display: none;">
          <div  class="fixedFill-mx"></div>
          <div  class="top-header border-bottom fixed-top">
            <div  class="top-back">
              <a >返回</a>
            </div>
            <h2  class="f36 color-000">地下城与勇士</h2>
            <div  class="top-right">
              <a  href="/" class="back-home"></a>
            </div>
          </div>
          <div data-v-c99e5564="" class="upload" >
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
          <div  class="release  trlect-btn mt-20">
            <a  class="next"><input  type="button" value="下一步" class="bg-f54" /></a>
          </div>
        </div>
        <div  class="pb-200" style="display: none;">
          <div  class="fixedFill-mx"></div>
          <div  class="top-header border-bottom fixed-top">
            <div  class="top-back">
              <a >返回</a>
            </div>
            <h2  class="f36 color-000">完善资料</h2>
          </div>
          <div data-v-509ef1b0="" class="fw px-30  notice_risk Mnotice_top mt-97" >
            <div data-v-509ef1b0="" class="fl notice_public">
              <p data-v-509ef1b0="" class="f24  fl">出售商品无需缴纳保证金，无需扫码，切勿私下交易！</p>
            </div>
          </div>
          <div  class="order-container px-30 mt-79 bg-fff border-bottom">
            <span  class="span-icon-red-tip f32 color-000">为确保出售成功，请填写本人的联系方式</span>
          </div>
          <div  style="" class="order-container bg-fff border-bottom">
            <span  class="span-icon-xinhao f32 color-000">QQ号</span>
            <input  maxlength="10" type="number" placeholder="请输入正确QQ号" />
          </div>


          <div >
            <div  class="order-container bg-fff f30 border-bottom mt-20 border-top">
              <i  class="tip"></i>
              <span >为了您的资金安全，请填写本人真实信息</span>
            </div>
            <div  class="order-container bg-fff border-bottom">
              <span  class="span-icon-xinhao f32 color-000">真实姓名</span>
              <input  maxlength="14" type="text" placeholder="请输入您的真实姓名" />
            </div>

            <div  class="order-container bg-fff border-bottom">
              <span  class="span-icon-xinhao f32 color-000">身份证号</span>
              <input  maxlength="18" type="text" placeholder="请输入您的身份证号" />
            </div>

            <div  class="text-center color-m1 line-h46 f30 py-20">
              信息请认真填写，提交后如需修改
              <br  />需提供本人真实信息资料
            </div>
          </div>
          <div  class="release mt-20 trlect-btn border">
            <a  class="next"><input  type="button" value="确定" class="bg-f54" /></a>
          </div>
        </div>
        <!-- 安心买服务规定 -->
        <div  id="pop_register" class="phlog hide" style="position: fixed; z-index: 1001; left: 50%; top: 50%; margin-left: -44%; margin-top: 0px;">
          <div  class="pgbis">
            <h2  class="f30 color-000">安心买服务规定</h2>
            <p  class="f28"> 鉴于5173作为网络第三方交易平台，仅能对卖家、买家、商品信息进行形式审查，为此5173特引入安心买服务。若卖家、买家任何一方选择了安心买服务，则卖家出售的商品，买家购买该商品出现被卖家找回、被运营商收回、封号等情况，您可以申请安心买服务，安心买保障体系会优先帮您找回帐号或者给予您购买商品的全额退款；并且本网站将根据该用户违规的情节和程度，对违规用户直接作出删除商品信息，限制交易权限甚至冻结用户帐号的处罚。若发生上述情况造成买家损失的，由本网站代卖家先行向买家退还购买上述商品的货款（服务费不退还）</p>
          </div>
        </div>
        <!--<div  class="dialog_cover hide"></div>-->
      </div>
      <div data-v-5af57c0b="" class="dialog_cover" v-show="property.masked" @click="close()"></div>
      <!-- 了解收费标准-->
      <div  v-show="property.fees" class="phlog" style="opacity: 1; position: fixed; z-index: 1001; left: 0px; right: 0px; top: 25%;">
        <div  class="ts-rate">
          <h3  class="f30 color-000">移动端帐号收费标准：</h3>
          <table >
            <thead >
              <tr >
                <th  class="t1">交易金额（元）</th>
                <th >收取比例</th>
                <th >服务费（元）</th>
              </tr>
            </thead>
            <tbody >
              <tr >
                <td  class="t1">13 &lt; 交易金额 ≤ 30</td>
                <td >固定</td>
                <td >8</td>
              </tr>
              <tr >
                <td  class="t1">30 &lt; 交易金额 ≤ 100</td>
                <td >100&times;10%+5</td>
                <td >15</td>
              </tr>
              <tr >
                <td  class="t1">100 &lt; 交易金额 ≤ 200</td>
                <td >200&times;10%+5</td>
                <td >25</td>
              </tr>
              <tr >
                <td  class="t1">200 &lt; 交易金额 ≤ 300</td>
                <td >300&times;10%+5</td>
                <td >35</td>
              </tr>
              <tr >
                <td  class="t1">以此类推</td>
                <td >以此类推</td>
                <td >以此类推</td>
              </tr>
              <tr >
                <td  class="t1">10000 &lt; 交易金额</td>
                <td >固定</td>
                <td >1010</td>
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
  import textBox from '@/components/filter/textBox.vue'
  import cardFilter from '@/components/filter/cardFilter.vue'
  import commonFilter from '@/components/filter/commonFilter.vue'
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
      textBox:textBox,
    fileUpload: fileUpload,
    cardFilter: cardFilter,
    commonFilter: commonFilter
    },
    methods: {
      //搜索职业列表
      searchJob: function () {
        return this.$get("/web/api/GoodInfo/GetProfessions", {
          gameid: 1
        })
      },
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


