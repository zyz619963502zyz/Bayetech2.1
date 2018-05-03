//咨讯中心模板

var module = ['vue', 'jquery', 'common', 'nav-top', 'artmodule','css!../../Content/bootstrap/font-awesome.min', 'css!../../Content/bootstrap/bootstrap.min','css!../../../../Content/common','css!../../../../Content/article'];

require(module, function (Vue, $, common, navt,article) {
    var data = {};

    var vm = new Vue({
    	el: "#ArticleElm",
    	data(){
    		return data;
    	},
    	components: {
    		'nav-t': navt,
			'artmodule':article
    	},

    })
})


