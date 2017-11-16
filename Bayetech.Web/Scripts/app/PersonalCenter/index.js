var PersonalHeadModule = ['vue', 'jquery', 'common', 'PersonalHead', 'Pavigation', 'Percontent']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, perHead, pavi, Percon) {
    //api
    //注册主键
    //Vue.component('regperhead', perHead);
    //Vue.component('regpavigation', pavi);
    //Vue.component('regleft', left);
    //Vue.component('regperright', perRight);
    //Vue.component('regpersonbuttom', perButtom);
    //Vue.component('regcontent', Percon);

    var vm = new Vue({
        el: '#PerHeadDiv',
        data:{},
        components: {
            'regperhead': perHead,
            'regpavigation':pavi,
            'regrercon': Percon,
        }
    });

});