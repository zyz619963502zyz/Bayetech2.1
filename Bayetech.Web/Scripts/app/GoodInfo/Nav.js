//注册模块
define(jsconfig.baseArr, function (Vue,$,common) {
    var navHtml = `<div class="com-breadcrumb"  template="OrderNav">
                        <ul class ="clearfix">
                            <li v-for="item in object"><a :href="item.href">{{item.title}}</a><em>&gt;</em></li>
                        </ul>
                   </div>`
    var data = {
        object: [{
            title: "首页",
            href: "http://www.7881.com/"
        }]
    };

    var navComponent = {//全局注册
        template: navHtml,
        data() {
            return data;
        },
        created() {
            var self = this;
            self.$parent.$on('GoodInfoHere', function (data) {//接收事件
                if (data.content.HistoryAccount >= 0) {
                    var _Game = {title: "账号",href:"#"}
                    var _GameType = { title: data.content.GameName, href: "#" };
                    var _GroupName = { title: data.content.GroupName, href: "#" };
                    var _ServerName = { title: data.content.ServerName, href: "#" };
                    self.object.push(_Game);
                    self.object.push(_GameType);
                    self.object.push(_GroupName);
                    self.object.push(_ServerName);
                }
            });
        },
        methods: {
            //GetNavBar: function () {
            //    common.getWebJson(_CheckAccountUrl, { accountName: this.$props.value.Iphone }, function (data) {
            //        if (data == false) {
            //            this.data = data;
            //        }
            //    });
            //}
        }
    }

    return navComponent;
})
