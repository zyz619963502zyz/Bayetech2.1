//头部模板
define([], function () {
    alert(1);
    //var html = `<div  class="Navigation">
    //                 <div>
    //                     <ul>
    //                         <li>
    //                              <a href="http://www.7881.com/" target="_blank">首页</a>
    //                              <a href="http://www.7881.com/gamelistshow.html" target="_blank">网络游戏</a>
    //                              <a href="http://shouyou.7881.com/">手机游戏</a>
    //                              <a href="http://dl.7881.com/" class ="gamedl">LOL代练</a>
    //                              <a href="http://shouyou.7881.com/syzh.html">手游账号</a>
    //                              <a class ="syfb" href="http://www.7881.com/dnf_chuhuo.html">DNF收货<img src="../../Content/Images/hot.gif" /></a>
    //                              <a style="background:#1D62BF; color:#FFF;">个人中心</a>
    //                              <a href="http://www.7881.com/rechargecenter/toRechargeHF.action"WWW>便民中心</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //            </div>
               
    //    `

    var html = `
            <div class ="top_box">
        <div class ="top">
            <!--顶部区域-->
            <div class ="top_l left"><dl><span id="span_user"><dt><a rel="nofollow" href="http://www.7881.com/personal.html">伟大的小源源</a>，欢迎回来！</dt><dt class ="top_grayline">|</dt><dt><a href="http://www.7881.com/msg/notReadMsg.action" rel="nofollow"><i class="ico_message">[0]</i></a></dt><dt class="top_grayline">|</dt><dt><a href="http://www.7881.com/logout.action" rel="nofollow">退出</a></dt></span></dl></div><!--顶部左侧-->
            <div class ="top_r right">
                <!--顶部右侧-->
                <dl>
                    <dt><a href="http://www.7881.com/" rel="nofollow">首页</a></dt>
                    <dt class ="top_grayline">|</dt>
                    <dd class ="subNav">
                        <a href="http://www.7881.com/personal.html" rel="nofollow">买家中心</a>
                        <ul id="hide_nav">
                            <li><a href="http://www.7881.com/procurement/queryMyProcureOrder.action" rel="nofollow">我购买的商品</a></li>
                            <li><a href="http://www.7881.com/gamelistshow.html" rel="nofollow">我要买</a></li>
                        </ul>
                    </dd>
                    <dt class ="top_grayline">|</dt>
                    <dd class ="subNav">
                        <a href="http://www.7881.com/personal.html">卖家中心</a>
                        <ul id="hide_nav">
                            <li><a href="http://www.7881.com/props/getUserPropsDetail.action" rel="nofollow">我的置顶卡</a></li>
                            <li><a href="http://www.7881.com/sellertool/queryMySaleOrder.action" rel="nofollow">我的订单管理</a></li>
                            <li><a href="http://www.7881.com/procurement/showMyGoods.action" rel="nofollow">出售中的宝贝</a></li>
                            <li><a href="http://www.7881.com/sellertool/queryMyClosedGoods.action" rel="nofollow">仓库中的宝贝</a></li>
                            <li><a href="http://www.7881.com/release.html" rel="nofollow">我要卖</a></li>
                        </ul>
                    </dd>
                    <dt class ="top_grayline">|</dt>
                    <dt><a href="javascript:toadd()" class ="green" rel="nofollow">充值</a></dt>
                    <dt class ="top_grayline">|</dt>
                    <dt><a href="http://www.7881.com/financecharge/toAddExtractcash.action" class ="orange" rel="nofollow">提现</a></dt>
                    <dt class ="top_grayline">|</dt>
                    <dd class ="subNav">
                        <a href="http://www.7881.com/personal.html#" rel="nofollow">服务中心</a>
                        <ul id="hide_nav">
                            <li><a href="http://www.7881.com/sc/sc_index.html" rel="nofollow">客服中心</a></li>
                            <li><a href="http://www.7881.com/helpCenter.html" rel="nofollow">帮助中心</a></li>
                            <li><a href="http://www.7881.com/articlelist4-0-0.html" rel="nofollow">资讯中心</a></li>
                            <li><a href="http://www.7881.com/tradesafe.html" rel="nofollow">安全中心</a></li>
                        </ul>
                    </dd>
                    <dt class ="top_grayline">|</dt>
                    <dd class ="subNav wb">
                        <a href="http://e.weibo.com/u/3578882991/" target="_blank" rel="nofollow">官方微博</a>
                        <ul id="hide_nav">
                            <li class ="xn"><a href="http://e.weibo.com/u/3578882991/" target="_blank" rel="nofollow">新浪微博</a></li>
                            <li class ="tx"><a href="http://t.qq.com/game7881/" target="_blank" rel="nofollow">腾讯微博</a></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
        `
    var components = {
        name: "personal-head",
        template: html
    };

    return components;
});