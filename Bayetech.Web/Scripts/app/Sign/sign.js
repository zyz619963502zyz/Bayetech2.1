//注册模板
define("SignModule", jsconfig.baseArr, function (Vue, $, common) {
    //Api
    var _url = "/api/Query/Start";

    //数据为左右整合数据
    var data = {
        //注册左边
        Leftobject: {
            Iphone: 18717708873,
            GamePass: 123456
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
    Vue.component('regboxright', {
        props: ['value'],
        template: '#RegBoxRight'
    });

    //左边模板
    Vue.component('regboxleft', {//全局注册
        props: ['value'],
        template: '#RegBoxLeft',
        components: {
            'child-regboxleft': {
                props: ['value'],
                template: '#LoginMain'
            }
        }
    });

    new Vue({
        el: '#LoginDiv',
        data: function () {
            return data;
        }
        ,created: function () {
            common.getWebJson(_url, null, function () {

            });
        },
        methods: {

        }
    });
});