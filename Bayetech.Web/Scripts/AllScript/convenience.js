window.onload = (function(){
	var obj;
	$("#phonenum").focus( function () {
		var hfValue=$("#hfmz_view").val();
		if(hfValue!=null && hfValue!='null' && (hfValue+'').indexOf("元")!=-1){
			hfValue=hfValue.replace('元','');
		}
		//alert(hfValue);
		$("#hfcz_"+hfValue).click();
	});
	//$("#phonenum").mouseover(function(){
	//	$("#hfcz_50").click();
	//});
});


$(function(){
	$("#appcz_2").click();

	$("#hfcz_50").click();
	$("#qq_0").click();
	/**********话费充值**********/
	var tel;
	$(".phoneNum").bind('propertychange input',function(){ 
		var valnum = $(this).val().length;
		var tel = $(this).val().replace(/\s+/g,"");//获取手机号并清空空格
		var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
		if(telReg == false && valnum ==11){ //如果手机号码不能通过验证
			$(".pho-hover").find(".error").text("手机号有误").show();
		}else if (valnum == 11){
			ajax(tel);
		}else {
			$(".pho-hover").find(".error").text("手机号有误").hide();
			$(".catName").css("display","none");
			phonePrice();
		}
	});
	var ajax=function(tel){
	//淘宝接口    
	$.ajax({
	    type: "get",
	    url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+tel,
	    dataType: "jsonp",
	    jsonp: "callback", 
	    success: function(data){
            var operators = data.carrier;
            var catName = data.catName;
            if (operators !== undefined){ //如果手机号码有归属地
            	if($(".phoneNum").val().length == 0){
                	$(".catName").css("display","none");
                }else {
                	$(".catName").html(operators);
            		$(".catName").css("display","block");
            		phonePrice(); // 计算价格
                }
            }else {
            	$(".pho-hover").find(".error").text("手机号有误").show();
            }
	    },
	    error:function (){
	    	$(".pho-hover").find(".error").text("归属地查询有误").show();
	    }
	    });
	};
	// 点击价格列表 话费
	$(".pho-hover").find(".sec-bot").on("click","li",function(event){
		//event.stopPropagation();
		var _val = $(this).text();
		facevalue_=_val;
		shownonum=$(this).attr("shownonum");
		select_huafei(_val);
		//$(this).parent().parent().parent().find(".hover-select-input").val(_val);
		//$(this).parent().parent().hide();
		//phonePrice();
	});
	// 提交按钮判断
	$(".pho-hover").find(".hover-btn").children("a").click(function(){
		if($(".catName").css("display") !== "block"){
			$(".pho-hover").find(".error").text("手机号有误").show();
		}else{
			//开发提交
		}
	});
	
	/**********QQ充值**********/
	
	$(".qqNum").bind('propertychange input',function(){ 
		var valnum = $(this).val().length;
		if(valnum >= 1){ 
			$(".qq-hover").find(".error").text("请输入正确的QQ号").hide();
		}
	});
	
	// 点击类型
	$(".qq-hover").find(".sec-bot").eq(0).on("click","li",function(event){
		event.stopPropagation();
		var _val = $(this).text(); //类型
		var _goodsid = $(this).data("goodsid"); //goodsid
		var _price = $(this).data("price"); //单价
		qq_type =_val;
		qq_price =_price;
		goodsid = _goodsid;
		$("#current_qq_money").val(_price);
		$("#current_qq_goodsid").val(_goodsid);
		$("#select_qq_item").val(_val);
		$(this).parent().parent().parent().find(".hover-select-input").val(_val);
		$(this).parent().parent().parent().find(".hover-select-input").data("denomination",_price);
		$(this).parent().parent().hide();
		switch (_goodsid)
		{
			case 36136024:
				$(".qq-hover").find(".sec-bot").eq(1).children("ul").html("<li data-num='5'>5个</li><li data-num='10'>10个</li><li data-num='30'>30个</li><li data-num='50'>50个</li><li data-num='100'>100个</li>");
				$(".qq-hover").find(".sec-top").eq(1).find("input").val("5个"); 
				$(".qq-hover").find(".sec-top").eq(0).find("input").data("num",5);
				qqPrice();
				break;
			case 5001:
				$(".qq-hover").find(".sec-bot").eq(1).children("ul").html("<li data-num='1'>10 Q点</li><li data-num='5'>50 Q点</li><li data-num='10'>100 Q点</li><li data-num='30'>300 Q点</li><li data-num='50'>500 Q点</li><li data-num='100'>1000 Q点</li>");
				$(".qq-hover").find(".sec-top").eq(1).find("input").val("500 Q点");
				$(".qq-hover").find(".sec-top").eq(0).find("input").data("num",50);
				qqPrice();
				break;
			default:
				$(".qq-hover").find(".sec-bot").eq(1).children("ul").html("<li data-num='1'>1个月</li><li data-num='3'>3个月</li><li data-num='6'>6个月</li><li data-num='9'>9个月</li><li data-num='12'>12个月</li>");
				$(".qq-hover").find(".sec-top").eq(1).find("input").val("1个月");
				$(".qq-hover").find(".sec-top").eq(0).find("input").data("num",1);
				qqPrice();
				break;
		};
		
	});
	
	// 点击面值
	$(".qq-hover").find(".sec-bot").eq(1).on("click","li",function(event){
		event.stopPropagation();
		var _num = $(this).data("num");
		$(".qq-hover").find(".sec-top").eq(0).find("input").data("num",_num);
		$("#current_qq_facevalue").val(_num);
		$('#cardNum').val(_num);
		qqPrice();
	});
	
	// 提交按钮判断
	$(".qq-hover").find(".hover-btn").children("a").click(function(){
		if($(".qq-hover").find(".hover-input").val().length >= 5){
			//开发提交
		}else{
			$(".qq-hover").find(".error").text("请输入正确的QQ号").show();
			
		}
	});
	
	/**********APP充值**********/
	$(".app-hover").find(".sec-bot").on("click","li",function(event){
		event.stopPropagation();
		var _price = $(this).data("price");
		$(this).parent().parent().parent().find(".hover-select-input").data("denomination",_price);
		appPrice();
	});
});


