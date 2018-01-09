//获取配置信息
define(['jquery', 'common'], function () {
    var self={};
    // 根据父级获取配置列表
    self.GetListByParentId=function (pid) {
        name=name||"";
        $.get("/api/Setting/GetListByParentId", { type: type, name: name }, function (data) {
            fn(data);
        });
    };
    // 根据类型获取配置列表
    self.GetListByType=function (type, letter, fn) {
        letter=letter||"";
        $.get("/api/Setting/GetListByType", { type: type, str: letter }, function (data) {
            fn(data);
        });
    };
    return self;
})