import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-RolesManage.vue'

let vmData={
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    RolesUrl:"/api/Roles/GetList",
    RolesAdd:"/api/Roles/AddRoles",
    CheckGoodNo:"",//模态框打开的GoodNo
    keyword: "",
    RolesArray:[],
    ListObj:[
        {
            KeyId:"",
            RoleName:"",
            Sortnum:"",
            Remark:""
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
    el:'#CommRoles',
    data:vmData,
    created(){
        this.findList();
    },
    methods:{
        findList(){
            var self=this;
            self.tools._comCompnent.getWebJson(self.RolesUrl, null, function (data) {
                
                if (data.result) {
                    self.RolesArray=data.content;
                }
            })
        },
    },
    components:{
        comtable:componentTable
    }
});

