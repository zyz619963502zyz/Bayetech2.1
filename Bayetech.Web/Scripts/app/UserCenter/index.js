var requireArr=['vue', 'jquery', 'common', 'VueRouter', 'v-header', 'v-footer', 'v-nav', 'v-search', 'v-menu',
    '../Scripts/app/UserCenter/Buyer/ToBuy',
    '../Scripts/app/UserCenter/Buyer/MyOrders',
    '../Scripts/app/UserCenter/Buyer/MyDlOrder',
    '../Scripts/app/UserCenter/Buyer/MyDlRequire',
    '../Scripts/app/UserCenter/Buyer/BuyerDlOrder',



];

//个人中心主模块
require(requireArr, function () {
    //api
    debugger;
    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];
    var VueRouter=arguments[3];
    var ToBuy=arguments[9];
    var components={};
    for (var i=3; i<arguments.length; i++){
        components[arguments[i].name]=arguments[i];
    }

    var data={
        menuData: {
            Title: "个人中心",
            Home: "#",
            List: [{
                Title: "我是买家",
                Items: [{ Id: 0, Title: "我要买", Path: "/ToBuy" },
                    { Id: 0, Title: "我购买的订单", Path: "/MyDlOrder" },
                    { Id: 0, Title: "我的代练订单", Path: "/BuyerDlOrder" },
                    { Id: 0, Title: "我发布的代练需求", Path: "/MyDlRequire" },
                    { Id: 0, Title: "买家代练订单", Path: "/BuyerDlOrder" }],
            }, {
                Title: "我是卖家",
                Items: [{ Id: 0, Title: "我要卖", Path: "/About" },
                    { Id: 0, Title: "我的订单管理", Path: "/Home" },
                    { Id: 0, Title: "出售中的商品", Path: "/About" },//合并成商品管理
                    { Id: 0, Title: "仓库中的商品", Path: "/About" },//合并成商品管理
                    //{ Id: 0, Title: "我的出货订单", Path: "/About" },合并到订单管理
                    { Id: 0, Title: "我发布的代练套餐", Path: "/About" },
                    { Id: 0, Title: "我接的代练需求", Path: "/About" },
                ],

            }, {
                Title: "账号设置",
                Items: [{ Id: 0, Title: "修改登录密码", Path: "/About" },
                    { Id: 0, Title: "我的支付密码", Path: "/Home" },
                    { Id: 0, Title: "手机绑定", Path: "/About" },
                    { Id: 0, Title: "实名认证", Path: "/About" },
                    { Id: 0, Title: "登录验证", Path: "/About" }],
            }]
            
        },
    }
    var Home=Vue.extend({
        template: '<p>#HomeMoudle</P>',
    })

    var About=Vue.extend({
        template: '<p>#AboutMoudle</p>'
    })

    Vue.use(VueRouter)
    /* 创建路由器  */
    var router=new VueRouter({
        routes: [
            { 
                path: '/Home',
                component: Home,
            },
            { 
                path: '/About',
                component: About
            },
            {
                path: '/ToBuy',
                component: ToBuy
            },
        ]
    });


    var vm = new Vue({
        el: '#app',
        data: data,
        router:router,
        components: components,
    });

});


