define([], function () {
    var html = `<div class="footer-nav clearfix">
                <div class="footer-nav-dl clearfix">
                    <dl>
                        <dt>买家指南</dt>
                        <dd>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">如何注册</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">如何购买</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">搜索商品</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">支付方式</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>卖家指南</dt>
                        <dd>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">出售商品</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">寄售交易</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">担保交易</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">收费标准</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>安全交易</dt>
                        <dd>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">钓鱼防骗</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">预防盗号</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">谨防诈骗</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">实名认证</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>常见问题</dt>
                        <dd>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">如何提现</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">如何充值</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">真假客服</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">忘记密码</a></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>服务中心</dt>
                        <dd>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">我要咨询</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">我要建议</a></p>
                            <p><a href="javascript:void(0)" target="_blank" rel="nofollow">我要投诉</a></p>
                            <p><a href="javascript:void(0)" rel="nofollow">QQ客服</a></p>
                        </dd>
                    </dl>
                </div>
                <div class="wx-item">
                    <img src="../../Content/Images/shixiao.png" width="120" height="120" alt="52yxb" />
                    <h2>官方微信</h2>
                    <p>微信号：52yxb</p>
                </div>
                <div class="wx-item wx-item-first">
                    <img src="../../Content/Images/shixiao.png" width="120" height="120" alt="手游充值APP" />
                    <h2>手游充值APP</h2>
                    <p>52yxb.com</p>
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
