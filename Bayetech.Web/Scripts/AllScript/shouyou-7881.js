(function($){
    $.game = $.game||{};
    $.game={
        inits:function(){
			$(".gm-list").tab({tablist:".gm-top",tabcon:".gm-bot",conClass:".gm-item",addClass: "on",usevent:"hover"});
			$(".sy-tab").tab({tablist:".sy-tab-top",tabcon:".sy-tab-bot",conClass:".sy-tab-item",addClass: "on",usevent:"mouseover"});
			$(".area-02").tab({tablist:".mg-top",tabcon:".mg-bot",conClass:".mg-item",addClass: "on",usevent:"mouseover"});
			$(this).slides();
			$(this).tophov();
			$(this).qpay();
			$(this).yxbtab();
			$(this).yd();
			$(this).slides02();
        },
		tab:function(options){
			$.game.tab.def = {
				tablist:".sp-list-top",
				tabcon:".sp-list-bot",
				list:"li",
				conClass:".sp-list-item",
				addClass: "on",
				usevent:"click"
			};
			var that = this;
			var opts = $.extend($.game.tab.def, options);
			var timer = null;
			var sec = null;
			this.each(function(a){
				var _list = that.eq(a).find(opts.tablist).find(opts.list);
				var _con =  that.eq(a).find(opts.tabcon).find(opts.conClass);
				_list.each(function(i){
					if(opts.usevent == "hover"){
						$(this)[opts.usevent](function(e){
							e.stopPropagation();
							_con.hide();
							_list.removeClass(opts.addClass)
							_list.eq(i).addClass(opts.addClass)
							_con.eq(i).show();
						},function(){
							$(".gm-list").mouseleave(function(e){
								e.stopPropagation();
								_list.removeClass(opts.addClass);
								_con.eq(i).hide();
							});
						});
					}else{
						$(this)[opts.usevent](function(e){
							e.stopPropagation();
							_con.hide();
							_list.removeClass(opts.addClass)
							_list.eq(i).addClass(opts.addClass)
							_con.eq(i).show();
						});
					};
				});
			});
		},
		slides:function(){
			$("#slideBox").hover(function(){
				$(this).find(".prne").show().animate({"opacity":"0.3"},500);
			},function(){
				$(this).find(".prne").stop(true,false).css("opacity","0");
			});
			$(".prne").hover(function(e) {
				$(this).stop(true,false).css("opacity","0.6");
				var opa = $(this).css("opacity");
				if( opa == 0.6 ){
					$(".prne").show().animate({"opacity":"0.3"},500);
					$(this).stop(true,false).css("opacity","0.6");
					e.stopPropagation();
				}
			},function() {
				$(this).stop(true,false).css("opacity","0.3");
			});
		},
		slides02:function(){
			$(".prne").hover(function(e) {
				$(this).stop(true,false).css("opacity","0.6");
				var opa = $(this).css("opacity");
				if( opa == 0.6 ){
					$(".prne").show().animate({"opacity":"0.3"},500);
					$(this).stop(true,false).css("opacity","0.6");
					e.stopPropagation();
				}
			},function() {
				$(this).stop(true,false).css("opacity","0.3");
			});
		},
		tophov:function(){
			$(".top-list").hover(function(){
				$(this).parent(".sy-top").find(".top-con-2").hide();
				$(this).parent(".sy-top").find(".top-con-1").show();
				$(this).find(".top-con-1").hide();
				$(this).find(".top-con-2").show();
			});
		},
		qpay:function(){
			$(".q-pay").find(".flo-dl").mouseover(function(){
				var flag = $(this).index();
				if(flag == 0){
					$(this).siblings(".flo-dl").css("border-left-color","#e9e9e9");
					$(this).css("border-left-color","#3d86ea");
					$(this).next(".flo-dl").css("border-left-color","#3d86ea");
				}else if(flag == 1){
					$(this).siblings(".flo-dl").css("border-left-color","#e9e9e9")
					$(this).css("border-left-color","#3d86ea");
					$(this).next(".flo-dl").css("border-left-color","#3d86ea");
				}else {
					$(this).css("border-left-color","#3d86ea");
					$(this).siblings(".flo-dl").css("border-left-color","#e9e9e9")
				}
				$(this).addClass("on").siblings(".flo-dl").removeClass("on").find(".flo-div").hide();
				$(this).siblings(".flo-dl").find(".sec-bot").hide();
				$(this).find(".flo-div").show();
			});
			$(".sy-close").find("span").click(function(){
				$(".flo-dl").removeClass("on").css("border-left-color","#e9e9e9");
				$(".flo-div").hide();
			});
			$(".q-pay").click(function(e){
				e.stopPropagation();
			})
			$(document).bind("click",function(){
				$(".flo-dl").removeClass("on").css("border-left-color","#e9e9e9");
				$(".flo-div").hide();
				$(".sec-bot").hide();
			});
		},
		yxbtab:function(){
			$(".yxb-tab-top").find("li").mouseenter(function(){
				$(this).addClass("on").siblings().removeClass("on");
				var flag = $(this).index();
				$(this).parent().parent().next(".yxb-tab-bot").find(".yxb-tab-item").eq(flag).show().siblings(".yxb-tab-item").hide();
			});
		},
		yd:function(){
			$(".index-yd").find("span").click(function(){
				$(this).parent().hide();
				return false;
			});
		}
    }
    $.extend($.fn,$.game);
    $(function(){$.game.inits();})
})(jQuery)