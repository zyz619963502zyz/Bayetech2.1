var module = ['vue', 'jquery', 'common', 'DLList','nav-top']

require(module,function(Vue, $, common, dllist, nav){
	var data = {};

	var vm = new Vue({
		el: '#app',
		data: function () {
			return data;
		},
		created: function () {

		},
		components: {
			'dllist': dllist,
			'nav-top':nav
		}

	})
		
})