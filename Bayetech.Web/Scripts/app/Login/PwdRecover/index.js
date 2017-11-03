jsconfig.baseArr.push("PwdRecoverTem");
require(jsconfig.baseArr, function ($, Vue, com, recoverTem) {

    //抓取当前url

    //两个插槽
    var confirmAccount = ` <div class="box">
            <h2 class="psw_title">找回登录密码</h2>
            <div class="box_800">
                <ul class="account_infor">
                    <li>
                        <label>用户名：<em>*</em></label>
                        <input type="text" id="userName" name="userName" />
                        <span class="error_infor" id="usererror"></span>
                    </li>
                    <li>
                        <label>验证码：<em>*</em></label>
                        <input name="captcha" type="text" class="w_104" id="txtCode" maxlength="4" autocomplete="off" />
                        <span class="pic-tips" id="securityContainer"><a id="txtCode__Captcha" href="#" title="看不清？换张图片"><img id="__Captcha_Image__" src="" alt="看不清？换张图片" border="0" /><span style="margin-left: 10px">点击换张图</span></a></span>
                        <span id="capchaerror"></span>
                    </li>
                    <li class="m_t_15">
                        <label>&nbsp;</label>
                        <a href="#" id="btn_blue" class="btn_blue"><span>确认</span></a>
                    </li>
                </ul>
            </div>
        </div>` //确定
    var recoverType = ` <form id="theForm" method="post">
            <div class="box">
                <h2 class="psw_title">找回登录密码</h2>
                <div class="box_800">
                    <ul class="account_infor list_mar">
                        <li>您正在找回登录密码的用户名是： <span class="f_orange">61** </span></li>
                        <li class="m_b_50">
                            <span class="callback">
                                <ins class="ico_phone"></ins>
                                用绑定手机找回
                                <span class="f_12 f_orange">（推荐）</span>
                                <span class="txt">找回最快速、安全</span>
                            </span>
                            <a href="#" id="btn_mobileClick" class="btn_blue"><span>立即找回</span></a>
                            <!-- 账号未绑定手机时显示下面内容 -->
                        </li>
                        <li>
                            <span class="callback">
                                <ins class="ico_mail"></ins>
                                用邮箱找回
                            </span>
                            <a href="#" id="btn_emailClick" class="btn_blue"><span>立即找回</span></a>
                        </li>
                    </ul>
                    <div class="hint">
                        <div class="hint_infor">
                            <strong>友情提示：</strong>
                            <p>
                                <span class="f_999">▪</span>如果您无法通过上述方式找回，请通过<a href="http://complain.5173.com/MyEmailPost2.aspx" id="layer_01_button" class="txt_line">申请修改邮箱地址</a>找回登录密码。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="layer_02" class="UED_hide">
                <div class="pop_box">
                    <div class="pop_tittle">
                        <h3 id="UED_layer_h3_v31">友情提示</h3>
                        <a href="javascript:void 0" onclick="$.LAYER.close();" class="close"></a>
                    </div>
                    <div class="pop_mainbox">
                        <div class="side_icon">
                            <s class="ico_warning_5"></s>
                        </div>

                        <div class="right_main">
                            <h4 class="geayline">很抱歉，请您稍后“用邮箱找回”登录密码。</h4>
                            <p class="f_666">请使用其他方式找回密码，或者1小时后再来试试吧。</p>

                            <p class="mt10"><a href="#" onclick="$.LAYER.close();" class="btnlink_b_small"><span>确&nbsp;&nbsp;&nbsp;认</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="layer_03" class="UED_hide">
                <div class="pop_box">
                    <div class="pop_tittle">
                        <h3 id="UED_layer_h3_v31">友情提示</h3>
                        <a href="javascript:void 0" onclick="$.LAYER.close();" class="close"></a>
                    </div>
                    <div class="pop_mainbox">
                        <div class="side_icon">
                            <s class="ico_warning_5"></s>
                        </div>

                        <div class="right_main">
                            <h4 class="geayline">很抱歉，<br />您今天“用绑定手机找回”登录密码已超过1次。</h4>
                            <p class="f_666">请使用其他方式找回密码，或者明天再来试试吧。</p>

                            <p class="mt10"><a href="#" onclick="$.LAYER.close();" class="btnlink_b_small"><span>确&nbsp;&nbsp;&nbsp;认</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="layer_04" class="UED_hide">
                <div class="pop_box">
                    <div class="pop_tittle">
                        <h3 id="UED_layer_h3_v31">友情提示</h3>
                        <a href="javascript:void 0" onclick="$.LAYER.close();" class="close"></a>
                    </div>
                    <div class="pop_mainbox">
                        <div class="side_icon">
                            <s class="ico_warning_5"></s>
                        </div>

                        <div class="right_main">
                            <h4 class="geayline">很抱歉，您今天通过“邮箱找回密码”已超过5次。</h4>
                            <p class="f_666">请使用其他方式找回密码，或者明天再来试试吧。</p>

                            <p class="mt10"><a href="#" onclick="$.LAYER.close();" class="btnlink_b_small"><span>确&nbsp;&nbsp;&nbsp;认</span></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="layer_05" class="UED_hide">
                <div class="pop_box">
                    <div class="pop_tittle">
                        <h3 id="UED_layer_h3_v31">友情提示</h3>
                        <a href="javascript:void 0" onclick="$.LAYER.close();" class="close"></a>
                    </div>
                    <div class="pop_mainbox">
                        <div class="side_icon">
                            <s class="ico_warning_5"></s>
                        </div>

                        <div class="right_main">
                            <h4 class="geayline">很抱歉，您今天“申请修改邮箱地址”已超过3次。</h4>
                            <p class="f_666">请使用其他方式找回密码，或者明天再来试试吧。</p>

                            <p class="mt10"><a href="#" onclick="$.LAYER.close();" class="btnlink_b_small"><span>确&nbsp;&nbsp;&nbsp;认</span></a></p>
                        </div>
                    </div>
                </div>
            </div>

        </form>`;


    var data = {

    };

    //根据选择确定使用那一套插槽，先默认使用返回type的插槽
    new Vue({
        el: '#FormArea',
        data: function () {
            return data;
        },
        components: {
            'recovertype': recoverTem
        },
        created: function () {
            $("#RecoverTempId").html(recoverType);
        },
        mounted: function () {
           
        },
        methods: {

        }
    })
})