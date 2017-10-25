//手机列表
define([], function () {
    var html = `<div class="mgame-list">
    <div class="mgame-item" v-for="item in object">
        <img :src="item.img" width="100" height="100">
        <h3 class="mgame-name">{{item.title}}</h3>
        <h3 class="mgame-btn"><a :href="item.ios" target="_blank" class="apple-btn">苹果版</a><a :href="item.android" target="_blank" class="android-btn">安卓版</a></h3>
    </div>
</div>`;

    var data = {
        object: [{
            title: "王者荣耀",
            img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
            ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            android:"http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
        },
            {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
            }, {
                title: "王者荣耀",
                img: "sthttp://pic.7881.com/7881/market/images/game_logo/A2775.png",
                ios: "http://shouyou.7881.com/wzry-ios-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
                android: "http://shouyou.7881.com/wzry-android-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html",
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