jsconfig.baseArr.push("bootstrap");
jsconfig.baseArr.push("bootstrapValidator");
require(jsconfig.baseArr, function ($, Vue, common, aaaa, validate) {
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
        created:function(){
            $('#form').bootstrapValidator({
                message: 'This value is not valid',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                //group: '.form-group',
                fields: {
                    firstName: {
                        group: '.group',
                        validators: {
                            notEmpty: {
                                message: 'The first name is required and cannot be empty'
                            }
                        }
                    },
                    lastName: {
                        // The "group" option can be set via HTML attribute
                        // <input type="text" class="form-control" name="lastName" data-bv-group=".group" />
                        validators: {
                            notEmpty: {
                                message: 'The last name is required and cannot be empty'
                            }
                        }
                    },
                    username: {
                        message: 'The username is not valid',
                        validators: {
                            notEmpty: {
                                message: 'The username is required and cannot be empty'
                            },
                            stringLength: {
                                min: 6,
                                max: 30,
                                message: 'The username must be more than 6 and less than 30 characters long'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9_\.]+$/,
                                message: 'The username can only consist of alphabetical, number, dot and underscore'
                            },
                            different: {
                                field: 'password',
                                message: 'The username and password cannot be the same as each other'
                            }
                        }
                    },
                    email: {
                        validators: {
                            emailAddress: {
                                message: 'The input is not a valid email address'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            identical: {
                                field: 'confirmPassword',
                                message: 'The password and its confirm are not the same'
                            },
                            different: {
                                field: 'username',
                                message: 'The password cannot be the same as username'
                            }
                        }
                    }
                }
            });
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

