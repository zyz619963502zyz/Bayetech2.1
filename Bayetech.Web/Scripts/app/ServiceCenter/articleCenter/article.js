//资讯中心模板
jsconfig.baseArr.push('Scripts/app/ServiceCenter/articleCenter/article');
jsconfig.baseArr.push('Scripts/app/ServiceCenter/articleCenter/details');
define(jsconfig.baseArr, function (Vue, $, common,article,details) {
	var articlelist = `<article class="r-article pull-right">
                    <h2>本站公告</h2>
                    <div class="content">
                        <dl v-for="item in listdata">
                            <dt>
                                <a href="#" class="title"><span v-if="item.ModuleId == 25">【{{item.KeyWord}}】</span>{{item.Title}}</a>
                            </dt>
                            <dd>{{item.Introduce}} <a href="#" class="detail" @click="Detail('details')"><i class="fa fa-hand-o-right" ></i>&nbsp;查看详情</a></dd>
                        </dl>
                    </div>
                </article>`;
	
	var articleData = {
		listdata: 
			{
				ModuleId:'',
				KeyWord: '',
				Title: '',
				Introduce: '',
			},
		moduleId: 25
	};

	var artCompnent = {
		name:"article",
		template: articlelist,
		
		data() {
			return articleData;
		},
		created() {
			var that = this;
			//that.listdata = that.$root.findlist(25)
			that.$root.$on('GetListdata', function (data){
				that.listdata = data;
			});
		},
		methods: {
			//查看详细
    		Check: function (to) {
    			//if (this.step == article) {
    			//	this.step = article;
    			//} else if (this.step = details) {
				//	this.step = details;
    			//}
				var that = this;
    			switch (to) {
    				case "article": that.$root.step = article;
    					break;
    				case "details": that.$root.step = details;
    					break;
    				default: that.$root.step = article;
    					break;
    			}
    		},

    		Detail: function (to) {
    			var that = this;
				that.Check(to)
			}
		}
	};
	return artCompnent;
})