/********** 计算话费价格 **********/
//如果没有正确的手机号给出区域价格
//如果有正确的手机号算出具体价格
function phonePrice(){
	var catName = $(".catName").text();
	var denomination = $(".phonePrice").val();
	var _denomination = parseInt(denomination.substring(0,denomination.length-1)); //面额
	var _catname = catName.substring(catName.length-2); //运营商
	if($(".catName").css("display") == "block"){ //如果存在运营商 也就是输入了正确的手机号码
		// 开发根据选择的面额进行价格修改 
		switch (_denomination)
		{
		case 10:
			$(".pho-hover").find(".pri").text("9.8");
			break;
		case 20:
			$(".pho-hover").find(".pri").text("19.4");
			break;
		case 30:
			$(".pho-hover").find(".pri").text("29.4");
			break;
		case 50:
			$(".pho-hover").find(".pri").text("49");
			break;
		case 100:
			$(".pho-hover").find(".pri").text("95");
			break;
		}
	}else{ //如果不存在运营商 也就是没有输入了正确的手机号码或者没输入号码
		var denomination = $(".phonePrice").val();
		var _denomination = parseInt(denomination.substring(0,denomination.length-1)); //面额
		// 开发根据选择的面额进行价格区域修改 
		switch (_denomination)
		{
		case 10:
			$(".pho-hover").find(".pri").text("9.8-9.9");
			break;
		case 20:
			$(".pho-hover").find(".pri").text("19.4-20");
			break;
		case 30:
			$(".pho-hover").find(".pri").text("29.4-30");
			break;
		case 50:
			$(".pho-hover").find(".pri").text("49-49.8");
			break;
		case 100:
			$(".pho-hover").find(".pri").text("95-99.99");
			break;
		} 
	}
};

/********** 计算Q充值价格 **********/
function qqPrice(){
	var _denomination = $(".qq-hover").find(".sec-top").eq(0).find("input").data("denomination"); //单价
	var _num = $(".qq-hover").find(".sec-top").eq(0).children("input").data("num"); //单价
	var _tot = _denomination*10000 * _num/10000;
	$(".qq-hover").find(".pri").text(_tot);
	$("#sum_money").val(_tot);
	
}

/********** 计算APP价格 **********/
function appPrice(){
	var _denomination = $(".app-hover").find(".hover-select-input").data("denomination"); //单价
	$(".app-hover").find(".pri").text(_denomination);
	
}

function search(){
	var txt = $('#qq_number').val();
	//var txt_default = document.getElementById('txt_verityInput_qq').defaultValue;
	if (txt == '' || jQuery.trim(txt) == '') {
		alert('请输入qq号码');
		return false;
	} else {
		window.open("/tradesafe/safeCenter.html?txt="+txt);
		return false;
	}
}
//支持回车查询
function entersearch(){
	var event = window.event || arguments.callee.caller.arguments[0];
	if (event.keyCode == 13)
	{
		search();
	}
}


