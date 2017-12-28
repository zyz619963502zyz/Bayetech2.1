jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common,paginator) {
    var middleHtml = `
        <div>
         <div>
            <div class ="slobar-01 clearfix">
                <div class ="list-sort">
                    <ul class ="clearfix">
                        <li class ="def" column="default"><a href="javascript:void(0)"><span>默认排序</span></a></li>
                        <li class ="release-time" column="perUnitPrice"><a href="javascript:void(0)"><span>单价</span><em class="iconfont" orderby="asc">&#xe9a6;</em></a></li>
                        <li class ="pri sort-adesc" column="price"><a href="javascript:void(0)"><span>价格</span><em class="act-asc" orderby="asc"><i class="asc"></i><i class ="desc"></i></em></a></li>
                        <li class ="release-time sort-adesc" column="create_time"><a href="javascript:void(0)"><span>发布时间</span><em class="act-desc" orderby="desc"><i class="asc"></i><i class ="desc"></i></em></a></li>
                        <li class ="release-time" column="t6.safety_score"><a href="javascript:void(0)"><span>安全星级</span><em class="iconfont" orderby="desc">&#xe65c;</em></a></li>
                    </ul>
                </div>
                <div class ="r clearfix">
                    <div class ="small-page clearfix">
                        <ul class ="items">
                            <li class ="item">
                                <a class ="link prev disab" title="上一页" href="javascript:void(0);">
                                    <span class ="icon icon-btn-prev-1"></span>
                                </a>
                            </li>
                            <li class ="item"><span class ="current">1</span>/<span class ="pages">10</span></li>
                            <li class ="item">
                                <a class ="link next disab" title="下一页" href="?pageNum=2&gameId=G479&gtid=100003&orderBy=create_time desc">
                                    <span class ="icon icon-btn-next-1"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class ="slobar-02 clearfix">
                <div class ="sch keyWord-sch">
                    <span>关键字：</span>
                    <input type="text" class ="common-input h-30" v-model:value="keyword" placeholder="输入您要搜索的关键字" />
                    <a href="javascript:void(0)" @click="GetLikeGoods">确定</a>
                </div>
                <div class ="sch pr-sch">
                    <span>价格筛选：</span>
                    <input type="text" class ="common-input h-30 onlynums minPrice" placeholder="¥" />
                    <em>-</em>
                    <input type="text" class ="common-input h-30 onlynums maxPrice" placeholder="¥" />
                    <a href="#">确定</a>
                </div>
            </div>
        </div>
        <div class ="list-box list-type-03">
        <div class ="list-item"  v-for="item in ListObj">
                <div class ="list-item-box" >
                    <div class="list-v part-01 clearfix">
                        <div class="img-box">
                            <a v-bind:href="item.ScreenshotsCertification" target="_blank">
                                <img v-bind:src="item.GoodFirstPicture" />
                                <h3 class="authenticate">截图认证</h3>
                                <h3>149图</h3>
                            </a>
                        </div>
                        <div class="txt-box">
                            <h2>
                                <a v-bind:href="item.aurl" target="_blank">
                                    <em class="tags icon-ptdf" ></em>
                                    <span>{{item.GoodTitle}} </span>
                                </a>
                            </h2>
                            <h4><i>游戏区服：</i><span>
                                {{item.GroupName}}/{{item.ServerName}}</span></h4>
                            <p>
                                <i>账号安全：</i><span class="stars-box  s5"></span>
                            </p>
                        </div>
                    </div>
                    <div class="list-v part-02">
                        <h5>¥ {{item.GoodPrice}}</h5>
                    </div>
                    <div class="list-v part-04">
                        <div class="tags-box">
                            <p title="此账号支持过户，购买更安全"><em class="tags icon-zhgh"></em>账号过户</p>
                            <p title="该账号由系统自动截图，信息展示更全面"><em class="tags icon-jtrz"></em>截图认证</p>
                            <p title="此帐号卖家已提供身份证扫描件，购买更安全"><em class="tags icon-sfyz"></em>身份验证</p>
                        </div>
                    </div>
                    <div class="list-v part-05">
                        <h5><a href="#"  @click="GotoDetail(item.GoodNo)" class ="list-btn">查看帐号</a></h5>
                    </div>
                </div>
            </div>
          <nav aria-label="fenye" class="text-center right">
			 <ul id="paginator-test" class ="pagination"></ul>
		  </nav>
          </div>
        </div>`

    //Api
    var GoodListUrl = "/api/GoodInfo/GetList"; //查询列表
    //筛选和列表整合数据
    var data = {
        BaseUrl: common.GetBaseUrl() + "GoodInfo/GoodInfo.html?GoodNo=",
        BaseTarget: "_blank",
        keyword : "",
        ListObj:[
            {
                GoodNo: "",
                GoodFirstPicture: "",
                aurl: "",
                GoodTitle: "",
                GroupName: "",
                ServerName:"",
                GoodPrice: ""
            }
        ],
        SearchParam:{
            param:eval('('+localStorage.SearchParam+')'),
            Pagination:{//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "GoodNo",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
      },
    }

    //中间模板
    var goodComponent={
        template: middleHtml,
        data(){
            return data;
        },
        created() {
            var self = this;
            self.findList();
        },
        methods: {
            findList() {
                var self = this;
                common.postWebJson(GoodListUrl,self.SearchParam, function (data) {
                    if (data.result) {
                        self.ListObj=data.content.datas;
                        self.SearchParam.Pagination = data.content.pagination
                        common.SetPagination($('#paginator-test'),self.SearchParam,self.findList);
                    }
                });
            },
            GotoDetail(goodNo) {//详情页跳转 
                window.open(this.BaseUrl + goodNo);
            },
            GetLikeGoods() {
                var self = this;
                self.SearchParam.param.GoodKeyWord = self.keyword;
                self.SearchParam.Pagination.page = 1;
                self.findList();
            }
        },
    };
    return goodComponent;
});