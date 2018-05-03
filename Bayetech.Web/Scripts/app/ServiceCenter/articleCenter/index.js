//咨讯中心模板

var module = ['vue', 'jquery', 'common', 'nav-top', 'artmodule','Scripts/app/ServiceCenter/articleCenter/details','v-footer','css!../Content/bootstrap/font-awesome.min', 'css!../Content/bootstrap/bootstrap.min','css!../../Content/common','css!../../Content/article'];

require(module, function (Vue, $, common, navt, article, details, footer) {
	var data = {
		step: article,

	};

    var vm = new Vue({
    	el: "#ArticleElm",
    	data(){
    		return data;
    	},
    	components: {
    		'nav-t': navt,
			'v-footer':footer
    	},
    	methods: {
    		//查看详细
    		Check: function (to) {
    			//if (this.step == article) {
    			//	this.step = article;
    			//} else if (this.step = details) {
				//	this.step = details;
    			//}
    			switch (to) {
    				case "article": this.step = article;
    					break;
    				case "details": this.step = details;
    					break;
    				default: this.step = article;
    					break;
    			}
    		}
    	}

    })
})


