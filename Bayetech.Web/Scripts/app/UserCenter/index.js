var UserCenterRequireArr=['vue', 'jquery', 'common', 'VueRouter', '../Scripts/app/UserCenter/router', 'v-header', 'v-footer', 'v-nav', 'v-search', 'v-menu', 'nav-top'
    , 'Scripts/app/UserCenter/Seller/ToSeller'
];

//个人中心主模块
require(UserCenterRequireArr, function () {
    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];
    var VueRouter=arguments[3];
    var routes=arguments[4];
    var components={};
    for (var i=4; i<arguments.length; i++){
        components[arguments[i].name]=arguments[i];
    }
    var data={
        menuData: {
            Title: "个人中心",
            List: [{
                Title: "我是买家",
                Items: [{ Id: 0, Title: "我要买", Path: "../Game/List.html", Type: "url" },
                    { Id: "MyOrders", Title: "我购买的订单", Path: "/MyOrders", Params: {flag:"All"}},
                    { Id: "MyDlRequire", Title: "我要代练", Path: "/MyDlRequire", Params: { flag: "DL" } },//BuyerDlOrder代练订单和购买订单类似。
                    { Id: 0, Title: "我的代练订单", Path: "/MyDlOrder" }],
            }, {
                Title: "我是卖家",
                Items: [{ Id: 0, Title: "我要卖", Path: "../Good/Publish.html", Type: "url" },
                    { Id: 0, Title: "我的订单管理", Path: "/MyOrders", Params: {flag:"Sales"} },
                    { Id: 0, Title: "我的商品管理", Path: "/GoodManage" },//合并成商品管理
                    { Id: 0, Title: "我发布的代练", Path: "/DlPackage" },
                ],

            }, {
                Title: "账号设置",
                Items: [{ Id: 0, Title: "修改登录密码", Path: "/ChangePassword" },
                    { Id: 0, Title: "我的支付密码", Path: "/MyPaymentPassword" },
                    { Id: 0, Title: "手机绑定", Path: "/PhoneBinding" },
                    { Id: 0, Title: "实名认证", Path: "/Certification" },
                    { Id: 0, Title: "登录验证", Path: "/ValidateLogin" }],
            }]  
        },
    } 

    Vue.use(VueRouter)
    /* 创建路由器  */
    var router=new VueRouter(routes);

    var vm = new Vue({
        el: '#app',
        data: data,
        router: router,
        components: components,
    });

});


