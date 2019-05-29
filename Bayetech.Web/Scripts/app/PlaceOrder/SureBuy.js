//注册模块
define(jsconfig.baseArr, function (Vue, $, common) {
    //模板
    var surebuyhtml = `<div class="panel panel-default goods-info">

                        <div class="panel-heading clearfix">
                            <div class="col-md-10 f16">确认商品信息</div>
                            <div class="col-md-2 f16"> 价格</div>
                        </div>
                        <div class="panel-body">
                            <div class="col-md-10">
                                <ul class="list-group f14">
                                          <li>
                                            商品标题：
                                           <em style="color:#0099FF">
                                            {{SureBuyModel.GoodTitle}}
                                        </em>
                                            </li>
                                          <li>
                                            物品类型： {{SureBuyModel.GoodTypeName}}
                                           </li>
                                          <li>
                                            游戏区服： {{SureBuyModel.GameName}} /{{SureBuyModel.GroupName}} /{{SureBuyModel.ServerName}}
                                        </li>
                               </ul>
                            </div>
                          <div class="col-md-2">
                                <strong style="color:#F90">{{SureBuyModel.GoodPrice.toFixed(2)}}</strong>元
                            </div>   
                        </div>
                    </div>`;

    //Api
    var _GetGoodInfoUrl="/api/GoodInfo/GetGoodInfo";

    var data = {
        SureBuyModel: {
            GoodTitle: "地下城与勇士测试账号Title",
            GoodTypeName: "账号",
            GameName: "地下城与勇士",
            GroupName: "浙江区",
            ServerName: "浙江7区",
            GoodPrice: 500,
        }
    }

    //账号下订单
    var surebuycomponent = {//全局注册
        template: surebuyhtml,
        created(){
            this.GetGoodInfo(common.GetUrlParam("", "GoodNo"));//获取商品信息。
        },
        data(){
            return data;
        },
        methods: {
            GetGoodInfo(goodno) {
                var _self = this;
                common.getWebJson(_GetGoodInfoUrl, { goodNo: goodno }, function (data) {
                    if (data.result) {
                        _self.SureBuyModel=data.content;
                        _self.$root.$emit('MainInfo', data)
                    }
                });
            }
        }
    }
    return surebuycomponent;
})