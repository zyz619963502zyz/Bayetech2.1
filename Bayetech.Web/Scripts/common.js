define("common", ['jquery'], function () {
    var common = {};

    /**
        * ajax封装
        * url 发送请求的地址
        * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
        * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
        * successfn 成功回调函数
        * errorfn 失败回调函数
        * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    common.getWebJson = function (url, data, successfn, errorfn, asyncC, callLoading) {
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
    };

    /**
       * ajax封装
       * url 发送请求的地址
       * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
       * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
       * successfn 成功回调函数
       * errorfn 失败回调函数
       * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    common.postWebJson = function (url, data, successfn, errorfn, asyncC, callLoading) {
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
    };

    //根据属性找对象
    common.FindObjByProp = function (arr, propName, value) {
        var newArr = [];
        for (var prop in arr) {
            var o = arr[prop], p = o[propName];
            p && $.inArray(p.toString(), value.split(",")) > -1 && newArr.push(o);
        }
        return newArr[0];
    };

    /**
    * 组装components
    * stratNum 第几个参数开始
    * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
    * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
    * successfn 成功回调函数
    * errorfn 失败回调函数
    * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    common.PrepareComponents = function (obj, stratNum, parame) {
        var components = {};
        for (var i = stratNum; i < parame.length; i++) {
            components[parame[i].name] = parame[i];
        }
        obj["components"] = components;
        return obj;
    };


    /**
    * 返回Url基础目录
    */
    common.GetBaseUrl = function () {
        return "http://"+ window.location.host + "/Page/";
    }

    /**
     * 传过来的参数
     */
    common.GetUrlParam = function (url, queryStringName) {
        url = url || location.search;
        var urlArray = (url.split('?')[1] || "").split('&');
        var urlParam = {};
        urlArray == "" && (urlArray.length = 0);
        for (var i = 0; i < urlArray.length; i++) {
            var array = urlArray[i].split('=');
            urlParam[array[0]] = decodeURI(array[1]);
        }
        return queryStringName ? urlParam[queryStringName] : urlParam;
    }

    /**
     * 判断当前浏览类型
     */
    common.BrowserType = function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
        var isFirefox = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
        var isIE11 = userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1;

        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            return "IE" + fIEVersion;
        }
        if (isFirefox) { return "Firefox"; }
        if (isOpera) { return "Opera"; }
        if (isSafari) { return "Safari"; }
        if (isChrome) { return "Chrome"; }
        if (isEdge) { return "Edge"; }
        if (isIE11) { return "IE11"; }
    };



    return common;
})

