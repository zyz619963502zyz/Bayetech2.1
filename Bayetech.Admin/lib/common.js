baseUrl = window.document.location.origin;

sendWebJson = function (url, type, param, fn) {
    $.ajax({
        url: url,
        type: type,
        data: param,
        //dataType: "json",
        //async: false,
        success: fn,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('调用出现问题，请检查访问其他网页是否正常，如果访问正常，请联系网站管理人员！错误代码：' + XMLHttpRequest.status);
        }
    });
}

getWeb = function (url, param, fn) {
    sendWebJson(url, 'get', param, fn);
};

postWeb = function (url, param, fn) {
    sendWebJson(url, 'post', param, fn);
};

putWeb = function (url, param, fn) {
    sendWebJson(url, 'put', param, fn);
};

deleteWeb = function (url, param, fn) {
    sendWebJson(url, 'delete', param, fn);
};

postWebJson = function (url, param, fn) {
    $.ajax({
        url: url,
        type: 'post',
        data: param,
        dataType: "json",
        //async: false,
        success: fn,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('调用出现问题，请检查访问其他网页是否正常，如果访问正常，请联系网站管理人员！错误代码：' + XMLHttpRequest.status);
        }
    });
};

reLogin = function() {
    alert('登录超时或未获授权的访问，请先登录！');
    parent.location.reload();
}