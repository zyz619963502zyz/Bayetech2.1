jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common,paginator) {
    var middleHtml=`<div class="newres-item clearfix">
            <div class="newres-item-l">
                <h2>{{PicTitle}}</h2>
                <h3>平台的代练套餐数量</h3>
                <p>3841</p>
            </div>
            <div class="newres-item-r">
                <h2 class="tit"><span>最新代练套餐</span><a href="/goods/list?s=b" target="_blank">更多套餐></a></h2>
                <ul>
                    <li class="clearfix" v-for="item in ListObj">
                        <em>·</em>
                        <a href="/goods/detail/22769" target="_blank">{{item.Title}}</a>
                        <!--i>{{item.CreatTime}}前 </i-->
                        <i>10秒前 </i>
                        <span>{{item.Price}} 元</span>
                    </li>
                </ul>
            </div>
        </div>`

    //Api
    var DlListUrl = "/api/Dl/GetNewDlInfoList"; //查询列表
    //筛选和列表整合数据
    var data = {
        PicTitle: "代练套餐",
        PicDetailTitle: "平台的代练套餐数量",
        PicNum: 3841,
        ListTitle: "最新代练套餐",
        ListObj: []
    }

    //中间模板
    var goodComponent={
        template: middleHtml,
        data(){
            return data;
        },
        created() {
            var self=this;
            self.findList();
        },
        methods: {
            findList() {
                var self=this;
                common.postWebJson(DlListUrl, self.$data , function (data) {
                    if (data.result) {
                        self.ListObj=data.content;
                    }
                });
            }
        },
    };
    return goodComponent;
});