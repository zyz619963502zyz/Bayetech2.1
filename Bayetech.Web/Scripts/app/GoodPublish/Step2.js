//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'Scripts/app/GoodPublish/GoodInfo/Gold', 'Scripts/app/GoodPublish/AccountInfo/Gold'],
	function (Vue, $, common, bootstrap, goldGoldInfo, goldAccountInfo) {
	    new Vue({
	        el: '#app',
	        data() {
	            return {
	                "good_info_com": "goldGoldInfo",
	                "account_info_com": "goldAccountInfo",
	            }
	        },
	        components: {
	            "goldGoldInfo": goldGoldInfo,
	            "goldAccountInfo": goldAccountInfo,
	        },
	        methods: {

	        },
	    });

	});