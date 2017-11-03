//生活便利
define(['common'], function (common) {
    var html = `<div class="convenience">
    <ul class="clearfix">
        <li v-for="item in object">
           <a :href="item.url" target="_blank">
              <em class="iconfont">&#xe635;</em><p>{{item.name}}</p>
           </a>
        </li>
    </ul>
 </div>`;

    var data = {
        object: [{
            url: "http://www.7881.com/b2b/buy-G10.html",
            name: "DNF游戏币"
        },{
            url: "http://www.7881.com/rechargecenter/toRechargeDK.action",
            name: "充点卡"
            }, {
                url: "http://www.7881.com/b2b/buy-G10.html",
                name: "手游充值"
        }, {
            url: "http://www.7881.com/b2b/buy-G10.html",
            name: "充话费"
            }, {
                url: "http://www.7881.com/b2b/buy-G10.html",
                name: "QQ充值"
        }, {
            url: "http://www.7881.com/b2b/buy-G10.html",
            name: "APP充值"
        },
        ],
    }

    var components = {
        name: "index-convenience",
        data() {
            return data;
        },
        template: html,
        methods: {
        }
    };
    return components;
});


