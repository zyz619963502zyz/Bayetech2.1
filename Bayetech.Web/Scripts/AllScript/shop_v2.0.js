;(function($){
	$.shopv2 = $.shopv2||{};
    $.shopv2={
    	inits:function(){
    		$('.menuItem').menuHover();
			$(".codeDrop").codeDrop();
			$(".slideBox").slideBox();
			$(".tabsList").tabsList();
			$(".area-list-02").upDown();
			$(".gift-box").boxMove();
			$(".gift-search-box").giftSearch();
        }, 
        menuHover:function(){// 菜单下拉
        	$('.menuItem').hover(function() {
				if (!$(this).hasClass('menuItemHover')) {
					$(this).addClass('menuItemHover');
				};
				if ($(this).hasClass('dropMenu')) {
					$(this).find('ul').css('display', 'block');
					$(this).find('i').html("\&\#xe604");
				};
			}, function() {
				if ($(this).siblings('li').hasClass('menuItemHover')) {
					$(this).removeClass('menuItemHover');
				}
				if ($(this).hasClass('dropMenu')) {
					$(this).find('ul').css('display', 'none');
					$(this).find('i').html("\&\#xe60f");
				};
			});
			
			$('.dropEwm').hover(function() {
				$('.codeEwm').css('display', 'block');
				$(this).find('i').html("\&\#xe604");
			}, function() {
				$('.codeEwm').css('display', 'none');
				$(this).find('i').html("\&\#xe60f");
			});
			
			$('.shopInfor span').hover(function() {
				$(this).find('dl').css('display', 'block');
			}, function() {
				$(this).find('dl').css('display', 'none');
			});
        },
		codeDrop:function(){// 二维码显示隐藏切换
			$('.codeDrop').hover(function() {
				$('.codeLayer').css('display', 'block');
				$(this).find('.shopArrow').html("\&\#xe604");
			}, function() {
				$('.codeLayer').css('display', 'none');
				$(this).find('.shopArrow').html("\&\#xe60f");
			});
		},
		slideBox:function(){//幻灯片
			try{
				jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left"});
			}catch(e){
			};
			var _length=$(".slideBox").find(".bd ul li").length;
			if(_length<2){
				$(".slideBox").find(".prne").hide();
				$(".slideBox").find(".hd").hide();
			}
		},
		tabsList:function(){//书签切换
			try{
				jQuery(".tabsList").slide({ titCell:".tit",triggerTime:0 });
			}catch(e){
			};
			$(".tabsList").find(".tabBody").each(function(){
				var _text = $(this).find('p').text();
				if(_text.length>168){
					var _textt = _text.substring(0,168)+"...";
					$(this).find('p').text(_textt);
				}
			});
			
			$(".tabsList").children("li").mouseover(function(){
				var flag = $(this).index();
				$(this).siblings("li").removeClass("on").stop().animate({
					width:"240px"
				},250);
				if(flag == "2"){
					$(this).addClass("on").stop().animate({
						width:"707px"
					},250);
				}else{
					$(this).addClass("on").stop().animate({
						width:"706px"
					},250);
				};
			});
		},
		upDown:function(){//鼠标滑过缓慢上移
			$(".area-list-02 li").hover(function(){
				$(this).stop().animate({
					"margin-top": "-4px","margin-bottom": "14px","border-bottom": "4px solid #fff"
				},200);
			},function(){
				$(this).stop().animate({
					"margin-top": "0","margin-bottom": "10px","border-bottom": "4px solid #ccc"
				},200);
			});
		},
		boxMove:function(){
			$(".welfare-center-bannner ul li").hover(function(){
				$(this).find(".txt-img").stop().animate({
					"margin-top": "26px"
				},200);
			},function(){
				$(this).find(".txt-img").stop().animate({
					"margin-top": "42px"
				},200);
			});
		},
		giftSearch:function(){
			$("body").click(function(){
				$(".hover-item").removeClass("hover");
				$(".sec-bot").hide();
			});
			$(".sec-top").click(function(event){
				if($(this).next(".sec-bot").css("display") !== "block"){
					event.stopPropagation();
				}
			});
			$(".sec-item").find(".sec-top").click(function(){
				$(".sec-bot").hide();
				$(this).parent().find(".sec-bot").show();
			});
			$(".sec-item").find(".sec-bot").on("click","li",function(event){
				event.stopPropagation();
				var _text = $(this).text();
				var _val = $(this).data("value");
				$(this).parents(".sec-item").find(".hover-select-input").val(_text).attr("data-value",_val);;
				$(this).parent().parent().hide();
				ComLinkage();
			});
			$(".hover-bot-close").click(function(){
				$(".hover-item").removeClass("hover");
			});
		}
	}
    $.extend($.fn,$.shopv2);
    $(function(){$.shopv2.inits();})
})(jQuery);