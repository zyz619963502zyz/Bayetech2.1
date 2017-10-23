//热门游戏列表
define([], function () {
    var html = `<div class="hot-game-list">
    <div class="tab-top">
        <ul class="clearfix">
            <li v-for="value in type" @click="selectType(value.id)" >{{value.name}}<em></em></li>
        </ul>
    </div>
    <div class="tab-bottom">
        <div class="tab-item" for>
            <div class="hot-games dy-hot-games" click>
                <dl v-for="value in object">
                    <dt>
                        <a :href="value.url" target="_blank">
                            <img :src="value.image" width="90" height="60" :alt="value.url" />
                        </a>
                    </dt>
                    <dd>
                        <h2>
                        <a :href="value.url" target="_blank">{{value.name}}</a>
                        </h2>
                        <p>
                            <a v-for="fuc in object.function" :href="fuc.url" target="_blank">fuc.name</a>
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</div>`;

    var data = {
        type: [{ id: 1, name: "热门网游" }, { id: 2, name: "热门手游" }],
        object: [],
        object1: [{
            url: "http://search.7881.com/list.html?gameId=G10",
            image:"http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "DNF地下城与勇士",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name:"金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
                }, {
                    url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                    name: "点券",
                },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "征途2S",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
            },{
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "冒险岛2 ",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        },{
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "剑侠情缘3",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        },{
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "蜀门",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        },{
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "DNF地下城与勇士",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        },],
        object2: [{
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "王者荣耀",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "阴阳师",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "崩滑3 ",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "球球大作战",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "炉石传说",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, {
            url: "http://search.7881.com/list.html?gameId=G10",
            image: "http://pic.7881.com/7881-2016/images/index/dy_logo/dnf.png",
            name: "命运冠位指定",
            function: [{
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "金币",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "账号",
            }, {
                url: "http://search.7881.com/list.html?gameId=G10&gtid=100001",
                name: "点券",
            },]
        }, ],
    }

    var components = {
        name: "hotgamelist",
        data() {
            return data;
        },
        created() {
            this.selectType(1);
        },
        template: html,
        methods: {
            selectType(id) {
                this.object = id === 1 ? this.object1 : this.object2;
            }
        }
    };
    return components;
});