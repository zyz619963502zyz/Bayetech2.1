import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-Process.vue'

let vmData = {
    GameListUrl: "/api/Game/",
    GetByLetterUrl:"/api/Game/GetGameListByLetter",
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    Letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],//首字母集合
    GameArray:[],
    ListObj: [
        {
            Name: "",
            Alias: "",
            Letter: "",
            IsHot: "",
            Parentid: "",
            Order: "",//排序
            Platform: "",
            Img:"",
            IsDelete:""//是否被删除
        }
    ],
    SearchParam: {
        Param: {//查询条件的参数
            SelectLetter:"",//选择的游戏首字母
            SelectGame:""//选择的游戏
        },
        Pagination: {//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "IsHot",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    },
};

new Vue({
    el: '#app',
    data: vmData,
    created(){
        //this.findList();
    },
    methods: {
        findList() {//获取商品的简要列表
            self.tools._comCompnent.postWebJson(self.GameListUrl, self.SearchParam, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    self.SearchParam.Pagination = data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'),
                        self.SearchParam, self.findList);
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
        },
        GetByLetter(letter){//根据首字母去查询下拉游戏
            var self = this;
            self.tools._comCompnent.getWebJson(self.GetByLetterUrl, {"type":0,"letter":letter}, function (data) {
                self.GameArray = data.content;
            });
        },
        TurnToPage(page){
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.findList();
        },
    },
    components:{
        comtable:componentTable
    }
});


