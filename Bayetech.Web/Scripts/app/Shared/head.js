define([], function () {
    var html = `<div id="head">
            <div class="top">
                <div class="width980_top">
                    <div class="welcome">欢迎来到7881&nbsp;&nbsp;<span id="span_user"><a href="http://www.7881.com/7881_touristlogin.jsp" class="dlzc" rel="nofollow">请登录</a> - <a href="http://www.7881.com/reg.jsp" class="dlzc" rel="nofollow">免费注册</a></span></div>
                    <div class="right obtainTop top_index" id="div_blog">
                        <div class="my_rice nav_text_3"><a href="http://e.weibo.com/u/3578882991/" target="_blank" rel="nofollow">官方微博</a></div>
                        <ul class="mine_cont_2">
                            <li><a href="http://e.weibo.com/u/3578882991/" target="_blank" rel="nofollow"><img src="../../Content/Images/sina_wb.png" align="absmiddle"> 新浪微博</a></li>
                            <li><a href="http://t.qq.com/game7881/" target="_blank" rel="nofollow"><img src="../../Content/Images/tencent_wb.png" align="absmiddle"> 腾讯微博</a></li>
                        </ul>
                    </div>
                    <span class="right_top3">|</span>
                    <div class="right obtainTop myService" id="div_Service">
                        <div class="my_rice nav_text_4">服务中心</div>
                        <ul class="mine_cont_3">
                            <li>
                                <a href="http://www.7881.com/helpCenter.html" target="_blank" rel="nofollow">帮助中心</a>
                            </li>
                            <li>
                                <a href="http://www.7881.com/articlelist4-0-0.html" target="_blank" rel="nofollow">资讯中心</a>
                            </li>
                            <li>
                                <a href="http://www.7881.com/tradesafe.html" target="_blank" rel="nofollow">安全中心</a>
                            </li>
                            <li>
                                <a href="http://www.7881.com/sc/sc_index.html" target="_blank" rel="nofollow">客服中心</a>
                            </li>
                        </ul>
                    </div>
                    <span class="right_top3">|</span>
                    <div class="right obtainTop top_index" id="div_seller">
                        <div class="my_rice nav_text_2"><a href="http://www.7881.com/personal.html" rel="nofollow">我是卖家</a></div>
                        <ul class="mine_cont_1">
                            <li><a href="http://www.7881.com/sellertool/queryMySaleOrder.action" rel="nofollow">我的订单管理</a></li>
                            <li><a href="http://www.7881.com/procurement/showMyGoods.action" rel="nofollow">出售中的商品</a></li>
                            <li><a href="http://www.7881.com/sellertool/queryMyClosedGoods.action" rel="nofollow">仓库中的商品</a></li>
                            <li><a href="http://www.7881.com/release.html" rel="nofollow">我要卖</a></li>
                            <li><a href="http://www.7881.com/financecharge/toAddExtractcash.action" rel="nofollow">提现</a></li>
                        </ul>
                    </div>
                    <span class="right_top3">|</span>
                    <span class="right obtainTop myrice" id="div_buyer">
                        <div class="my_rice nav_text"><a href="http://www.7881.com/personal.html" rel="nofollow">我是买家</a></div>
                        <ul class="mine_cont">
                            <li><a href="http://www.7881.com/procurement/queryMyProcureOrder.action" rel="nofollow">我购买的订单</a></li>
                            <li><a href="http://www.7881.com/gamelistshow.html" rel="nofollow">我要买</a></li>

                        </ul>
                    </span>
                    <span class="right_top3">|</span>
                    <span class="right_top2"><a href="http://www.7881.com/personal.html" rel="nofollow">个人中心</a></span>
                    <span class="right_top3">|</span>
                    <span class="right_top"><a href="http://www.7881.com/" target="_blank" rel="nofollow">首页</a></span>
                </div>
            </div>
            <div class="center logo">
                <div class="left"><h1><a href="http://www.7881.com/" rel="nofollow" title="最专业的游戏交易平台"><img src="../../Content/Images/7881_logo.jpg" alt="最专业的游戏交易平台"></a></h1></div>
                <div class="help_top">
                    <ul>
                        <li style="text-align: right">
                            <span style="font-size: 16px; font-weight: bold;">客户服务热线：</span><span style="font-size: 24px; font-weight: bold; color: #CF1212">400-187-7881</span>
                        </li>
                        <li>
                            <a href="http://www.7881.com/articlelist4-0-0.html">资讯中心</a>
                            <a href="http://www.7881.com/tradesafe.html" target="_blank">安全中心</a>
                            <a class="xzzn" href="http://www.7881.com/helpCenter.html">帮助中心</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="center" style=" height 10px;"></div>
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
