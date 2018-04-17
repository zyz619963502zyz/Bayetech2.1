//模块之间的操作
var GoodListMoudule=['vue', 'jquery', 'common','v-header', 'v-nav', 'GoodList', "ScreenBox","nav-top","v-footer"]
//alert(1);
require(GoodListMoudule, function (Vue, $, common, header, nav, goodlist, screenbox ,navt,foot) {
        var vm = new Vue({
            el: document.URL.indexOf("GoodToBuy")>=0?'#GoodToBuy':'#GoodList',
            data: {
                SearchResult: { aaaa: 111 }
            },
            created() {

            },
            nowVue: this,
            methods: {
                FindListCopy() { },
                OtherCopy() { },
            },
            components: {
                "v-header": header,
                "v-nav": nav,
                "screenbox": screenbox,
                "goodlist": goodlist,
                "nav-top": navt,
                "v-footer":foot
            },
            watch: {
                SearchResult: function () {//监听参数的变化
                    if (this.FindListCopy && this.searParam) {
                        this.FindListCopy(this.searParam);
                    }
                }
            }
        });

});
