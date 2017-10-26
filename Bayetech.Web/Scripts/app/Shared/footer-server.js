define([], function () {
    var html = `<div class="footer-server-box">
                <div class="footer-server">
                    <div class="footer-server-dl">
                        <dl>
                            <dt><em class="iconfont">&#xe62b;</em></dt>
                            <dd>
                                <h2>游戏交易 应有尽有</h2>
                                <p>关于游戏你想要的，这里都有</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><em class="iconfont">&#xe62e;</em></dt>
                            <dd>
                                <h2>交易安全 资金保障</h2>
                                <p>保障交易安全的事，我们都做</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><em class="iconfont">&#xe62d;</em></dt>
                            <dd>
                                <h2>7*24小时 专属客服</h2>
                                <p>时时刻刻想联系我，客服都在</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><em class="iconfont">&#xe62c;</em></dt>
                            <dd>
                                <h2>权威认证 安全可靠</h2>
                                <p>我是值得信赖平台，大家都造</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>`;

    var data = {
        object: [],
    };

    var components = {
        template: html,
        data() {
            return data;
        },
    };
    return components;
});
