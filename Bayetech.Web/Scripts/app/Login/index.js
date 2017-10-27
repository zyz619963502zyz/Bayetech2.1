jsconfig.baseArr.push("bootstrap");
jsconfig.baseArr.push("bootstrapValidator");
require(jsconfig.baseArr, function ($, Vue, common) {
    var _loginUrl = "/api/Account/LoginIn"

    //登录的数据
    var data = {
    GameUser:"",
    GamePass:""
    }

    $('form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱地址不能为空'
                    }
                }
            }
        }
    });

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

