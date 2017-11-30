//首页导航
define(['nav-dropdown'], function (navdropdown) {
    var html = `<div class="index-nav-box">
    <div class="index-nav">
        <div class="index-nav-item dy-nav">
            <template v-for="item in object">
               <a v-if="item.type == 'link'" :href="item.url" class="nav-all">{{item.title}}</a>
               <a v-else href="#" class="dropdown-act" @mouseover="showdropdown(item.title)" >{{item.title}}</a>
            </template>         
        </div>
        <nav-dropdown :object="dropdownObj"  v-show="isShow" v-on:mouseleave.native="hidedropdown()"></nav-dropdown>
    </div>
</div>`;

    var data = {
        object: [{
            title: "网络游戏",
            type: "link",
            url: "http://www.7881.com/gamelistshow.html",
        }, {
                title: "游戏币",
            type: "link",
            url: "http://www.7881.com/gamelistshow.html",
            }, {
                title: "代练",
                type: "dropdown",
                url: "",
        }, {
                title: "收货网",
                type: "dropdown",
            url: "",
            }, {
                title: "充值",
                type: "link",
                url: "http://www.7881.com/gamelistshow.html",
        }, {
                title: "积分商城",
            type: "link",
            url: "http://www.7881.com/gamelistshow.html",
            }, {
                title: "手机游戏",
                type: "link",
                url: "http://www.7881.com/gamelistshow.html",
        }, {
                title: "手游商城",
            type: "link",
            url: "http://www.7881.com/gamelistshow.html",
            }, {
                title: "手游充值",
                type: "link",
                url: "http://www.7881.com/gamelistshow.html",
        }, {
                title: "王者荣耀专区",
            type: "link",
            url: "http://www.7881.com/gamelistshow.html",
            },],
        isShow: false,
        dropdownObj: [{
            title: "英雄联盟",
            url: "http://dl.7881.com",
            img:"http://pic.7881.com/7881-2016/images/index/dl-yxlm-li2.png",
            fn: [{ title: "我要找代练", url:"http://dl.7881.com",}],
        }, {
            title: "英雄联盟",
            url: "http://dl.7881.com",
            img: "http://pic.7881.com/7881-2016/images/index/dl-yxlm-li2.png",
            fn: [{ title: "我要找代练", url: "http://dl.7881.com", }],
            }, {
                title: "英雄联盟",
                url: "http://dl.7881.com",
                img: "http://pic.7881.com/7881-2016/images/index/dl-yxlm-li2.png",
                fn: [{ title: "我要找代练", url: "http://dl.7881.com", }],
            },],
    }

    var components = {
        name: "index-nav",
        data() {
            return data;
        },
        template: html,
        created() {

        },
        components: { "nav-dropdown": navdropdown},
        methods: {
            showdropdown(id) {
                this.isShow = true;
            },
            hidedropdown() {
                this.isShow = false;
            },
        }
    };
    return components;
});