//便民中心相关
var qqrate="";
var hfrate="";
var mobile_info = "";
//$(function(){
$(document).ready(function(){
	load_rate(1);
	load_rate(2);
});
function load_rate(type)
{
	var data='';
	jQuery.ajax({
		type: "post",
		url: "/rechargecenter/getRateByType.action",
		data:"rechargeType="+type,
		beforeSend:function()
		{

		},
		success: function(msg)
		{
			if(type==1)
			{
				hfrate =  msg;
			}
			else if(type==2)
			{
				qqrate = msg;
				$.each(msg, function(i, item){
					if(item.goodsid=="36136024")
					{
						$("#sum_money").val(item.price);
						$("#current_qq_money").val(item.price);
						$("#qq_current_money").html("¥"+item.price);
					}
					$("#qq_item_select").append("<li id='qq_"+ i+ "' data-goodsid='"+item.goodsid+"' goodsid='"+item.goodsid+"' data-price='"+item.price+"' price='"+item.price+"'>"+item.goodsname+"</li>");
				});
			}
		}
	});

}
function select_mobileinfo(v)
{
	//$("#telpop").hide();
	if(v.length==11)
	{
		var ret = $.ajax({
			url : '/rechargecenter/getMobileAreaInfo.action?mobilenum='+v,
			async : false,
			cache : false
		}).responseText;
		mobile_info = jQuery.trim(ret);
		if("" == mobile_info)
		{
			$("#mobile_info").html("号码未知");
		}
		else
		{
			$("#mobile_info").html("中国"+mobile_info);
		}

		var select_me = 	'50';
		if(facevalue_!=''&&jQuery.trim(facevalue_).length>0){
			select_me=facevalue_;
		}
		select_huafei(select_me);
	}
}

function select_huafei(facevalue)
{
	//var shownonum = $('#select_hf').find('option:selected').attr('shownonum');
	$("#currmoney").html(shownonum);
	if(mobile_info=='')
	{
		$("#phonenum").focus();
		return;
	}
	//var key = $.trim(mobile_info)+facevalue+"元";
	var key = $.trim(mobile_info)+facevalue;
	$("#current_facevalue").val(facevalue);
	for(var i in hfrate)
	{
		var obj = hfrate[i];
		//var key = $.trim(mobile_info)+facevalue_+"元";
		var key = $.trim(mobile_info)+facevalue_;
		var objname = $.trim(obj.goodsname);
		if(objname== key)
		{
			$("#current_money").val(obj.price);
			$("#currmoney").html("¥"+obj.price);
			$("#current_goodsid").val(obj.goodsid);
		}
	}
}

//话费充值
function recharge_hf()
{

	if(userid==null || userid=='')
	{
		//location.href="/7881_touristlogin.jsp";
		//return;
	}
	var phonenum = $("#phonenum").val();

	if(phonenum=='')
	{
		alert("请输入手机号码");
		$("#phonenum").focus();
		return false;
	}
	if($.trim(mobile_info)=="")
	{
		alert("您的号码输入有误，请仔细核对您的号码。");
		return false;
	}

	var cardId='140101';//快充
	$('#toolGoodsId').val($("#current_goodsid").val());
	$('#cardId').val(cardId);
	$('#cardName').val(mobile_info+	$("#current_facevalue").val()+'元直充');
	$('#cardNum').val('1');
	$('#cardFinalMoney').val($("#current_money").val());
	$('#gameAccount').val(phonenum);
	$('#gtid').val('100129');

	form1.submit();
}

function select_qq_type()
{
	var qq_type = $('#qq_item_select').find('option:selected').text();
	var qq_price = $('#qq_item_select').find('option:selected').attr('price');
	var goodsid = $('#qq_item_select').find('option:selected').attr('goodsid');
	$("#current_qq_money").val(qq_price);
	$("#current_qq_goodsid").val(goodsid);
	$("#select_qq_item").val(qq_type);
	if(goodsid=='36136024')
	{
		$("#select_face").show();
		$("#select_month").hide();
		$("#select_face_qd").hide();
		var qq_face_value = $("#qq_face_select").val();
		change_face(qq_face_value);
	}
	else if(goodsid=='5001')
	{
		$("#select_face_qd").show();
		$("#select_face").hide();
		$("#select_month").hide();
		var qd_face_value = $("#qd_face_select").val();
		change_face_qd(qd_face_value);
	}
	else
	{
		$("#select_face").hide();
		$("#select_month").show();
		$("#select_face_qd").hide();
		var qq_month_value = $("#qq_month_select").val();
		change_face(qq_month_value);
	}
}



