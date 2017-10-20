//模块之间的操作
require(['vue', 'jquery', 'indexTab', 'convenience', 'hotgamelist', 'banner-box'], function (Vue, $, indexTab, convenience, hotgamelist, bannerBox) {
    debugger;
    new Vue({
        el: '#app',
        created: function () {

        },
        components: {
            "index-tab": indexTab,
            "convenience": convenience,
            "hot-game-list": hotgamelist,
            "banner-box": bannerBox,
        }
    });

});