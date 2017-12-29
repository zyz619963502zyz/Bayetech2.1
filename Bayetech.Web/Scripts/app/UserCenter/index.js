var UserCenterRequireArr=['vue', 'jquery', 'common', 'VueRouter', '../Scripts/app/UserCenter/router', 'v-header', 'v-footer', 'v-nav', 'v-search', 'v-menu', 'nav-top'
    , 'Scripts/app/UserCenter/Seller/ToSeller'
];

//个人中心主模块
require(UserCenterRequireArr, function () {
    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];
    var VueRouter=arguments[3];
    var router=arguments[4];
    var components={};
    for (var i=4; i<arguments.length; i++){
        components[arguments[i].name]=arguments[i];
    }
    var a1 = arguments[11];
    var data={
        menuData: {
            Title: "个人中心",
            List: [{
                Title: "我是买家",
                Items: [{ Id: 0, Title: "我要买", Url: "../Game/List.html", Type: "url" },
                    { Id: "MyOrders", Title: "我购买的订单", Name: "MyOrders" },
                    { Id: "MyDlOrders", Title: "我的代练订单", Name: "MyOrders" },//BuyerDlOrder代练订单和购买订单类似。
                    { Id: 0, Title: "我发布的代练需求", Name: "MyDlRequire" },
                    { Id: 0, Title: "买家代练订单", Name: "BuyerDlOrder" }],
            }, {
                Title: "我是卖家",
                Items: [{ Id: 0, Title: "我要卖", Name: "ToSeller" },
                    { Id: 0, Title: "我的订单管理", Name: "OrdersManage" },
                    { Id: 0, Title: "出售中的商品", Name: "GoodsManage" },//合并成商品管理
                    { Id: 0, Title: "仓库中的商品", Name: "GoodsManage" },//合并成商品管理
                    //{ Id: 0, Title: "我的出货订单", Name: "About" },合并到订单管理
                    { Id: 0, Title: "我发布的代练套餐", Name: "DlPackage" },
                    { Id: 0, Title: "我接的代练需求", Name: "MyAcceptDlRequire" },
                ],

            }, {
                Title: "账号设置",
                Items: [{ Id: 0, Title: "修改登录密码", Name: "ChangePassword" },
                    { Id: 0, Title: "我的支付密码", Name: "MyPaymentPassword" },
                    { Id: 0, Title: "手机绑定", Name: "PhoneBinding" },
                    { Id: 0, Title: "实名认证", Name: "Certification" },
                    { Id: 0, Title: "登录验证", Name: "ValidateLogin" }],
            }]
            
        },
    } 

    Vue.use(VueRouter)
    /* 创建路由器  */
    var router=new VueRouter(router);

    var vm = new Vue({
        el: '#app',
        data: data,
        router: router,
        //watch: {
        //    '$route' (to, from) {
        //        debugger;
        //    },
        //},
        components: components,
    });

});


