define("ScreenModel", jsconfig.baseArr, function (Vue, $, common) {
    var screenHtml = ` <div  template="RegBoxTop">
            <div class="slobar-01 clearfix">
                <div class="list-sort">
                    <ul class="clearfix">
                        <li class="def" column="default"><a href="javascript:void(0)"><span>默认排序</span></a></li>
                        <li class="release-time" column="perUnitPrice"><a href="javascript:void(0)"><span>单价</span><em class="iconfont" orderby="asc">&#xe9a6;</em></a></li>
                        <li class="pri sort-adesc" column="price"><a href="javascript:void(0)"><span>价格</span><em class="act-asc" orderby="asc"><i class="asc"></i><i class="desc"></i></em></a></li>
                        <li class="release-time sort-adesc" column="create_time"><a href="javascript:void(0)"><span>发布时间</span><em class="act-desc" orderby="desc"><i class="asc"></i><i class="desc"></i></em></a></li>
                        <li class="release-time" column="t6.safety_score"><a href="javascript:void(0)"><span>安全星级</span><em class="iconfont" orderby="desc">&#xe65c;</em></a></li>
                    </ul>
                </div>
                <div class="r clearfix">
                    <div class="small-page clearfix">
                        <ul class="items">
                            <li class="item">
                                <a class="link prev disab" title="上一页" href="javascript:void(0);">
                                    <span class="icon icon-btn-prev-1"></span>
                                </a>

                            </li>
                            <li class="item"><span class="current">1</span>/<span class="pages">10</span></li>
                            <li class="item">
                                <a class="link next disab" title="下一页" href="?pageNum=2&gameId=G479&gtid=100003&orderBy=create_time desc">
                                    <span class="icon icon-btn-next-1"></span>
                                </a>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="slobar-02 clearfix">
                <div class="sch keyWord-sch">
                    <span>关键字：</span>
                    <input type="text" class="common-input h-30" placeholder="输入您要搜索的关键字" />
                    <a href="javascript:void(0)">确定</a>
                </div>
                <div class="sch pr-sch">
                    <span>价格筛选：</span>
                    <input type="text" class="common-input h-30 onlynums minPrice" placeholder="¥" />
                    <em>-</em>
                    <input type="text" class="common-input h-30 onlynums maxPrice" placeholder="¥" />
                    <a href="javascript:void(0)">确定</a>
                </div>
            </div>
        </div>`
    var screenComponent = {
        props: ['value'],
        template:screenHtml
    };

    return screenComponent;
});