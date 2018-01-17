﻿//商品管理
define(['vue', 'jquery', 'common', 'API', 'text!/../Page/UserCenter/tpl/GoodManage.html', 'bootstrap-paginator', 'datepicker'], function (Vue, $, common, API, html, paginator) {
    var html=html;

    //Api
    var _GetOrderInfoUrl="/api/Order/GetOrderInfo";
    var _GetOrdersUrl="/api/Order/GetOrders";
    var _GetOrderStatus="/api/Order/GetOrderStatus";

    var data={
        times: 0,
        Games: [{ GameId: "", GameName: "" }],
        Param:{
            GameId: "",
            GoodTypeId: "",
            GameGroupId: "",
            GameServerId: "",
            OrderStatus: "",
            Status:0,
            KeyWord: "",
        },
        Goods: [],//商品信息表 
        Types: [],//交易类别
        Groups: [],
        Servers: [],
        Status: [],//商品状态
        Pagination: {
            //后端分页字段
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "OrderNo",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
    };

    var components={
        name: "GoodManage",
        template: html,
        data() {
            return data;
        },
        watch: {
            'Param.GameId'(value) {
                var self=this;
                API.Good.GetGoodTypeList(value, "", function (data) {
                    self.Types=data.content;
                });
                API.Game.GetGroupList(value, "", function (data) {
                    self.Groups=data.content;
                });
            },
            'Param.GameGroupId'(value) {
                var self=this;
                API.Game.GetServerList(value, "", function (data) {
                    self.Servers=data.content;
                });
            },
        },
        created() {
            var self=this;
            self.GetOrderInfo(self.Pagination);
            self.GetOrderStatus(0);
        },
        mounted() {
            $(".datepicker").datepicker({
                language: 'zh-CN',
                fomart: 'yyyy-mm-dd',
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });
        },
        methods: {
            ConfirmTypes() {

            },
            GetOrderInfo() {//获取订单信息
                var self=this;
                debugger;
                var param=self.Param;
                param["StartTime"]=$("#StartTime").val();
                param["EndTime"]=$("#EndTime").val();
                //var param={
                //    GameId: self.GameSelected,
                //    GoodTypeId: self.TypeSelected,//先默认账号
                //    GameGroupId: self.GroupSelected,
                //    GameServerId: self.ServerSelected,
                //    OrderStatus: self.StatusSelected,
                //    KeyWord: self.KeyWord,
                //    startTime: self.startTime,
                //    endTime: self.endTime,
                //    PageObj: self.Pagination
                //};
                //common.postWebJson(_GetOrderInfoUrl, param, function (data) {
                //    if (data.result) {
                //        //self.Orders=data.content.datas;
                //        //self.times==0?self.Games=data.Games:"";
                //        //self.Pagination=data.content.pagination;
                //        //common.SetPagination($('#paginator-test'), self, self.GetOrderInfo);
                //        //self.times++;
                //        //self.$router.go(0);
                //    } else {

                //    }
                //});
            },
            GetSizePage(size) {//设置页面的大小去查询页面数据
                var self=this;
                if (size) {
                    self.Pagination.rows=size;
                    self.GetOrderInfo(self.Pagination);
                }
            },
            GetStatusOrder(satus, name) {//查询不同状态的订单
                var self=this;
                if (satus>=0) {
                    self.StatusSelected=satus;
                    self.GetOrderInfo(self.Pagination);
                    $("#"+name).addClass("active");
                    $("#nave li[id!='"+name+"']").removeClass("active");
                }
            }
        }
    };

    //时间控件默认初始化
    $(".datepicker").datepicker({
        language: 'zh-CN',
        fomart: 'yyyy-mm-dd',
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });

    return components;
});