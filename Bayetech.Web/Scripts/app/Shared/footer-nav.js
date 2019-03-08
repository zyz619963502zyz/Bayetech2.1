define([], function () {
    var html = `<div class="footer-nav clearfix">
                <div class="footer-nav-dl clearfix">
                    <dl>
                        <dt>买家指南</dt>
                        <dd>
                            <p><a href="http://www.7881.com/helpcenter/53630197449768690.html" target="_blank" rel="nofollow">如何注册</a></p>
                            <p><a href="http://www.7881.com/helpcenter/53645345943894167.html" target="_blank" rel="nofollow">如何购买</a></p>
                            <p><a href="http://www.7881.com/helpcenter/73814839931161690.html" target="_blank" rel="nofollow">搜索商品</a></p>
                            <p><a href="http://www.7881.com/helpcenter/4.html" target="_blank" rel="nofollow">支付方式</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>卖家指南</dt>
                        <dd>
                            <p><a href="http://www.7881.com/helpcenter/73789486396550831.html" target="_blank" rel="nofollow">出售商品</a></p>
                            <p><a href="http://www.7881.com/helpcenter/73790853549846082.html" target="_blank" rel="nofollow">寄售交易</a></p>
                            <p><a href="http://www.7881.com/helpcenter/43552371643536454.html" target="_blank" rel="nofollow">担保交易</a></p>
                            <p><a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank" rel="nofollow">收费标准</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>安全交易</dt>
                        <dd>
                            <p><a href="http://www.7881.com/tradesafe/311350774185047325a0.html" target="_blank" rel="nofollow">钓鱼防骗</a></p>
                            <p><a href="http://www.7881.com/tradesafe/311351017111547791a0.html" target="_blank" rel="nofollow">预防盗号</a></p>
                            <p><a href="http://www.7881.com/tradesafe/311351107162346087a0.html" target="_blank" rel="nofollow">谨防诈骗</a></p>
                            <p><a href="http://www.7881.com/helpcenter/73811305049964817.html" target="_blank" rel="nofollow">实名认证</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>常见问题</dt>
                        <dd>
                            <p><a href="http://www.7881.com/helpcenter/1.html" target="_blank" rel="nofollow">如何提现</a></p>
                            <p><a href="http://www.7881.com/helpcenter/53646056824590766.html" target="_blank" rel="nofollow">如何充值</a></p>
                            <p><a href="http://www.7881.com/tradesafe/safeCenter.html" target="_blank" rel="nofollow">真假客服</a></p>
                            <p><a href="http://www.7881.com/helpcenter/73812285242797933.html" target="_blank" rel="nofollow">忘记密码</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>服务中心</dt>
                        <dd>
                            <p><a href="http://www.7881.com/sc/add_sc.html" target="_blank" rel="nofollow">我要咨询</a></p>
                            <p><a href="http://www.7881.com/sc/add_sc.html" target="_blank" rel="nofollow">我要建议</a></p>
                            <p><a href="http://www.7881.com/sc/add_sc.html" target="_blank" rel="nofollow">我要投诉</a></p>
                            <p><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1" rel="nofollow">QQ客服</a></p>
                        </dd>
                    </dl>
                </div>
                <div class="wx-item">
                    <img src="../../Content/Images/erwm.jpg" width="120" height="120" alt="7881官方微信" />
                    <h2>7881官方微信</h2>
                    <p>微信号：game7881</p>
                </div>
                <div class="wx-item wx-item-first">
                    <img src="../../Content/Images/erwm.jpg" width="120" height="120" alt="手游充值APP" />
                    <h2>手游充值APP</h2>
                    <p>m.7881.com</p>
                </div>

            </div>`;

    var data = {
        object: [],
    };

    var components = {
        name: "footer-nav",
        template: html,
        data() {
            return data;
        },
    };
    return components;
});
