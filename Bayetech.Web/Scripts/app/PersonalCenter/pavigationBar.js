//头部模板
define("Pavigation", jsconfig.baseArr, function (Vue, $, common) {
    var html = `<div class="Navigation">
            <div class="center Part">
                <ul>
                    <li>
                        <a href="http://www.7881.com/" target="_blank">首页</a>
                        <a href="http://www.7881.com/gamelistshow.html" target="_blank">网络游戏</a>
                        <a href="http://shouyou.7881.com/">手机游戏</a>
                        <a href="http://dl.7881.com/" class="gamedl">LOL代练</a>
                        <a href="http://shouyou.7881.com/syzh.html">手游账号</a>
                        <a class="syfb" href="http://www.7881.com/dnf_chuhuo.html">DNF收货<img src="../../Content/Images/hot.gif" /></a>
                        <a style="background:#1D62BF; color:#FFF;">个人中心</a>
                        <a href="http://www.7881.com/rechargecenter/toRechargeHF.action" WWW>便民中心</a>
                    </li>
                </ul>
            </div>
        </div>`
    var components = {
        template: html
    };

    return components;
});