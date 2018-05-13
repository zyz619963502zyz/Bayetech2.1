//jsconfig.baseArr.push("bootstrapValidator");
//require(jsconfig.baseArr, function ($, Vue, common, aaaa, validate) {
//    var _loginUrl = "/api/User/LoginIn"

//    //登录的数据
//    var data = {
//        GameUser:"11",
//        GamePass:""
//    }

//    new Vue({
//        el: '#app',
//        data:function(){
//            return data;
//        },
//        mounted:function(){
//            this.FormVlidate();
          
//        },
//        methods:{
//            SubmitLogin: function () {
//                if ($("#loginForm").data('bootstrapValidator').isValid()) {
//                    common.postWebJson(_loginUrl, JSON.stringify(this.$data), function (data) {
//                        alert(data.content);
//                    });
//                } 
//            },
//            FormVlidate: function () {
//                $('#loginForm').bootstrapValidator({
//                    message: 'This value is not valid',
//                    feedbackIcons: {
//                        valid: 'glyphicon glyphicon-ok',
//                        invalid: 'glyphicon glyphicon-remove',
//                        validating: 'glyphicon glyphicon-refresh'
//                    },
//                    //group: '.form-group',
//                    fields: {
//                        username: {
//                            message: 'The username is not valid',
//                            validators: {
//                                notEmpty: {
//                                    message: '账号不可以为空!'
//                                },
//                                stringLength: {
//                                    min: 6,
//                                    max: 30,
//                                    message: '账号的长度为6-30个字符之间!'
//                                },
//                                regexp: {
//                                    regexp: /^[a-zA-Z0-9_\.]+$/,
//                                    message: 'The username can only consist of alphabetical, number, dot and underscore'
//                                },
//                                different: {
//                                    field: 'password',
//                                    message: '账号和密码不可相同!'
//                                }
//                            }
//                        },
//                        password: {
//                            validators: {
//                                notEmpty: {
//                                    message: '密码不可以为空'
//                                },
//                                stringLength: {
//                                    min: 6,
//                                    max: 30,
//                                    message: '账号的长度为6-30个字符之间!'
//                                },
//                                different: {
//                                    field: 'username',
//                                    message: '账号和密码不可相同!'
//                                }
//                            }
//                        }

//                    }
//                });
//            }
//        }
//    });

//});
var UserCenterRequireArr = ['vue', 'jquery', 'common', 'bootstrapValidator'];

//个人中心主模块
require(UserCenterRequireArr, function () {
    var Vue = arguments[0];
    var $ = arguments[1];
    var common = arguments[2];
    var Validator = arguments[3];



    var vm = new Vue({
        el: '#app',
        data: {
            Name: "",
            Password: ""
        },
        mounted: function () {
            //this.FormVlidate();

        },
        methods: {
            SubmitLogin: function () {
                common.postWebJson("/api/User/LoginIn", JSON.stringify(this.$data), function (data) {
                    alert(data.content);
                    window.location.href = "../Home/NewIndex.html";
                }, function (error) {
                    alert(error);
                    });
            },
        }
    });

});



