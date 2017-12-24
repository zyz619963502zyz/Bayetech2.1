//首页导航
define([], function () {
    var html = `<ul class="nav nav-pills nav-justified" role="tablist">
                <li class="active"><a href="#home0">首页</a></li>
                <li><a href="#home1">金币交易</a></li>
                <li><a href="#home2">账号交易</a></li>
                <li><a href="#home3">装备交易</a></li>
                <li><a href="#home4">手游交易</a></li>
                <li><a href="#home5">点卡交易</a></li>
                <li><a href="#home6">游戏代练</a></li>
                <li><a href="#home7">账号租赁</a></li>
            </ul>`;

    var data = {
        object: [{
            title: "账号交易",
            url: "http://www.7881.com/gamelistshow.html",
        }, ],
    }

    var components = {
        name: "v-nav",
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