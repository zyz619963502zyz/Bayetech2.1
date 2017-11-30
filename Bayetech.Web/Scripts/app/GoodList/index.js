//模块之间的操作
var GoodListMoudule = ['vue', 'jquery', 'common', 'Screen', 'GoodList']
//alert(1);
require(GoodListMoudule, function (Vue, $, common, mediacy, tabuiation) {
    //Api
    let findListUrl = "/api/PointTrading/GameRequirementsList"; //查询列表
    //筛选和列表整合数据
    var data = {
        //注册筛选
        Screenobject: {

        },
        //注册列表
        PointTradingobiect: [
        ]
    }

    //注册主键到标签
    Vue.component('regboxtop', mediacy);
    Vue.component('regboxmiddle', tabuiation);

    var vm = new Vue({
        el: '#PointDiv',
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
                common.getWebJson(findListUrl, { value: 23 }, function (data) {
                    nowVue.PointTradingobiect = data;
                });
            }
        },
    });
});

//{{props.urltext}}