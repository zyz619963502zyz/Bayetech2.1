//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'nav-top',"../Scripts/app/API/Game"],
    function (Vue, $, common, bootstrap, top, GameAPI) {
        var data = {
            GameGroupList: [],
            GameServerList: [],
            DLTypeList: [],
            DLDay: "",
            DLHour: "",
            IsSpecifyHired: false,
            IsTip: false,
            Data: {
                Title: "",
                Type: "",
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
            },
        }
        new Vue({
            el: '#app',
            data: function() {
                return data;
            },
            created: function () {
                var self = this;
                GameAPI.GetGroupList(this.Data.GameId, null, function (data) {
                    self.GameGroupList = data.content;
                });
            },
            watch: {
                DLDay: function () {
                    this.DLPeriod = this.DLDay * 24 + this.DLHour;
                },
                DLHour: function () {
                    this.DLPeriod = this.DLDay * 24 + this.DLHour;
                },
                "Data.GroupId": function () {
                    var self = this;
                    GameAPI.GetServerList(this.Data.GroupId, null, function (data) {
                        self.GameServerList = data.content;
                    });
                },
            },
            components: {
                "nav-top": top,
            },
            methods: {
                Publish: function () {
                    $.post("/api/DL/AddRequireMent", this.Data, function (data) {
                        alert(data);
                    });
                },
            },
        });
    });