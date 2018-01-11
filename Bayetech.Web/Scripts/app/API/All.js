//获取游戏信息
define(['Scripts/app/API/Game',
    'Scripts/app/API/Setting',
], function () {
    var self={};
    for (var i=0; i<arguments.length; i++) {
        self[arguments[i].Name]=arguments[i];
    }
    return self;
})