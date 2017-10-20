//轮播图
define([], function () {
    var html = `<div class="slideBox">
        <div class="bd">
            <ul>
                <li><a :href="imgObj.url" target="_blank"><img :src="imgObj.image" width="680" height="328" :alt="imgObj.title" /></a></li>
            </ul>
        </div>
        <div class="txtBg"></div>
        <div class="hd">
            <ul>
                <li v-for="item in object" :title="item.title" @click="selectImg(item)"><p>{{item.title}}</p><h5><em></em></h5></li>
            </ul>
        </div>
    </div>`;

    //class="on" "
    var data = {
        object: [{
            title: "《冒险岛2》全类目免手续费",
            url: "http://www.7881.com/b2b/buy-G10.html",
            image: "http://pic.7881.com/7881-2016/images/index/lb/258.jpg"
        }, {
            title: "八折代充王者荣耀",
            url: "http://search.7881.com/201612376074038.html",
            image: "http://pic.7881.com/7881-2016/images/index/lb/286.jpg"
            }, {
            title: "假期已完 福利不断",
            url: "http://search.7881.com/list.html?gameId=A2807&gtid=100131&groupId=&serverId=",
            image: "http://pic.7881.com/7881-2016/images/index/lb/282.jpg"
        }, 
        ],
        imgObj:{},
    }

    var components = {
        name: "slideBox",
        data() {
            return data;
        },
        template: html,
        created() {
            this.selectImg(this.object[0]);
        },
        methods: {
            selectImg(obj) {
                this.imgObj = obj;
            },
        }
    };
    return components;
});