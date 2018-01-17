//模块间操作
var moudule = ['vue', 'jquery', 'common', 'DLBuyNow']
require(moudule, function (Vue, $, common ,dlBuyInfo) {
    //数据为左右整合数据
    var data={
        GroupSelected: "",
        ServerSelected: "",
        subMitObj: {
            DlNo: "",
            OrderPrice:"",
            Price: 0,
            DlType: 3,
            DlTypeName: "账号",
            BuyNum: "1",
            InternalTypeId:"1",//内部交易类型：（拍卖交易，邮寄交易等等）
            GameName: "",
            GameAccount: "",
            GameAccountAgain: "",
            GroupName: "",
            InternalTypeId:"",
            ServerName: "",
            BuyerPhone: "18717708731",
            BuyerQQ: "619963501",
            Signal:"",
            PromoNum: "1111",
        }
    };

    var vm = new Vue({
        el: '#DlBuyInfo',
        data: function () {
            return data;
        },
        methods: {
            SubMitForm() {

            }
        },
        created: function () {
            
        },
        components: {
            'dlbuyinfo': dlBuyInfo
        }
    });
});