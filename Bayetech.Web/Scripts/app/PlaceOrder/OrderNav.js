//注册模块
define("OrderNav", jsconfig.baseArr, function (Vue,$,common) {
    var navHtml = `<div class="com-breadcrumb"  template="OrderNav">
                        <ul class ="clearfix">
                            <li v-for="item in object"><a :href="item.href">{{item.title}}</a><em>&gt;</em></li>
                        </ul>
                   </div>`
    var data = {
        object: [{
            title: "首页",
            href: "http://www.7881.com/"
        }, {
            title: "地下城与勇士",
            href: "http://search.7881.com/list.html?gameId=G10"
        }, {
            title: "账号",
            href: "http://search.7881.com/list.html?gameId=G10&amp;gtid=100003&amp;mobileGameType="
        }, {
            title: "浙江区",
            href: "http://search.7881.com/list.html?gameId=G10&amp;gtid=100003&amp;groupId=G10P008&amp;carrierId=&amp;mobileGameType="
        }, {
            title: "浙江4/5区",
            href: "http://search.7881.com/list.html?gameId=G10&amp;gtid=100003&amp;groupId=G10P008&amp;serverId=G10P008004&amp;carrierId=&amp;mobileGameType="
        }]
    };

    var navComponent = {//全局注册
        template: navHtml,
        data() {
            return data;
        },
        created() {
            //this.GetNavBar();
        },
        methods: {
            GetNavBar: function () {
                common.getWebJson(_CheckAccountUrl, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data;
                    }
                });
            }
        }
    }

    return navComponent;
})
