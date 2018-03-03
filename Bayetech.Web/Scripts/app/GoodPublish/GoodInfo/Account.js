//账号ppd微博
define(['jquery', 'common', 'Scripts/app/GoodPublish/TradeType', 'API','DynamicInput','FileUpload'], function ($, common, TradeType, API,DynamicInput,FileUpload) {
    var html=`<div class="one-step-con">
    <div class="title-group-box common-form height-30 clearfix" id="GameProps">
        <div class ="form-item" v-for="data in GameExtProps">
            <div class="form-item-l">
                <i>*</i>
                <span>{{data.Name}}：</span>
            </div>
            <div class="form-item-r">
                <DynamicInput :data="data"></DynamicInput>
            </div>
        </div>
    </div>
    <div class="goods-box common-form height-36 clearfix">
        <div class="form-item clearfix" style="z-index: 1;">
            <div class="form-item-l">
                <i>*</i>
                <span>商品标题：</span>
            </div>
            <div class="form-item-r" style="z-index: 1;">
                <p class="goods-title" name="spellTitle">
                    <em>【</em>
                    <span></span>
                    <em>】</em>
                </p>
                <p class="goods-title-extra">
                    <em class="iconfont"></em>
                    <input placeholder="您可以写填写个性化商品标题，吸引买家眼球" type="text" class ="common-input w768 h-36" name="inputTitle" id="inputTitle" value="" maxlength="50">
                    <span>
                        <i>0</i>/50
                    </span>
                    <span class="Validform_checktip"></span>
                </p>
            </div>
            <input name="title" type="hidden">
            <p class="goods-title-extra aftertit"></p>
        </div>
        <div class="form-item clearfix" style="z-index: 1;">
            <div class="form-item-l">
                <i>*</i>
                <span>卖多少钱：</span>
            </div>
            <div class="form-item-r" style="z-index: 1;">
                <input maxlength="12" datatype="*,howmuch" type="text" class ="common-input w100 h-36 wntsell onlynums" name="price" id="price" value="">
                <span class="val-unit">元</span>
                <em class="serfee">
                    需要收取手续费
                    <i>0.0</i>元
                    <a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank">[了解更多]</a>
                </em>
                <span class="Validform_checktip"></span>
            </div>
        </div>
        <div class="form-item mrg-b-38 clearfix" style="z-index: 1;">
            <div class="form-item-l">
                <span>账号描述：</span>
            </div>
            <div class="form-item-r" style="z-index: 1;">
                <textarea placeholder="描述一下您的账号情况，丰富详细的描述将更有利于帮助您尽快找到合适的买家。" maxlength="1000" name="description"></textarea>
                <p class="form-tips-b">请您将不出售的商品转移出账号，如未转移，则视为与账号一起出售</p>
            </div>
        </div>

       <FileUpload></FileUpload>

    </div>
</div>`;

    var components={
        name: "Account",
        template: html,
        data: function () {
            return {
                GameExtProps:[],
            }
        },
        created() {
            this.LoadGameExtPropsInput();
        },
        methods: {
            //加载账号信息模块
            LoadGameExtPropsInput: function () {
                var self=this;
                API.Game.GetGameExtPropsInput(this.$parent.GameInfo.GameId, function (data) {
                    self.GameExtProps=data.content;
                })
            },
        },
        computed: {
            // 计算属性的 getter
            price: function () {
                return this.num*this.percent;
            }
        },
        components: {
            TradeType: TradeType,
            DynamicInput: DynamicInput,
            FileUpload:FileUpload
        },
    };
    return components;
});