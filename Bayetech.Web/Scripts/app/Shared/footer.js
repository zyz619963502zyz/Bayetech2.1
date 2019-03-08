define([], function () {
	var html = `
		<div class="footer-copyright">
		<div class ="yx-copyright">
            <div>
                <a href="" target="_blank" rel="nofollow">关于星转</a> | <a href="" target="_blank" rel="nofollow">About 游戏联盟</a> | <a href="" target="_blank" rel="nofollow">服务协议</a> | <a href="" target="_blank" rel="nofollow">隐私政策</a> | <a href="" target="_blank" rel="nofollow">开放平台</a> | <a href="#" target="_blank" rel="nofollow">广告服务</a> | <a href="#" target="_blank" rel="nofollow">客服中心</a> | <a href="#" target="_blank" rel="nofollow">举报中心</a> | <a href="http://www.qq.com/map/" target="_blank" rel="nofollow">网站导航</a>
            </div>
            <div class="en">Copyright &copy; 2018 - 2019 Youxilm. All Rights Reserved</div>
            <div>
                <a href="" target="_blank" rel="nofollow">上海星转网络科技有限公司</a> <a href="" target="_blank" rel="nofollow">版权所有</a>
            </div>
        </div>
		</div>
		`;

    var data = {
        object: [],
    };

    var components = {
        name: "v-footer",
        template: html,
        data() {
            return data;
        },
    };
    return components;
});
