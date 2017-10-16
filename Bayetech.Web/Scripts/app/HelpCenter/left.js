//左侧模板
define([], function () {
    var findListUrl = "/api/Article/FindList"; //查询列表
    var findContentUrl = "/api/Article/FindContent"; //查询详情
    //:onclick="value.clickFn"
    var html = `<div class="help_left" id="help_left">
            <h3>使用帮助</h3>
            <ul v-for="value in object">
                <li>
                    <a>{{ value.title }}</a>
                </li>
                <li :class="value.class" v-for="item in value.items">
                    <a :href="item.url" >{{ item.title }}</a>
                </li >
            </ul >
        </div>`;
    
    var data = {
        object: [{
            title: '手游交易帮助', clickFn: 'olShowToggle("273679613441652887")', "class": "olToggle273679613441652887",
            items: [{ title: '支付方式', url: 'http://www.7881.com/helpcenter/4.html' },
            { title: '为什么要帐号密码', url: 'http://www.7881.com/helpcenter/4.html' },
            { title: 'APP充值不到账', url: 'http://www.7881.com/helpcenter/4.html' },
            { title: '忘仙担保交易截图规范', url: 'http://www.7881.com/helpcenter/4.html' },],
        },
        {
            title: '代练帮助', clickFn: 'olShowToggle("273679613441652887")', "class": "olToggle273679613441652887",
            items: [{ title: '关于英雄联盟补分说明', url: 'http://www.7881.com/helpcenter/4.html' },
            { title: '发布订单后我可以中途撤单吗', url: 'http://www.7881.com/helpcenter/4.html' },],
        },],
    };

    var helpLeft = {
        name: "help-left",
        template: html,
        data() {
            return data;
        },
        created() {
            debugger;
            this.findList();
        },
        methods: {
            findList: function () {
                common.getWebJson(findListUrl, { value: "23" }, function (data) {
                });
            }
        },
    };
    return helpLeft;
});
