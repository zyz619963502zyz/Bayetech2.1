import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-Department.vue'

let vmData = {
    tools: {
        _comCompnent: comCompnent,
        _componentTable: componentTable
    },
    DepartmentUrl: "",
    DepartmentArray: [],
    SearchParam: {
        Param: {//查询条件的参数
            Type: "",
            SelectNo: ""//form里面选择的编号
        },
        ListObj:
        {
            Org_Code: "",
            Org_GB: "",
            Org_Name: "",
            CreateTime: "",
        }
        ,
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "Org_id",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    }
};

new Vue({
    el: '#CommDepartment',
    data: vmData,
    created() {
        this.findList();
    },
    methods: {
        findList() {
            var self = this;
            self.SearchParam.Param.Type = self.SearchParam.Param.SelectNo;
            self.tools._comCompnent.postWebJson(self.RolesUrl, self.SearchParam, function (data) {
                if (data.result) {
                    self.DepartmentArray = data.content.datas;
                    self.SearchParam.Pagination = data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            });
        },
        StartCheck(type) {//开始检查
            var self = this;
            var c = $.extend(true, self.SearchParam.ListObj, type);
            $("#test").attr("value", type.Role_Value);
        },
        TurnToPage(page) {
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        }
    },
    components: {
        comtable: componentTable,
        comtatles: componentTables
    }
});