//模块之间的操作
require(['vue', 'jquery', 'common', 'v-header', 'v-footer', 'footer-server', 'footer-nav', 'index-notice', 'index-convenience', 'index-hotgamelist', 'index-banner', 'index-tabslist', 'v-tab', "index-gameranking", 'index-adv', 'index-mgamelist', 'v-partner', 'index-nav'], function (Vue, $, common, head, footer, footerserver, footernav, notice, convenience, hotgamelist, banner, tabsListbox, tab, gameranking, adv, mgamelist, partner, nav) {
    debugger;
    new Vue({
        el: '#app',
        data() {
            return {
                tab1: notice,
                tab2: gameranking,
            }
        },
        created: function () {

        },
        components: {
            "v-header": head,
            "v-footer": footer,
            "v-tab": tab,
            "footer-server": footerserver,
            "footer-nav": footernav,
            "index-convenience": convenience,
            "index-hotgamelist": hotgamelist,
            "index-banner": banner,
            "index-tabslist": tabsListbox,
            "index-adv": adv,
            "index-mgameslist": mgamelist,
            "v-partner": partner,
            "index-nav":nav,
        }
    });

});