//合作伙伴
define([], function () {
    var html = `<div id="partner">
    <h3 class="partner-tit clearfix">
        <span>合作伙伴</span>
        <a href="http://www.7881.com/friendlinks-0.html">更多合作奔跑中...</a>
    </h3>
    <div class="partner-top">
        <ul>
            <li v-for="item in imageobj">
                <a href="http://qq.com" target="_blank" rel="nofollow"><img :src="item.img" width="60" height="60" /></a>
            </li>
        </ul>
    </div>
    <div class="partner-bot">
        <span>友情链接</span>
        <div class="partner-bot-a">
            <a v-for="item in cententobj" :href="item.url" target="_blank">{{item.title}}</a>
            <a href="http://www.7881.com/friendlinks-0.html" target="_blank" class="more-a">更多友链>></a>
        </div>
    </div>
</div>`;

    var data = {
        imageobj: [{
            title: "王者荣耀",
            img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
            ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
        },
        {
            img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
            url: "http://qq.com",
            }, {
                img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
                url: "http://qq.com",
        }, {
            img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
            url: "http://qq.com",
            }, {
                img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
                url: "http://qq.com",
        }, {
            img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
            url: "http://qq.com",
            }, {
                img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
                url: "http://qq.com",
        }, {
            img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
            url: "http://qq.com",
            }, {
                img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
                url: "http://qq.com",
        }, {
            img: "sthttp://pic.7881.com/7881-2016/images/index/hezuo/tx.png",
            url: "http://qq.com",
            },],
        cententobj: [{
            title: "王者荣耀",
            img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
            ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
        },
        {
            title: "兔玩网",
            url: "http://www.tuwan.com/",
            }, {
                title: "兔玩网",
                url: "http://www.tuwan.com/",
        }, {
            title: "兔玩网",
            url: "http://www.tuwan.com/",
            }, {
                title: "兔玩网",
                url: "http://www.tuwan.com/",
        }, {
            title: "兔玩网",
            url: "http://www.tuwan.com/",
            }, {
                title: "兔玩网",
                url: "http://www.tuwan.com/",
        }, {
            title: "兔玩网",
            url: "http://www.tuwan.com/",
            }, {
                title: "兔玩网",
                url: "http://www.tuwan.com/",
        }, {
            title: "兔玩网",
            url: "http://www.tuwan.com/",
            }, {
                title: "兔玩网",
                url: "http://www.tuwan.com/",
            },],
    }

    var components = {
        name: "mgame-list",
        data() {
            return data;
        },
        template: html,
        created() {
        },
        methods: {
        }
    };
    return components;
});