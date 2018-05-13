import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table.js'

let pagetype = comCompnent.GetUrlParam($(".NFine_iframe").context.URL,"type");

let vmData = {
    //BaseUrl: GetBaseUrl()+"Good/GoodInfo.html?GoodNo=",
    PageType:pagetype,//111
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    GoodListUrl:comCompnent.MenuUrl[pagetype],
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

new Vue({
    el: '#CommForm',
    data: vmData,
    created(){
        this.findList();
    },
    methods: {
      findList() {//获取商品的简要列表
            var self=this;
            self.tools._comCompnent.postWebJson(self.GoodListUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.GoodInfoArray=data.content.datas;
                    self.SearchParam.Pagination=data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            });
        },
        StartCheck() {//开始检查
            $("#checkModal").modal("show");
        },
        TurnToPage(page){
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        }
    },
    components:{
        comtable:componentTable
    }
});


