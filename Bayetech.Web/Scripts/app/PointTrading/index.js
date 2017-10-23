//模块之间的操作
var PointTradingModule = ['vue', 'jquery', 'ScreenModel', 'PointTradingModel']
//alert(1);
require(PointTradingModule, function (Vue, $, mediacy, tabuiation) {
    //筛选和列表整合数据
    var data = {
        //注册筛选
        Screenobject: {

        },
        //注册列表
        PointTradingobiect: [
            { aurl: 'http://search.7881.com/201612376079625.html', imgurl: 'https://s3.cn-north-1.amazonaws.com.cn/userimg2.7881.com/2017/10/17/201612376079625/ZT2S-SZ0302.jpg', text: '【 霸王 唐 男 200级 带孩子出售】高功 高防 高血 高站', money: '9888.00' },
            { aurl: 'http://search.7881.com/201612376079625.html', imgurl: 'https://s3.cn-north-1.amazonaws.com.cn/userimg2.7881.com/2017/10/17/201612376079625/ZT2S-SZ0302.jpg', text: '【 霸王 唐 男 200级 带孩子出售】高功 高防 高血 高站', money: '8888.00' },
            { aurl: 'http://search.7881.com/201612376079625.html', imgurl: 'https://s3.cn-north-1.amazonaws.com.cn/userimg2.7881.com/2017/10/17/201612376079625/ZT2S-SZ0302.jpg', text: '【 霸王 唐 男 200级 带孩子出售】高功 高防 高血 高站', money: '9788.00' },
            { aurl: 'http://search.7881.com/201612376079625.html', imgurl: 'https://s3.cn-north-1.amazonaws.com.cn/userimg2.7881.com/2017/10/17/201612376079625/ZT2S-SZ0302.jpg', text: '【 霸王 唐 男 200级 带孩子出售】高功 高防 高血 高站', money: '1888.00' }
        ]
    }

    //注册主键到标签
    Vue.component('regboxtop', mediacy);
    Vue.component('regboxmiddle', tabuiation);

    var vm = new Vue({
        el: '#PointDiv',
        data: function () {
            return data;
        },
        created: function () {

        }
    });
});

//{{props.urltext}}