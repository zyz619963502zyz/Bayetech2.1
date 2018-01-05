//获取游戏信息
define(['jquery', 'common'], function () {
    var Game={};
    // 获取游戏列表
    Game.GetGameList=function (type, name, fn) {
        name=name||"";
        $.get("/api/Game/GetGameList", { type: type, name: name }, function (data) {
            fn(data);
        });
    };
    // 获取游戏区服列表
    Game.GetGroupList=function (gameId, name, fn) {
        name=name||"";
        $.get("/api/GameServer/GetGroup", { gameId: gameId, name: name }, function (data) {
            fn(data);
        });
    };
    // 获取游戏服务器列表
    Game.GetServerList=function (groupId, name, fn) {
        name=name||"";
        $.get("/api/GameServer/GetServer", { parenId: groupId, name: name }, function (data) {
            fn(data);
        });
    };
    // 获取商品交易类型列表
    Game.GetGoodTypeList=function (gameId, name, fn) {
        name=name||"";
        $.get("/api/GoodType/GetGoodType", { gameId: gameId, name: name }, function (data) {
            fn(data);
        });
    };
    //获取父级类型
    Game.GetParentType=function (type) {
        var obj={
            Game:"",
            Group: "Game",
            Server: "Group",
            GoodType: "Game",
        };
        return obj[type];
    };
    return Game;
})