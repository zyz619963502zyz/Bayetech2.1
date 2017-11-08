jsconfig.baseArr.push("PwdRecoverTem");
require(jsconfig.baseArr, function ($, Vue, com, recoverTem) {
    //返回对应的找回页面
    var data = {
        ceshi: "111111111"
    };

    //Vue.component('recovertype', recoverTem)


    //根据选择确定使用那一套插槽，先默认使用返回type的插槽
    var vm = new Vue({
        el: '#FormArea',
        data: function () {
            return data;
        },
        components: {
            'recovertype': recoverTem
        },
        created: function () {

        },
        mounted: function () {
            var a = 1;
        },
        methods: {
            gggg: function (val) {
                alert("提示当前按钮!");
                if (true) {
                    for (var item in this.RecoverRoute) {
                        if (item.name == val)
                            this.contents = eval(item.name);
                    }
                }
            },

            GetPage111: function (val) {//被诅咒的方法。无论如何都访问不到
                if (true) {
                    var a = 1;
                    //for (var item in this.RecoverRoute) {
                    //    if (item.name == val)
                    //        this.contents = eval(item.name);
                    //}
                }
            }
        }
    });
})