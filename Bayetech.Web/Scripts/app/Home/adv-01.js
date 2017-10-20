//广告位1
define([], function () {
    var html = `<div class="adv-01">
        <div class="adv-01-box">
            <a v-for="item in object" :href="item.url"><img :src="item.image" width="336" height="140" :alt="item.name" /></a>
        </div>
    </div>`;

    //class="on" "
    var data = {
        object: [{
            url: "http://www.7881.com/dnf_chuhuo.html",
            image: "http://pic.7881.com/7881-2016/images/index/2-5.jpg",
            name: "现在出售"
        }, {
            url: "http://shouyou.7881.com/yxzt-wzry.html",
            image: "http://pic.7881.com/7881-2016/images/shouyou-index/2-1.jpg",
            name: "现在充值"
        }
        ],
    }

    var components = {
        name: "adv-01",
        data() {
            return data;
        },
        template: html,
        methods: {
        }
    };
    return components;
});