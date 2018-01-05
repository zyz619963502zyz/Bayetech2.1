//金币
define(['jquery', 'common', 'Scripts/app/GoodPublish/TradeType'], function ($, common, TradeType) {
    var html=`<div class="one-step-con">
    <div class="ftitle">为了帮助您更快的出售商品，请仔细填写以下信息</div>
    <TradeType fn="ChangeTradeType"></TradeType>
    <div class="goods-box common-form height-36 clearfix">
        <div class="form-item clearfix">
            <div class="form-item-l"><i>*</i><span>商品标题：</span></div>
            <div class="form-item-r">
                <p class="goods-title-extra"><em class="iconfont"></em><input placeholder="您可以写填写个性化商品标题，吸引买家眼球" datatype="*" type="text" class="common-input w758 h-36" name="title" id="" value="" maxlength="50"><span><i>0</i>/50</span><span class="Validform_checktip"></span></p>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l"><i>*</i><span>卖多少钱：</span></div>
            <div class="form-item-r">
                <input maxlength="12" datatype="*,howmuch" type="text" class="common-input w100 h-36 wntsell onlynums" name="price" id="" value="">
                <span class="val-unit">元</span>
                <em class="serfee">需要收取手续费<i>0.0</i>元<a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank">[了解更多]</a></em>
                <span class="Validform_checktip"></span>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l"><i>*</i><span>发布件数：</span></div>
            <div class="form-item-r">
                <input maxlength="6" datatype="*,howmany" type="text" class="common-input w100 h-36 onlynum" name="stock" id="" value="1">
                <em class="zhu">注:为确保成功出售，请勿超库存发布，如有疑问请查看<a href="http://www.7881.com/helpcenter/365809715870535056.html" target="_blank">《发布件数说明》</a></em>        <span class="Validform_checktip"></span>
            </div>
        </div>
        <div class="form-item mrg-b-38 clearfix">
            <div class="form-item-l"><span>商品描述：</span></div>
            <div class="form-item-r">
                <textarea placeholder="描述一下您的商品情况，丰富详细的描述将更有利于帮助您尽快找到合适的买家。" maxlength="1000" name="description"></textarea>
                <p class="form-tips-b">请您将不出售的商品转移出账号，如未转移，则视为与账号一起出售</p>
            </div>
        </div>
        <div class="form-item clearfix">
            <input type="hidden" name="goodsImages">
            <div class="form-item-l"><span>商品图片：</span></div>
            <div class="form-item-r">
                <div class="upload-box" filenumlimit="5">
                    <div class="upload-content">
                        <p class="upload-tips"><span><em class="iconfont"></em>不能带有人物角色名（带角色名图片将被删除)，支持jpg、png，每张图片大小不能超过2M</span><b>还能上传<em id="residueNum">5</em>张</b></p>
                        <div class="upload-area">
                            <div id="uploader" class="bl-uploader-box clearfix">
                                <div class="uploader-list"></div>
                                <!--用来存放文件信息-->
                                <div id="thelist" class="uploader-list"></div>
                                <div class="btns">
                                    <div id="picker" class="webuploader-container"><div class="webuploader-pick"><em class="iconfont"></em></div><div id="rt_rt_1c32degj11rci16mf13f6acv1gmo1" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    var components={
        name: "Common",
        template: html,
        watch: {
            num: function (newQuestion) {
                // this.price;
            },
        },
        data: function () {
            return {
                dealway: "邮寄交易",
                num: 0,
                percent: 0.02,
            }
        },
        created() {
            this.$parent.account_info_com="GoldAccountInfo";
        },
        methods: {
            ChangeTradeType: function (type) {
                this.$parent.account_info_com=type===1?"SecurityCode":"GoldAccountInfo";
            },
        },
        computed: {
            // 计算属性的 getter
            price: function () {
                return this.num*this.percent;
            }
        },
        components: {
            "TradeType": TradeType,
        },
    };
    return components;
});