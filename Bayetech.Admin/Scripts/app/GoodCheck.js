//import commonCompnent from './common.js';

//var _url = "/api/Test/GoodCheck";
//const aa = 1;
//let aaaa = 2;

//var aaa = commonCompnent;
//commonCompnent.postWebJson(_url,null,function(){
//});


//当前执行的函数
//(function () {
    var GoodListUrl = "/api/CheckGood/GetList"; //查询列表

    var vmData = {
        //BaseUrl: GetBaseUrl()+"Good/GoodInfo.html?GoodNo=",
        BaseTarget: "_blank",
        keyword: "",
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

    //vue
    var vm = new Vue({
        el: '#CommForm',
        data: vmData,
        created(){
            this.findList();
        },
        methods: {
             findList() {//获取商品的简要列表
                var self=this;
                postWebJson(GoodListUrl, self.SearchParam, function (data) {
                    if (data.result) {
                        self.GoodInfoArray=data.content.datas;
                    }
                });
            },
            StartCheck() {//开始检查
                $("#checkModal").modal("show");
            }
        }
    });

//})();


