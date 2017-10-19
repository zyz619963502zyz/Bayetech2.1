//注册模板
define("SignRightModule", jsconfig.baseArr, function (Vue, $, common) {
    //右侧模板
    var rigthHtml = ` <div class="regBoxRight l" id="RegBoxRight">
            <h2>已有账号？</h2>
            <a href="#" class ="rightLogBtn">立即登录</a>
            <h3>使用第三方账号登录</h3>
            <ul class="rightOtherLogBox">
                <li v-for="item in value"><a v-bind:href="item.url" class="clearfix"><i class="iconfont"></i><span>{{item.text}}</span></a></li>
            </ul>
        </div>`

    //数据为左右整合数据
    var data = {
        //注册左边
        Leftobject:{
            Iphone: "",
            GamePass: "",
            GamePassAgain: ""
        },
        //注册右边
        Rightobject: [
            { text: '360登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: '支付宝登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: 'QQ登录', url: 'http://www.7881.com/connect/qh360New/login' },
            { text: 'YY登录', url: 'http://www.7881.com/connect/qh360New/login' }
        ]
    }

    //右边模板
    var rigthComponent = {
        props: ['value'],
        template: rigthHtml 
    };


    return rigthComponent;
});