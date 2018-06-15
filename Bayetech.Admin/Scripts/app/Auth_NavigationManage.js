import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-NavigationManage.vue'

let vmData={
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    RolesUrl:"/api/AdminManage/GetNavgationList",
    RolesAdd:"/api/Navigation/GetAddNavigation",
    RolesDelete:"/api/Navigation/deleteNavigation",
    CheckGoodNo:"",//模态框打开的GoodNo
    keyword: "",
    NavigationsetsArray:[],
    SearchParam: {
        Param: {//查询条件的参数
            NavTitle:"",
            SelectType:"",//form里选择的商品类型
            SelectNo:""//form里面选择的编号
        },
        ListObj:
        {
            KeyId:"",
            NavTitle:"",
            Linkurl:"",
            IsVisible:"",
            Sortnum:"",
            ParentID:""
        }
        ,
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "KeyId",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    },

};

new Vue({
    el:'#CommNavigation',
    data:vmData,
    created(){
        this.findList();
    },
    methods:{
        findList(){
            var self=this;
            
            self.SearchParam.Param.NavTitle = self.SearchParam.Param.SelectNo;
            self.tools._comCompnent.postWebJson(self.RolesUrl, self.SearchParam, function (data) {
                
                if (data.result) {
                    self.NavigationsetsArray= data.content;

                    //self.SearchParam.Pagination=data.content.pagination;
                    //self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            })
        },
        SaveModal(){//提交
            var self = this;
            self.SearchParam.ListObj.KeyId=self.SearchParam.ListObj.KeyId=="" ? 0:self.SearchParam.ListObj.KeyId;
            self.tools._comCompnent.postWebJson(self.RolesAdd, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("操作成功!");
                } 
                self.findList();
                //$("#CheckConfirm").Btns("reset");
            },function(){
                //$("#CheckConfirm").Btns("reset");
            });
        },
        OpenAddModal(){//添加
            var self=this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return ;
            }
            self.SearchParam.ListObj.NavTitle="";
            self.SearchParam.ListObj.NavTag="";
            self.SearchParam.ListObj.Linkurl="";
            self.SearchParam.ListObj.Sortnum="";
            self.SearchParam.ListObj.iconCls="";
            $("#UserModal").modal("show");
        },
        OpenEditModal(){//修改
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return ;
            }
            $("#UserModal").modal("show");
        },
        Delete(){//删除
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return ;
            }
            self.SearchParam.ListObj.KeyId=self.SearchParam.ListObj.KeyId;
            self.tools._comCompnent.postWebJson(self.RolesDelete, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("删除成功!");
                } 
                self.findList();
                //$("#CheckConfirm").Btns("reset");
            },function(){
                //$("#CheckConfirm").Btns("reset");
            });
        },
        StartCheck(type) {//开始检查
            var self = this;
            debugger;
            self.SearchParam.ListObj=type;
            //$("#checkModal").modal("show");
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