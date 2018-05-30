import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-AdminSets.vue'

let pagetype = comCompnent.GetUrlParam($(".NFine_iframe").context.URL,"type");

let vmData = {
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    GoodListUrl:comCompnent.MenuUrl[pagetype],
    AdminSetsUrl:"/api/AdminManage/GetList",//管理员设置列表表格
    AdminUserAdd:"/api/AdminManage/UserAdd",
    CheckGoodNo:"",//模态框打开的GoodNo
    keyword: "",
    AdminSetsArray:[],
    ListObj: [
        {
            KeyId: "",
            UserName: "",
            TrueName: "",
            depname: "",
            Mobile: "",
            IsAdmin: "",
            Remark: ""
        }
    ],
    SearchParam: {
        Param: {//查询条件的参数
            keyword:"",
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
        findList() {//查询列表
            var self = this;
            self.tools._comCompnent.getWebJson(self.AdminSetsUrl, null, function (data) {
                if (data.result) {
                    self.AdminSetsArray=data.content;
                    self.ItemType = self.SearchParam.Param.SelectType;//根据单据类型选择加载的标题等等内容
                    self.SearchParam.Pagination=data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            })
        },
        UserAdd(){//方法体还没写
            var self = this;
            self.tools._comCompnent.postWebJson(self.AdminUserAdd, null, function (data) {
                if (data.result) {
                    //新增操作
                }
            })   
        },
        UserUpdate(){//方法体还没写
            self.tools._comCompnent.postWebJson(self.AdminUserUpdate, null, function (data) {
                if (data.result) {
                    //修改操作
                }
            })   
        },
        UserDelete(){//方法体还没写
            self.tools._comCompnent.postWebJson(self.AdminUserDelete, null, function (data) {
                if (data.result) {
                    //删除操作
                }
            })   
        }
    },
    components:{
        comtable:componentTable
    }
});

//

