//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header', 'v-nav', 'v-search', 'game-list'],
	function (Vue, $, common, bootstrap, header, nav, search, GameList) {
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

	        },
	        methods: {
                //跳转商品列表
	            ToGoodList: function (id, name) {
	                localStorage.SearchParam=JSON.stringify({
	                    GameId: id,
	                    GameName: name,
	                });
	                var url=encodeURI(`${common.GetBaseUrl()}GoodList/GoodList.html`);
	                window.open(url);
	            },
	        },
	    });
	});