﻿import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-ButtonsManage.vue'

let vmData={
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    RolesUrl:"/api/Buttons/GetList",
    RolesAdd:"/api/Buttons/AddRoles",
    CheckGoodNo:"",//模态框打开的GoodNo
    keyword: "",
    ButtonssetsArray:[],
    ListObj:[
        {
            KeyId:"",
            ButtonText:"",
            ButtonTag:"",
            Sortnum:"",
            IconCls:""
        }
    ],
    SearchParam: {
        Param: {//查询条件的参数
            ButtonName:"",
            SelectType:"",//form里选择的商品类型
            SelectNo:""//form里面选择的编号
        },
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "ButtonText",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    },

};

new Vue({
    el:'#CommButtons',
    data:vmData,
    created(){
        this.findList();
    },
    methods:{
        findList(){
            var self=this;
            
            self.SearchParam.Param.ButtonName = self.SearchParam.Param.SelectNo;
            self.tools._comCompnent.postWebJson(self.RolesUrl, self.SearchParam, function (data) {
                
                if (data.result) {
                    self.ButtonssetsArray=data.content.datas;
                    self.SearchParam.Pagination=data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'), self.SearchParam, self.findList);
                }
            })
        },
        StartCheck(GoodNo) {//开始检查
            var self = this;
            self.CheckGoodNo = GoodNo;
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

