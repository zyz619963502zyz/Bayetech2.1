"use strict";

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
}

var _commonJs = require('../common.js');

var _commonJs2 = _interopRequireDefault(_commonJs);

var _url = "/api/Test/GoodCheck";

var aaa = _commonJs2["default"];
_commonJs2["default"].postWebJson(_url, null, function () {});

//当前执行的函数
(function () {
    var GoodListUrl = "/api/CheckGood/GetList"; //查询列表

    var vmData = {
        BaseUrl: GetBaseUrl() + "Good/GoodInfo.html?GoodNo=",
        BaseTarget: "_blank",
        keyword: "",
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

    vue;
    var vm = new Vue({
        el: '#CommForm',
        data: vmData,
        created: function created() {
            this.findList();
        },
        methods: {
            findList: function findList() {
                //获取商品的简要列表
                var self = this;
                postWebJson(GoodListUrl, self.SearchParam, function (data) {
                    if (data.result) {
                        self.GoodInfoArray = data.content.datas;
                    }
                });
            },
            StartCheck: function StartCheck() {
                //开始检查
                $("#checkModal").modal("show");
            }
        }
    });
})();

