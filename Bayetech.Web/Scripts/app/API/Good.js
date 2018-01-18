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
        $.get("/api/GoodType/GetGoodType", { gameId: gameId, name: name }, function (data) {
            fn(data);
        });
    };

    // 更改商品状态
    self.ChangeeStatus=function (goodNo, statusId, fn) {
        $.post("/api/GoodInfo/ChangeeStatus", { goodNo: goodNo, statusId: statusId }, function (data) {
            fn(data);
        });
    };
    return self;
})