//step2
define(['vue', 'jquery', 'common', 'Scripts/app/GoodPublish/GoodInfo/Gold', 'Scripts/app/GoodPublish/GoodInfo/Account', 'Scripts/app/GoodPublish/GoodInfo/Universal', 'API', 'DynamicInput','FileUpload'],
    function (Vue, $, common, GoldGoodInfo, AccountGoodInfo, UniversalGoodInfo, API, DynamicInput,FileUpload) {

    var html = `<div class="container m-b-lg">
			<h2 class="info-title">
            <a class ="btn-back" href="javascript:void(0)" @click="Next('step1')">&lt; 返回修改</a>
			<span>《{{GameInfo.GameName}}》{{GameInfo.GroupName}}/{{GameInfo.ServerName}}/{{GameInfo.GoodTypeName}}</span>
            </h2>
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
                <div class="panel-body m-t-md">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3 col-md-offset-1">等级</label>
                                <div class="col-md-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3">性别</label>
                                <div class="col-lg-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3 col-md-offset-1">职业</label>
                                <div class="col-md-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3">身份证</label>
                                <div class="col-md-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3 col-md-offset-1">QQ等级</label>
                                <div class="col-md-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group form-group-xs">
                                <label class="control-label col-md-3">QQ好友</label>
                                <div class="col-md-8">
                                    <input type="text" value="" class="form-control " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="form-group form-group-xs">
                            <label class="col-md-2 control-label">商品标题：</label>
                            <div class="col-md-9">
                                <input type="text" value="" class="form-control" placeholder="您可以写填写个性化商品标题，吸引买家眼球" />
                            </div>
                        </div>
                        <div class="form-group form-group-xs">
                            <label class="col-md-2 control-label">卖多少钱：</label>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text" value="" class="form-control" />
                                    <span class="input-group-addon">元</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-group-xs">
                            <label class="col-md-2 control-label">账号描述：</label>
                            <div class="col-md-9">
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
            <button type="button" class="btn btn-warning pull-right">确认无误，立即发布</button>
        </form>
    </div>`;

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