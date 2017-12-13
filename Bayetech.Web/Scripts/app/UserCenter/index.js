var requireArr = ['vue', 'jquery', 'common','v-header', 'v-footer', 'v-nav', 'v-search', 'v-menu'];

//个人中心主模块
require(requireArr, function () {
    //api

    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];

    var components={};
    for (var i=2; i<arguments.length; i++){
        components[arguments[i].name]=arguments[i];
    }

    var data={
        menuData: {
            Title: "个人中心",
            Home: "#",
            List: [{
                Title: "我是买家",
                Items: [{ Id: 1, Title: "我要买" }, { Id: 1, Title: "我购买的订单" }, { Id: 1, Title: "我的代练订单" }, { Id: 1, Title: "我发布的代练需求" }, { Id: 1, Title: "买家代练订单" }],
            }]
            
        },
    }

    var vm = new Vue({
        el: '#app',
        data: data,
        components: components,
    });

});


