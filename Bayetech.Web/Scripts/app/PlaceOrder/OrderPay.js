//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //模板
    var OrderHtml=`<div>
                    <form id="goodsForm" action="/procurement/purchaseGoods.action" method="post" autocomplete="off">
                    <div class ="center">
                        <div class ="txcpdd">
                        <h1>填写商品订单</h1>
                        <ul id="BuyGold" v-if="GoodTypeId==1"><!--金币-->
                            <li class ="buyNum">
                                <span>购买数量：<strong style="color:#F00">* </strong></span><input type="hidden"/>{{BuyNum}}
                                <p class ="txcpdd_default"> (可购1件) </p>
                            </li>
                            <li>
                                <span>交易方式：<strong style="color:#F00">* </strong></span>
                                <input type="radio" name="goodsPurchaseBea" value="face" checked="checked" />&nbsp; 当面交易
                                <div style="border:solid red 1px; background:#f4faff;padding:5px;line-height:20px; margin-left:95px;color: red">
                                    请拍单后前往16线行会莎兰处进行交易
                                </div>
                            </li>
                            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone"/></li>
                            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"/></li>
                            <li><span>交易暗码：<strong style="color:#F00">* </strong></span><input type="text":value="Signal"/></li>
                            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum" /></li>
                        </ul>

                        <ul id="BuyAccount" v-else-if="GoodTypeId==3"><!--账号-->
                            <li><span>购买数量：<strong style="color:#F00">* </strong></span><input type="text":value="BuyNum" readonly="readonly" /> (可购1件) </li>
                            <li><span>收货方式：<strong style="color:#F00">* </strong></span> {{GoodTypeName}}交易</li>
                            <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone" /></li>
                            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"/></li>
                            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum" /></li>
                        </ul>

                        <ul v-else-if="GoodTypeId==4"><!--点券-->
                            <li class ="buyNum">
                                    <span>购买数量：<strong style="color:#F00">* </strong></span><input type="text":value="BuyNum"><p class ="zq">&nbsp; </p>
                                </li>
                                <li>
                                    <span>收货方式：<strong style="color:#F00">* </strong></span> 邮寄 交易
                                </li>
                                <li><span>所在区服：<strong style="color:#F00">* </strong></span>{{GameName}}/{{GroupName}}/{{ServerName}}</li>
                                <li style="position: relative;overflow: visible;">
                                    <span>游戏账号：<strong style="color:#F00">* </strong></span><input type="text":value="GameAccount">
                                    <div class ="fed-toolstip" id="tipFrame" style="left: 230px;position: absolute;display:none">
                                        <div class ="fed-tipcon">
                                            <div>如有人提供游戏账号让您填写，以做任务或刷信用为由，均为骗子，请勿受骗！</div>
                                            <a class ="fed-tipsclose" id="tipClose">×</a>
                                        </div>
                                    </div>
                            </li>
                            <li><span>确认游戏账号：<strong style="color:#F00">* </strong></span><input type="text":value="GameAccountAgain"></li>
                            <li><span>电话号码：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerPhone"></li>
                            <li><span>联系QQ：<strong style="color:#F00">* </strong></span><input type="text":value="BuyerQQ"></li>
                            <li><span>推广码：<strong style="color:#F00">&nbsp; &nbsp; </strong></span><input type="text":value="PromoNum"></li>
                            </ul>
                    </div>
                </div>
                    <div class ="clear"></div>
                </form>
                <div class ="clear"></div>
                <div class ="center">
                    <div class ="qdtjdd">
                        <h1>确认提交订单</h1>
                        <ul>
                            <li>游戏联盟官方任何工作人员，都<b>不会</b>通过 QQ、电话或游戏内等方式，您索要您的登陆密码、手机号码或手机验证码！如有人冒充游戏联盟工作人员向您索要，请千万不要提供！并第一时间联系游戏联盟官方客服，电话：400-187-游戏联盟（此号码无外拨功能）。</li>
                            <li>
                                需支付总价：{{GoodPrice}}<strong style="color:#F90;">
                                    <input type="text" id="text_goodsprice" style="color:#F90; font-size:16px; border:0px;width:70px;" readonly="readonly" />
                                </strong>&nbsp;元
                            </li>
                            <li>
                                <input type="button" @click="SureBuy" id="hlkOK" class ="buy_gm_qdww" />
                                <span style="padding-left: 20px;" class ="jf_detail hide">购买可获得<em id="nowJf" style="padding: 0 2px; color: #ff6700;">0</em>积分</span><s class ="hide" style="color: silver;margin-left: 5px;">(<em id="oldJf">0</em>积分) </s>
                            </li>
                            <li><input type="checkbox" id="agreem ent" style="height:12px;" checked="checked" />&nbsp; 我已阅读并同意<a href="/account_pro.html" target="_blank" class ="ls">《游戏联盟网游交易协议》</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;

        //Api
        var _CreatOrderUrl="/api/Order/CreatOrder"; //创建账号
    var _GetPayRequestUrl = "/api/Order/PayRequest";
        //数据
    var data = {//填写的数据
            GoodNo: "111111111",
            OrderPrice:"",
            GoodPrice:0,
            GoodTypeId: 3,
            GoodTypeName: "账号",
            BuyNum: "1",
            InternalTypeId:"1",//内部交易类型：（拍卖交易，邮寄交易等等）
            GameName: "",
            GameAccount: "",
            GameAccountAgain: "",
            GroupName: "",
            InternalTypeId:"",
            ServerName: "",
            BuyerPhone: "18717708731",
            BuyerQQ: "619963501",
            Signal:"",
            PromoNum: "1111",
        }

        var ordercomponent = {//全局注册
            template: OrderHtml,
            data() {
                return data;
            },
            created(){
                var self=this;
                self.$root.$on('MainInfo', function (data) {
                    self.GoodNo = data.content.GoodNo;
                    self.GameName = data.content.GameName;
                    self.GroupName = data.content.GroupName;
                    self.GoodPrice=data.content.GoodPrice;
                    self.OrderPrice = data.content.GoodPrice;
                    self.ServerName = data.content.ServerName;
                });
            },
            methods: {
                FormValidate() {
                    $('#loginForm').bootstrapValidator({
                        message: 'This value is not valid',
                        feedbackIcons: {
                            valid: 'glyphicon glyphicon-ok',
                            invalid: 'glyphicon glyphicon-remove',
                            validating: 'glyphicon glyphicon-refresh'
                        },
                        //group: '.form-group',
                        fields: {
                            username: {
                                message: 'The username is not valid',
                                validators: {
                                    notEmpty: {
                                        message: '账号不可以为空!'
                                    },
                                    stringLength: {
                                        min: 6,
                                        max: 30,
                                        message: '账号的长度为6-30个字符之间!'
                                    },
                                    regexp: {
                                        regexp: /^[a-zA-Z0-9_\.]+$/,
                                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                                    },
                                    different: {
                                        field: 'password',
                                        message: '账号和密码不可相同!'
                                    }
                                }
                            },
                            password: {
                                validators: {
                                    notEmpty: {
                                        message: '密码不可以为空'
                                    },
                                    stringLength: {
                                        min: 6,
                                        max: 30,
                                        message: '账号的长度为6-30个字符之间!'
                                    },
                                    different: {
                                        field: 'username',
                                        message: '账号和密码不可相同!'
                                    }
                                }
                            }

                        }
                    });
                },
                SureBuy() {
                    var param=this.$data;
                    common.postWebJson(_CreatOrderUrl, JSON.stringify(param), function (data) {//生成订单编号 
                        if (!data.result) {
                            alert(data.content);
                        } else {
                            alert("订单生成功!");
                            var test = { OrderNo: data.content };
                            common.postWebJson(_GetPayRequestUrl, JSON.stringify(test), function (data) {
                                if (data.result) {
                                    window.open(data.content);
                                }
                            });
                        }
                    });
                }
            }
        }
        return ordercomponent;
})