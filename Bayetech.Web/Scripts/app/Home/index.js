//模块之间的操作
require(['vue', 'jquery', 'indexTab', 'convenience', 'hotgamelist'], function (Vue, $, indexTab, convenience, hotgamelist) {
    debugger;
    new Vue({
        el: '#app',
        created: function () {

        },
        components: {
            "index-tab": indexTab,
            "convenience": convenience,
            "hot-game-list": hotgamelist,
        }
    });

});