
var comCompnent = {
    /**
        * ajax封装
        * url 发送请求的地址
        * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
        * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
        * successfn 成功回调函数
        * errorfn 失败回调函数
        * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    getWebJson : function (url, data, successfn, errorfn, asyncC, callLoading) {
        if (!callLoading) {
        }
        //data = (data == null || data == "" || typeof (data) == "undefined") ? { "date": new Date().getTime() } : data;
        $.ajax({
            type: "get",
            data: data,
            url: url + "?time=" + new Date().getTime(),
            dataType: "json",
            global: false,
            async: asyncC == undefined ? true : false,
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
    },

    /**
       * ajax封装
       * url 发送请求的地址
       * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
       * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
       * successfn 成功回调函数
       * errorfn 失败回调函数
       * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    postWebJson : function (url, data, successfn, errorfn, asyncC, callLoading) {
        if (!callLoading) {
            $("#Loading").removeClass("hide");
        }
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
    }
};

export default {comCompnent};
