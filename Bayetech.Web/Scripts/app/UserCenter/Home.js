//个人中心首页
define([], function () {
	var html = `
        <div class="col-md-9">
		<div class="umiddle">
        <div id="capitalInfo" class="umbox dpos mb10">
            
                <h5>帐号安全信息设置</h5>
            
            <div class="bd clearfix">
                
<div class="uaql pull-left">
    <dl id="" class="ual1 bad">
        <dt>您的帐号安全等级：<b><span id="">低</span></b></dt>
        <dd style="height:30px;">
			<div class ="progress-m">
				<div class ="progress-bar" style="width: 60%; background: linear-gradient(to right, #cc5345 35%, #ff7f36 68%);"></div>
			</div>
			<a href="accountsafe.aspx">检测</a>
		</dd>
    </dl>
    <p>
        <span id="">您帐号的安全等级较低，为确保帐号安全请尽快提高安全等级</span>
    </p>
    
</div>
<div id="" class="uaqr pull-left" style="display:;">
    <dl>
        <dt>提高帐号安全等级，您可以：</dt>
    </dl>
    <dl>
        <dd id="" style="display:none;">
            <a href="userInfo.aspx">绑定安全邮箱</a></dd>
        <dd id="" style="display:;"><a href="/BindMobile.aspx">绑定安全手机</a></dd>
        <dd id="" style="display:;"><a href="/userInfo.aspx">身份验证</a></dd>
        <dd id="" style="display:;"><a href="ReFindPassword/ModifyUserPayPwd.aspx">多重密码保障</a></dd>
        
        <dd id="" style="display:;"><a href="//www.uu898.com/m/pc.html" target="_blank">安全手机密令绑定</a></dd>
        <dd id="" style="display:none;"><a href="BindWeChat.aspx">微信绑定</a></dd>
    </dl>
    <dl style="width: 180px;">
        <dt>您可以经常更改您的帐户密码和支付密码来提高帐号的安全性。</dt>
    </dl>
</div>


            </div>
        </div>
        <div id="userInfo" class="mb10">

            <div class="hd">
                <p>
                    hi，<span id="ctl00_ContentPlaceHolder1_userID">thunderl</span>！目前您3天内有<a href="/MyMessage.aspx" class="FF4E00"><b><span id="ctl00_ContentPlaceHolder1_lblMsgCount">1</span></b></a>条未读消息    
                    <span id="ddzUserBox" style="display: none;">。<a href="//ddz.uu661.com" target="_blank" style="color: red; font-weight: bold;">斗地主获赠<span id="uzuanDDZSong">0</span>钻，赢取<span id="uzuanDDZWin">0</span>钻。</a>
                    </span>
                </p>
            </div>
            <div class="bd clearfix">
                <div class="allNum pull-left">
                    <div class="ui-tit-m">
                        账户总额
                    </div>
                    <div class="balance">
                        <b class="FF4E00">
                            <a href="/fundRecords.aspx" style="color: Orange;">
                                <span id="ctl00_ContentPlaceHolder1_lblTotalMoney">0.00</span></a>
                        </b>元
                    </div>
                </div>
                <div class="allNum pull-left">
                    <div class="ui-tit-m">
                        可用余额
                    </div>
                    <div class="balance">
                        <b class="FF4E00">
                            <span id="ctl00_ContentPlaceHolder1_money">0.00</span>
                        </b>元
                    </div>
                </div>
                <div class="enableNum pull-left">
                    <div id="ctl00_ContentPlaceHolder1_name" class="ui-tit-m">&nbsp;</div>
                    <div id="ctl00_ContentPlaceHolder1_price" class="balance">&nbsp;</div>

                    <div class="action">
                        <a class="ui-button-in" href="account/chongzhi.aspx">充值</a> <a class="ui-button-out" href="MainTxOrder.aspx">提现</a>
                    </div>

                </div>
                <div class="extralink">
                    <ul>
                        <li>账户被锁押金：<a><span id="ctl00_ContentPlaceHolder1_yajin">0.00</span></a>元<a href="YaJinRecords.aspx" style="color: Orange; text-decoration: underline">查看明细</a></li>
                        <li>账户可提现金额：<a><span id="ctl00_ContentPlaceHolder1_lblcanTxMoney">0.00</span></a>元</li>
                    </ul>
                    <ul>
                        <li>征途2s返现资金：<a><span id="ctl00_ContentPlaceHolder1_lblCashback">0</span></a>元<a href="mycashbacklist.aspx" style="color: Orange; text-decoration: underline">查看明细</a></li>
                        <li></li>
                    </ul>
                    <ul class="u2bar">
                        <li>作为买家成交笔数：<span id="ctl00_ContentPlaceHolder1_conCompleteCount">0</span></li>
                        <li>本次登录IP：<span id="ctl00_ContentPlaceHolder1_loginIP"></span></li>
                    </ul>
                    <ul class="u2bar">
                        <li>作为卖家成交笔数：<span id="ctl00_ContentPlaceHolder1_selCompleteCount">0</span></li>
                        <li>上次登录IP：<span id="ctl00_ContentPlaceHolder1_lastLoginIP"></span></li>
                    </ul>
                    <ul class="u3bar">
                        
                        <li>您上次登录时间：<span id="ctl00_ContentPlaceHolder1_lastLoginTime">1900/1/1 0:00:00</span>
                            (不是您登录的？<a href="ReFindPassword/ModifyUserPwd.aspx">请点这里</a>)</li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    </div>
    </div>`;

    var data={};
    var components={
        name: "Home",
        template: html,
        data: function () {
            return data;
        },
        created: function () {

        },
        methods: {
        }
    };
    return components;
});