//获取商品信息
define(['jquery', 'common'], function () {
    var self={};
    self.Name="Good";
   
    //获取商品列表
    self.GetList=function (param, fn) {
        $.post("/api/GoodInfo/GetList", param, function (data) {
            fn(data);
        });
    };

    // 获取商品交易类型列表
    self.GetGoodTypeList=function (gameId, name, fn) {
        name=name||"";
        $.get("/api/GoodType/GetGoodType", { gameId: gameId,type:1, name: name }, function (data) {
            fn(data);
        });
    };

    //添加商品
    self.AddGood=function (param, fn) {
        name=name||"";
        $.get("/api/GoodInfo/AddGood", param, function (data) {
            fn(data);
        });
    };

    // 更改商品状态
    self.ChangeeStatus=function (goodNo, statusId, fn) {
        $.post("/api/GoodInfo/ChangeStatus", { goodNo: goodNo, statusId: statusId }, function (data) {
            fn(data);
        });
    };

    // 更改商品价格
    self.ChangePrice=function (goodNo, price, fn) {
        $.post("/api/GoodInfo/ChangePrice", { goodNo: goodNo, price: price }, function (data) {
            fn(data);
        });
    };
    return self;
})