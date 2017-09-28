;(function($){
	$.index = $.index||{};
    $.index={
        inits:function(){
			$(".hot-game-list").TabClick(".tab-item");
			$(".deal-top-box").abSwitch();
			//$(".slideBox").autoWidth();
			$(".convenience").convenience();
			//$("body").wrapEffect();
			$(".tabsList").tabsList();
			$(".sy-wx").syWx();
			$(".qa-dl-box").toSpan();
			$(".dropdown-act").goodsReceipt();
			$(".safe-float").safeFloat();
        },      
		TabClick:function(obj){
			$(this).find("li").click(function(){
				var flag = $(this).index();
				$(this).addClass("on").siblings("li").removeClass("on");
				$(this).parent().parent().parent().find(obj).eq(flag).show().siblings(obj).hide();
			});
		},
		abSwitch:function(){
			$(this).find("li").hover(function(){
				$(this).addClass("on").siblings("li").removeClass("on");
			});
		},
		//autoWidth:function(){
		//	var _len = $(this).children(".hd").find("li").length;
		//	if(_len == 3){
		//		$(this).children(".hd").find("li").css("width","227px");
		//		$(this).children(".hd").find("li").last().css("width","226px");
		//	}else{
		//		var _percentage = (100/_len).toFixed(0);
		//		$(this).children(".hd").find("li").css("width",_percentage+"%");
		//	};
		//	$(".txtBg").show();
		//	$(".hd").show();
		//},
		convenience:function(){
			$("body").click(function(){
				$(".hover-item").removeClass("hover");
				$(".sec-bot").hide();
			});
			$(".hover-item").click(function(event){
				$(".sec-bot").hide();
				event.stopPropagation();
			});
			$(".sec-top").click(function(event){
				if($(this).next(".sec-bot").css("display") !== "block"){
					event.stopPropagation();
				}
			});
			$(this).find(".hover-item").mouseover(function(){
				$(this).addClass("hover").siblings(".hover-item").removeClass("hover");
			});
			$(".sec-item").find(".sec-top").click(function(){
				$(".sec-bot").hide();
				$(this).parent().find(".sec-bot").show();
			});
			$(".sec-item").find(".sec-bot").on("click","li",function(event){
				event.stopPropagation();
				var _val = $(this).text();
				$(this).parent().parent().parent().find(".hover-select-input").val(_val);
				$(this).parent().parent().hide();
			});
			$(".hover-bot-close").click(function(){
				$(".hover-item").removeClass("hover");
			});
		},
		tabsList:function(){
			$(this).children("li").mouseover(function(){
				var flag = $(this).index();
				$(this).siblings("li").removeClass("on").stop().animate({
					width:"190px"
				},250);
				if(flag == "2"){
					$(this).addClass("on").stop().animate({
						width:"538px"
					},250);
				}else{
					$(this).addClass("on").stop().animate({
						width:"539px"
					},250);
				};
			});
		},
		syWx:function(){
			$(this).find("a").click(function(){
				$(this).parent().hide();
			})
		},
		//wrapEffect:function(){
		//	jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,scroll:5,vis:5});
			
		//	var _len = $(".banner-box").find(".bd").find("li").length;
		//	if(_len == 1){
		//		$(".txtBg").show();
		//		$(".hd").show().find("li").addClass("on").find("h5").hide();
		//	}else{
		//		jQuery(".slideBox").slide({ mainCell:".bd ul",effect:"leftLoop", autoPlay:true, delayTime:300,interTime:5000,
		//			startFun:function(i,c){
		//				$(".slideBox").find(".hd").children("ul").children("li").find("h5").children("em").stop().width("0");
		//				var _wid = $(".slideBox").find(".hd").children("ul").children("li").eq(i).width();
		//				$(".slideBox").find(".hd").children("ul").children("li").eq(i).find("em").animate({
		//						width:_wid
		//				},5000,"linear");
		//				$(".slideBox").mouseover(function(){
		//					$(".slideBox").find(".hd").children("ul").children("li").find("h5").hide().children("em").stop().width("0");
		//				});
		//				$(".slideBox").mouseleave(function(){
		//					$(".slideBox").find(".hd").children("ul").children("li").find("h5").show().find("em").show().stop().css("width","0px").animate({
		//							width:_wid
		//					},5000,"linear");
		//				});
		//		   	}
		//	    });
		//   	}
		//},
		toSpan:function(){
			$(this).find("div").remove();
			$(this).find("p").each(function(){
				$(this).html($(this).html().replace(/<.*?>/ig,""));
			});
		},
		goodsReceipt:function(){
			$("body").mouseover(function(){
				$(".dropdown-nav-box").hide();
				$(".dropdown-act").removeClass("on");
			});
			$(this).mouseover(function(event){
				event.stopPropagation();
				var _index = $(this).index(".dropdown-act");
				$(".dropdown-nav-box").hide();
				$(".dropdown-nav-box").eq(_index).show();
				$(".dropdown-act").removeClass("on");
				$(this).addClass("on");
			});
			$(".dropdown-nav-box").mouseover(function(event){
				event.stopPropagation();
				$(this).show();
			});
		},
		safeFloat:function(){
			customer_service();
			$(window).resize(function(){
				customer_service();
			});
			$(".safe-float").hover(function(){
				if($(this).hasClass("smlwrap")){
					$(".smlwrap").stop().animate({right:'0px'},300);
				}
			},function(){
				if($(this).hasClass("smlwrap")){
					$(".smlwrap").stop().animate({right:'-58px'},300);
				}
			});
			function customer_service(){
				_wih = parseFloat($(window).width());
				if(_wih<1490){
					$(".safe-float").addClass("smlwrap");
				}else{
					$(".safe-float").removeClass("smlwrap");
				};
			};
			$(".safe-float").find(".safe-float-close").click(function(){
				$(".safe-float").hide();
			});
		}
    }
    $.extend($.fn,$.index);
    $(function(){$.index.inits();})
})(jQuery);