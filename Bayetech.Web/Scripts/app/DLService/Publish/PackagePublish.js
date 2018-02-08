//模块之间的操作
require(['vue', 'jquery', 'common', 'nav-top', "../Scripts/app/API/Game"],
    function (Vue, $, common, top, GameAPI) {
        var data = {
            GameGroupList: [],
            GameServerList: [],
            DLTypeList: [],
            Data: {//表单实体
                Title: "",
                DLType: "",
                Price: "",
                PeriodDays: "",
                PeriodHours: "",
                GameId: 1,
                GroupId: 0,
                ServerId: 0,
                EfficiencyPrice: "",
                SavePrice: "",
                Description: "",
                Phone: "",
                QQ: "",
                ValidityPeriod: 0,
            },
        }
        new Vue({
            el: '#app',
            data: function () {
                return data;
            },
            created: function () {
                var self = this;
                //加载游戏区列表
                GameAPI.GetGroupList(this.Data.GameId, null, function (data) {
                    self.GameGroupList = data.content;
                });
                //加载代练类型列表
                $.get("/api/GoodType/GetDLType", { gameId: this.Data.GameId }, function (data) {
                    self.DLTypeList = data.content;
                });
            },
            watch: {
                "Data.GroupId": function () {//加载游戏服务器列表
                    var self = this;
                    GameAPI.GetServerList(this.Data.GroupId, null, function (data) {
                        self.GameServerList = data.content;
                        self.Data.ServerId = 0;
                    });
                },

            },
            components: {
                "nav-top": top,
            },
            methods: {
                Publish: function () {//发布需求
                    $.post("/api/DL/PackagePublish", this.Data, function (data) {
                        alert(data.content);
                    });
                },
            },
        });
    });