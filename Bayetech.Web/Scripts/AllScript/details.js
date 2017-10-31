$(function(){
	var subval = parseInt($(".sub-input-plus").find("input").val());
	var maxsubval = parseInt($(".sub-input-plus").find("input").attr("data-max"));
	if(subval == maxsubval){
		$(".sub-input-plus").find(".btn-r").addClass("unusable");
	};
	var sgpre = parseFloat($(".nowprice").find("span").text().replace(/[^\d\.]/g,''));
	$(".btn-num").click(function(gift){
		var bnynum = parseInt($(this).parent().find("input").val());
		if(!$(this).hasClass("unusable")){
			if($(this).hasClass("btn-l")){
				bnynum--;
			}
			if($(this).hasClass("btn-r")){
				bnynum++;
			}
			$(".nowprice").find("span").html("<em>￥</em>"+(sgpre*bnynum).toFixed(2));
			comfunction(bnynum);
		}
	});
	$(".seller-info").height($(".info-good").height());
	$(document).on("mouseover",'.detail_ico a',function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('.detail_ico .ico_text p').eq($('.detail_ico a').index(this)).show().siblings().hide();
	});
	$(".tab-account").find("li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		var flag= $(this).index();
		$(this).parents(".account-info").find(".account-detail").eq(flag).show().siblings(".account-detail").hide();
	});
	var _html =  $(".open-price-win").html();
	$(".wantprice a").click(function(){
		layer.open({
			skin:'open-price',
			shadeClose:true,
			content: _html,
			success:function(){
				$(".tk-pr-clo a").click(function(){
					layer.closeAll();
				})
			}
		});
	});
	
});
