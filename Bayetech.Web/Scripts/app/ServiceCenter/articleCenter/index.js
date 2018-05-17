//咨讯中心模板

var module = ['vue', 'jquery', 'common', 'nav-top','v-footer','Scripts/app/ServiceCenter/articleCenter/article','Scripts/app/ServiceCenter/articleCenter/details','css!../Content/bootstrap/font-awesome.min', 'css!../Content/bootstrap/bootstrap.min','css!../../Content/common','css!../../Content/article'];

require(module, function (Vue, $, common, navt, footer,article,details) {
	var data = {
		ArticleUrl: "/api/Article/FindArticleList",
		listdata: [],
		defaultStep:article,
		step: article,
		moduleId:25
	};

    var vm = new Vue({
    	el: "#ArticleElm",
    	data(){
    		return data;
    	},
    	created() {
    		var that = this;
    	    that.findlist(25)
    	},
    	components: {
    		'nav-t': navt,
			'v-footer':footer
    	},
    	methods: {
    		findlist: function (moduleId) {
				var that = this;
				common.getWebJson(that.ArticleUrl, { value: moduleId }, function (data) {
					if (data.result) {
						that.$root.$emit("GetListdata", data.content);
					}
				})
			}
    	}

    })
})


