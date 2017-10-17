$(function () {
    var _html = '<!-- 右侧悬浮 Start -->' +
				'<div class="float-box">' +
					'<div class="float-box-01">' +
						'<div class="header-box">' +
							'<img src="http://pic.7881.com/7881-2016/images/float-box/img-header.png"/>' +
						'</div>' +
						'<div class="service-con">咨询妹子</div>' +
					'</div>' +
					'<div class="float-box-02">' +
						'<div class="header-service">' +
							'<div class="header-box"><img src="http://pic.7881.com/7881-2016/images/float-box/img-header.png"/></div>' +
							'<div class="hand-box"></div>' +
						'</div>' +
						'<div class="service-qq-time">' +
							'<div class="qq-box">' +
								'<h2><a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1" target="_blank">我要咨询</a></h2>' +
								'<h3>客服QQ</h3>' +
								'<p>4001877881</p>' +
							'</div>' +
							'<div class="time-box">' +
								'<h3>服务时间</h3>' +
								'<p>09:00-24:00</p>' +
							'</div>' +
						'</div>' +
						'<div class="kf-scrolltop">' +
							'<a href="javascript:void(0);">返回顶部</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<!-- 右侧悬浮 End -->';
    $("body").append(_html);


    $(".float-box-01").mouseenter(function () {
        $(".float-box-02").css({ right: '-136px' }).addClass("hovershow").show().stop().animate({ right: '0px' }, 300);
        $(".float-box-01").stop().animate({ right: '-58px' }, 100);
    });

    $(".float-box-02").mouseleave(function () {
        if ($(this).hasClass("hovershow")) {
            $(".float-box-01").stop().animate({ right: '10px' }, 100);
            $(".float-box-02").removeClass("hovershow").stop().animate({ right: '-136px' }, 300);
        }
    });

    $(".float-box").show();

});