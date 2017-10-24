//模块之间的操作
require(['vue', 'jquery', 'indexTab', 'convenience', 'hotgamelist', 'banner-box', 'tabsList-box', 'c-tab'], function (Vue, $, indexTab, convenience, hotgamelist, bannerBox, tabsListbox, ctab) {
    debugger;
    new Vue({
        el: '#app',
        data() {
            return {
                tab1: indexTab,
            }
        },
        created: function () {

        },
        components: {
            "convenience": convenience,
            "hot-game-list": hotgamelist,
            "banner-box": bannerBox,
            "tabslist-box": tabsListbox,
            "c-tab": ctab,
        }
    });

});