//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header', 'Scripts/app/GoodPublish/Step1'],
	function (Vue, $, common, bootstrap, header,step1) {
	    new Vue({
	        el: '#app',
	        data() {
	            return {}
	        },
	        components: {
	            "v-header": header,
	            "step1": step1,
	        },
	        methods: {
	           
	        },
	    });

	});