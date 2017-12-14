//个人中心路由配置
define(['Scripts/app/UserCenter/Home',
    'Scripts/app/UserCenter/Buyer/ToBuy',
    'Scripts/app/UserCenter/Buyer/MyOrders',
    'Scripts/app/UserCenter/Buyer/MyDlOrder',
    'Scripts/app/UserCenter/Buyer/MyDlRequire',
    'Scripts/app/UserCenter/Buyer/BuyerDlOrder',
    'Scripts/app/UserCenter/Seller/ToSeller',
    'Scripts/app/UserCenter/Seller/OrdersManage',
    'Scripts/app/UserCenter/Seller/GoodsManage',
    'Scripts/app/UserCenter/Seller/DlPackage',
    'Scripts/app/UserCenter/Seller/MyAcceptDlRequire',
    'Scripts/app/UserCenter/AccountSettings/ChangePassword',
    'Scripts/app/UserCenter/AccountSettings/MyPaymentPassword',
    'Scripts/app/UserCenter/AccountSettings/PhoneBinding',
    'Scripts/app/UserCenter/AccountSettings/Certification',
    'Scripts/app/UserCenter/AccountSettings/ValidateLogin',], function () {
    var routes=[];
    for (var i=0; i<arguments.length; i++) {
        routes.push({
            path: '/'+arguments[i].name,
            component: arguments[i]
        })
    }

    return { routes: routes };
});