//个人中心路由配置
define([
    'Scripts/app/UserCenter/Buyer/MyOrders',
    'Scripts/app/UserCenter/Home',
    'Scripts/app/UserCenter/Buyer/MyGetRoles',//我的收货角色
    //'Scripts/app/UserCenter/Buyer/MyDlOrder',
    'Scripts/app/UserCenter/Buyer/MyDlRequire',
    'Scripts/app/UserCenter/Buyer/BuyerDlOrder',
    'Scripts/app/UserCenter/Seller/ToSeller',
    'Scripts/app/UserCenter/Seller/OrdersManage',
    'Scripts/app/UserCenter/Seller/GoodsManage',
    'Scripts/app/UserCenter/Seller/DlPackage',
    'Scripts/app/UserCenter/Seller/MyAcceptDlRequire',
    'Scripts/app/UserCenter/AccountSetting/ChangePassword',
    'Scripts/app/UserCenter/AccountSetting/MyPaymentPassword',
    'Scripts/app/UserCenter/AccountSetting/PhoneBinding',
    'Scripts/app/UserCenter/AccountSetting/Certification',
    'Scripts/app/UserCenter/AccountSetting/ValidateLogin',], function () {
        var routes=[{ path: '/', redirect: '/Home' }];
    routes.push({
        path: "/MyOrders/:id",
        name: "MyOrders",
        component: arguments[0],
    })
    for (var i=1; i<arguments.length; i++) {
        routes.push({
            path: `/${arguments[i].name}`,
            name: arguments[i].name,
            component: arguments[i],
        });
    }

    return { routes: routes };
});