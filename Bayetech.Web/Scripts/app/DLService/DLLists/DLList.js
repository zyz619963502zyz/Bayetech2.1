jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common, paginator) {
	var dlhtml = `
			 <div class ="goods-search-box">
                    <div class ="search-form">
                        <div class ="search-item search-area search-area-q">
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
                        <div class ="search-item search-area search-area-f">
                            <input type="text" id="server" value="游戏名称" readonly="readonly" data-id=""> <div class ="arrow-icon">
                                <em class ="iconfont icon-down"> </em><em class="iconfont icon-up">
                                    
                                </em>
                            </div> <span></span>
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
            
		`;
	var dlmodule = {
		name:'DLList',
		template: dlhtml,

	};
	return dlmodule;

})
