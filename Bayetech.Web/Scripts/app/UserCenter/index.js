requireManage.addModule('v-header, v-footer, v-nav, v-search, v-menu');

//个人中心主模块
require(requireManage.requireArr, function () {
    //api
    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];

    var components = {};
    for (var value in requireManage.moduleArr) {
        components[value.name]=value;
    }

    var data={
        menuData: {
            "我是买家": {
                "我要买": {},
                "我购买的订单": {},
                "我的代练订单": {},
                "我发布的代练需求": {},
                "买家代练订单": {},
            }
        },
    }

    var vm = new Vue({
        el: '#app',
        data: {},
        components: components,
    });

});


