;(function($){
	$.list = $.list||{};
    $.list={
        inits:function(){
			$("body").RreSize();
			$(".screen-item-box").Screen();
			$("body").fixedNav();
			$(".list-item").goodsTips();
        },      
		RreSize:function(){
			$(window).resize(function(){
				ResResize();
			})
        	ResResize();
        	function ResResize(){
        		if($(document).width()<1550){
        			$("body").addClass("response-narrow");
        		}else{
        			$("body").removeClass("response-narrow");
        		}
        	};
		},
		fixedNav:function(){
			$(window).bind("scroll", function(event){
	            if( $(window).scrollTop() >= 190 ) {
	            	$(".list-nav-box").addClass("fixed");
	            }else{
	                $(".list-nav-box").removeClass("fixed");
	            };
	        });
		},
		Screen:function(){
			$(this).find(".screen-item").each(function(){
				if($(this).hasClass("check")){
					$(this).find(".sl-foot").find(".sl-multiple").show();
				};
				if($(this).find(".sl-body").height() > 70 ){
					$(this).find(".sl-foot").find(".sl-more").show();
				};
			});
			$(".sl-more").click(function(){
				var _hei = $(this).parents(".screen-item").find(".sl-body").height();
				if($(this).hasClass("more-ac")){
					$(this).parents(".screen-item").stop().css({"max-height":"none", 'height': '68px'}).animate({"height": _hei}, 400,"easeInOutQuint");
					$(this).find("span").text("收起");
					$(this).removeClass("more-ac").addClass("more-cc");
				}else{
					$(this).parents(".screen-item").stop().animate({"height": 68}, 400,"easeInOutQuint");
					$(this).find("span").text("展开");
					$(this).removeClass("more-cc").addClass("more-ac");
				}
			});
			
			$(".sl-multiple").click(function(){
				if($(this).parent().find(".sl-more").hasClass("more-ac") == true && $(this).parent().find(".sl-more").css("display") !== "none"){
					$(this).parent().find(".sl-more").trigger("click");
				}
				$(this).parents(".screen-item").addClass("multiple");
				$(this).parents(".screen-item").find(".sl-foot").find(".sl-foot-function").hide();
				$(this).parents(".screen-item").find(".sl-foot").find(".sl-foot-btns").show();
				
				
			});
			
			$(".btn-qx").click(function(){
				$(this).parents(".screen-item").removeClass("multiple");
				if($(this).parents(".sl-foot").find(".sl-more").css("display") !== "none"){
					$(this).parents(".sl-foot").find(".sl-more").trigger("click");
				}
				$(this).parents(".screen-item").find(".sl-foot").find(".sl-foot-function").show();
				$(this).parents(".screen-item").find(".sl-foot").find(".sl-foot-btns").hide();
			});
			
			$(".sl-body").find("ul").find("li").click(function(){
				if($(this).parents(".screen-item").hasClass("multiple")){
					$(this).toggleClass("on");
				}
			});
		},
		goodsTips:function(){
			
			var time1;
			$(this).find(".txt-box").find("h2").find("a").find("span").mouseenter(function(){
				var _this = $(this);
				
				time1 = setTimeout(function(){
					var _wid = _this.parent().width()+120;
					var _hei = _this.parent().height();
					if(_hei<30){
						_this.parents(".list-v").find(".tips-box").css({'left' : _wid, 'top':'-19px', 'display' : 'block'})
					}else{
						_this.parents(".list-v").find(".tips-box").css({'left' : _wid, 'display' : 'block'})
					}
					
				},500);
			});
			
			$(this).find(".txt-box").find("h2").find("a").find("span").mouseleave(function(){
				clearTimeout(time1);
				$(this).parents(".list-v").find(".tips-box").css('display','none')
			});
			
		}
		
		
    }
    $.extend($.fn,$.list);
    $(function(){$.list.inits();})
})(jQuery);
$(function(){
	$(document).on("click",".cardmz input",function(){
		event.stopPropagation();
		$(this).parent().find(".uprow").hide();
		$(this).parent().find(".downrow").show();
		$(this).parent().find(".mzul").show();
	});
	
	$(document).on("click",".mzul li",function(){
		var datavalue=$(this).attr("data-value");
		var datagoodsid=$(this).attr("data-goodsid");
		var thetext = $(this).text();
		$(this).parents(".cardmz").find("input").val(thetext);
		$(this).parents(".moneycd").find(".pricecd").text(datavalue);
		$(this).parents(".moneycd").find(".goubtn a").attr("data-goodsid",datagoodsid);
	});
	
	$("body").click(function(){
		$(document).find(".mzul").hide();
		$(document).find(".uprow").show();
		$(document).find(".downrow").hide();
	});
});