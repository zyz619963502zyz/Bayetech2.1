$(document).ready(function(){
	if(gametype=='1'){
		$("#logoid").attr("href","http://shouyou.7881.com");
	}else{
		$("#logoid").attr("href","http://www.7881.com");
	}
		var address = window.location.href.substring(window.location.href.lastIndexOf("/"),window.location.href.length);
		if(address.indexOf("goods-buying") > -1){
			$("#div1").removeClass("gm_lc_2").addClass("gm_lc_1");
		}else if(address.indexOf("purchaseGoods") > -1){
			$("#div2").removeClass("gm_lc_2").addClass("gm_lc_1");
		}else if(address.indexOf("endPayout") > -1){
			$("#div3").removeClass("gm_lc_2").addClass("gm_lc_1");
		}else if(address.indexOf("toPayout") > -1){
			$("#div2").removeClass("gm_lc_2").addClass("gm_lc_1");
		}else if(address.indexOf("releaseNext") > -1 || address.indexOf("toConsignment") > -1 || address.indexOf("toGuaranty") > -1 
				|| address.indexOf("getAccountNext") > -1 || address.indexOf("getAccountById") > -1 ||address.indexOf("getAccountUpdateNext") > -1){
			$("#div2").removeClass("gm_lc_2").addClass("gm_lc_1");
			reloadHtml();
		}else if(address.indexOf("consignmentRelease") > -1 || address.indexOf("saveAccountGoods") > -1 ){
			$("#div3").removeClass("gm_lc_2").addClass("gm_lc_1");
			reloadHtml();
		}else if(address.indexOf("release") > -1){
			$("#div1").removeClass("gm_lc_2").addClass("gm_lc_1");
			reloadHtml();
		}
	});
	
	function reloadHtml(){
		$("#div1").html("1.选择发布游戏");
		$("#div2").html("2.填写商品信息");
		$("#div3").html("3.发布成功");
	}
	