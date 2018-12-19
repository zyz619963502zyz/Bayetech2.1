import Vue from '../vue.js'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
import componentTable from '../components/table-AdminSets.vue'

let pagetype = comCompnent.GetUrlParam($(".NFine_iframe").context.URL, "type");

let vmData = {
    tools: {
        _comCompnent: comCompnent,
        _componentTable: componentTable
    },
    GoodListUrl: comCompnent.MenuUrl[pagetype],
    AdminSetsUrl: "/api/AdminManage/GetList",//管理员设置列表表格
    AdminUserAdd: "/api/AdminManage/UserAdd",
    AdminUserDelete: "/api/AdminManage/DeleteUser",
    RoleUrl: "/api/AdminManage/AddRoles",
    CheckGoodNo: "",//模态框打开的GoodNo
    keyword: "",
    AdminSetsArray: [],
    RolesSet: {
        RoleUser: {
            KeyId: "",
            UserID: "",
            RoleID: ""

        }
    },
    SearchParam: {
        Param: {//查询条件的参数
            Type: "",
            SelectNo: "",//form里面选择的编号
            SelectType: ""
        },
        ListObj:
        {
            USER_ID: "",
            User_Name: "",
            IsAvailab: "",
            User_Code: "",
            User_SEX: "",
            Remark: ""
        }
        ,
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "CreateTime",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
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
        findList() {//查询列表
            var self = this;
            self.SearchParam.Param.Type = self.SearchParam.Param.SelectNo;
            comCompnent.default.postWebJson(self.AdminSetsUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.AdminSetsArray = data.content.datas;
                    self.SearchParam.Pagination = data.content.pagination;
                    comCompnent.default.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            });
        },
        IsDisabl(type) {
            var self = this;
            self.SearchParam.ListObj.IsDisabled = type;
        },
        OpenModal() {//打开模态框
            $("#UserModal").modal("show");
        },
        UserAddandEdit() {//提交
            var self = this;
            self.SearchParam.ListObj.KeyId = self.SearchParam.ListObj.KeyId == "" ? 0 : self.SearchParam.ListObj.KeyId;
            comCompnent.default.postWebJson(self.AdminUserAdd, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("操作成功!");
                    self.findList();
                }
                else {
                    alert(data.content);
                }

            });
        },
        UserDelete() {//方法体还没写
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return;
            }
            self.SearchParam.ListObj.KeyId = self.SearchParam.ListObj.KeyId == "" ? 0 : self.SearchParam.ListObj.KeyId;
            comCompnent.default.postWebJson(self.AdminUserDelete, self.SearchParam, function (data) {
                if (data.result) {
                    //删除操作
                    alert("删除成功");
                }
                self.findList();
            });
        },
        OpenEditModal() {//修改
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return;
            }
            $("#UserModal").modal("show");
        },
        ResetPassWord() {//重置密码
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择按钮")
                return;
            }
            var ret = confirm("你确定要重置用户：" + self.SearchParam.ListObj.UserName + " 的初始密码吗? ");
            if (!ret) return;
            self.SearchParam.ListObj.KeyId = self.SearchParam.ListObj.KeyId == "" ? 0 : self.SearchParam.ListObj.KeyId;
            comCompnent.default.postWebJson(self.AdminUserAdd, self.SearchParam, function (data) {
                if (data.result) {
                    $("#UserModal").modal("hide");
                    alert("操作成功!");
                    self.findList();
                }
                else {
                    alert(data.content);
                }

            })
        },
        AddRoles() {
            var self = this;
            debugger;
            self.RolesSet.RoleUser.KeyId = 0;
            self.RolesSet.RoleUser.UserID = self.SearchParam.ListObj.KeyId;
            self.RolesSet.RoleUser.RoleID = self.SearchParam.Param.SelectType;
            comCompnent.default.postWebJson(self.RoleUrl, self.RolesSet, function (data) {
                debugger;
                if (data.result) {
                    $("#RolesModal").modal("hide");
                    alert("操作成功");
                    self.findList();
                }
            });

        },
        RoleSetting() {//角色设定
            var self = this;
            if (self.SearchParam.ListObj.KeyId == 0) {
                alert("请选择员工")
                return;
            }
            $("#RolesModal").modal("show");
            self.SearchParam.Param.Type = self.SearchParam.Param.SelectNo;
            comCompnent.default.postWebJson(self.AdminSetsUrl, self.SearchParam, function (data) {
                debugger;
                if (data.RolesList.length > 0) {
                    self.SearchParam.Param.SelectType = data.RolesList[0].RoleID
                }
                else {
                    self.SearchParam.Param.SelectType = 0;
                }
            });

        },
        StartCheck(type) {//开始检查
            debugger;
            var self = this;
            self.SearchParam.ListObj = type;
        },
        TurnToPage(page) {
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        }
    },
    components: {
        comtable: componentTable
    }
});


