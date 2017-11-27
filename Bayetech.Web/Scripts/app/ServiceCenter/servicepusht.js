//底部模板1
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `
            <div>
                <div class ="qList pusht clearfix">
                    <h3>常见问题</h3>
                    <ul>
                        <li><span class ="num">1</span><a href="" target="_blank">{{}}</a></li>
                        <li><span class ="num">2</span><a href="http://www.7881.com/helpcenter/248692316587202013.html" target="_blank">如何联系订单客服</a></li>
                        <li><span class ="num">3</span><a href="http://www.7881.com/helpcenter/248692203167715790.html" target="_blank">如何验证真假客服</a></li>
                        <li><span class ="num">4</span><a href="http://www.7881.com/helpcenter/134344990756337236.html" target="_blank">如何正确出售商品</a></li>
                        <li><span class ="num">5</span><a href="http://www.7881.com/helpcenter/73815958199886129.html" target="_blank">收货角色名如何修改</a></li>
                        <li><span class ="num">6</span><a href="http://www.7881.com/helpcenter/1.html" target="_blank">如何提现我的资金</a></li>
                        <li><span class ="num">7</span><a href="http://www.7881.com/helpcenter/268873779487604761.html" target="_blank">提现怎么收取手续费</a></li>
                        <li><span class ="num">8</span><a href="http://www.7881.com/helpcenter/248692281206556395.html" target="_blank">订单撤销后退款到哪</a></li>
                    </ul>
                </div>
            </div>
        `;

    var components = {
        template: html,
        props: ['object']
    };
    return components;
});



