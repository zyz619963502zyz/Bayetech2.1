//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //模板
    var OrderHtml=` <div class="new-cashier">
        <form id="payForm" method="post" target="_blank">
            <div class="new-cashier-order">
                <div class="cashier-box top-alert">
                    <div class="inner">
                        <div class="hd-alert-box">
                            <h2>当前采购交易存在卖家修改商品的可能，请您付款前进行二次核对订单信息。</h2>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 收银台头部 -->
            <div class="new-cashier-order">
                <div class="cashier-box">
                    <a target="_blank" href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1" class="contact"></a>
                    <div class="inner clearfix">
                        <!-- 图标 -->
                        <i class="order-icon order-ok"></i>
                        <!-- 订单详情 -->
                        <div class="order-info">
                            <h2>订单提交成功，请您尽快付款！<small>请您在提交订单后<b>15分钟</b>内完成支付，否则订单会自动取消</small></h2>
                            <ul class="detail">
                                <li><span>单号：</span><em><b>127120815126977011344571</b></em></li>
                                <li>
                                    <span style="width:auto;">订单金额：</span>
                                    <em>
                                        <b>
                                            450.00
                                        </b>
                                    </em>
                                </li>
                                <li><span>商品：</span><em>【 90级 男 逐风者 身份证未设置 QQ等级0级 无QQ好友】《蛋总专卖》15个角色88-90-带深渊票-798635--交易时间8:00-凌晨1:00 地下城与勇士 </em></li>
                                <li><span>区服：</span><em>湖北区 湖北1区 </em></li>
                            </ul>
                        </div>
                        <div class="order-r">
                            <div class="order-price">
                                应付总额：<b id="payValue">
                                    450.00
                                </b><b id="summoney_flag" style="display:none"></b>元
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new-cashier-pay">
                <!-- 红包 -->
                <div class="cashier-box" id="nc-hb">
                    <div class="inner">
                        <div class="pey-method clearfix">
                            <i class="checkbox" type="hb" id="checkboxhb"></i>
                            <div class="name">红包优惠</div>
                            <span id="pm_hbname" style="color:#EC6D34"></span>
                            <a class="chose" href="" id="hb_">使用其他红包</a>
                            <div class="pm-price" id="pm-hd">
                                抵扣：<b id="span_redEnvelopDeduct_amount">0</b>元
                            </div>
                        </div>
                        <div class="container" style="display: none" id="con-hb">
                            <ul class="hb-list clearfix"></ul>
                        </div>
                    </div>
                </div>
                <!-- 余额 -->
                <div class="cashier-box" id="nc-overage">
                    <div class="inner">
                        <div class="pey-method clearfix">
                            <i class="checkbox checked" type="overage" id="checkedoverage"></i>
                            <div class="name">余额支付</div>
                            <span>可用余额：<b id="balanceMoney"></b></span>
                            <!-- <a class="chose" href="">使用其他红包</a> -->
                            <div class="pm-price" id="pm-overage">
                                支付：<b id="balanceMoney1"></b>元
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cashier-box" id="nc-card">
                    <div class="inner">
                        <div class="pey-method clearfix" style="position: relative;">
                            <i class="checkbox" type="card" id="checkboxcard"></i>
                            <div class="name">在线支付</div>
                            <div class="uer-p-m">
                                <div class="m-logo" style=""></div>
                            </div>
                            <span style="color: #969696" id="webclass"></span>
                            <a class="chose" href="" id="card_">使用其他支付方式</a>
                            <div class="pm-price" id="pm-card">
                                支付：<b id="spareBalance"></b><b id="balance_flag" style="display:none"></b>元
                            </div>
                            <div class="pay-tips" style="display:none;position: absolute;right:0;bottom:-20px;color:#666;font-size:12px;width:200px;text-align:right;margin-bottom: -5px;">
                                <em>含</em><img style="vertical-align: middle;" src="http://pic.7881.com/7881/images/wh.png" /><a href="/article-511497173145024654-0.html" target="_blank" style="float:none;display: inline-block;height:auto;color:#3399ff">微信支付官方手续费:</a><b id="reduce_b" style="float:none;display: inline-block;height:auto;width:auto;line-height: normal;font-weight: normal;">0</b><em> 元</em>
                            </div>
                        </div>
                        <div class="container card-list" style="display: none" id="no-card">
                            <!-- 支付平台 -->
                            <div class="nc-type-box">
                                <div class="nc-type-hd clearfix">
                                    <h3 class="title">支付平台</h3>
                                    <span class="desc" id="payInfo"></span>
                                </div>
                                <div class="nc-type-body">
                                    <ul class="list clearfix">
                                        <li class="J_bank" id="clearfix32" webclass="thirdpay_2" value="3002" fptname="支付宝" style="background:url(/images/pay-3002.png) center no-repeat" onmouseover="mouseMesShow(32)"></li>
                                        <li class="J_bank" id="clearfix35" webclass="thirdpay_2" value="9003" fptname="微信" style="background:url(/images/pay-9003.png) center no-repeat" onmouseover="mouseMesShow(35)"></li>
                                        <li class="J_bank" id="clearfix36" webclass="thirdpay_2" value="2999" fptname="易宝网银" style="background:url(/images/pay-2999.png) center no-repeat" onmouseover="mouseMesShow(36)"></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 借记卡 -->
                            <div class="nc-type-box">
                                <div class="nc-type-hd clearfix">
                                    <h3 class="title">借记卡</h3>
                                    <span class="desc"></span>
                                </div>
                                <div class="nc-type-body">
                                    <ul class="list clearfix">
                                        <li class="J_bank" id="clearfix1" webclass="card" value="2903" fptname="中国工商银行" style="background:url(/images/pay-2005.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix2" webclass="card" value="2902" fptname="中国农业银行" style="background:url(/images/pay-2007.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix99" webclass="card" value="2910" fptname="招商银行" style="background:url(/images/pay-2006.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix100" webclass="card" value="2911" fptname="中国民生银行" style="background:url(/images/pay-2009.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix81" webclass="card" value="2905" fptname="上海浦东发展银行" style="background:url(/images/pay-2013.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix84" webclass="card" value="2908" fptname="兴业银行" style="background:url(/images/pay-2014.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix83" webclass="card" value="2907" fptname="中国邮政储蓄银行" style="background:url(/images/pay-2021.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix101" webclass="card" value="2912" fptname="中国光大银行" style="background:url(/images/pay-2017.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix85" webclass="card" value="2909" fptname="交通银行" style="background:url(/images/pay-2008.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix80" webclass="card" value="2904" fptname="广发银行" style="background:url(/images/pay-2012.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix82" webclass="card" value="2906" fptname="中国银行" style="background:url(/images/pay-2011.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix102" webclass="card" value="2913" fptname="北京银行" style="background:url(/images/pay-2018.png) center no-repeat"></li>
                                        <li class="J_bank" id="clearfix103" webclass="card" value="2914" fptname="平安银行" style="background:url(/images/pay-2010.png) center no-repeat"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="nc-type-box">
                                <div class="nc-type-hd clearfix">
                                    <h3 class="title">信用卡</h3>
                                    <span class="desc" id="xykinfo"></span>
                                </div>
                                <div class="nc-type-body">
                                    <ul class="list clearfix">
                                        <li class="J_bank" id="clearfix119" webclass="creditcard" infomsg="" value="2903" fptname="中国工商银行" style="background:url(/images/pay-2005.png) center no-repeat" onmouseover="mouseShow(119)"></li>
                                        <li class="J_bank" id="clearfix120" webclass="creditcard" infomsg="" value="2902" fptname="中国农业银行" style="background:url(/images/pay-2007.png) center no-repeat" onmouseover="mouseShow(120)"></li>
                                        <li class="J_bank" id="clearfix104" webclass="creditcard" infomsg="信用卡网银单笔最高500元，单日以信用卡本身透支额度。" value="2910" fptname="招商银行" style="background:url(/images/pay-2006.png) center no-repeat" onmouseover="mouseShow(104)"></li>
                                        <li class="J_bank" id="clearfix121" webclass="creditcard" infomsg="" value="2909" fptname="交通银行" style="background:url(/images/pay-2008.png) center no-repeat" onmouseover="mouseShow(121)"></li>
                                        <li class="J_bank" id="clearfix122" webclass="creditcard" infomsg="" value="2906" fptname="中国银行" style="background:url(/images/pay-2011.png) center no-repeat" onmouseover="mouseShow(122)"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new-cashier-submit">
                <!-- 支付密码 -->
                <div class="cashier-box">
                    <div class="inner" id="submit-area">
                        <div class="verifications">
                            <ul class="v-method">
                                <li class="clearfix">
                                    <span>手机号码：</span><i class="pnum">187****8732</i>
                                    <a class="send-vc" id="btn_send_verification">发送验证码</a>
                                </li>
                                <li class="clearfix">
                                    <span>验证码：</span><input type="text" name="userRegisterBean.verificationcode" class="password" maxlength="8" desc="验证码" autocomplete="off" id="txtmobilenum" />
                                </li>
                            </ul>
                            <input class="submit" id="hlkOK" title="" value="立即支付" type="button" />
                            <div id="error" class="tip"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 提交的隐藏域 -->

            <input type="hidden" id="fptname" name="financeChargeBean.fptname" />
            <input type="hidden" name="financeChargeBean.orderid" value="127120815126977011344571" />
            <input type="hidden" name="financeChargeBean.backurl" value="/payment/endPayout.action?orderid=127120815126977011344571&from=" />
            <input type="hidden" id="amount" name="financeChargeBean.amount" value="45000" />
            <input type="hidden" id="amountyuan" name="financeChargeBean.amountyuan" value="450.00" />
            <input type="hidden" id="hdn_useBalance" name="financeChargeBean.useBalance" value="-1" />
            <input type="hidden" id="hdn_redEnvelopid" name="financeChargeBean.vouchersid" />
            <input type="hidden" id="hdn_redEnvelopdeduct" name="financeChargeBean.vouchersmoney" value="0" />
            <input type="hidden" id="validway" name="userRegisterBean.validway" />
            <input type="hidden" id="yefalg" name="yefalg" value="0" />
            <input type="hidden" name="financeChargeBean.deliverroleid" value="" />
            <input type="hidden" name="financeChargeBean.payway" id="payway" />
            <input type="hidden" value="" id="marketflag" />
            <input type="hidden" value="" id="marketflag_" />
            <input type="hidden" value="1" id="mobilechecked" />

            <!-- 提交的隐藏域 -->
        </form>
    </div>

    <!-- 弹出层 -->
    <div class="pay-popup-mask" style="display: none;">
        <div class="pay-popup">
            <h3>正在支付……</h3>
            <div class="inner-text">
                请在新开支付平台页面进行支付，支付完成前请不要关闭该窗口
            </div>
            <div class="btns">
                <a href="/payment/endPayout.action?orderid=127120815126977011344571&from=" class="q">支付已完成</a>
                <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1" class="q">支付遇到问题</a>
            </div>
        </div>
    </div>`;

        //Api
        var _CreatOrderUrl="/api/Order/CreatOrder"; //创建账号

        //数据
        var data={//填写的数据
            GoodNo: "",
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
                        }
                    });
                }
            }
        }
        return ordercomponent;
})