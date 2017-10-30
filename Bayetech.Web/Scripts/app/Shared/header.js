define([], function () {
    var html = `<div class="top-common-box">
	<div class="top-common clearfix">
		<div class="top-common-left">
			<div class="not-log" id="noLog">
                <span>您好，欢迎访问7881游戏交易平台！</span>
                <a href="https://graph.qq.com/oauth/show?which=Login&amp;display=pc&amp;response_type=code&amp;client_id=101142043&amp;redirect_uri=http%3A%2F%2Fwww.7881.com%2Fuser%2Fqqlogin.action" class="qq-log" rel="nofollow"><em class="icon-com"></em>QQ登录</a>
                <a href="/7881_touristlogin.jsp" class="blue" rel="nofollow">登录</a>
                <a href="/reg_tel.jsp" rel="nofollow">免费注册</a>
            </div>
			<div class="already-log" id="alreadyLog" style="display: none;">
				<span>13814021438,欢迎回来！</span><em>|</em>
				<a href="#" class="on" rel="nofollow"><i class="icon-com message"></i>消息（<b>10</b>）</a><em>|</em>
				<a href="#" rel="nofollow">退出</a>
			</div>
		</div>
		<div class="top-common-right">
			<ul>
				<li><a href="/personal.html?ver=20140717" rel="nofollow">我的7881</a></li>
				<li><a href="/financecharge/toAdd.action" class="gre" rel="nofollow">充值</a></li>
				<li><a href="/financecharge/toAddExtractcash.action" class="org" rel="nofollow">提现</a></li>
				<li class="top-menu-item">
					<div class="top-menu middle-menu">
						<a href="/personal.html?ver=20140717" class="menu-hd" rel="nofollow">买家中心<i class="icon-com downJt"></i></a>
						<div class="top-menu-list">
							<a href="/procurement/queryMyProcureOrder.action" rel="nofollow">我购买的商品</a>
							<a href="/gamelistshow.html" rel="nofollow">我要买</a>
						</div>
					</div>
				</li>
				<li class="top-menu-item">
					<div class="top-menu middle-menu">
						<a href="/personal.html" class="menu-hd" rel="nofollow">卖家中心<i class="icon-com downJt"></i></a>
						<div class="top-menu-list">
							<a href="/props/getUserPropsDetail.action" rel="nofollow">我的置顶卡</a>
							<a href="/sellertool/queryMySaleOrder.action" rel="nofollow">我的订单管理</a>
							<a href="/procurement/showMyGoods.action" rel="nofollow">出售中的宝贝</a>
							<a href="/sellertool/queryMyClosedGoods.action" rel="nofollow">仓库中的宝贝</a>
							<a href="/release.html" rel="nofollow">我要卖</a>
						</div>
					</div>
				</li>
				<li class="top-menu-item">
					<div class="top-menu">
						<a href="#" class="menu-hd" rel="nofollow">服务中心<i class="icon-com"></i></a>
						<div class="top-menu-list">
							<a href="/sc/sc_index.html" rel="nofollow">客服中心</a>
							<a href="/helpCenter.html" rel="nofollow">帮助中心</a>
							<a href="/articlelist4-0-0.html" rel="nofollow">资讯中心</a>
							<a href="/tradesafe.html" rel="nofollow">安全中心</a>
						</div>
					</div>
				</li>
				<li class="top-menu-item last-menu-item">
					<div class="top-menu">
						<a href="#" class="menu-hd">网站导航<i class="icon-com"></i></a>
						<div class="top-menu-list">
							<a href="http://www.7881.com/release_admittance.html" target="_blank">商家准入</a>
							<a href="http://sellertools.7881.com" target="_blank">卖家助手</a>
						</div>
					</div>
				</li>
			</ul>
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
