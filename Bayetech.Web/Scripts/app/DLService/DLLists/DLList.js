jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common, paginator) {
    var dlhtml = `
        <div class="list-block">
            <div class="goods-list">
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

                        <tr v-for="item in ListObj">
                            <td class="goods-title tl pad-l-15">
                                <h2>
                                    <a href="/goods/detail/22905">{{item.Title}}</a>
                                </h2>
                                <p>代练类型：{{item.WorkAlias}}</p><p>游戏区服：{{item.GameName}}/{{item.GroupName}}/{{item.ServerName}}</p>
                                <div class ="buyer-name">
                                    <span><i class="fa fa-info" style="color:#FF5722;margin-right:5px;font-size:14px;"></i>﹏浅水？？</span>
									<span>信誉：五颗星</span>
                                    <b></b>
                                </div>
                                
                            </td>
                            <td class ="tr"><div class ="goods-price"><span>{{item.Price}}</span>元</div></td>
                            <td>安全保证金：{{item.SavePrice}}<br/>效率保证金：{{item.EfficiencyPrice}}</td>
                            <td class="pad-0"><p>1天22小时{{item.CompleteTime - item.CreatTime}}</p></td>
                            <td><a class="btn btn-buy" href="buying/22905" @click="GotoDetail(item.DlNo)">立即购买</a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="com-page">
                    <div class="com-page-l"><span>共24条</span><span>20条/页</span><span>共2页</span></div>
                    <div class="page-con">
                        <div id="pages-box"><div name="laypage1.3" class="laypage_main laypageskin_default" id="laypage_0"><span class="laypage_curr">1</span><a href="javascript:void(0)" onclick="return false" data-page="2">2</a><a href="javascript:void(0)" onclick="return false" class="laypage_next" data-page="2">下一页</a><span class="laypage_total"><label>到第</label><input type="number" min="1" onkeyup="this.value=this.value.replace(/\D/, '');" class="laypage_skip"><label>页</label><button type="button" class="laypage_btn">确定</button></span></div></div>
                    </div>
                </div>
            </div>
            <div class="goods-no-data" style="display: none">
                <dl>
                    <dt><img src="http://pic.7881.com/7881-2016/images/dl-dnf/list/no-data.png"></dt>
                    <dd>
                        <h2>天呐，居然没有找到任何信息！ </h2>
                        <p>您也可以减少限制条件继续寻找...</p>
                    </dd>
                </dl>
              </div>
            </div>`;

    var DLLlistUrl = "/api/Dl/GetDlInfoList";

    var data={
        BaseUrl: common.GetBaseUrl() + "DLService/DLDetail.html?DlNo=",
        BaseTarget: "_blank",
        keyword : "",
        ListObj:[
                    {
                        Title: "",
                        DlNo:"",
                        GameName: "",
                        GroupName: "",
                        ServerName:"",
                        Price: "",
						WorkAlias:''
                    }
            ],
        SearchParam:{
            param:eval('('+localStorage.SearchParam+')'),
            Pagination:{//分页对象
            rows: 10,//每页行数，
            page: 1,//当前页码
            order: "DlNo",//排序字段
            sord: "asc",//排序类型
            records: 10,//总记录数
            total: 10//总页数。
        }
      },
    }

	var DLLlistcomponent = {
		name:'dllist',
		template: dlhtml,
		data(){
		    return data;
		},
		created() {
            var self = this;
            self.GetDlInfoList();
		},
		mounted() {
            var self = this;
            self.$root.$on("SearchAgain", function (_type) {
                if (_type == "DLList") {
                    self.GetDlInfoList();
                }
            });       
		},
		methods: {
		    GetDlInfoList() {//获取列表
                var self = this;
                common.postWebJson(DLLlistUrl, self.SearchParam, function (data) {
                	if (data.result) {
                		self.ListObj = data.content.datas;
                	}
                }); 
		    },
		    GotoDetail(dlNo) {//详情页跳转 
                window.open(this.BaseUrl + dlNo);
            },
		}
	};
	return DLLlistcomponent;
})
