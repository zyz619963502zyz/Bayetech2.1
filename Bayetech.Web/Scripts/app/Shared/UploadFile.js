define(['vue','jquery', 'common',], function (vue,$,common) {
    var uploadHtml =`<div class="form-item twochose clearfix" style="z-index: 1;">
                    <div class="form-item-l">
                        <i>*</i>
                        <span>账号截图服务：</span>
                    </div>
                    <div class="form-item-r" datatype="onetwo" style="z-index: 1;">
                        <div class="upload-box on">
                            <div class="upload-title">
                                <label>
                                    <input type="checkbox" checked="checked" id="machineCertCbox">
                                    <span>上号截图认证</span>
                                </label>
                                <p>
                                    <span>5元/次</span>，费用将在交易成功后自动扣除
                                </p>
                            </div>
                            <div class="upload-content">
                                <p class="orange-stip">
                                    1.据7881准确数据统计，选择“上号截图认证”服务，可以有效的将出售成功率提升80%以上；
                                    <br>2.为保证客服顺利上号截图，请您提供正确的密码及密保卡信息，并在发布后半小时内不要登录游戏或修改相关密码；
                                    <br>3.如您的帐号有密保手机，手机令牌或者安全锁，请解除以便账号能够顺利交易，否则可能无法通过审核。
                                </p>
                                <div class="imgs-exp">
                                    <img src="http://userimg.7881.com/2121/2017-09-07/741969bde52f4e90ad1d14229e36d4a7.png" width="100%" height="112">
                                </div>
                            </div>
                        </div>
                        <div class="upload-box" filenumlimit="10">
                            <div class="upload-title">
                                <label class="title-left">
                                    <input type="checkbox" id="userCertCbox">
                                    <span>自行上传截图</span>
                                </label>
                                <p>
                                    <span>免费</span>，可以上传您认为有卖点的账号图片
                                </p>
                            </div>
                            <div class="upload-content">
                                <p class="orange-stip">
                                    1.如您的帐号有密保手机，手机令牌或者安全锁，请解除以便账号能够顺利交易，否则可能无法通过审核；
                                    <br>2.截图中不能带有人物角色名、QQ号、联系方式、广告等违规信息(违规将被删除)，支持jpg、png格式；
                                    <br>3.上传装备、人物属性等图片建议800×800以上，单张图片需小于2M，买家购买时可大图查看，更利于出售。
                                </p>
                                <div class="upload-tabs clearfix">
                                    <ul>
                                        <li class="on" id="uploadTab0">
                                            个人信息
                                            <em></em>
                                        </li>
                                        <li id="uploadTab1">
                                            背包
                                            <em></em>
                                        </li>
                                        <li id="uploadTab2">
                                            技能栏
                                            <em></em>
                                        </li>
                                        <li id="uploadTab3">
                                            仓库
                                            <em></em>
                                        </li>
                                        <li id="uploadTab4">
                                            游戏主界面
                                            <em></em>
                                        </li>
                                    </ul>
                                </div>
                                <div class="imgs-exp">
                                    <h3>
                                        <b>图例</b>不懂该截什么样的图？点击以下图例查看大图
                                    </h3>
                                    <div class="picScroll-left">
                                        <div class="hd">
                                            <a class="next iconfont nextStop"></a>
                                            <a class="prev iconfont prevStop"></a>
                                        </div>
                                        <div class="bd">
                                            <div class="tempWrap" style="overflow:hidden; position:relative; width:600px">
                                                <ul class="picList" id="picListUl" style="width: 700px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                                                    <li style="float: left; width: 90px;">
                                                        <div class="pic">
                                                            <a href="http://userimg.7881.com/2121/2017-11-28/65ee3113a45a47628c07fed7cf90e609.jpg" class="example-image-link" data-lightbox="example-set" data-title="7881示例截图">
                                                                <img class="example-image" src="http://userimg.7881.com/2121/2017-11-28/65ee3113a45a47628c07fed7cf90e609.jpg" width="90" height="90">
                                                            </a>
                                                        </div>
                                                        <div class="title">个人信息</div>
                                                        <div class="title2">
                                                            <img src="http://pic.7881.com/7881-2016/images/goods-publish/pic-example-icon.png" width="90" height="20">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="upload-tips">
                                    <span>
                                        <em class="iconfont"></em>请自行登录账号截图上传，合计最多上传10张，每张图片的大小不能超过2M
                                    </span>
                                    <b>
                                        还能上传
                                        <em id="residueNum">10</em>张
                                    </b>
                                </p>
                                <div class="upload-area printScreen" datatype="acc_nopic">
                                    <div id="uploader" class="bl-uploader-box clearfix">
                                        <div class="uploader-list"></div>
                                        <div class="uploader-list"></div>
                                        <!--用来存放文件信息-->
                                        <div id="thelist" class="uploader-list"></div>
                                        <div class="btns">
                                            <div id="picker" class="tppicker webuploader-container">
                                                <div class="webuploader-pick">
                                                    <div class="webuploader-pick">
                                                        <div class="webuploader-pick">
                                                            <em class="iconfont"></em>
                                                        </div>
                                                        <div id="rt_rt_1bopd21qh1im9v8facnor51g2u1" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                                                            <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                                                            <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                                        </div>
                                                    </div>
                                                    <div id="rt_rt_1c3070ls4ac96kkbgur5d1c601" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                                                        <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                                                        <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                                    </div>
                                                </div>
                                                <div id="rt_rt_1c3070m231epif631f701om910opa" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                                                    <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                                                    <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="Validform_checktip"></span>
                            </div>
                        </div>
                    </div>
                    <span class="Validform_checktip"></span>
                </div>`

    var uplaodUrl="";

    var data={

    };

    var uploadCompment={
        name: "FileUpload",
        template: uploadHtml,
        data() {
            return data;
        },
        created() {
                
        },
        mounted() {
           
        },
        methods: {
          
        }
    }

    return uploadCompment;
});