var PersonalHeadModule = ['vue', 'jquery', 'common', 'Pavigation', 'PersonalHead', 'ServiceLogo', 'ServiceNav', 'ServiceButtom']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, pavi, servicehead, serlogo, servicenav,serbuttom) {
    var data = {
        ServiceList: [{ url: "http://www.7881.com/tradesafe.html", text: "首页" }
                , { url: "http://www.7881.com/tradesafe.html", text: "安全知识中心" }
                , { url: "http://www.7881.com/tradesafe.html", text: "验证中心" }
                , { url: "http://www.7881.com/tradesafe.html", text: "帮助中心" }
                , { url: "http://www.7881.com/tradesafe.html", text: "资讯中心" }
        ],
        ServiceNewList: [
            {
                title: "安全常识",
                content: [{ url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "看2014ChinaJoy了......" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "防范钓鱼网站的基本知识" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "什么是钓鱼网站" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "骗子诈骗流程" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "防止盗号木马盗取我们的账号和......" }]
            },
            {
                title: "钓鱼网站盗号",
                content: [{ url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "7881平台建议" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "新闻背景：识破假冒钓鱼网站骗......" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "什么是钓鱼网站？" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "钓鱼网站的危害方式" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "卖家钓鱼后，冒充客服继续行骗......" }]
            },
            {
                title: "假客服欺诈",
                content: [{ url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "案例：骗子们用一些荒诞无稽的......" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "低价游戏币换来的高价“担保金......" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "购买低价商品被钓鱼后资金被盗" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "如何识别真假客服" },
                            { url: "http://www.7881.com/tradesafe/825689321558028350a0.html", text: "骗子利用花言巧语对新用户进行......" }]
            }
        ]

    }
    var vm = new Vue({
        el: '#ServiceDiv',
        data: function () {
            return data;
        },
        components: {
            'regpavigation': pavi,
            'regservicehead': servicehead,
            'regservicelogo': serlogo,
            'regservicenav': servicenav,
            'regservicebuttom': serbuttom,
        }
    });

});