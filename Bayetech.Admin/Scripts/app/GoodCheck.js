import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table.vue'

let pagetype = comCompnent.GetUrlParam($(".NFine_iframe").context.URL,"type");

let vmData = {
    //BaseUrl: GetBaseUrl()+"Good/GoodInfo.html?GoodNo=",
    PageType:pagetype,//111
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    GoodListUrl:comCompnent.MenuUrl[pagetype],
    CheckGoodUrl:"/api/CheckGood/CheckGoodInfo",
    CheckGoodNo:"",//模态框打开的GoodNo
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
            GoodNo:"",
            Status:pagetype,
            SelectType:"good"
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
      StartCheck(GoodNo) {//开始检查
          var self = this;
          self.CheckGoodNo = GoodNo;
          $("#checkModal").modal("show");
        },
        TurnToPage(page){
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        },
        CheckGoods(flag){
            var self = this;
            self.SearchParam.Param.GoodNo = self.CheckGoodNo;
            self.SearchParam.Param.Status = (flag=='Y'?'PutOnsale':'PutDownsale');
            if (confirm("确定审批？")) {
               $("#CheckConfirm").Btns("loading");
               self.tools._comCompnent.postWebJson(self.CheckGoodUrl, self.SearchParam, function (data) {
                   if (data.result) {
                       alert("审批成功!");
                   } 
                   $("#checkModal").modal("hide");
                   $("#CheckConfirm").Btns("reset");
               },function(){
                  $("#CheckConfirm").Btns("reset");
               });
            }
        }
    },
    components:{
        comtable:componentTable
    }
});


