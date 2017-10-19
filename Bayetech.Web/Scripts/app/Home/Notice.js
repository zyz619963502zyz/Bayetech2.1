<template id="Notice">
    <div class="index-tab">
        <div class="index-tab-top tab-03">
            <ul class="clearfix">
                <li class="on"><a href="http://www.7881.com/articlelist4-0-0.html" target="_blank">公告</a></li>
                <li><a href="http://www.7881.com/helpCenter.html" target="_blank">新手指南</a></li>
                <li class="last-tab-li"><a href="http://www.7881.com/articlelist6-0-0.html" target="_blank">常见问题</a></li>
            </ul>
        </div>
        <div class="index-tab-bot">
            <div class="index-tab-item" >
                <div class="gg-box">
                    <ul>
                        <li class="on"><a href="http://www.7881.com/article-913210808573879310-0.html" target="_blank">【公告】冒险岛2所有类目全免手续费</a></li>
                        <li><a href="http://www.7881.com/article-312698047299132329-0.html" target="_blank">【公告】绿岸网络账号过户延迟打款公告</a></li>
                        <li><a href="http://www.7881.com/article-412787552612033870-0.html" target="_blank">关于7881充值问题说明</a></li>
                        <li><a href="http://www.7881.com/article-110792784092213880-0.html" target="_blank">关于手游代充卖家7月份考核声明</a></li>
                    </ul>
                </div>
            </div>
            <div class="index-tab-item" style="display: none;">
                <div class="gg-box">
                    <ul>
                        <li class="on"><a href="http://www.7881.com/article-275079017460522529-0.html" target="_blank">DNF如何快速出售游戏币</a></li>
                        <li><a href="http://www.7881.com/article-968065528214149832-0.html" target="_blank">DNF游戏币交易上限说明</a></li>
                        <li><a href="http://www.7881.com/article-15886363374533255-0.html" target="_blank">DNF如何复制角色名</a></li>
                        <li><a href="http://www.7881.com/article-320670496107974788-0.html" target="_blank">《不败传说》解除2小时安全时限方法</a></li>
                    </ul>
                </div>
            </div>
            <div class="index-tab-item" style="display: none;">
                <div class="gg-box">
                    <ul>
                        <li class="on"><a href="http://www.7881.com/article-248691812886037547-0.html" target="_blank">提现多久到账</a></li>
                        <li><a href="http://www.7881.com/article-365809715870535056-0.html" target="_blank">发布件数说明</a></li>
                        <li><a href="http://www.7881.com/article-174684284150562122-0.html" target="_blank">收货角色名管理</a></li>
                        <li><a href="http://www.7881.com/article-73812285242797933-0.html" target="_blank">如何找回密码</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



var data = {
    noticetype: [{
        id: "",
        name: "公告"
    },
    {
        id: "",
        name: "新手指南"
    },
    {
        id: "",
        name: ""
    },
    ],
    notice: [{
        title: '公告',
        content: [
            {
                htmlurl: "http://www.7881.com/article-913210808573879310-0.html",
                urltext: '【公告】冒险岛2所有类目全免手续费'
            },
            {
                htmlurl: 'http://www.7881.com/article-312698047299132329-0.html',
                urltext: '【公告】绿岸网络账号过户延迟打款公告'
            },
            {
                htmlurl: 'http://www.7881.com/article-412787552612033870-0.html',
                urltext: ' 关于7881充值问题说明'
            },
            {
                htmlurl: 'http://www.7881.com/article-110792784092213880-0.html',
                urltext: '关于手游代充卖家7月份考核声明'
            }
        ]
    },
    {
        title: '新手指南',
        content: [
            {
                htmlurl: 'http://www.7881.com/article-275079017460522529-0.html',
                urltext: 'DNF如何快速出售游戏币'
            },
            {
                htmlurl: 'http://www.7881.com/article-968065528214149832-0.html',
                urltext: 'DNF游戏币交易上限说明'
            },
            {
                htmlurl: 'http://www.7881.com/article-15886363374533255-0.html',
                urltext: 'DNF如何复制角色名'
            },
            {
                htmlurl: 'http://www.7881.com/article-320670496107974788-0.html',
                urltext: '《不败传说》解除2小时安全时限方法'
            }
        ]
    },
    {
        title: '常见问题',
        content: [
            {
                htmlurl: 'http://www.7881.com/article-320670496107974788-0.html',
                urltext: '提现多久到账'
            },
            {
                htmlurl: 'http://www.7881.com/article-320670496107974788-0.html',
                urltext: '发布件数说明'
            },
            {
                htmlurl: 'http://www.7881.com/article-320670496107974788-0.html',
                urltext: '收货角色名管理'
            },
            {
                htmlurl: 'http://www.7881.com/article-320670496107974788-0.html',
                urltext: '如何找回密码'
            },
        ],
    }
  ]
}


        //Vue.component('right-notice',{
        //    template:'#Notice'
        //})

        $(function () {
            //图片轮播 carousel
            var Carousel = new Vue({
                el: '#BannerBox',
                data: {
                    imgList: [
                        {
                            Url: "http://www.7881.com/huodong-zxyby.html",
                            altName: "《醉逍遥》卖家大返现",
                            imgUrl: "../../Content/Images/249.jpg"
                        },
                        {
                            Url: "http://www.7881.com/huodong-mxdmsxf.html",
                            altName: "《冒险岛2》全免手续费",
                            imgUrl: "../../Content/Images/258.jpg"
                        },
                        {
                            Url: "http://www.7881.com/activity-dnfqx.html",
                            altName: "《DNF》转盘大抽奖",
                            imgUrl: "../../Content/Images/255.jpg"
                        },
                        {
                            Url: "http://www.7881.com/huodong-zt2sqx.html",
                            altName: "《征途2》消费送点券",
                            imgUrl: "../../Content/Images/257.jpg"
                        }
                    ],
                    currentIndex: 0,//当前索引
                    timer: ''//设置时间
                },
                methods: {
                    //this.$nextTick(()=> {
                    //    this.timer = setInterval(() => {
                    //        this.autoPlay()
                    //    },4000)
                    //})
                    autoPlay() {
                        this.currentIndex++
                        if (this.currentIndex > this.imgList.length - 1) {
                            this.currentIndex = 0;
                        }
                    },
                    start() {
                        this.timer = setInterval(() => {
                            this.autoPlay()
                        }, 3000)
                    },
                    stop() {
                        clearInterval(this.timer)
                        this.timer = null
                    },
                    change(index) {
                        this.currentIndex = index
                    }
                }
            });
        })
