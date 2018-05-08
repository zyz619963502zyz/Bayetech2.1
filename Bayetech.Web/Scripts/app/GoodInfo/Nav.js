//注册模块
define(jsconfig.baseArr, function (Vue,$,common) {
    var navHtml = `<div class="com-breadcrumb"  template="OrderNav">
                        <ul class ="clearfix">
                            <li v-for="item in object"><a :href="item.href" target="_blank" @click="TurnToList(item.type)" >{{item.title}}</a><em>&gt;</em></li>
                        </ul>
                   </div>`
    var data={
        Param:eval('('+localStorage.SearchParam+')'),
        object: [{
            title: "首页",
            href: "../../Home/NewIndex.html"
        }]
    };

    var navComponent = {//全局注册
        template: navHtml,
        data() {
            return data;
        },
        created() {
            var self = this;
            self.$root.$on('GoodInfoHere', function (data) {//接收事件
                if (data.content.HistoryAccount >= 0) {
                    var _Game = {title: "账号",href:"#"}
                    var _GameType  = { title: data.content.GameName, href:encodeURI(`${common.GetBaseUrl()}Good/GoodList.html`),type:"GameType"};
                    var _GroupName = { title: data.content.GroupName, href:encodeURI(`${common.GetBaseUrl()}Good/GoodList.html`),type:"GroupName" };
                    var _ServerName = { title: data.content.ServerName, href:encodeURI(`${common.GetBaseUrl()}Good/GoodList.html`),type:"ServerName" };
                    self.object.push(_Game);
                    self.object.push(_GameType);
                    self.object.push(_GroupName);
                    self.object.push(_ServerName);
                }
            });
        },
        methods: {
            TurnToList(type) {//重置查询条件
                var self = this;
                if (type="GameType"){
                    self.Param.GroupName="";
                    self.Param.ServerName="";
                }else if(type="GroupName"){
                   self.Param.ServerName = "";
                }
                localStorage.SearchParam=JSON.stringify(self.Param);
            }
        }
    }

    return navComponent;
})
