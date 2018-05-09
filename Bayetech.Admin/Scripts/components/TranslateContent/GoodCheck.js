/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComContents */

var ComContents = function () {
    var commonCompnent = {};

    /**
        * ajax封装
        * url 发送请求的地址
        * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
        * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
        * successfn 成功回调函数
        * errorfn 失败回调函数
        * asyncC:此为第五个参数传就是同步，不穿默认异步。
    */
    commonCompnent.getWebJson = function (url, data, successfn, errorfn, asyncC, callLoading) {
        if (!callLoading) {}
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
    commonCompnent.postWebJson = function (url, data, successfn, errorfn, asyncC, callLoading) {
        if (!callLoading) {
            $("#Loading").removeClass("hide");
        }
        //data = (data == null || data == "" || typeof (data) == "undefined") ? { "date": new Date().getTime() } : data;
        if (typeof asyncC != "undefined" && typeof asyncC != "boolean") {
            $("#Loading").addClass("hide");
            GetAlert("同异步参数没传");
        }
        $.ajax({
            type: "post",
            data: data,
            url: url + "?time=" + new Date().getTime(),
            dataType: "json",
            global: false,
            async: typeof asyncC == "undefined" || null == asyncC ? true : false,
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
    commonCompnent.FindObjByProp = function (arr, propName, value) {
        var newArr = [];
        for (var prop in arr) {
            var o = arr[prop],
                p = o[propName];
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
    commonCompnent.PrepareComponents = function (obj, stratNum, parame) {
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
    commonCompnent.GetBaseUrl = function () {
        return "http://" + window.location.host + "/Page/";
    };

    /**
     * 传过来的参数
     */
    commonCompnent.GetUrlParam = function (url, queryStringName) {
        url = url || location.search;
        var urlArray = (decodeURI(url).split('?')[1] || "").split('&');
        var urlParam = {};
        urlArray == "" && (urlArray.length = 0);
        for (var i = 0; i < urlArray.length; i++) {
            var array = urlArray[i].split('=');
            urlParam[array[0]] = array[1];
        }
        return queryStringName ? urlParam[queryStringName] : urlParam;
    };

    /**
     * 获取静态页面的名称
     *  eg: localhost:/aabc/cde/aaa.html(输出页面名称“aaa”)
     */
    commonCompnent.GetSearchType = function () {
        var _url = document.location.href;
        var _urlArray = document.location.href.split("/");
        var type = document.location.href.split("/")[_urlArray.length - 1].split('.')[0];
        return type;
    };

    /**
     * 判断当前浏览类型
     */
    commonCompnent.BrowserType = function () {
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
        if (isFirefox) {
            return "Firefox";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isSafari) {
            return "Safari";
        }
        if (isChrome) {
            return "Chrome";
        }
        if (isEdge) {
            return "Edge";
        }
        if (isIE11) {
            return "IE11";
        }
    };

    /**
      * 转成JS对象
     */
    commonCompnent.LogJS = function (vue) {
        return eval('(' + JSON.stringify(vue) + ')');
    };

    /**
     * 合并对象空值不覆盖
    */
    commonCompnent.MergeObj = function (a, b) {
        for (var prop in b) {
            if (b[prop]) {
                a[prop] = b[prop];
            }
        }
        return a;
    };

    /**
      * 分页方法
     */
    //1.$contain对应的dom对象
    //2.self，vue的组件对象
    //3.callback查询回调
    commonCompnent.SetPagination = function ($, self, callback) {
        var container = $;
        options = {
            bootstrapMajorVersion: 3,
            currentPage: self.Pagination == undefined ? 1 : self.Pagination.page,
            numberOfPages: 5, //控件显示出来的页码可以写死,默认5
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },
            totalPages: self.Pagination == undefined ? 1 : self.Pagination.total, //根据实际查询数据算出总页码
            pageUrl: function (type, page) {
                return null;
            },
            onPageClicked: function (e, originalEvent, type, page) {
                self.Pagination.page = page; //获取当前页
                callback(); //再次查询
            }
        };
        container.bootstrapPaginator(options);
    };

    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
    // 例子： 
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
    Date.prototype.Format = function (fmt) {
        //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        return fmt;
    };

    //添加选中样式
    commonCompnent.AddSelectedClass = function (selector, addClass, fn) {
        $(document).on("click", selector, function () {
            $(selector).not(this).removeClass(addClass);
            $(this).addClass(addClass);
            if (fn) {
                fn(this);
            }
        });
    };

    //获取基础搜索条件
    commonCompnent.GetSearchParam = function () {
        return {
            GameId: 0,
            GameName: "游戏名称",
            GameGroupId: 0,
            GameGroupName: "游戏区",
            GameServerId: 0,
            GameServerName: "服务器",
            GoodTypeId: 0,
            GoodTypeName: "物品类型",
            DlTypeName: "代练类型",
            GoodKeyWord: "",
            AcrossId: 0,
            AcrossName: "跨区"
        };
    };

    return commonCompnent;
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let BaseTable = `<template>
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center"  v-for="item in GoodTitleArray">{{item.value}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in GoodInfoArray">
                <td>{{item.GoodNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" class="btn btn-primary" value="审核商品" @click="StartCheck(item.GoodNo)"></td>
            </tr>
        </tbody>
    </table>
</template>`;

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'BaseTable',
    template: BaseTable,
    props: ['GoodTitleArray', 'GoodInfoArray', 'StartCheck']
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_table_js__ = __webpack_require__(1);
//import Vue from 'vue'



var _url = "/api/Test/GoodCheck";

var vmData = {
    BaseUrl: GetBaseUrl() + "Good/GoodInfo.html?GoodNo=",
    BaseTarget: "_blank",
    keyword: "",
    GoodTitleArray: ["商品编号", "游戏名称", "交易类型", "关键词", "商品标题", "审核商品"],
    GoodInfoArray: [],
    ListObj: [{
        GoodNo: "",
        GoodFirstPicture: "",
        aurl: "",
        GoodTitle: "",
        GroupName: "",
        ServerName: "",
        GoodPrice: ""
    }],
    SearchParam: {
        Param: {
            GoodNo: ""
        },
        Pagination: { //分页对象
            rows: 10, //每页行数，
            page: 1, //当前页码
            order: "GoodNo", //排序字段
            sord: "asc", //排序类型
            records: 10, //总记录数
            total: 10 //总页数。
        }
    }
};

new Vue({
    el: '#CommForm',
    data: vmData,
    created() {
        this.findList();
    },
    methods: {
        findList() {
            //获取商品的简要列表
            var self = this;
            commonCompnent.postWebJson(GoodListUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.GoodInfoArray = data.content.datas;
                }
            });
        },
        StartCheck() {
            //开始检查
            $("#checkModal").modal("show");
        }
    },
    components: {
        comtable: __WEBPACK_IMPORTED_MODULE_1__components_table_js__["a" /* default */]
    }
});

////当前执行的函数
//(function () {
//    var GoodListUrl = "/api/CheckGood/GetList"; //查询列表

//    var vmData = {
//        BaseUrl: GetBaseUrl()+"Good/GoodInfo.html?GoodNo=",
//        BaseTarget: "_blank",
//        keyword: "",
//        GoodInfoArray:[],
//        ListObj: [
//            {
//                GoodNo: "",
//                GoodFirstPicture: "",
//                aurl: "",
//                GoodTitle: "",
//                GroupName: "",
//                ServerName: "",
//                GoodPrice: ""
//            }
//        ],
//        SearchParam: {
//            Param: {
//                GoodNo:""
//            },
//            Pagination: {//分页对象
//                rows: 10,//每页行数，
//                page: 1,//当前页码
//                order: "GoodNo",//排序字段
//                sord: "asc",//排序类型
//                records: 10,//总记录数
//                total: 10//总页数。
//            }
//        },
//    };

//    var vm = new Vue({
//        el: '#CommForm',
//        data: vmData,
//        created(){
//            this.findList();
//        },
//        methods: {
//             findList() {//获取商品的简要列表
//                var self=this;
//                commonCompnent.postWebJson(GoodListUrl, self.SearchParam, function (data) {
//                    if (data.result) {
//                        self.GoodInfoArray=data.content.datas;
//                    }
//                });
//            },
//            StartCheck() {//开始检查
//                $("#checkModal").modal("show");
//            }
//        }
//    });

//})();

/***/ })
/******/ ]);