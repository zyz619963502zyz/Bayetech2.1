﻿//模块之间的操作
require(['vue', 'jquery', 'common', 'nav-top', "../Scripts/app/API/Game"],
    function (Vue, $, common, top, GameAPI) {
        var data = {
            GameGroupList: [],
            GameServerList: [],
            DLTypeList: [],
            IsSpecifyHired: false,
            IsTip: false,
            IsLevelDL: false,
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
                SecretCode: "",
                Account: "",
                Password: "",
                Level2Password: "",
                RoleName: "",
                RoleLevel: "",
                CurrentLevel: "",
                TargetLevel: "",
                CurrentProfession: "",
                TargertProfession: "",
                AddAbility: "",
                IsUseGameBonus: false,
                IsJoinUnion: false,
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
                "Data.DLType": function () {
                    this.IsLevelDL = this.Data.DLType === "levelreplace";
                },

            },
            components: {
                "nav-top": top,
            },
            methods: {
                Publish: function () {//发布需求
                    
                    this.Data.IsJoinUnion = true;
                    this.Data.IsUseGameBonus = true;
                    $.post("/api/DL/RequireMentPublish", this.Data, function (data) {
                        alert(data.content);
                    });
                },
            },
        });
    });