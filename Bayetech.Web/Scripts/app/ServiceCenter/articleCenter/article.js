//资讯中心模板

define(jsconfig.baseArr, function (Vue, $, common) {
	var articlelist = `<article class="r-article pull-right">
                    <h2>本站公告</h2>
                    <div class="content">
                        <dl v-for="item in listdata">
                            <dt>
                                <a href="#" class="title">{{item.Title}}</a>
                            </dt>
                            <dd>{{item.Introduce}} <a href="#" class="detail">查看详情</a></dd>
                        </dl>
                    </div>
                </article>`;

	var articleListUrl = "/api/Article/FindArticleList";//数据来源
	
	var articleData = {
		listdata: [
			{
				keywords: "",
				Title: '',
				Introduce: '',

			}
		]
	};

	var artCompnent = {

		template: articlelist,
		
		data() {
			return articleData;
		},

		created() {
			var that = this;
			that.findlist(25)
		},
		methods: {
			findlist: function (moduleId) {
				var that = this;
				common.getWebJson(articleListUrl, { value: moduleId }, function (data) {
					if (data.result) {
						that.listdata = data.content;
					}
				})
			}
		}
	};
	return artCompnent;
})