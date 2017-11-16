//底部模板1
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `<div class="center logo">
	<div class="left"><h1><a href="http://www.7881.com/" rel="nofollow" title="最专业的游戏交易平台"><img src="http://pic.ofcard.com/7881/market/images/help/7881_logo.jpg" alt="最专业的游戏交易平台"></a></h1></div>
	<div class="help_top">
		<ul>
			<li style="text-align: right">
				<span style="font-size: 16px; font-weight: bold;">客户服务热线：</span><span style="font-size: 24px; font-weight: bold; color: #CF1212">400-187-7881</span>
			</li>
		</ul>
	</div>
    </div>`;

    var components = {
        template: html,
        props: ['object']
    };
    return components;
});



