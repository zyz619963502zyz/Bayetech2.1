//资讯中心查看详情

define(jsconfig.baseArr, function (Vue, $, common) {
	var details = `<article class="r-article pull-right">
			<div class="news-hd">
				<h1>【公告】 关于剑侠情缘3游戏币交易服务费调整公告</h1>
				<div class="news-date"><span>发布者：admin</span><span>发布时间：2018-04-18</span></div>
			</div>
			<div class="newsCont">
				<!--<p>尊敬的用户：</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢广大用户一直对7881游戏交易平台的支持和关注！</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;为了给您提供更加优质的服务，创造一个公平有序的交易环境，自2018年4月18日14:00（周三）起，《剑侠情缘3》“游戏币”商品交易成功后，将向卖家收取适当的交易服务费。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;网站承诺：所收取的服务费用于为您提供最安全的虚拟交易环境，让您享受更安全、更高效、更专业、更贴心的交易体验。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;《剑侠情缘3》商品交易服务费计算方法：</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;游戏币类目下 2%手续费</p>
				<p>如您仍有疑问，请进入客服中心进行提问，客服将在10分钟内为您答疑。</p>
				<p>感谢您克鲁赛德姐夫都关注与支持，祝您生活愉快！</p>-->
				<p></p>
				<p class="back"><a href="#" @click="Article('article')">&lt;&lt;返回列表</a></p>
			</div>
		</article>`;

	var detaildata = {};

	var components = {
		name: "details",
		template: details,
		data() {
			return detaildata;
		},
		methods: {
			Article: function (to) {
				this.$root.step = this.$root.defaultStep;
			}
		}
	}
	
	return components;


})