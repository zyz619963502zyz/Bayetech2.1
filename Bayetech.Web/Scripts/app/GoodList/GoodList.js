define(jsconfig.baseArr, function (Vue, $, common) {
    var middleHtml = `<div class="list-box list-type-03">
        <div class="list-item"  v-for="item in value">
                <div class ="list-item-box" >
                    <div class="list-v part-01 clearfix">
                        <div class="img-box">
                            <a v-bind:href="item.ScreenshotsCertification" target="_blank">
                                <img v-bind:src="item.imgurl" />
                                <h3 class="authenticate">截图认证</h3>
                                <h3>149图</h3>
                            </a>
                        </div>
                        <div class="txt-box">
                            <h2>
                                <a v-bind:href="item.aurl" target="_blank">
                                    <em class="tags icon-ptdf" ></em>
                                    <span>{{item.PlatformUndertakes}} </span>
                                </a>
                            </h2>
                            <h4><i>游戏区服：</i><span>
                            {{item.GameArea }}</span></h4>
                            <p>
                                <i>账号安全：</i><span class="stars-boxs 0-5"></span>
                            </p>
                        </div>
                    </div>
                    <div class="list-v part-02">
                        <h5>¥ {{item.Money}}</h5>
                    </div>
                    <div class="list-v part-04">
                        <div class="tags-box">
                            <p title="此账号支持过户，购买更安全"><em class="tags icon-zhgh"></em>账号过户</p>
                            <p title="该账号由系统自动截图，信息展示更全面"><em class="tags icon-jtrz"></em>截图认证</p>
                            <p title="此帐号卖家已提供身份证扫描件，购买更安全"><em class="tags icon-sfyz"></em>身份验证</p>
                        </div>
                    </div>
                    <div class="list-v part-05">
                        <h5><a v-bind:href="item.ScreenshotsCertification" class ="list-btn" target="_blank">查看帐号</a></h5>
                    </div>
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