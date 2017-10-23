//首页tab切换
define(['common'], function (common) {
    var data = {
        boxstyle: "gg-box",
        default:"78",
        type: [{
            id: "78",
            name: "公告"
        },
        {
            id: "76",
            name: "新手指南"
        },
        {
            id: "77",
            name: "常见问题"
        },
        ],
        obj: [{//根据catid Article 4条 顺序存疑
            id: "78",
            title: '公告',
            content: [
                {
                    url: "http://www.7881.com/article-913210808573879310-0.html",
                    title: '【公告】冒险岛2所有类目全免手续费'
                },
                {
                    url: 'http://www.7881.com/article-312698047299132329-0.html',
                    title: '【公告】绿岸网络账号过户延迟打款公告'
                },
                {
                    url: 'http://www.7881.com/article-412787552612033870-0.html',
                    title: ' 关于7881充值问题说明'
                },
                {
                    url: 'http://www.7881.com/article-110792784092213880-0.html',
                    title: '关于手游代充卖家7月份考核声明'
                }
            ]
        },
        {
            id: "76",
            title: '新手指南',
            content: [
                {
                    url: 'http://www.7881.com/article-275079017460522529-0.html',
                    title: 'DNF如何快速出售游戏币'
                },
                {
                    url: 'http://www.7881.com/article-968065528214149832-0.html',
                    title: 'DNF游戏币交易上限说明'
                },
                {
                    url: 'http://www.7881.com/article-15886363374533255-0.html',
                    title: 'DNF如何复制角色名'
                },
                {
                    url: 'http://www.7881.com/article-320670496107974788-0.html',
                    title: '《不败传说》解除2小时安全时限方法'
                }
            ]
        },
        {
            id: "77",
            title: '常见问题',
            content: [
                {
                    url: 'http://www.7881.com/article-320670496107974788-0.html',
                    title: '提现多久到账'
                },
                {
                    url: 'http://www.7881.com/article-320670496107974788-0.html',
                    title: '发布件数说明'
                },
                {
                    url: 'http://www.7881.com/article-320670496107974788-0.html',
                    title: '收货角色名管理'
                },
                {
                    url: 'http://www.7881.com/article-320670496107974788-0.html',
                    title: '如何找回密码'
                },
            ],
        }
        ]
    }
    return data;
});
//define(['common'], function (common) {
//    var html = `<div class="index-tab">
//        <div class="index-tab-top tab-03">
//            <ul class="clearfix">
//                <li v-for="item in noticetype">
//                   <a target="_blank"  @click="switchtab(item.id)">{{item.name}}</a>
//                </li>
//            </ul>
//        </div>
//        <div class="index-tab-bot">
//            <div class="index-tab-item" >
//                <div class="gg-box">
//                    <ul>
//                        <li v-for="item in notice">
//                           <a :href="item.url" target="_blank">{{item.title}}</a>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//        </div>
//    </div>`;

//    var data = {
//        noticetype: [{
//            id: "78",
//            name: "公告"
//        },
//        {
//            id: "76",
//            name: "新手指南"
//        },
//        {
//            id: "77",
//            name: "常见问题"
//        },
//        ],
//        notice: [],
//        noticeall: [{//根据catid Article 4条 顺序存疑
//            id: "78",
//            title: '公告',
//            content: [
//                {
//                    url: "http://www.7881.com/article-913210808573879310-0.html",
//                    title: '【公告】冒险岛2所有类目全免手续费'
//                },
//                {
//                    url: 'http://www.7881.com/article-312698047299132329-0.html',
//                    title: '【公告】绿岸网络账号过户延迟打款公告'
//                },
//                {
//                    url: 'http://www.7881.com/article-412787552612033870-0.html',
//                    title: ' 关于7881充值问题说明'
//                },
//                {
//                    url: 'http://www.7881.com/article-110792784092213880-0.html',
//                    title: '关于手游代充卖家7月份考核声明'
//                }
//            ]
//        },
//        {
//            id: "76",
//            title: '新手指南',
//            content: [
//                {
//                    url: 'http://www.7881.com/article-275079017460522529-0.html',
//                    title: 'DNF如何快速出售游戏币'
//                },
//                {
//                    url: 'http://www.7881.com/article-968065528214149832-0.html',
//                    title: 'DNF游戏币交易上限说明'
//                },
//                {
//                    url: 'http://www.7881.com/article-15886363374533255-0.html',
//                    title: 'DNF如何复制角色名'
//                },
//                {
//                    url: 'http://www.7881.com/article-320670496107974788-0.html',
//                    title: '《不败传说》解除2小时安全时限方法'
//                }
//            ]
//        },
//        {
//            id: "77",
//            title: '常见问题',
//            content: [
//                {
//                    url: 'http://www.7881.com/article-320670496107974788-0.html',
//                    title: '提现多久到账'
//                },
//                {
//                    url: 'http://www.7881.com/article-320670496107974788-0.html',
//                    title: '发布件数说明'
//                },
//                {
//                    url: 'http://www.7881.com/article-320670496107974788-0.html',
//                    title: '收货角色名管理'
//                },
//                {
//                    url: 'http://www.7881.com/article-320670496107974788-0.html',
//                    title: '如何找回密码'
//                },
//            ],
//        }
//        ]
//    }

//    var components = {
//        name: "index-tab",
//        data() {
//            return data;
//        },
//        created() {
//            this.switchtab("78");
//        },
//        template: html,
//        methods: {
//            switchtab(itemId) {
//                var obj = common.FindObjByProp(this.noticeall, "id", itemId);
//                this.notice = obj.content;
//            },
//            view(itemId) {
//                //this.$emit('view', itemId);
//            },
//        }
//    };
//    return components;
//});





