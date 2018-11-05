import Vue from '../vue.js'
import comCompnent from '../common.js'
import componentTable from '../components/table-GameSet.vue'

let vmData = {
    GameListUrl: "/api/Game/",
    GetByLetterUrl:"/api/Game/GetGameListByLetter",
    UpdateGameUrl:"/api/Game/UpdateGame",
    GetByGameUrl:"/api/Game/GetGameService",
    GetByServerUrl:"/api/Game/GetbyServiceTwo",
    GetByServerTwoUrl:"/api/Game/UpdateGameProperty",
    tools:{
        _comCompnent:comCompnent,
        _componentTable:componentTable
    },
    Letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],//首字母集合
    GameTypes:[{code:"0",name:"PC游戏"},{code:"1",name:"手机游戏"}],//游戏类型
    GameArray:[],//游戏基本信息
    EditData:[],//点击编辑的基本信息
    GameProfessionArray:[{}],//职业信息列表数据
    GameInfoDescriptionArray:[],//游戏商品属性列表数据
    GameMallTypeArray:[{}],
    MallTypeArray:[{}],
    ServerList1:[{}],//区服务信息
    ServerList2:[{}],
    GetServerList2:{},
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
        AddServer(){//添加游戏区/服务器
            var self = this;
            self.ServerList1.push({});
        },
        AddServer2(){//服务器
            var self = this;
            self.ServerList2.push({});
        },
        DelServer(item){//删除游戏区/服务器
            var self=this;
            var index = self.ServerList1.indexOf(item);
            self.ServerList1.splice(index,1);
        },
        DelServer2(item){
            var self=this;
            var index = self.ServerList1.indexOf(item);
            self.ServerList2.splice(index,1);
        },
        OpenServerChild(item){//打开服务器编辑模态框
            var self=this;
            self.GetServerList2.ServerList2=item;
            self.tools._comCompnent.postWebJson(self.GetByServerUrl, self.GetServerList2, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    self.ServerList2=data.Server2;
                }else {
                    self.ServerList2 = [{}];//清空列表
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
            $("#GameServer2").modal("show");
        },
        OpenProperty(item){//打开表单页
            var self=this;
            self.tools._comCompnent.postWebJson(self.GetByGameUrl, {item}, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    debugger;
                    if(data.server.length>0)
                        self.ServerList1=data.server;
                    else
                        self.ServerList1 = [{}];
                    if(data.gameProfession.length>0)
                        self.GameProfessionArray=data.gameProfession;
                    else
                        self.GameProfessionArray=[{}];
                    if(data.mallType.length>0)
                        self.GameMallTypeArray =data.mallType;
                    else
                        self.GameMallTypeArray =[{}];
                    for (var i = 0; i < self.GameMallTypeArray.length; i++) {
                        self.GameMallTypeArray[i].checkvalue =true;
                    }
                    if(data.mallTypeArray.length>0)
                        self.MallTypeArray=data.mallTypeArray;
                    else
                        self.MallTypeArray=[{}];

                    
                    //self.tools._comCompnent.SetPagination($('#paginator-test'),
                        //self.SearchParam, self.FindList);
                }else {
                    self.GameArray = [];//清空列表
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
            $("#GamePropertyModal").modal("show");
        },
        AddProfession(item){//添加游戏职业属性
            var self = this;
            var obj = {};
            self.GameProfessionArray.push(obj);//游戏职业列表数据
        },
        DelProfession(item){//删除职业列表数据一行todo
            var self=this;
            var index = self.GameProfessionArray.indexOf(item);
            self.GameProfessionArray.splice(index,1);
        },
        OpenTradeType(){//打开商品类型模态框
            $("#TradeTypeModal").modal("show");
        },
        SaveTrade(){//将checkbox的数据保存到列表
        
        },
        AddMallT(item){
            var self=this;
            var index = self.GameMallTypeArray.indexOf(item);
            for (var value of self.GameMallTypeArray) {
                if (value.Name==item.Name) {
                    if (item.checkvalue) {
                        self.GameMallTypeArray.splice(index,1);
                        return;
                    }else {
                        return;
                    }
                }
            }
            self.GameMallTypeArray.push(item);
        },
        DelectMallT(item){
            var self=this;
            var index = self.GameMallTypeArray.indexOf(item);
            for (var value of self.GameMallTypeArray) {
                if (value.Name==item.Name) {
                    self.GameMallTypeArray.splice(index,1);
                }
            }
        },
        GameMenuSave(){//保存
            var updateSave={};
            var self = this;
            updateSave.GameArray=self.GameArray;
            updateSave.ServerList1=self.ServerList1;
            updateSave.GameProfessionArray=self.GameProfessionArray;
            updateSave.GameMallTypeArray=self.GameMallTypeArray;
            self.tools._comCompnent.postWebJson(self.UpdateGameUrl, updateSave, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    $("#GamePropertyModal").modal("hide");
                    self.FindList();
                }else {
                    self.GameArray = [];//清空列表
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
        },
        ServerMenuSave(){
            var self=this;
            var updateSave={};
            updateSave.ServerList2=self.ServerList2;
            updateSave.GetServerList2=self.GetServerList2.ServerList2;
            self.tools._comCompnent.postWebJson(self.GetByServerTwoUrl, updateSave, function (data) {
                $("#QueryList").Btns("reset");
                if (data.result) {
                    debugger;
                    $("#GameServer2").modal("hide");
                    self.FindList();
                }else {
                    self.GameArray = [];//清空列表
                }
            },function(){
                $("#QueryList").Btns("reset");
            });
        },
        operatemodal(item){

        }
    },
    components:{
        comtable:componentTable
    }
});


