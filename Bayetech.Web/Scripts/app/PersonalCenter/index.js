var PersonalHeadModule = ['vue', 'jquery', 'common', 'PersonalHead', 'Pavigation', 'helpLeft', 'PersonRight', 'PersonButtom']
//个人中心主模块
require(PersonalHeadModule, function (Vue, $, common, perHead, pavi, left,perRight,perButtom) {

    let html = `
         <div class ="center">
                <div class ="personal_right">
                    <PersonRight></PersonRight>
                    <PersonButtom></PersonButtom>
                </div>
        </div>
        `
    //api
    let findListUrl = "/api/Article/FindList"; //查询列表

    //表头数据
    var data = {
        mouduleid: "23",//帮助中心id
        articleList: []
    }

    //注册主键
    Vue.component('regperhead', perHead);
    Vue.component('regpavigation', pavi);
    Vue.component('regleft', left);
    Vue.component('regperright', perRight);
    Vue.component('regpersonbuttom', perButtom);
    var vm = new Vue({
        el: '#PerHeadDiv',
        data: function () {
            return data;
        },
        created: function () {
            this.findList();
        },
        nowVue: this,
        methods: {
            findList() {
                let nowVue = this;
                common.getWebJson(findListUrl, { value: this.mouduleid }, function (data) {
                    nowVue.articleList = data;
                });
            },
        },
    });

    var components = {
        template: html


    };

    return components;

});