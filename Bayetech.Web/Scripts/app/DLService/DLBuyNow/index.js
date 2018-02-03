//模块间操作
var moudule = ['vue', 'jquery', 'common', 'DLBuyNow']
require(moudule, function (Vue, $, common, dlBuyInfo) {
    //api
    var _GetServersUrl="/api/Order/GetServers";
    var _SubMitForm = "/api/Dl/SubmitDlInfo"

    //数据为左右整合数据
    var vm = new Vue({
        el: '#DlBuyInfo',
        data: {
            Groups: [],
            Servers:[],
            subMitObj: {
                GameId: 0,
                GoodNo:"",//编号
                GroupSelected: "",
                ServerSelected: "",
                Account: "",
                Password: "",
                PwdAgain: "",
                OrderPrice:"",
                RoleName: "",
                RoleLevel: "",
                BuyerQQ:"",//联系QQ
                BuyerPhone: "",//联系手机
                CurrentUserId:""
            }
        },
        methods: {
            GetServers(gourp){
            	var self = this;
				var gameId = 1;
                var param={gameId:gameId,parentId:gourp};
                common.getWebJson(_GetServersUrl, param, function (data) {
                    if (data.result) {
                       gourp == 0? self.Groups = data.content : self.Servers =data.content;
                    }
                });
            },
            SubMitForm() {
                var self = this;
                common.postWebJson(_SubMitForm, self.subMitObj, function (data) {
                    if (data.result) {
                       
                    }
                });
            }
        },
        created: function () {
            var self = this;
            self.GetServers(0);
        },
        components: {
            'dlbuyinfo': dlBuyInfo
        }
    });
});