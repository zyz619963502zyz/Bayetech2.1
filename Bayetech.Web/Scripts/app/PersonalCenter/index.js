var PersonalHeadModule = ['vue', 'jquery', 'common', 'PersonalHead', 'Pavigation']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, perHead,pavi) {
    //api
    let perHeadUrl = "";

    //表头数据
    var data = {


    }

    //注册主键
    Vue.component('regperhead', perHead);
    Vue.component('regpavigation', pavi);
    var vm = new Vue({
        el: '#PerHeadDiv',
        data: function () {
            return data;
        },
        created: function () {

        }
    });

});