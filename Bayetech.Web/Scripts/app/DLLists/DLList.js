jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common, paginator) {
	var dlhtml = `
			<div class ="main-content">
            <div class ="recommend-area">
                <h2>
                    <img src="http://pic.7881.com/7881-2016/images/dl-dnf/list/re-img-01.jpg" width="100%" />
                    <span class ="imgx">代练套餐</span>
                </h2>
                <div class ="recommend-list">
                    <a class ="on" data-value="0" href="javascript:void(0);">全部</a>
                    <a data-value='1' href="javascript:void(0);">等级代练</a>
                    <a data-value='2' href="javascript:void(0);">深渊代练</a>
                    <a data-value='3' href="javascript:void(0);">传说装备</a>
                    <a data-value='4' href="javascript:void(0);">日常代练</a>
                    <a data-value='5' href="javascript:void(0);">异界代刷</a>
                    <a data-value='6' href="javascript:void(0);">官方活动</a>
                    <a data-value='7' href="javascript:void(0);">PK代练</a>
                    <a data-value='8' href="javascript:void(0);">装备强化</a>
                    <a data-value='9' href="javascript:void(0);">代合天空</a>
                    <a data-value='11' href="javascript:void(0);">其他代练</a>
                    <a data-value='10' href="javascript:void(0);">活动站街</a>
                </div>
            </div>
            <div class ="goods-search-box">
                <div class ="search-form">
                    <div class ="search-item search-area search-area-q">
                        <input type="text" data-id="" id='group' value="游戏名称" readonly="readonly" />
                        <div class ="arrow-icon">
                            <em class ="iconfont icon-down">&#xe621; </em><em class="iconfont icon-up">
                                &#xe624;
                            </em>
                        </div>
                        <span></span>
                    </div>
                    <div class ="search-item search-area search-area-f">
                        <input type="text" data-id="" id='group' value="全部大区" readonly="readonly" />
                        <div class ="arrow-icon">
                            <em class ="iconfont icon-down">&#xe621; </em><em class="iconfont icon-up">
                                &#xe624;
                            </em>
                        </div>
                        <span></span>
                    </div>
                    <div class ="search-item search-area search-area-f">
                        <input type="text" id="server" value="全部服务器" readonly="readonly" data-id="" />
                        <div class ="arrow-icon">
                            <em class ="iconfont icon-down">&#xe621; </em><em class="iconfont icon-up">
                                &#xe624;
                            </em>
                        </div>
                        <span></span>
                    </div>
                    <div class ="search-item search-synthesis">
                        <label class ="placeholder">
                            <input type="text" id="goods-input" maxlength="32" />
                            <span>请输入搜索内容, 支持商品编号</span>
                        </label>
                    </div>
                    <div class ="search-item search-icon">
                        <em class ="iconfont">&#xe964; </em>
                        <span>搜索</span>
                    </div>
                    <div class ="search-item search-btn">
                        <a class ="btn-public" href="#"><em class ="iconfont">&#xe6f6; </em><span class="qdl ">我想发套餐</span></a>
                    </div>
                </div>

                <div class ="select-box select-q">
                    <div class ="arrow-icon"><em class ="iconfont icon-up">&#xe604; </em></div>
                    <ul id="glist"></ul>
                </div>
                <div class ="select-box select-f">
                    <div class ="arrow-icon"><em class ="iconfont icon-up">&#xe604; </em></div>
                    <ul></ul>
                </div>
            </div>
            <div class ="fasttips-box">
                <div class ="sort-inner clearfix">
                    <ul class ="sorts">
                        <li class ="sort on">
                            <a class ="link" href="javascript:void(0);" title="默认排序">
                                <span>默认排序</span><em class="create_time down default"></em>
                            </a>
                        </li>
                        <li class ="sort">
                            <a class ="link" href="javascript:void(0);" title="价格排序">
                                <span>价格排序</span><em class="price down"></em>
                            </a>
                        </li>
                        <li class ="sort">
                            <a class ="link" href="javascript:void(0);" title="发布时间">
                                <span>发布时间</span><em class="create_time down"></em>
                            </a>
                        </li>
                    </ul>
                    <div class ="filter">
                        <label><input type="checkbox" value="2"><span>只看工作室套餐</span></label>
                    </div>
                </div>
                <div class ="pager">
                    <div class ="item"><span class ="current">1</span>/<span class ="pages">100</span></div>
                    <a class ="link prev" title="上一页" href="javascipt:void(0);">
                        <span class ="icon icon-btn-prev-1"></span>
                    </a>
                    <a class ="link next" title="下一页" href="javascipt:void(0);">
                        <span class ="icon icon-btn-next-2"></span>
                    </a>
                </div>
            </div>
            <div class ="list-block">
                <div class ="expand-goods-list">
                    <ul class ="clearfix recgoods"></ul>
                </div>
                <div class ="goods-list">
                    <table border="0" cellspacing="0" cellpadding="0" id="goods_box_list">
                        <thead>
                            <tr>
                                <th width="430">代练标题</th>
                                <th width="140">代练价格</th>
                                <th width="170">保证金</th>
                                <th width="86">完成时间</th>
                                <th width="124">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>

                    </table>
                    <div class ="com-page">
                        <div class ="com-page-l"><span>共190条</span><span>20条/页</span><span>共9999页</span></div>
                        <div class ="page-con">
                            <div id="pages-box"></div>
                        </div>
                    </div>
                </div>
                <div class ="goods-no-data" style="display: none">
                    <dl>
                        <dt><img src="http://pic.7881.com/7881-2016/images/dl-dnf/list/no-data.png" /></dt>
                        <dd>
                            <h2>天呐，居然没有找到任何信息！ </h2>
                            <p>您也可以减少限制条件继续寻找...</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
            
		`;
	var dlmodule = {
		name:'DLList',
		template: dlhtml,

	};
	return dlmodule;

})
