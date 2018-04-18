define(['vue', 'jquery', 'common',"upload" ], function (vue, $,common,upload) {

    var uploadHtml =`<div class="img-item clearfix" >
                        <div class="upload-box on">
                            <div class="upload-title clearfix">
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
                                        1.据游戏联盟准确数据统计，选择“上号截图认证”服务，可以有效的将出售成功率提升80%以上；
                                    <br>2.为保证客服顺利上号截图，请您提供正确的密码及密保卡信息，并在发布后半小时内不要登录游戏或修改相关密码；
                                    <br>3.如您的帐号有密保手机，手机令牌或者安全锁，请解除以便账号能够顺利交易，否则可能无法通过审核。
                                </p>
                                <div class="imgs-exp">
                                    <img src="http://userimg.7881.com/2121/2017-09-07/741969bde52f4e90ad1d14229e36d4a7.png"  height="112">
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
                                <p class="upload-tips">
                                    <span>
                                        <em class="iconfont"></em>请自行登录账号截图上传，合计最多上传10张，每张图片的大小不能超过2M
                                    </span>
                                    <b>
                                        还能上传
                                        <em id="residueNum">10</em>张
                                    </b>
                                </p>
                              
                                <form enctype="multipart/form-data">
                                    <div class="file-loading">
                                        <input id="file-0c" class="file" type="file" multiple data-min-file-count="3">
                                    </div>
                                </form>
              
                                <hr>
                                <span class ="Validform_checktip"></span>
                            </div>
                        </div>
                    
                    <span class="Validform_checktip"></span>
                </div>`
     
    var uplaodUrl="/api/Upload/AddUploadFile";

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
        mounted() {//文件4352行查看.
            $("#file-0c").fileinput({
                //uploadUrl: "http://filesvr.centaline.com:8081/aist-filesvr-web/servlet/jqueryFileUpload", // server upload action  
                language: 'zh', //设置语言
                browseLabel: '选择图片',
                removeLabel: '全部清空',
                uploadLabel: '开始上传',
                uploadUrl: uplaodUrl, //上传的地址(访问接口地址)
                allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
                //uploadExtraData:{"id": 1, "fileName":'123.mp3'},
                uploadAsync: true, //默认异步上传
                showUpload: true, //是否显示上传按钮
                showRemove : true, //显示移除按钮
                showPreview : true, //是否显示预览
                showCaption: false,//是否显示标题
                browseClass: "btn btn-primary", //按钮样式  
                dropZoneEnabled: true,//是否显示拖拽区域
                //minImageWidth: 50, //图片的最小宽度
                //minImageHeight: 50,//图片的最小高度
                //maxImageWidth: 1000,//图片的最大宽度
                //maxImageHeight: 1000,//图片的最大高度
                //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
                maxFileCount: 10, //表示允许同时上传的最大文件个数
                enctype: 'multipart/form-data',
                validateInitialCount:true,
                msgFilesTooLess: '你最少选择 <b>{n}</b> {files} 张图片去上传.',
                msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
                msgInvalidFileType: '文件名为: "{name}"的类型图片不支持.仅支持 "{types}" 类型的图片.',
                msgInvalidFileExtension: '文件名为: "{name}"的类型图片不支持. 仅支持 "{extensions}" 类型的图片.',
                dropZoneTitle: '拖拽文件到这里 ...',
				
            	//以下字体图标重写,部分title重写
                previewFileIcon: "<i class='fa glyphicon-king'></i>",
                browseIcon: '<i class="fa fa-folder-open"></i>&nbsp;',                
                uploadIcon: '<i class="fa fa-upload"></i>',
				uploadTitle: '开始上传',
				removeIcon: '<i class="fa fa-trash"></i>',
				removeTitle: '清空所选',
				msgZoomModalHeading:'预览图片附件',
				fileActionSettings: {
					indicatorNew: '<i class="fa fa-plus-circle text-warning"></i>',
					indicatorNewTitle: '还没有上传',
					removeIcon: '<i class="fa fa-trash"></i>',
					removeTitle: '删除',
					uploadIcon: '<i class="fa fa-upload"></i>',
					uploadTitle: '上传',
					zoomIcon: '<i class="fa fa-search-plus"></i>',
					zoomTitle: '查看',
				},
				previewZoomButtonIcons: {
					prev: '<i class="fa fa-caret-left"></i>',
					next: '<i class="fa fa-caret-right"></i>',
					toggleheader: '<i class="fa fa-arrows-v"></i>',
					fullscreen: '<i class="fa fa-arrows-alt"></i>',
					borderless: '<i class="fa fa-external-link"></i>',
					close: '<i class="fa fa-remove"></i>'
				},
				previewZoomButtonTitles: {
					prev: '上一张',
					next: '下一张',
					toggleheader: '收缩标题',
					fullscreen: '全屏预览',
					borderless: '无边预览',
					close: '关闭预览'
				}
            });
        },
        methods: {
          
        }
    }

    return uploadCompment;
});