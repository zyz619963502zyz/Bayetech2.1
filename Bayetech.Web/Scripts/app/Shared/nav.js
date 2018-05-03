//首页导航
define([], function () {
    var html = `<div class="nav-box"><ul class="nav nav-pills nav-justified" role="tablist">
                <li class="active"><a href="#home0">首页</a></li>
                <li><a href="../../Game/List.html" target="_blank">金币交易</a></li>
                <li><a href="../../Game/List.html" target="_blank">账号交易</a></li>
                <li><a href="../../Game/List.html" target="_blank">装备交易</a></li>
                <li><a href="#">游戏代练</a></li>
            </ul></div>`;

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