//筛选栏位
define(jsconfig.baseArr, function (Vue, $, common) {

    var html = `
            <div class ="screen-box">
                <div class ="screen-tit">
                    <div class ="pull-left"><b>商品筛选</b><span>共找到<em>579</em>个商品</span></div>
                    <div class ="pull-right">
                        <a href="http://www.7881.com/release-G10-0-100003-1-1.html" class ="sell-a"><em><img src="http://pic.7881.com/7881-2016/images/list/sell-icon.png" width="16" height="16" alt="" /></em>我要出售</a>

                        <a href="http://www.7881.com/procurement-complete-G10-0-0-100003.html" class ="dealfin-a"><em><img src="http://pic.7881.com/7881-2016/images/list/dealfin-icon.png" width="16" height="16" alt="" /></em>交易完成</a>
                    </div>
                </div>
                <div class ="screen-item-box">
                    <div class ="screen-item">
                        <div class ="sl-head"><span title="所在区">所在区</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">

                                <li v-for="item in Gourps">
                                    <a href="javascript:void(0)" :title="item.Name">
                                        <span class ="check-icon"></span>
                                        <span class ="text" :value="item.Name" :Id="item.Id" @click="GetSearchAgain('GameGroupId',item.Id)">{{item.Name}}</span>
                                    </a>
                                </li> 

                            </ul>
                        </div>
                        <div class ="sl-foot">
                            <div class ="sl-foot-function clearfix">

                                <a class ="" href="javascript:void(0);"><span>更多</span><i></i></a>
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
                                    <a href="javascript:void(0)" title="男"  @click="GetSearchAgain('isset','male')">
                                        <span class ="check-icon"></span>
                                        <span class ="text" value="男" unFixKey="50233">男</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" title="女" @click="GetSearchAgain('isset','female')">
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
                                <li v-for="item in Professions">
                                    <a href="javascript:void(0)" :title="item.ProfessionName">
                                        <span class ="check-icon"></span>
                                        <span class ="text" :value="item.ProfessionName"  @click="GetSearchAgain('ProfessionCodes',item.ProfessionId)" :key="item.ProfessionId">{{item.ProfessionName}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class ="sl-foot">
                            <div class ="sl-foot-function clearfix">
                                <a class ="" href="javascript:void(0);"><span>更多</span><i></i></a>
                            </div>
                            <div class ="sl-foot-btns">s
                                <a class ="btn-qx" href="javascript:void(0);">取消</a>
                                <a class ="btn-tj" href="javascript:void(0);">提交</a>
                            </div>
                        </div>
                    </div>
                     <div class ="screen-item">
                        <div class ="sl-head"><span title="职业">身份证</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">
                                <li>
                                    <a href="javascript:void(0)"   @click="GetSearchAgain('isset',0)">
                                        <span class ="check-icon"></span>
                                        <span class ="text">身份证未设置</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"  @click="GetSearchAgain('isset',1)">
                                        <span class ="check-icon"></span>
                                        <span class ="text">身份证已设置</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class ="screen-item">
                        <div class ="sl-head"><span title="职业">QQ等级</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">

                                <li v-for="item in Levels">
                                    <a href="javascript:void(0)" title="QQ等级">
                                        <span class ="check-icon"></span>
                                        <span class ="text" :value="item.key"  @click="GetSearchAgain('QQLv',item.key)" :key="item.key">{{item.Value}}</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class ="screen-item">
                        <div class ="sl-head"><span title="职业">QQ好友</span>：</div>
                        <div class ="sl-body clearfix">
                            <ul class ="clearfix">
                                <li>
                                    <a href="javascript:void(0)" @click="GetSearchAgain('hasQQFriend',1)">
                                        <span class ="check-icon"></span>
                                        <span class ="text">有QQ好友</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="GetSearchAgain('hasQQFriend',0)">
                                        <span class ="check-icon"></span>
                                        <span class ="text">无QQ好友</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
             </div>
           `;
    //Api
    var GoodListUrl="/api/GoodInfo/GetList"; //查询列表
    var _GetServersUrl="/api/Order/GetServers";//获取区服名称列表
    var ProfessionUrl = "/api/GoodInfo/GetProfessions";
    var LevelsUrl = "/api/Setting/GetListByParentId";
    var data = {
        SearchParam: {
            Param: eval('(' + localStorage.SearchParam + ')'),
        },
        ProfessionCodes: [],//参数职业多选

        Gourps: [{}],
        Severs: [],
        Professions: [],//取值结果集
        Levels:[]
    };

    var ScreenCompnent={
        template: html,
        data() {
            return data;
        },
        created(){
            var self=this;
            self.GetGroups(1, "0");
            self.GetProfessions(1);
            self.GetListByParentId();
        },
        methods: {
            GetGroups(gameId, gourp) {
                var self=this;
                var param={gameId:gameId,parentId:gourp};
                common.getWebJson(_GetServersUrl, param, function (data) {
                    gourp==0?self.Gourps=data.content:self.Severs=data.content;
                });
            },
            GetProfessions(gameId) {//获取职业
                var self = this;
                var param = { GameId: gameId };
                common.getWebJson(ProfessionUrl, param, function (data) {
                    self.Professions=data.content;
                });
            },
            GetListByParentId(){//获取配置类型
                var self=this;
                var param={ parentId:72 };
                common.getWebJson(LevelsUrl, param, function (data) {
                    self.Levels = data.content;
                });
            },
            GetSearchAgain(key, val) {//条件增加重新搜索
                var self = this;
                var data = {};
                data.key = key;
                if (key == "ProfessionCodes") {
                    if (self.ProfessionCodes.filter(c => c == val) > 0) {
                        self.ProfessionCodes = self.ProfessionCodes.filter(c => c != val);
                        //该行样式变成active的选中状态 todo 振宇
                    } else {
                        self.ProfessionCodes.push(val);
                        //改行样式去掉选中状态 todo 振宇
                    }
                    data.value = self.ProfessionCodes;
                } else {
                    data.value = val;
                }
              
                data.ProfessionCodes = self.ProfessionCodes;
                self.$root.$emit('GetListData', data);
            },
            SetQQLevel() {//设置等级

            }
        }   
    };

    return ScreenCompnent;
})
