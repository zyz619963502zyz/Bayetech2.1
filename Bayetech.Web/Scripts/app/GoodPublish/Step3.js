//step3
define(['jquery', 'common'], function ($, common) {
    var html=`<div class="publish-result">
            <input type="hidden" id="success_gameId" value="G10">
            <input type="hidden" id="success_gtId" value="100001">
            <div class="result-box">
                <div class="result-con">
                    <dl class="clearfix">
                        <dt>
                            <img src="http://pic.7881.com/7881-2016/images/goods-publish/result-img-02.png" width="100%">
                        </dt>
                        <dd>
                            <h2>恭喜，商品发布完成！</h2>
                            <p>感谢您选择7881出售商品，预祝您的商品尽快成交~</p>
                            <div class ="operate-box">
                                <a href="javascript:void(0)" class ="com-btn-01 color01" @click="Next('step1')">继续发布</a>
                                <a class="com-btn-01 color05" href="/201612378006719.html">查看已发布商品</a>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="exchange-tips">
                    <h2><span>网游虚拟交易提示</span><em></em></h2>
                    <p>
                        <em>1.</em>
                        购买周边成功后，什么时候能拿到周边？<br>
                        订单付款成功后，7881将陆续通过快递物流发货，您可以通过个人中心-已购买的商品查询订单详情进度。
                    </p>
                    <p>
                        <em>2.</em>
                        物流时间？<br>
                        根据目的地不同，周边到货的时间页各有不同，详情可通过物流单号进行每日查询。
                    </p>
                    <p>
                        <em>3.</em>
                        发货短信是否收费？<br>
                        为了便于您及时了解发货信息，我们会在您购买的周边发货后给予免费短信通知，请注意查收。
                    </p>
                    <p>
                        <em>4.</em>
                        没收到货，或者商品损坏怎么办？<br>
                        如果遇到没收到货，或者商品损坏，请联系7881官方客服电话：4001877881
                    </p>
                </div>

            </div>
        </div>`;
    var components={
        name: "step3",
        template: html,
        methods: {
            //点击下一步
            Next: function (to) {
                this.$parent.Next(to);
            },
        },
    };
    return components;
});