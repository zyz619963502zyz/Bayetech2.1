//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header', 'v-nav', 'v-search', 'index-notice', 'index-consult', 'index-convenience'
    , 'index-hotgamelist', 'index-banner', 'index-tabslist', 'v-tab', "index-gameranking", 'index-adv', 'index-mgamelist'
    , 'footer-server', 'index-slidebox', 'nav-top', 'v-footer', 'css!../Content/bootstrap/bootstrap.min', 'css!../Content/swiper/swiper.min', 'css!../Content/bootstrap/font-awesome.min', 'css!../../Content/common', 'css!../../Content/homepage'],
	function (Vue, $, common, bootstrap, header, nav, search, notice, consult,
		convenience, hotgamelist, banner, tabsListbox, tab, gameranking, adv, mgamelist, fserver, slidebox, navt,footer) {
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
            "v-header": header,
            "v-nav":nav,
            "v-tab": tab,
            "footer-server": fserver,
            "v-search": search,
            "index-convenience": convenience,
            "index-hotgamelist": hotgamelist,
            "index-banner": banner,
            "index-tabslist": tabsListbox,
            "index-adv": adv,
            "index-mgamelist": mgamelist,
            "index-slidebox": slidebox,
            "nav-top": navt,
            "v-footer": footer
        }
    });

});