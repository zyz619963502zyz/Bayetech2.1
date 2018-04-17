//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header', 'v-nav', 'v-search', 'game-list',"v-footer"],
	function (Vue, $, common, bootstrap, header, nav, search, GameList,footer) {
	    new Vue({
	        el: '#app',
	        data() {
	            return { }
	        },
	        components: {
	            "v-header": header,
	            "v-nav": nav,
	            "v-search": search,
	            "GameList": GameList,
                "v-footer":footer
	        },
	        methods: {
	        },
	    });
	});