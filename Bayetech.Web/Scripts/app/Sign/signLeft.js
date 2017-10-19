//注册模板
define("SignLeftModule", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    var _CreatAccountUrl = "/api/Query/CreatAccount"; //创建账号
    var _CheckAccountUrl = "/api/Query/CheckAccount"; //检查账号重复

    //左边模板
    var leftHtml = `<div class="regBoxLeft l" template="RegBoxLeft">
            <div class ="regMain">
                <form id="registerForm" method="post" action="http://www.7881.com/user/doRegister.action" autocomplete="off">
                    <input type="hidden" id="userid" name="user.userid" />
                    <input type="hidden" value="null" name="invite" />
                    <div class="loginTitle clearfix">
                        <h1 class="l c3">手机号码注册</h1>
                    </div>

                    <div class ="loginMain">
                        <div class ="comIptBox userIptBox">
                            <label for="" class ="comIptIcon IptIconLeft">
                                <i class ="iptIconInner iconfont"></i>
                            </label>
                               <input ref="Iphone" :value="value.Iphone" @input="updateValue(value)" class ="comIpt loginUserIpt" maxlength="11" valid="false" ajaxvalidate="tel" />
                            <label for="" class ="comIptIcon IptIconRight hide delIcon">
                                <i class ="iptIconInner iconfont"></i>
                            </label>
                            <em class ="regDesc hide">请输入您的手机号</em>
                        </div>
                        <button @click.prevent="CheckAccount">检查账号</button>
                        <div class ="checkCodeBox clearfix">
                            <div class ="comIptBox comPureIptBox l">
                                <input type="text" id="checkCode_tel" name="checkCode_tel" class ="pureIpt mCodeIdt"  />
                                <p class ="placeholder codePlaceholder">验证码</p>
                                <em class ="regDesc hide">按右图填写, 不区分大小写</em>
                            </div>
                            <div class ="codeImgBox l middle"><img src="#" class ="codeImg middle" alt="" />
                            </div><span class="changeBox r">看不清? <a id="changeVal" href="http://www.7881.com/reg.jsp" class="changeOne">换一张</a></span>
                        </div>
                        <div class ="mRegCode clearfix">
                            <div class ="comIptBox mCode">
                                <label for="" class ="comIptIcon IptIconLeft"><i class ="iptIconInner iconfont"></i></label>
                                <input type="text" id="validcode" ajaxvalidate="validcode" class ="comIpt phoneCode"/>
                                <p class ="placeholder">手机验证码</p>
                            </div>
                            <input type="button" value="获取短信验证码" class ="getCode" id="getCode3" act="reg" />
                            <div id="help"></div>
                        </div>
                        <div class ="comIptBox">
                            <label for="" class ="comIptIcon IptIconLeft">
                                <i class ="iptIconInner iconfont"></i>
                            </label>
                            <input  ref="GamePass" type="password" :value="value.GamePass" @input="updateValue(value)" class ="comIpt loginPwdIpt" valid="false" maxlength="20"/>
                            <!--<p class ="placeholder">请输入密码</p>-->
                            <em class ="regDesc hide">密码由6-20位字符组成, 需同时包含字母和数字</em>
                        </div>
                        <div class ="comIptBox">
                            <label for="" class ="comIptIcon IptIconLeft">
                                <i class ="iptIconInner iconfont"></i>
                            </label>
                            <input type="password"  ref="GamePassAgain" :value="value.GamePassAgain" class ="comIpt loginPwdIpt" valid="false" data_cmp1="true" data_cmp2="password"/>
                            <!--<p class ="placeholder">再确认一次密码</p>-->
                            <em class ="regDesc hide">密码由6-20位字符组成, 需同时包含字母和数字</em>
                        </div>
                    </div>

                    <a href="#" @click.prevent="SubMitSign" class ="regBtn"  id="mRegBtn">同意并注册</a>
                    <div class="regAgreement">
                        <input type="checkbox" class="middle" checked="checked" onclick="return false;" /><label for="" class="">我已阅读并同意<a href="http://www.7881.com/reg.jsp" class="regAgreementLink" target="_blank">《7881服务协议》</a></label>
                    </div>
                </form>

            </div>
        </div>`

    var leftComponent = {//全局注册
        props: ['value'],
        data: function () {
            return {
                myLeftobject: this.Leftobject//data中的Leftobject
            }
        },
        template: leftHtml,
        methods: {
            updateValue: function (value) {
                //去除空格，保留两位小数  
                value.Iphone = this.$refs.Iphone.value;
                value.GamePass = this.$refs.GamePass.value;
                value.GamePassAgain = this.$refs.GamePassAgain.value;
            },
            CheckAccount: function () {
                common.getWebJson(_CheckAccountUrl, { accountName: "123456" }, function (data) {
                    if (data == false) {
                        alert("该账号已经存在，不可重复注册!");
                    }
                });
            },
            SubMitSign: function () {
                common.postWebJson(_CreatAccountUrl, JSON.stringify(this.$props.value), function (data) {

                });
            }
        }
    };

    return leftComponent;
});