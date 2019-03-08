define([], function () {
	var html = `
		<div class="footer-copyright">
		<div class ="yx-copyright">
            <div>
                <a href="" target="_blank" rel="nofollow">关于星转</a> | <a href="" target="_blank" rel="nofollow">服务协议</a> | <a href="" target="_blank" rel="nofollow">隐私政策</a> | <a href="" target="_blank" rel="nofollow">开放平台</a> | <a href="#" target="_blank" rel="nofollow">客服中心</a> | <a href="#" target="_blank" rel="nofollow">网站导航</a>
            </div>
            
            <div>抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活。</div> 
            <div class="age-warning">温馨提示：适合18岁以上玩家</div>
<div class="en">Copyright &copy;  2019  All Rights Reserved</div>            
<div>
                <a href="" target="_blank" rel="nofollow">上海星转网络科技有限公司</a> <a href="" target="_blank" >版权所有</a> <a>沪ICP备18042378号</a>
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
