//注册模板
define("SignModule", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    var _url = "/Query/Start";

    //左边模板
    var leftHtml = `<div class="regBoxLeft l" template="RegBoxLeft">
            <div class ="regMain">
             <button v-on: click="SubMitSign">测试按钮</button>
                <form id="registerForm" method="post" action="http://www.7881.com/user/doRegister.action" autocomplete="off">
                    <input type="hidden" id="userid" name="user.userid" />
                    <input type="hidden" value="null" name="invite" />
                    <div class="loginTitle clearfix">
                        <h1 class="l c3">手机号码注册</h1>
                    </div>
                     
                    <!--左边模板子组件（可以这么用）-->
                    <child-regboxleft v-bind:value="value"></child-regboxleft>

                    <a href="#" class ="regBtn"  id="mRegBtn">同意并注册</a>
                    <div class="regAgreement">
                        <input type="checkbox" class="middle" checked="checked" onclick="return false;" /><label for="" class="">我已阅读并同意<a href="http://www.7881.com/reg.jsp" class="regAgreementLink" target="_blank">《7881服务协议》</a></label>
                    </div>
                </form>
            </div>
        </div>`

    //左侧child模板loginmain
    var leftChildHtml =`<div class="loginMain">
                <div class="comIptBox userIptBox">
                    <label for="" class="comIptIcon IptIconLeft">
                        <i class="iptIconInner iconfont"></i>
                    </label><input type="text" id="tel" v-bind:value="value.Iphone" class="comIpt loginUserIpt" data-error="请输入手机号" data-normal="请输入手机号" maxlength="11" valid="false" regexp="^1[34578][0-9]{9}$" regexp_desc="手机号码格式不正确，请重新输入" ajaxvalidate="tel" /><label for="" class="comIptIcon IptIconRight hide delIcon"><i class="iptIconInner iconfont"></i></label>
                    <!--<p class="placeholder">手机号码注册</p>-->
                    <em class="regDesc hide">请输入您的手机号</em>
                </div>
                <div class="checkCodeBox clearfix">
                    <div class="comIptBox comPureIptBox l">
                        <input type="text" id="checkCode_tel" name="checkCode_tel" class="pureIpt mCodeIdt" valid="false" data-error="请输入验证码" data-normal="按右图填写，不区分大小写" maxlength="4" ajaxvalidate="img_valid" />
                        <p class="placeholder codePlaceholder">验证码</p>
                        <em class="regDesc hide">按右图填写，不区分大小写</em>
                    </div>
                    <div class="codeImgBox l middle"><img src="#" class="codeImg middle" alt="" /></div><span class="changeBox r">看不清? <a id="changeVal" href="http://www.7881.com/reg.jsp" class="changeOne">换一张</a></span>
                </div>
                <div class="mRegCode clearfix">
                    <div class="comIptBox mCode">
                        <label for="" class="comIptIcon IptIconLeft"><i class="iptIconInner iconfont"></i></label>
                        <input type="text" id="validcode" ajaxvalidate="validcode" class="comIpt phoneCode" data-error="请输入手机验证码" data-normal="请输入手机验证码" maxlength="6" />
                        <p class="placeholder">手机验证码</p>
                    </div>
                    <input type="button" value="获取短信验证码" class="getCode" id="getCode3" act="reg" />
                    <div id="help"></div>
                </div>
                <div class="comIptBox">
                    <label for="" class="comIptIcon IptIconLeft">
                        <i class="iptIconInner iconfont"></i>
                    </label>
                    <input type="password" v-bind:value="value.GamePass" class="comIpt loginPwdIpt" valid="false" maxlength="20" regexp="^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$" regexp_desc="密码输入不符合规范，请重新输入！" data-error="请输入密码" data-normal="密码由6-20位字符组成，需同时包含字母和数字" />
                    <!--<p class="placeholder">请输入密码</p>-->
                    <em class="regDesc hide">密码由6-20位字符组成，需同时包含字母和数字</em>
                </div>
                <div class="comIptBox">
                    <label for="" class="comIptIcon IptIconLeft">
                        <i class="iptIconInner iconfont"></i>
                    </label>
                    <input type="password" v-bind:value="value.GamePass" class="comIpt loginPwdIpt" valid="false" data_cmp1="true" data_cmp2="password" maxlength="20" regexp="^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$" regexp_desc="密码输入不符合规范，请重新输入！" data-error="请输入确认密码" comp_desc="两次密码输入不一致，请重新输入" data-normal="密码由6-20位字符组成，需同时包含字母和数字" id="confirmPassword" compare="true" compareid="userPassword" />
                    <!--<p class="placeholder">再确认一次密码</p>-->
                    <em class="regDesc hide">密码由6-20位字符组成，需同时包含字母和数字</em>
                </div>
            </div>`

    //右侧模板
    var rigthHtml = ` <div class="regBoxRight l" id="RegBoxRight">
            <h2>已有账号？</h2>
            <a href="" class="rightLogBtn">立即登录</a>
            <h3>使用第三方账号登录</h3>
            <ul class="rightOtherLogBox">
                <li v-for="item in value"><a v-bind:href="item.url" class="clearfix"><i class="iconfont"></i><span>{{item.text}}</span></a></li>
            </ul>
        </div>`

    //数据为左右整合数据
    var data = {
        //注册左边
        Leftobject: {
            Iphone: 18717708873,
            GamePass: 123456
        },
        //注册右边
        Rightobject: [
            { text: '360登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: '支付宝登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: 'QQ登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: 'YY登录', url: 'http://www.7881.com/connect/qh360New/login' }
        ]
    }

    //右边模板
    Vue.component('regboxright', {
        props: ['value'],
        template: rigthHtml
    });

    //左边模板
    Vue.component('regboxleft', {//全局注册
        props: ['value'],
        template: leftHtml,
        components: {
            'child-regboxleft': {
                props: ['value'],
                template: leftChildHtml
            }
        }
    });

    new Vue({
        el: '#LoginDiv',
        data: function () {
            return data;
        },
        created: function () {
          
        },
        methods: {
            SubMitSign: function () {
                common.postWebJson(_url, this.data, function () {
                    
                });
            }
        }
    });
});