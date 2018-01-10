var dlmodule = ['vue', 'jquery', 'common', 'nav-top','v-search'];

require(dlmodule, function (Vue, $, common, nav, search) {
	var data = {};

	var vm = new Vue({
		el: '#app',
		data: function () {
			return data;
		},
		created: function () {

		},
		components: {
			'nav-top': nav,
			'v-search':search
		}

	});
		
})