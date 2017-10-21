define("PointTradingModel", jsconfig.baseArr, function (Vue, $, common) {
    var middleHtml = `<div class="list-item"  template="RegBoxMiddle">
                <div class="list-item-box">
                    <div class="list-v part-01 clearfix">
                        <div class="img-box">
                            <a href="/201612376079625.html" target="_blank">
                                <img src="https://s3.cn-north-1.amazonaws.com.cn/userimg2.7881.com/2017/10/17/201612376079625/ZT2S-SZ0302.jpg" />
                                <h3 class="authenticate">截图认证</h3>
                                <h3>149图</h3>
                            </a>
                        </div>
                        <div class="txt-box">
                            <h2>
                                <a href="/201612376079625.html" target="_blank">
                                    <em class="tags icon-ptdf" ></em>
                                    <span>【 霸王 唐 男 200级 带孩子出售】高功 高防 高血 高站 </span>
                                </a>
                            </h2>
                            <h4><i>游戏区服：</i><span>天下第一区/天下无双</span></h4>
                            <p>
                                <i>账号安全：</i><span class="stars-boxs0-5 "></span>
                            </p>
                        </div>
                    </div>
                    <div class="list-v part-02">
                        <h5>¥ 9888.00</h5>
                    </div>
                    <div class="list-v part-04">
                        <div class="tags-box">
                            <p title="此账号支持过户，购买更安全"><em class="tags icon-zhgh"></em>账号过户</p>
                            <p title="该账号由系统自动截图，信息展示更全面"><em class="tags icon-jtrz"></em>截图认证</p>
                            <p title="此帐号卖家已提供身份证扫描件，购买更安全"><em class="tags icon-sfyz"></em>身份验证</p>
                        </div>
                    </div>
                    <div class="list-v part-05">
                        <h5><a href="/201612376079625.html" class="list-btn" target="_blank">查看帐号</a></h5>
                    </div>
                </div>
            </div>`
    //中间模板
    var middleComponent = {
        props: ['value'],
        template:middleHtml
    };

    return middleComponent;
});