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

postWebJson = function (url, data, successfn, errorfn, asyncC, callLoading) {
        //data = (data == null || data == "" || typeof (data) == "undefined") ? { "date": new Date().getTime() } : data;
        if (typeof (asyncC) != "undefined" && typeof (asyncC) != "boolean") {
            $("#Loading").addClass("hide");
            GetAlert("同异步参数没传");
        }
        $.ajax({
            type: "post",
            data: data,
            url: url + "?time=" + new Date().getTime(),
            dataType: "json",
            global: false,
            async: typeof (asyncC) == "undefined" || null == asyncC ? true : false,
            success: function (d) {
                successfn(d);
            },
            error: function (e) {
                //e={"readyState":0,"status":0,"statusText":"error"}
                //e={"readyState":4,"status":506,"statusText":"SessionTimeout"}
                if (e.status === 506) {
                    GetAlert("登录超时！");
                    setTimeout("window.location ='" + window.appCtx['aist-sso-web'] + "/login?service=" + window.appCtx['ctm-web'] + "'", 2000);
                } else {
                    errorfn("status:" + e.status + "-" + e.statusText);
                }
            }
        });
    };

reLogin = function() {
    alert('登录超时或未获授权的访问，请先登录！');
    parent.location.reload();
}