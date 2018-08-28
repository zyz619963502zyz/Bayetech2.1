import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-GameSet.vue'

let vmData = {
    GameListUrl: "/api/Game/",
    GetByLetterUrl:"/api/Game/GetGameListByLetter",
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    Letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],//首字母集合
    GameTypes:[{code:"0",name:"PC游戏"},{code:"1",name:"手机游戏"}],//游戏类型
    GameArray:[],//游戏列表数据
    GameProfessionArray:[{}],//游戏职业列表数据
    GameInfoDescriptionArray:[{}],//游戏商品属性列表数据
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
            SelectGameType:""//选择的游戏
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
        var self = this;
        self.Init();
    },
    methods: {
        Init(){//页面初始化方法，获取游戏列表:GameArray
            var self = this;
            self.FindList();
        },
        InitModalList(){//获取模态框里面两个游戏属性/商品属性的列表:GameProfessionArray/GameInfoDescriptionArray
            self.tools._comCompnent.postWebJson("", self.SearchParam, function (data) {//todo
                        
            });
        },
        FindList() {//type:手游/端游,letter:首字母
            var self = this;
            self.tools._comCompnent.postWebJson(self.GetByLetterUrl, self.SearchParam, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    self.GameArray = data.content.datas;
                    self.SearchParam.Pagination = data.content.pagination;
                    self.tools._comCompnent.SetPagination($('#paginator-test'),
                        self.SearchParam, self.FindList);
                }else {
                    self.GameArray = [];//清空列表
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
        },
        TurnToPage(page){//翻页
            var self = this;
            self.SearchParam.Pagination.rows = page;
            self.FindList();
        },
        OpenProperty(){//游戏属性模态框
            $("#GamePropertyModal").modal("show");
        },
        AddProfession(){//添加游戏职业属性
            var self = this;
            self.GameProfessionArray.push([]);//游戏职业列表数据
        },
        DelProfession(){//删除职业列表数据一行todo
        
        },
        AddDescription(){//添加游戏商品属性
            var self = this;
            self.GameInfoDescriptionArray.push([]);
        },
        DelDescription(){//删除游戏商品属性列表数据一行todo
        
        }
    },
    components:{
        comtable:componentTable
    }
});


