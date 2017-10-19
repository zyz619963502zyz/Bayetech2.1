//模块之间的操作
var Signmoudule = ['vue', 'jquery', 'SignLeftModule', 'SignRightModule']
require(Signmoudule, function (Vue,$,left,right) {
    //数据为左右整合数据
    var data = {
        //注册左边
        Leftobject: {
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

    //注册主键到标签
    Vue.component('regboxleft', left);
    Vue.component('regboxright', right);

    var vm = new Vue({
        el: '#LoginDiv',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});