function change_face(facevalue)
{
	$("#current_qq_facevalue").val(facevalue);
	$('#cardNum').val(facevalue);
	for(var i in qqrate)
	{
		var obj = qqrate[i];
		var key = $.trim($("#current_qq_goodsid").val());
		var objid = obj.goodsid;
		if(objid == key)
		{
			var sum_money = parseFloat($("#current_qq_money").val()).toFixed(2)* facevalue;
			$("#qq_current_money").html("¥"+sum_money.toFixed(2));
			$("#sum_money").val(sum_money.toFixed(2));
			return false;
		}
	}
}
function change_face_qd(facevalue)
{
	$("#current_qd_facevalue").val(facevalue);
	$('#cardNum').val(facevalue);
	for(var i in qqrate)
	{
		var obj = qqrate[i];
		var key = $.trim($("#current_qq_goodsid").val());
		var objid = obj.goodsid;
		if(objid == key)
		{
			var sum_money = parseFloat($("#current_qq_money").val()).toFixed(2)* facevalue;

			$("#qq_current_money").html("¥"+sum_money.toFixed(2));
			$("#sum_money").val(sum_money.toFixed(2));
			return false;
		}
	}
}
function change_month(facevalue)
{
	$("#current_qq_facevalue").val(facevalue);
	$('#cardNum').val(facevalue);
	for(var i in qqrate)
	{
		var obj = qqrate[i];
		var key = $.trim($("#current_qq_goodsid").val());
		var objid = obj.goodsid;
		if(objid == key)
		{
			var sum_money = parseFloat($("#current_qq_money").val()).toFixed(2)* facevalue;
			$("#qq_current_money").html("¥"+sum_money.toFixed(2));
			$("#sum_money").val(sum_money.toFixed(2));
			return false;
		}
	}
}

function submit_data_qq()
{
	if(jQuery.trim(qq_type)==''){
		qq_type=$("#qqType").val();
	}

	if(userid==null || userid=='')
	{
		// location.href="/7881_touristlogin.jsp";
		//return;
	}
	var qqnum = $("#qqnum").val();
	if(qqnum=='')
	{
		alert("请输入QQ号码");
		$("#qqnum").focus();
		return false;
	}

	$('#toolGoodsId').val($("#current_qq_goodsid").val());
	$('#cardName').val($("#select_qq_item").val());
	var qq_mz= $("#qq_mz").val();
	qq_mz=qq_mz+'';
	if(qq_mz.indexOf('个')!=-1){
		qq_mz=qq_mz.replace('个','');
	}if(qq_mz.indexOf('Q点')!=-1){
	qq_mz=qq_mz.replace('Q点','');
}if(qq_mz.indexOf('个月')!=-1){
	qq_mz=qq_mz.replace('个月','');
}if(qq_mz.indexOf('月')!=-1){
	qq_mz=qq_mz.replace('月','');
}
	qq_mz=jQuery.trim(qq_mz);
	if(qq_type=='Q点'){
		qq_mz=parseInt(qq_mz)/10;
	}
	$("#current_qq_facevalue").val(qq_mz);

	$('#cardNum').val(qq_mz);
	//$('#cardNum').val($("#current_qq_facevalue").val());
	$('#cardFinalMoney').val($("#sum_money").val());
	$('#gameAccount').val(qqnum);
	$('#rechargeType').val("qq");
	$('#gtid').val('100126');
	form1.submit();

}

$(function(){
	$("#qqnum").click(function(e){
		e.stopPropagation();
		$(".qqpop").show();
	})
	$("#qqpop_value").find("p").click(function(e){
		e.stopPropagation();
		$("#qqnum").val($(this).text());
		$(".qqpop").hide();
	})

	$("#phonenum").click(function(e){
		e.stopPropagation();
		$(".qqpop").show();
	})
	$("#telpop_value").find("p").click(function(e){
		e.stopPropagation();
		$("#phonenum").val($(this).text());
		$(".qqpop").hide();
		select_mobileinfo($(this).text());
	})

	$("html").click(function(){
		$(".qqpop").hide();
	})
});

function select_price(price,goodsid){
	$('#appPrice').html(price);

	// var appczurl = 'http://shouyou.7881.com/appzc/ios/goods-'+goodsid+'-buy.html';
	var appczurl = 'http://shouyou.7881.com/ascz/ios/goods-'+goodsid+'-buy.html';
	$("#appcz").attr("href",appczurl);

}
var shownonum='';
var facevalue_='';
var qq_type ='';
var qq_price ='';
var goodsid = '';


function searchQQ(){
	var txt = $('#qq_number').val();
	var txt_default = document.getElementById('qq_number').defaultValue;
	if (txt == txt_default || jQuery.trim(txt) == '') {
		alert('请输入qq号码');
		return false;
	} else {
		window.open("/tradesafe/safeCenter.html?txt="+txt);
		return false;
	}
}