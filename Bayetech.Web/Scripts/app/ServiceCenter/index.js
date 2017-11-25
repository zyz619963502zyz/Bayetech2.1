var PersonalHeadModule = ['vue', 'jquery', 'common', 'Pavigation', 'PersonalHead', 'ServiceLogo', 'ServiceNav', 'ServiceButtom', 'ServiceFoot', 'ServiceCall', 'ServicePusht']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, pavi, servicehead, serlogo, servicenav,serbuttom,foot,call,pusht) {
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
        ],
        ServiceFooterList: [
            { cl: "s1", text: "寄售担保11 无货保赔" },
            { cl: "s2", text: "安全服务 保障资金" },
            { cl: "s3", text: "7*24小时 专属客服" },
            { cl: "s4", text: "权威认证 安全可信" },
        ],
        ServiceCollList:[
            {
                title: "问题类目",
                content: [
                    {
                        dttitle: "游戏名称",
                        dtcontent: [
                                    {
                                    lbtitle: "端游：",
                                    lbcontent: [
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "地下城与勇士" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "斗战神" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "圣斗士星矢ol" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "新征途" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "笑傲江湖" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "刀剑2" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "问道" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "其他" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "剑灵" },
                                    { url: "http://www.7881.com/sc/search-G10-0.html", text: "全部游戏" },
                                        ]
                                    },
                                    {
                                        lbtitle: "手游：",
                                        lbcontent: [
                                        { url: "http://www.7881.com/sc/search-G10-0.html", text: "忘仙" },
                                        { url: "http://www.7881.com/sc/search-G10-0.html", text: "英雄战魂" },
                                        ]
                                    },
                            
                           
                        ]
                    },
                     {
                         dttitle: "交易模式",
                         dtcontent: [
                                     {
                                         lbtitle: "",
                                         lbcontent: [
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "寄售交易" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "担保交易" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "账号交易" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "其他" },
                                         ]
                                     },
                         ]
                     },
                     {
                         dttitle: "物品类型",
                         dtcontent: [
                                     {
                                         lbtitle: "",
                                         lbcontent: [
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "装备" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "游戏币" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "游戏账号" },
                                         { url: "http://www.7881.com/sc/search-G10-0.html", text: "其他" },
                                         ]
                                     },
                         ]
                     },
                      {
                          dttitle: "服务流程",
                          dtcontent: [
                                      {
                                          lbtitle: "",
                                          lbcontent: [
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "出售流程" },
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "购买流程" },
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "审核流程" },
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "交易安全性" },
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "交易费收取标准" },
                                          { url: "http://www.7881.com/sc/search-G10-0.html", text: "其它" },
                                          ]
                                      },
                          ]
                      },
                       {
                           dttitle: "其他",
                           dtcontent: [
                                       {
                                           lbtitle: "",
                                           lbcontent: [
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "7881用户名" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "充值" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "提现" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "交易证明" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "实名认证" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "手机绑定" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "其它" },
                                           ]
                                       },
                           ]
                       },
                       {
                           dttitle: "建议",
                           dtcontent: [
                                       {
                                           lbtitle: "",
                                           lbcontent: [
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "寄售交易" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "担保交易" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "账号交易" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "手游交易" },
                                           { url: "http://www.7881.com/sc/search-G10-0.html", text: "其他" },
                                           ]
                                       },
                           ]
                       },
                ],
            }
        ],
        ServicePushtList: [
            {
                title: "",
                content: [
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "忘记密码怎么办" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "如何联系订单客服" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "如何验证真假客服" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "如何正确出售商品" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "收货角色名如何修改" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "如何提现我的资金" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "提现怎么收取手续费" },
                    { url: "http://www.7881.com/helpcenter/73812285242797933.html", text: "订单撤销后退款到哪" },
                ]

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
            'regfoot': foot,
            'regservicecall': call,
            'regpusht':pusht,
        }
    });

});