jsconfig.baseArr.push("bootstrap");
jsconfig.baseArr.push("bootstrapValidator");
require(jsconfig.baseArr, function ($, Vue, common) {
    var _loginUrl = "/api/Account/LoginIn"

    //登录的数据
    var data = {
    GameUser:"",
    GamePass:""
    }

    new Vue({
        el: '#LoginMain',
        data:function(){
            return data;
        },
        methods:{
            SubmitLogin: function () {
                common.postWebJson(_loginUrl, JSON.stringify(this.$data), function (data) {
                    alert(data.content);
                });
            }
        }
    });
});

