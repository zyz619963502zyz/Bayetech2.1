//step2
define(['vue', 'jquery', 'common', 'Scripts/app/GoodPublish/GoodInfo/Gold', 'Scripts/app/GoodPublish/GoodInfo/Account', 'Scripts/app/GoodPublish/GoodInfo/Universal', 'API', 'DynamicInput','FileUpload'],
    function (Vue, $, common, GoldGoodInfo, AccountGoodInfo, UniversalGoodInfo, API, DynamicInput,FileUpload) {
//   var html=`<div class="panel-body" style="background: url(http://pic.7881.com/7881-2016/images/goods-publish/publish-account-bg.png) center top no-repeat;">
//  <form id="publishForm" action="/publish" method="post">
//    <div class="main-content">
//      <div class="publish-box w1190">
//        <input type="hidden" name="GameId" :value="GameInfo.GameId">
//        <input type="hidden" name="GameName" :value="GameInfo.GameName">
//        <input type="hidden" name="GameGroupId" :value="GameInfo.GroupId">
//        <input type="hidden" name="GameGroupName" :value="GameInfo.GroupName">
//        <input type="hidden" name="GameServerId" :value="GameInfo.ServerId">
//        <input type="hidden" name="GameServerName" :value="GameInfo.ServerName">
//        <input type="hidden" name="GoodTypeId" :value="GameInfo.GoodTypeId">
//        <input type="hidden" name="GoodTypeName" :value="GameInfo.GoodTypeName">
//        <div class="publish-header w980">
//          <h2>
//            <span>
//              <img src="http://pic.7881.com/7881/market/images/pc_game_logo/G10.png" alt=""></span>
//          </h2>
//          <h3>
//            <a class="btn-back" href="javascript:void(0)" @click="Next('step1')">&lt; 返回修改</a>
//            <span>《{{GameInfo.GameName}}》{{GameInfo.GroupName}}/{{GameInfo.ServerName}}/{{GameInfo.GoodTypeName}}</span></h3>
//          <p class="orange-stip">
//            <span>温馨提示：</span>
//            <br><span v-html="tip"></span></p></div>
//        <div class="publish-step-01 fill-goods-info">
//          <div class="pub-tit">
//            <div class="line-left"></div>
//            <div class="steptit">01-填写商品信息</div>
//            <div class="line-right"></div>
//          </div>
//          <component class="one-step-con" v-bind:is="good_info_com"></component>
//        </div>
//        <div class="publish-step-02 fill-account-info">
//          <div class="pub-tit">
//            <div class="line-left"></div>
//            <div class="steptit">02-填写账号资料</div>
//            <div class="line-right"></div>
//          </div>
//          <div class ="account-info-con account-info-con">
//               <div class ="common-form height-30" id="gameAccountInfo">
//                   <div class ="form-item clearfix" v-for="data in GoodExtProps">
//                       <div class="form-item-l">
//                           <i>*</i>
//                           <span>{{data.Name}}：</span>
//                       </div>
//                       <div class="form-item-r">
//                           <div class ="game-ipt">
//                              <DynamicInput :data="data"></DynamicInput>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//          </div>
//        </div>
//        <div class="publish-step-03 perfect-deal-info">
//          <div class="pub-tit">
//            <div class="line-left"></div>
//            <div class="steptit">03-完善交易选项</div>
//            <div class="line-right"></div>
//          </div>
//          <div class="deal-info-con">
//            <div class="common-form height-30">
//              <div class="form-item clearfix">
//                <div class="form-item-l">
//                  <i>*</i>
//                  <span>商品有效期：</span></div>
//                <div class="form-item-r">
//                  <div class="comselect h-30">
//                    <select id="validDay" name="validDay" class="form-control">
//                      <option value="">选择有效期</option>
//                      <option value="1">1天</option>
//                      <option value="3">3天</option>
//                      <option value="5">5天</option>
//                      <option value="7">7天</option>
//                      <option value="15">15天</option>
//                      <option value="30">30天</option>
//                    </select>
//                  </div>
//                </div>
//              </div>
//              <div class="form-item clearfix timefb">
//                <div class="form-item-l">
//                  <i>*</i>
//                  <span>交易方便时间：</span></div>
//                <div class="form-item-r">
//                  <div class="yesorno">每天
//                    <div class="comselect w90 h-30">
//                      <div class="comselect-val">
//                        <input type="text" readonly="readonly" class="comselect-input" placeholder="00:00" value="00:00" data-value="00:00">
//                        <input type="hidden" name="tradeStartTime" value="00:00" class="value">
//                        <div class="comselect-icon">
//                          <em class="iconfont icon-down"></em>
//                          <em class="iconfont icon-up"></em></div>
//                      </div>
//                    </div>到
//                    <div class="comselect w90 h-30">
//                      <div class="comselect-val">
//                        <input type="text" readonly="readonly" class="comselect-input" placeholder="24:00" value="24:00" data-value="24:00">
//                        <input type="hidden" datatype="comselect|hideTe" name="tradeEndTime" value="24:00" class="value">
//                        <div class="comselect-icon">
//                          <em class="iconfont icon-down"></em>
//                          <em class="iconfont icon-up"></em></div>
//                      </div>
//                      <ul class="comselect-menu">
//                        <li data-value="01:00">01: 00</li>
//                        <li data-value="02:00">02: 00</li>
//                        <li data-value="03:00">03: 00</li>
//                        <li data-value="04:00">04: 00</li>
//                        <li data-value="05:00">05: 00</li>
//                        <li data-value="06:00">06: 00</li>
//                        <li data-value="07:00">07: 00</li>
//                        <li data-value="08:00">08: 00</li>
//                        <li data-value="09:00">09: 00</li>
//                        <li data-value="10:00">10: 00</li>
//                        <li data-value="11:00">11: 00</li>
//                        <li data-value="12:00">12: 00</li>
//                        <li data-value="13:00">13: 00</li>
//                        <li data-value="14:00">14: 00</li>
//                        <li data-value="15:00">15: 00</li>
//                        <li data-value="16:00">16: 00</li>
//                        <li data-value="17:00">17: 00</li>
//                        <li data-value="18:00">18: 00</li>
//                        <li data-value="19:00">19: 00</li>
//                        <li data-value="20:00">20: 00</li>
//                        <li data-value="21:00">21: 00</li>
//                        <li data-value="22:00">22: 00</li>
//                        <li data-value="23:00">23: 00</li>
//                        <li data-value="24:00">24: 00</li></ul>
//                    </div>
//                    <span>请选择交易方便时间，商品只在该时间内上架出售。如不选择，系统默认为24小时方便交易</span></div>
//                </div>
//              </div>
//              <div class="form-item clearfix">
//                <div class="form-item-l">
//                  <i>*</i>
//                  <span>无货赔付押金：</span></div>
//                <div class="form-item-r">
//                  <div class="yesorno">
//                    <label>
//                      <input type="radio" class="yes" value="1" name="deposit">是</label>
//                    <label>
//                      <input type="radio" class="no" name="deposit" value="0" checked="checked">否</label>
//                    <span>需预交押金，5元/单，您将获得“无货赔付”标签，提高商品关注度</span></div>
//                </div>
//              </div>
//              <div class="form-item clearfix">
//                <div class="form-item-l">
//                  <i>*</i>
//                  <span>资金转移到：</span></div>
//                <div class="form-item-r">
//                  <div class="yesorno">
//                    <label>
//                      <input type="radio" name="withdrawCash" class="no" value="0" checked="checked">我的7881账户</label>
//                    <span>交易成功后，请选择将资金转移到哪一个账户</span></div>
//                  <p class="orange-stip hidediv">对不起，您尚未设置提现账户，
//                    <a href="http://www.7881.com/financecharge/toAddExtractcash.action">去设置</a></p>
//                </div>
//              </div>
//              <div class="form-item clearfix">
//                <div class="form-item-l">
//                  <i>*</i>
//                  <span>联系手机：</span></div>
//                <div class="form-item-r w170">
//                  <div class="game-ipt">
//                    <input type="text" class ="common-input h-30" placeholder="请输入手机号码" name="Phone" id="Phone" value="" datatype="m" nullmsg="请留下可以联系到您的手机号码" errormsg="请留下可以联系到您的手机号码"></div>
//                </div>
//                <div class="form-item-l w110">
//                  <i>*</i>
//                  <span>联系QQ：</span></div>
//                <div class="form-item-r game-ipt w170">
//                  <div class="game-ipt">
//                    <input type="text" class ="common-input h-30" placeholder="请输入QQ号码" name="QQ" id="QQ" value="" datatype="n6-11" nullmsg="请留下可以联系到您的QQ号" errormsg="请留下可以联系到您的QQ号"></div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div class="publish-btn">
//          <a href="javascript:void(0)" class="com-btn-01 color01 btn-pub" @click="Next('step3')">确认无误，立即发布</a></div>
//      </div>
//    </div>
//  </form>
        //</div>`;

    	var html = `<div class="container m-b-lg">
				<a class ="btn-back" href="javascript:void(0)" @click="Next('step1')">&lt; 返回修改</a>
				<span>《{{GameInfo.GameName}}》{{GameInfo.GroupName}}/{{GameInfo.ServerName}}/{{GameInfo.GoodTypeName}}</span>
            <form class ="form-horizontal">
            <input type="hidden" name="GameId" :value="GameInfo.GameId">
            <input type="hidden" name="GameName" :value="GameInfo.GameName">
            <input type="hidden" name="GameGroupId" :value="GameInfo.GroupId">
            <input type="hidden" name="GameGroupName" :value="GameInfo.GroupName">
            <input type="hidden" name="GameServerId" :value="GameInfo.ServerId">
            <input type="hidden" name="GameServerName" :value="GameInfo.ServerName">
            <input type="hidden" name="GoodTypeId" :value="GameInfo.GoodTypeId">
            <input type="hidden" name="GoodTypeName" :value="GameInfo.GoodTypeName">
                <!--商品信息-->
                <div class ="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="text-center">商品信息</h4>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3 col-md-offset-1">等级</label>
                                    <div class="col-md-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3">性别</label>
                                    <div class="col-lg-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3 col-md-offset-1">职业</label>
                                    <div class="col-md-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3">身份证</label>
                                    <div class="col-md-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3 col-md-offset-1">QQ等级</label>
                                    <div class="col-md-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group form-group-xs">
                                    <label class="control-label col-md-3">QQ好友</label>
                                    <div class="col-md-6">
                                        <input type="text" value="" class="form-control " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="form-group form-group-xs">
                                <label class="col-md-3 control-label">商品标题：</label>
                                <div class="col-md-6">
                                    <input type="text" value="" class="form-control" placeholder="您可以写填写个性化商品标题，吸引买家眼球" />
                                </div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-3 control-label">卖多少钱：</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <input type="text" value="" class="form-control" />
                                        <span class="input-group-addon">元</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-3 control-label">账号描述：</label>
                                <div class="col-md-6">
                                    <textarea name="" class="form-control" cols="5" rows="5" placeholder="描述一下您的账号情况，丰富详细的描述将更有利于帮助您尽快找到合适的买家。"></textarea>
                                </div>
                            </div>
                            <!--商品图片-->
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-5 control-label"><h3>商品图片</h3></label>
								<div class ="col-md-12">
									<FileUpload></FileUpload>
								</div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--账号信息-->
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h4 class="text-center">
                            账号信息
                        </h4>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group form-group-xs" v-for="data in GoodExtProps">
                                <label class ="col-md-offset-1 col-md-2 control-label">{{data.Name}}</label>
                                
                                    <DynamicInput :data="data"></DynamicInput>
                                
                            </div>                            
                        </div>
                    </div>
                </div>

                <!--完善交易选项-->
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h4 class="text-center">交易选项</h4>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">商品有效期</label>
                                <div class="col-md-2">
                                    <div class="input-group">
                                        <select class="form-control">
                                            <option>选择有效期</option>
                                            <option>200</option>
                                            <option>300</option>
                                            <option>400</option>
                                        </select>
                                        <span class="input-group-addon">天</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">使用置顶卡</label>
                                <div class="col-md-6">
                                    <label class="radio-inline"><input type="radio" value="" name="TopicCard" />是</label>
                                    <label class="radio-inline"><input type="radio" value="" name="TopicCard" />否</label>
                                </div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">售后保障服务</label>
                                <div class="col-md-6"></div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">无货赔付押金</label>
                                <div class="col-md-6">
                                    <label class="radio-inline"><input type="radio" value="" name="TopicCard" />是</label>
                                    <label class="radio-inline"><input type="radio" value="" name="TopicCard" />否</label>
                                </div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">资金转移</label>
                                <div class="col-md-6"></div>
                            </div>
                            <div class="form-group form-group-xs">
                                <label class="col-md-offset-1 col-md-2 control-label">联系方式</label>
                                <div class="col-md-6 form-inline">
                                    <label for="" class="control-label">手机：</label><input type="text" class="form-control" value="" placeholder="请输入手机号"/>
                                    <label for="" class="control-label m-l-md">QQ：</label><input type="text" class="form-control" value="" placeholder="请输入QQ号"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-danger">确认无误，立即发布</button>
            </form>
        </div>

            `;

   var data={
       GameInfo: { },
       good_info_com: "UniversalGoodInfo",
       GoodExtProps: [],
       BackGoodExtProps: [],
       tip: `为保障您的商品的成交速率，请完整填写商品信息；<br>
            私下交易有风险，涉及钱财莫大意，谨防诈骗，官方客服咨询QQ：4001877881`,
       SecurityQuestion: [],

   }
    var SecurityCode=[{ Flag: "string", Name: "安全交易码", Key: "securitycode", Length: 50, Need: 1 }];
    var components={
        name: "step1",
        template: html,
        data() {
            return data
        },
        created() {
            var self=this;
            API.Setting.GetListByType("密保问题", function (data) {
                self.SecurityQuestion=data.content;
            });
            this.GameInfo=this.$parent.GameInfo;
            //加载组件
            this.LoadGoodInfo();
            this.LoadAccountInfo();
            //变更交易方式
            $(document).on('click', "[name=seltradeType]", function () {
                var type=$("#TradeType").val();
                if ($("#TradeType").val()==1) {
                    self.GoodExtProps=self.BackGoodExtProps;
                } else {
                    self.GoodExtProps=SecurityCode;
                }
            });
        },
        components: {
            UniversalGoodInfo: UniversalGoodInfo,
            GoldGoodInfo: GoldGoodInfo,
            AccountGoodInfo: AccountGoodInfo,
            DynamicInput: DynamicInput,
			FileUpload:FileUpload,
        },
        methods: {
            //点击下一步
            Next: function (to) {
                this.$parent.Next(to);
            },
            //加载商品信息模块
            LoadGoodInfo: function () {
                var type=this.GameInfo.GoodTypeId;
                var gameid=this.GameInfo.GameId;
                if (type==1) {//金币
                    this.good_info_com="GoldGoodInfo";
                    this.tip=`1.${this.GameInfo.GameName}每日06:00更新当日游戏币交易限制，请您注意【角色交易上限】 。<br>
              2.如果您使用多角色发货，请在“游戏角色名”处填写每个角色发货的金额，例：A角色3000W，B角色4000W。<br>
              3.因游戏限制，请绑定正确的密保工具。<br>
              涉及钱财莫大意，电话确认才放心，谨防诈骗！`;
                } else if (type==3) {//账号
                    this.good_info_com="AccountGoodInfo";
                    this.tip=`为保障${this.GameInfo.GameName}交易安全，您出售的帐号将进行延迟7天打款，此期间请勿修改帐号资料，否则将号财两空。<br>
                如果您出售的帐号出现找回情况，我们将把您在${config.siteName}登记的所有信息提供给买家，由买家在各大网站公布并向公安机关报案。<br>
                被骗用户都有出现被假客服联系的情况，因此有客服联系时，可点击【 客服验证中心】验证客服真假或者联系QQ 4001877881为您验证客服真假。`;
                };
            },
            //加载账号信息模块
            LoadAccountInfo: function (gameId, goodTypeId) {
                var self=this;
                $.get("/api/GoodInfo/GetGoodExtPropsInput", { gameId: self.GameInfo.GameId, goodTypeId: self.GameInfo.GoodTypeId }, function (data) {
                    if (data) {
                        self.GoodExtProps=data.content;
                        self.BackGoodExtProps=data.content;
                    }
                });
            },
        },
    };
    return components;
});