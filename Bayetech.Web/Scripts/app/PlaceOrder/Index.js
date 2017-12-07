jsconfig.baseArr.push("SureBuy");
jsconfig.baseArr.push("OrderType");
require(jsconfig.baseArr, function (Vue, $, common, surebuy, order) {
    var vm = new Vue({
        el: '#PlaceOrderDiv',
        created() {
            //this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        mounted() {
            this.FormValidate();
        },
        data: {
        },
        methods: {
            FormValidate() {
                $('#loginForm').bootstrapValidator({
                    message: 'This value is not valid',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    //group: '.form-group',
                    fields: {
                        username: {
                            message: 'The username is not valid',
                            validators: {
                                notEmpty: {
                                    message: '账号不可以为空!'
                                },
                                stringLength: {
                                    min: 6,
                                    max: 30,
                                    message: '账号的长度为6-30个字符之间!'
                                },
                                regexp: {
                                    regexp: /^[a-zA-Z0-9_\.]+$/,
                                    message: 'The username can only consist of alphabetical, number, dot and underscore'
                                },
                                different: {
                                    field: 'password',
                                    message: '账号和密码不可相同!'
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: '密码不可以为空'
                                },
                                stringLength: {
                                    min: 6,
                                    max: 30,
                                    message: '账号的长度为6-30个字符之间!'
                                },
                                different: {
                                    field: 'username',
                                    message: '账号和密码不可相同!'
                                }
                            }
                        }

                    }
                });
            }
        },
        components: {
            'surebuy': surebuy,
            'order': order,
       }
    });
});