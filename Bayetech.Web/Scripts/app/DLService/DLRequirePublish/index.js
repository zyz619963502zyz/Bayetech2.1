//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header'],
    function (Vue, $, common, bootstrap, header, nav, search, GameList) {
        var data = {
            GameGroupList: [],
            GameServerList: [],
            DLTypeList: [],
            DLDay: 0,
            DLHour: 0,
            IsSpecifyHired: false,
            IsTip: false,
            Data: {
                Title: "",
                Type: "",
                Price: 0,
                DLPeriod: 0,
                GameId: 0,
                GroupId: 0,
                ServerId: 0,
                EfficiencyDeposit: 0,
                SecurityDeposit: 0,
                Remark: "",
                Phone: "",
                QQ: "",
                ValidityPeriod: 0,
                SecretCode: "",
                Account: "",
                Password: "",
                Level2Password: "",
                RoleName: "",
                RoleLevel: 0,
            },
        }
        new Vue({
            el: '#app',
            data() {
                return data;
            },
            watch: {
                DLDay: function () {
                    this.DLPeriod = this.DLDay * 24 + this.DLHour;
                },
                DLHour: function () {
                    this.DLPeriod = this.DLDay * 24 + this.DLHour;
                },
            },
            components: {
                "v-header": header,
            },
            methods: {
                Publish: function () {
                    $.post("", this.Data, function () {

                    });
                },
            },
        });
    });