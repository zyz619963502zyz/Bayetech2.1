//筛选栏位
define(jsconfig.baseArr, function () {

    var html=`
            <div class ="screen-box">
                <div class ="screen-tit">
                    <div class ="l"><b>商品筛选</b><span>共找到<em>579</em>个商品</span></div>
                    <div class ="r">
                        <a href="http://www.7881.com/release-G10-0-100003-1-1.html" class ="sell-a"><em><img src="http://pic.7881.com/7881-2016/images/list/sell-icon.png" width="16" height="16" alt="" /></em>我要出售</a>

                        <a href="http://www.7881.com/procurement-complete-G10-0-0-100003.html" class ="dealfin-a"><em><img src="http://pic.7881.com/7881-2016/images/list/dealfin-icon.png" width="16" height="16" alt="" /></em>交易完成</a>
                    </div>
                </div>
                <div class ="screen-item-box">
                    <div class ="screen-item">
                        <div class ="sl-head"><span title="所在区">所在区</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">

                                <li for="var item in content">
                                    <a href="javascript:void(0)" title="体验区">
                                        <span class ="check-icon"></span>
                                        <span class ="text" value="G10P030" fixKey="groupId">体验区</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class ="sl-foot">
                            <div class ="sl-foot-function clearfix">

                                <a class ="sl-more more-ac" href="javascript:void(0);"><span>更多</span><i></i></a>
                            </div>
                            <div class ="sl-foot-btns">
                                <a class ="btn-qx" href="javascript:void(0);">取消</a>
                                <a class ="btn-tj" href="javascript:void(0);">提交</a>
                            </div>
                        </div>
                    </div>
                    <div class ="screen-item">
                        <div class ="sl-head"><span title="性别">性别</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">
                                <li>
                                    <a href="javascript:void(0)" title="男">
                                        <span class ="check-icon"></span>
                                        <span class ="text" value="男" unFixKey="50233">男</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" title="女">
                                        <span class ="check-icon"></span>
                                        <span class ="text" value="女" unFixKey="50233">女</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class ="sl-foot">
                            <div class ="sl-foot-function clearfix">

                                <a class ="sl-more more-ac" href="javascript:void(0);"><span>更多</span><i></i></a>
                            </div>
                            <div class ="sl-foot-btns">
                                <a class ="btn-qx" href="javascript:void(0);">取消</a>
                                <a class ="btn-tj" href="javascript:void(0);">提交</a>
                            </div>
                        </div>
                    </div>
                    <div class ="screen-item">
                        <div class ="sl-head"><span title="职业">职业</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">
                                <li v-for="var item in Professions">
                                    <a href="javascript:void(0)" title="ProfessionName">
                                        <span class ="check-icon"></span>
                                        <span class ="text" value="item.ProfessionName" unFixKey="item.ProfessionId">{{ProfessionName}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class ="sl-foot">
                            <div class ="sl-foot-function clearfix">
                                <a class ="sl-more more-ac" href="javascript:void(0);"><span>更多</span><i></i></a>
                            </div>
                            <div class ="sl-foot-btns">s
                                <a class ="btn-qx" href="javascript:void(0);">取消</a>
                                <a class ="btn-tj" href="javascript:void(0);">提交</a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           `

    var api= "../"

    var data={
        Gourps: [],
        Severs: [],
        Professions: [],
    };

    var ScreenCompnent={
        template: OrderHtml,
        data() {
            return data;
        },
        created(){
            var self=this;
            self.$root.$on('MainInfo', function (data) {
                self.ServerName = data.content.ServerName;
            });
        },
        methods: {

        }
    };

    return ScreenCompnent;
})
