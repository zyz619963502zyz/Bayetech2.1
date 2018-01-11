//获取配置信息
define(['jquery', 'common'], function () {
    var self={};
    self.Name="Setting";
    // 根据父级获取配置列表
    self.GetListByParentId=function (pid, fn) {
        name=name||"";
        $.get("/api/Setting/GetListByParentId", { pid: pid}, function (data) {
            fn(data);
        });
    };
    // 根据类型获取配置列表
    self.GetListByType=function (type, fn) {
        $.get("/api/Setting/GetListByType", { type: type }, function (data) {
            fn(data);
        });
    };
    return self;
})