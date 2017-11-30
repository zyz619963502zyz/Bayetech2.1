//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'swiper', 'v-header', 'v-footer', 'footer-server', 'footer-nav', 'index-notice', 'index-consult', 'index-convenience', 'index-hotgamelist', 'index-banner', 'index-tabslist', 'v-tab', "index-gameranking", 'index-adv', 'index-mgamelist', 'v-partner', 'index-nav', 'v-search', 'index-slidebox'],
	function (Vue, $, common, bootstrap, Swiper, head, footer, footerserver, footernav, notice, consult, convenience, hotgamelist, banner, tabsListbox, tab, gameranking, adv, mgamelist, partner, nav, search,slidebox) {
     
    new Vue({
        el: '#app',
        data() {
            return {
                notice: notice,
                consult:consult,
                gameranking: gameranking,
            }
        },
        components: {
            "v-header": head,
            "v-footer": footer,
            "v-tab": tab,
            "v-partner": partner,
            "v-search":search,
            "footer-server": footerserver,
            "footer-nav": footernav,
            "index-convenience": convenience,
            "index-hotgamelist": hotgamelist,
            "index-banner": banner,
            "index-tabslist": tabsListbox,
            "index-adv": adv,
            "index-mgamelist": mgamelist,
            "index-nav": nav,
            "index-slidebox": slidebox,

        }
    });

});