//模块之间的操作
require(['vue', 'jquery', 'common', 'nav-top',"../Scripts/app/API/Game"],
    function (Vue, $, common, top, GameAPI) {
        var data = {
            GameGroupList: [],
            GameServerList: [],
            DLTypeList: [],
            DLDay: "",
            DLHour: "",
            IsSpecifyHired: false,
            IsTip: false,
            IsLevelDL: false,
            Data: {//表单实体
                Title: "",
                DLType: "",
                Price: "",
                DLPeriod: 0,
                GameId: 1,
                GroupId: "",
                ServerId: "",
                EfficiencyDeposit: "",
                SecurityDeposit: "",
                Remark: "",
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
                IsUseGameBonus:"" ,
                IsJoinUnion: "",
            },
        }
        new Vue({
            el: '#app',
            data: function() {
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
                    });
                },
                "Data.DLType": function () {
                    this.IsLevelDL = this.Data.DLType === "levelreplace";
                },
                DLPeriod: function() {
                    this.Data.DLPeriod = this.DLPeriod;
                },

            },
            computed: {
                DLPeriod: function () { //计算代练时间
                    return parseInt(this.DLDay) * 24 + parseInt(this.DLHour);
                },
            },
            components: {
                "nav-top": top,
            },
            methods: {
                Publish: function () {//发布需求
                    $.post("/api/DL/AddRequireMent", this.Data, function (data) {
                        alert(data?"发布成功":"发布失败");
                    });
                },
            },
        });
    });