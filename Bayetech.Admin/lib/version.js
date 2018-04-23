function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//获取程序最新的版本号，后台修改此版本号即可实现页面版本自动刷新
appVersion = getQueryString('version');