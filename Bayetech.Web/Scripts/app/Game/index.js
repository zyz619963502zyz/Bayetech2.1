//模块之间的操作


require(['vue', 'jquery', 'common', 'v-nav', 'nav-top', 'game-list', "v-footer", 'css!../Content/bootstrap/bootstrap.min', 'css!../Content/common', 'css!../Content/gamelist'],
	function (Vue, $, common, nav, navt, GameList,footer) {
	    new Vue({
	        el: '#app',
	        data() {
	            return { }
	        },
	        components: {
	            "v-nav": nav,
                "nav-top":navt,
	            "GameList": GameList,
                "v-footer":footer
	        },
	        methods: {
	        },
	    });
	});