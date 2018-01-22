//获取游戏信息
define(['jquery', 'common'], function () {
    var self={};
    self.Name="Game";
    // 获取游戏列表
    self.GetGameList=function (type, name, fn) {
        name=name||"";
        $.get("/api/Game/GetGameList", { type: type, name: name }, function (data) {
            fn(data);
        });
    };
    // 根据字母获取游戏列表（不传letter取所有游戏）
    self.GetGameListByLetter=function (type, letter,fn) {
        letter=letter||"";
        $.get("/api/Game/GetGameListByHotAndLetter", { type: type, str: letter }, function (data) {
            fn(data);
        });
    };
    // 获取游戏区服列表
    self.GetGroupList=function (gameId, name, fn) {
        name=name||"";
        $.get("/api/GameServer/GetGroup", { gameId: gameId, name: name }, function (data) {
            fn(data);
        });
    };
    // 获取游戏服务器列表
    self.GetServerList=function (groupId, name, fn) {
        name=name||"";
        $.get("/api/GameServer/GetServer", { parenId: groupId, name: name }, function (data) {
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
    //获取父级类型
    self.GetParentType=function (type) {
        var obj={
            Game: "GameType",
            Group: "Game",
            Server: "Group",
            GoodType: "Game",
        };
        return obj[type];
    };

    //获取游戏额外属性输入框
    self.GetGameExtPropsInput=function (gameId, fn) {
        $.get("/api/Game/GetGameExtPropsInput", { gameId: gameId}, function (data) {
            fn(data);
        });
    }
    return self;
})