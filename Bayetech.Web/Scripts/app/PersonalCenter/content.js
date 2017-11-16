//头部模板
jsconfig.baseArr.push('PersonRight');
jsconfig.baseArr.push('PersonButtom');
jsconfig.baseArr.push('helpLeft');
define(jsconfig.baseArr, function ($, Vue, common, perR, perB, helpleft) {
    let html = `
         <div class ="center">
               <regleft :list="articleList" :view="view"></regleft>
                <div class ="personal_right">
                    <regperright :object="article"></regperright>
                    <regpersonbuttom></regpersonbuttom>
                </div>
        </div>
        `
    var html1 = `
            <div class ="personal_center">
                        <ul>
                            <ol><img src="../../Content/Images/personal_tx.png" /></ol>
                        </ul>
                        <ul>
                            <li>
                                <strong class ="f16 left">伟大的小源源</strong><span class="left">，欢迎你！商家状态：</span>
                                <div class ="online_ico">
                                    <a><span class ="online_ico_1 "></span><span class="online_ico_3"></span></a>
                                    <ul class ="online_con">
                                        <li class ="border"><a class ="online_ico_1">[我在线]</a></li>
                                        <li><a class ="online_ico_1 online_ico_2 gray_2">[离线]</a></li>
                                    </ul>
                                </div>
                                <span class ="left"><em class ="gray_2">【我在线】</em></span>
                                <span class ="online_ico_4">
                                    <div class ="online_note_1" style="display: none;"><p><a alt="关闭" title="关闭">X</a></p>离线时，您的担保类发布单会被系统隐藏，买家将无法查看，选择“在线”后可恢复显示。</div>
                                    <div class ="online_note_2" style="display: none;"><p><a alt="关闭" title="关闭">X</a></p>您的担保类发布单恢复显示，在此期间<span class ="red">请勿反复进行离在线操作</span>，如未正常显示请联系客服。</div>
                                    <div class ="online_note_3" style="display: none;"><p><a alt="关闭" title="关闭">X</a></p>离线时，需要您在线发货的商品将无法购买。选择寄售交易，客服24小时为您售货！</div>
                                </span>

                                <p class ="gray_2 clearfix">
                                    上次登录时间：2017-10-21 12: 16: 34
                                    上次登录IP：183.195.49.160, 120.27.173.72 (不是您登录的？ <a href="http://www.7881.com/user/toChangePassword.action" target="_blank" class ="blue">修改密码</a>)
                                </p>

                            </li>
                            <li>
                                <div class ="mjtx">
                                    <dl>
                                        <dd>
                                            买家信誉：
                                            <a href="http://www.7881.com/helpcenter/36057564234053938.html" class ="text_none">
                                                新用户
                                            </a>

                                        </dd>
                                        <dd>
                                            卖家信誉：
                                            <a href="http://www.7881.com/article-36057564234053938-0.html" class ="none">
                                                新用户
                                            </a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd><span style="color:#999">买家提醒：</span> <a href="http://www.7881.com/procurement/queryMyProcureOrder.action">等待付款（0）</a></dd>
                                        <dd><span style="color:#999">卖家提醒：</span> <a href="http://www.7881.com/sellertool/queryMySaleOrder.action">等待发货（0）</a></dd>
                                    </dl>
                                </div>
                            </li>

                            <li class ="mjtx">
                                <img src="../../Content/Images/vcard-.png" />
                                <a class ="ls" href="http://www.7881.com/commerical/toApprove.action">未认证</a>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <img src="../../Content/Images/lock-.png" />
                                <a class ="ls" href="http://www.7881.com/commerical/toChangetransactionPass.action">未设置支付密码</a>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <img src="../../Content/Images/phone.png" />
                                <a class ="ls" href="http://www.7881.com/commerical/toEditPhone.action">已设置手机绑定</a>
                            </li>
                            <div class ="mjtx">
                                <dl>
                                    <dd>
                                        <span style="color:#999;margin-left:12px; ">余额账户：</span>
                                        <strong id="strong_cgye" class ="blue"> 0.00  </strong> 元
                                    </dd>

                                    <dd>
                                        <span style="color:#999;display:inline;">保证金账户：</span>
                                        <strong style="color:#09F">0.00 </strong> 元
                                    </dd>


                                    <dd>
                                        <span style="color:#999;display:inline;">赔付金账户：</span>
                                        <strong class ="orange">0.00 </strong> 元
                                    </dd>

                                </dl>

                                <dl>
                                    <dd>
                                        <div class ="zh_ico01">
                                            <i class ="no"></i><span class="zh_cont01">
                                                您的账户余额，其中包含您销售商品后的所得款。您成功充值后的金额也会在该账户中显示。您可以通过申请“提现”流程，将该账户的款项提取到您指定的银行借记卡上。<a href="http://www.7881.com/helpcenter/148029829799131949.html" target="_blank" class ="blue">更多说明&gt; &gt; </a>
                                            </span>
                                        </div>
                                    </dd>
                                    <dd>
                                        <div class ="zh_ico02">
                                            <i class ="no"></i><span class="zh_cont02">
                                                您已开通的服务或商家准入申请所对应缴纳的保证金总额。您缴纳的保证金将冻结在7881系统账户上，当您退出某项准入/服务后，该所缴纳的该服务/准入对应的保证金款项会解冻并转入到您的余额账户上。<a href="http://www.7881.com/helpcenter/148029829799131949.html" target="_blank" class ="blue">更多说明&gt; &gt; </a>
                                            </span>
                                        </div>
                                    </dd>
                                    <dd>
                                        <div class ="zh_ico03">
                                            <i class ="no"></i><span class="zh_cont03">
                                                您发布带“赔”商品（无货赔付、效率保证金）时所冻结的赔付金。当带“赔”商品订单完成或下架并删除时，对应的被冻结赔付款项会被解冻。如果发生赔付，则直接从该账户中将赔付订单对应的款项转给买家。<a href="http://www.7881.com/helpcenter/148029829799131949.html" target="_blank" class ="blue">更多说明&gt; &gt; </a>
                                            </span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dd>
                                        <a href="http://www.7881.com/financerecord/incomeExpensesList.action" class ="yscztx">查看明细</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:addmoney()" class="yscztx">充值</a>&nbsp; &nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; &nbsp; <a href="http://www.7881.com/financecharge/toAddExtractcash.action" class ="yscztx">提现</a>
                                    </dd>
                                    <dd>
                                        <a href="http://www.7881.com/commerical/toServerAndIn.action" class ="yscztx">查看已开通服务/准入/押金</a>
                                    </dd>
                                    <dd>
                                        <a href="http://www.7881.com/commerical/toPeifuServer.action" class ="yscztx">查看赔付服务</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.7881.com/financerecord/compensationList.action" class="yscztx">查看赔付明细</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.7881.com/commerical/toCompensationRollIn.action" class="yscztx">充值</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.7881.com/commerical/toCompensationRollOut.action" class="yscztx">转出</a>
                                    </dd>
                                </dl>
                            </div>
                        </ul>
                    </div>
        `
    let findListUrl = "/api/Article/FindList"; //查询列表
    let findContentUrl = "/api/Article/FindContent"; //查询详情

    //表头数据
    var data = {
        mouduleid: "23",//帮助中心id
        articleList: [],
        article: {
            content: html1
        },
    }
    var components11 = {
        template: html,
        components: {
            "regleft": helpleft,
            "regperright": perR,
            "regpersonbuttom": perB,
        },
        data: function () {
            return data;
        },
        created: function () {
            this.findList();
        },
        nowVue: this,
        methods: {
            findList() {
                let nowVue = this;
                common.getWebJson(findListUrl, { value: this.mouduleid }, function (data) {
                    nowVue.articleList = data;
                });
            },
            view(value) {
                let nowVue = this;
                common.getWebJson(findContentUrl, { value: value }, function (data) {
                    debugger;
                    nowVue.article = data;
                });
            },
        },
    };


    return components11;
});