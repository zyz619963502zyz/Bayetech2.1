//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header'],
	function (Vue, $, common, bootstrap, header) {
	    new Vue({
	        el: '#app',
	        data() {
	            return {}
	        },
	        components: {
	            "v-header": header,
	        },
	        methods: {
	           
	        },
	    });

	});