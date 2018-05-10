import Vue from '../vue'
import ComContents from '../common.js'
import componentTable from '../components/table.js'

var _url = "/api/Test/GoodCheck";


var vmData = {
    BaseUrl: GetBaseUrl()+"Good/GoodInfo.html?GoodNo=",
    BaseTarget: "_blank",
    keyword: "",
    GoodTitleArray:["商品编号","游戏名称","交易类型","关键词","商品标题","审核商品"],
    GoodInfoArray:[],
    ListObj: [
        {
            GoodNo: "",
            GoodFirstPicture: "",
            aurl: "",
            GoodTitle: "",
            GroupName: "",
            ServerName: "",
            GoodPrice: ""
        }
    ],
    SearchParam: {
        Param: {
            GoodNo:""
        },
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "GoodNo",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    },
};

new Vue({
    el: '#CommForm',
    data: vmData,
    created(){
        this.findList();
    },
    methods: {
            findList() {//获取商品的简要列表
            var self=this;
            commonCompnent.postWebJson(GoodListUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.GoodInfoArray=data.content.datas;
                }
            });
        },
        StartCheck() {//开始检查
            $("#checkModal").modal("show");
        }
    },
    components:{
        comtable:componentTable
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


