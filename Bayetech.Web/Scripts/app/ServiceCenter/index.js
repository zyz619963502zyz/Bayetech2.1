var PersonalHeadModule = ['vue', 'jquery', 'common', 'Pavigation']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, pavi) {
    var vm = new Vue({
        el: '#PerHeadDiv',
        data: {},
        components: {
            'regpavigation': pavi,
        }
    });

});