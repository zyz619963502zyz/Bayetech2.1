define([], function () {
    var html = ` <div class="yx-footer yx-footer-thin">
            <div class="yx-footer-links" bosszone="SY_Bottomnav">
                <div class="yx-footer-layout">
                    <a href="javascript:window.scrollTo(0,0);" class="yx-footer-gotop" target="_self"><i class="fa fa-sort-up"></i></a>
                    <ul>
                        <li><a href="">合作伙伴</a></li>
                        <li v-for='item in partnerimg'>
                            <a :href="item.url" :title='item.title'>
                                <img :src="item.imgurl" alt="暂无图片" width="40" height="40" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="yx-footer-main" >
                <div class="yx-footer-layout">
                    <div class="app">
                        <h4>游戏联盟微信订阅号</h4>
                        <div class="qrimg">
                            <img src="../../Content/Images/shixiao.png"  alt="游戏联盟微信订阅号">
                        </div>
                    </div>
                    <div class="app">
                        <h4>下载APP</h4>
                        <div class="qrimg">
                            <img src="../../Content/Images/shixiao.png" alt="APP">
                        </div>
                    </div>
                    <ul class="yx-links">
                        <!-- 第一列 -->
                        <li>
                            <h4>关于</h4>
                            <ul>
                                <li><a href="/a/20150521/056103.htm">关于游戏联盟</a></li>
                                <li><a href="javascript:void(0)">联系我们</a></li>
                                <li><a href="/a/20150305/047006.htm">招聘启事</a></li>
                                <li><a href="/a/20150728/023527.htm">实习机会</a></li>
                                <li><a href="/017602.htm">微信订阅</a></li>
                            </ul>
                        </li>
                        <!-- 第二列 -->
                        <li>
                            <h4>买家指南</h4>
                            <ul>
                                <li><a href="/basket/nba/index_snapshot_20160215.htm">游戏联盟</a></li>
                                <li><a href="/basket/page/backup/nbafinals2015.htm">游戏联盟</a></li>
                                <li><a href="/basket/page/backup/2015nbaallstar.htm">游戏联盟</a></li>
                                <li><a href="/basket/page/backup/indexbak0622.htm">游戏联盟</a></li>
                                <li><a href="/basket/nbaas/zhengsai.htm">游戏联盟</a></li>
                                <li><a href="/nbafinals/2013.htm">游戏联盟</a></li>
                            </ul>
                        </li>
                        <!-- 第三列 -->
                        <li>
                            <h4>充值方式</h4>
                            <ul>
                                <li><a href="/053545.htm">微信充值</a></li>
                                <li><a href="/053740.htm">支付宝充值</a></li>
                            </ul>
                        </li>
                        <!-- 第四列 -->
                            <li>
                            <h4>常见问题</h4>
                            <ul>
                                <li><a href="/a/20150819/057018.htm">游戏联盟</a></li>
                                <li><a href="/022024.htm">游戏联盟</a></li>
                                <li><a href="/026656.htm">游戏联盟</a></li>
                                <li><a href="/027590.htm">游戏联盟</a></li>
                                <li><a href="/028448.htm">游戏联盟</a></li>
                                <li><a href="/030317.htm">游戏联盟</a></li>
                            </ul>
                        </li>
                        <!-- 第五列 -->
                        <li>
                            <h4>客服中心</h4>
                            <ul>
                                <li><a href="/045439.htm">游戏联盟</a></li>
                                <li><a href="/051396.htm">游戏联盟</a></li>
                                <li><a href="/050289.htm">游戏联盟</a></li>
                                <li><a href="/045531.htm">游戏联盟</a></li>
                                <li><a href="/038368.htm">游戏联盟</a></li>
                                <li><a href="/042623.htm">游戏联盟</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>`;

    var data = {
        partnerimg: [
            {
                title: '王者荣耀',
                imgurl: '../../Content/Images/icon/1.png',
                url: 'http://www.52yxb.com'
            },
            {
                title: '兔玩网',
                imgurl: '../../Content/Images/icon/2.png',
                url: 'http://www.52yxb.com'
            },
            {
                title: 'UU898',
                imgurl: '../../Content/Images/icon/3.png',
                url: 'http://www.52yxb.com'
            }
        ],

    };

    var components = {
        name: "footer-server",
        template: html,
        data() {
            return data;
        },
    };
    return components;
});
