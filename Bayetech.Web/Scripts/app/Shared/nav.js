//首页导航
define([], function () {
    var html = `<ul class="nav nav-pills nav-justified" role="tablist">
                <li role="presentation" class="active"><a href="#home0" aria-controls="home" role="tab" data-toggle="tab">首页</a></li>
                <li role="presentation">
                    <h4></h4>
                    <a href="#home1" aria-controls="profile" role="tab" data-toggle="tab">金币交易</a>
                </li>
                <li role="presentation"><a href="#home2" aria-controls="messages" role="tab" data-toggle="tab">账号交易</a></li>
                <li role="presentation"><a href="#home3" aria-controls="settings" role="tab" data-toggle="tab">装备交易</a></li>
                <li role="presentation"><a href="#home4" aria-controls="settings" role="tab" data-toggle="tab">手游交易</a></li>
                <li role="presentation"><a href="#home5" aria-controls="settings" role="tab" data-toggle="tab">点卡交易</a></li>
                <li role="presentation"><a href="#home6" aria-controls="settings" role="tab" data-toggle="tab">游戏代练</a></li>
                <li role="presentation"><a href="#home7" aria-controls="settings" role="tab" data-toggle="tab">账号租赁</a></li>
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