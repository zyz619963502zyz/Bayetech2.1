// // 模拟placeholder && 获取焦点发光
$(".placeholder").click(function(event) {
	$(this).siblings('.comIpt').focus();
	if($(this).siblings('.pureIpt').length > 0) {
		$(this).siblings('.pureIpt').focus();
	}
	$(this).addClass("hide");
});
$("input").not(":checkbox, :button, :radio").focus(function() {
	if($(this).siblings('.placeholder').length > 0) {
		$(this).siblings('.placeholder').addClass("hide");
	}
	if ($(this).hasClass('loginUserIpt') && $.trim($(this).val())) {
		$(this).next('.delIcon').removeClass('hide');
	};
	$(this).parent().addClass('focusShadow');
});
$("input").not(":checkbox, :button, :radio").blur(function() {
	if (!$.trim($(this).val())) {
		$(this).siblings('.placeholder').removeClass("hide");
		if ($(this).siblings('.delIcon').length > 0) {
			$(this).siblings('.delIcon').addClass('hide');
		};
	};
	$(this).parent().removeClass("focusShadow");

});
$(".loginUserIpt").keydown(function() {
	$(this).next('.delIcon').removeClass('hide');
});
$(".loginUserIpt").blur(function() {
	var $_self = $(this);
	setTimeout(function() {
		$_self.next('.delIcon').addClass('hide');
	}, 200);

});
//用户名框删除
$(".delIcon").click(function() {
	$(this).siblings(".loginUserIpt").focus().val("");
	$(this).addClass('hide');
});
//验证码交互
$(".pureIpt").focus(function() {
	$(this).next(".codePlaceholder").addClass('hide');
});
$(".pureIpt").blur(function(event) {
	if(!$(this).val()) {
		$(this).siblings('.placeholder').removeClass('hide');
	}
});
// 查看密码图标变换
$(".loginEye").hover(function() {
	$(this).find('i').addClass('loginEyeIconHover');
}, function() {
	$(this).find('i').removeClass('loginEyeIconHover');
});
$(".loginEye").click(function() {
	if ($('.passContainer input:text').val() == "请输入密码") {
		return false;
	}else if ($(this).find('i').hasClass('loginEyeIconActive')){
		$('.passContainer input:text').parent().addClass('hide');
		$('.passContainer input:password').parent().removeClass('hide');
		$(this).find('i').removeClass('loginEyeIconActive');
		$(this).parent().siblings().find('.loginEyeIcon').removeClass('loginEyeIconActive');

	}else {
		$(this).find('i').addClass('loginEyeIconActive');
		$(this).parent().siblings().find('.loginEyeIcon').addClass('loginEyeIconActive');
		$('.passContainer input:text').removeClass('color9')
									 .parent().removeClass('hide');
		$('.passContainer input:password').parent().addClass('hide');
	}
});
$('.passContainer input:text').focus(function() {
	if ($(this).parent().find('.loginEyeIcon').hasClass('loginEyeIconActive')) {
		if ($(this).val() == '请输入密码') {
			$(this).val('').removeClass('color9');
		};

	} else if ($(this).val() == '请输入密码') {
		$(this).parent().addClass('hide');
		$(this).parent().siblings().removeClass('hide');
		$(this).parent().siblings().find('input').focus();
	};
});
$('.passContainer input').keyup(function() {
	var t = $(this).val();
	$(this).parent().siblings().find('input').val(t);
});
$('.passContainer input:text').blur(function() {
	if ($(this).parent().find('.loginEyeIcon').hasClass('loginEyeIconActive') && $.trim($(this).val()) =="") {
          $(this).val("请输入密码").addClass('color9');

	};
});
$('.passContainer input:password').blur(function() {
	if (!$.trim($(this).val())) {
		$(this).parent().addClass('hide');
		$(this).parent().siblings().removeClass('hide');
		$(this).parent().siblings().find('input').val('请输入密码').addClass('color9');
	};
});
// 点击切换验证码
$(".codeImg").click(function(event) {
	var url = this.src;
	var arr = url.split("?");
	this.src = arr[0]+'?param=' + new Date().getTime();
});
$(".changeOne").click(function(event) {
	$(".codeImg").trigger('click');
	return false;
});
$(function() {
	$(".loginMain input").not(":hidden,:checkbox, :button, :radio, .dropIpt,#tel,#username, .passContainer input").val("");
	$('.passContainer input:eq(0)').val('请输入密码');
	$('.passContainer input:eq(1)').val('');
});
function img_valid(){
	var b = false;
	if($('#img_valid').val() != ""){
		$.ajax({
			type:'post',
			url:'/user/ajax_checkImgValid.action',
			data:{img_valid:$('#img_valid').val()},
			dataType:'text',
			async:false,
			success:function(data) {
				if (data == 'false') {
					$("#img_valid").parent().addClass("focusError");
					$(".loginError").removeClass("hide");
					$(".loginErrorText").html("图形验证码不正确，请重新输入");
				}else{
					b = true;
				}
			}
		});
	}
	return b;
}
// 点击登录按钮
$("#hlkOK").click(function(event) {
		$.ajax({
			type:'post',
			url:'/getRandom.action',
			dataType:'text',
			success:function(txt) {
				$('#random').val(txt);
				return checkLogin();
			},
			error:function(txt) {
				alert(txt);
			}
		});
	return false;
});
var ischeck = 0;
function checkLogin() {
	var flag = false;
	$(".comIptBox input").not(".passContainer input:text").each(function(index, el) {
		if (!$.trim($(this).val())) {
			$(this).parent().addClass("focusError");
			$(".loginError").removeClass("hide");
			$(".loginErrorText").html($(this).attr("data-error"));
//			ischeck = 0;
			flag = true;
			return false;
		};
	});
//	if (ischeck == 0) {
//		ischeck++;
//	} else {
//		ischeck = 0;
//		return true;
//	}
	if(flag){
//		ischeck = 0;
		return false;
	}
	var username = $('#username').val();
	$('#username').val(username.toLowerCase());
	var autoLogin = document.getElementById('autoLogin');
	username = $('#username').val();
	if(autoLogin.checked == true){
			setCookie("username",username,"10");
			setCookie("autoLogin","true","10");
	}else{
		setCookie("username","");
		setCookie("autoLogin","false");
	}
	var passwdTemp=$('#password').val();

	if ($.trim($("#username").val()) && $.trim($("#password").val()) && $.trim($("#img_valid").val()) && img_valid()) {
		$('#password').val(hex_md5(hex_md5($('#password').val()) + $('#random').val()));

		$(".loginBtn").text('正在登录...');
		$(".loginBtn").attr("disabled","disabled");
		$(".loginError").addClass("hide");

		$('#loginForm').attr('action', '/login.action');
		$('#loginForm').submit();
	    $('#password').val(passwdTemp);
	    return false;
	};
}
$(".loginBox input").keydown(function() {
	$(this).parent().removeClass('focusError');
	$(".loginError").addClass("hide");
});
// 三方登录验证
function checkLog3(obj) {
	var flag = true;
	$.each($(obj), function(i,item){
		if(flag == false){
			return false;
		}
		$(item).attr('valid', 'false');
		if ($.trim($(item).val()) == '') {
			$(item).parent().addClass("focusError");
			$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
			$(item).parents('.radioWrap').find(".loginErrorText").html($(item).attr('data-error'));
			if (flag) {flag = false;}
			return false;
		}
		var tel = '';
		var checkCode_tel = '';
		if('.radio1 input:text' == obj){
			tel = $('#tel').val();
			checkCode_tel = $('#checkCode_tel');
		}else if('.radio2 input:text' == obj){
			tel = $('#tel2').val();
			checkCode_tel = $('#checkCode_tel2');
		}
		if ($.trim($(item).val()) != '' && $(item).attr('regexp') && $(item).attr('regexp_desc')) {
			var pattern = new RegExp($(item).attr('regexp'));
			if (!pattern.test($(item).val())) {
				$(item).parent().addClass("focusError");
				$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
				$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html($(this).attr('regexp_desc'));
				if (flag) {flag = false;}
				return false;
			}
		}

		var code = '';
		var checkImgValid = '';
		$.ajax({
			type:'post',
			url:'/user/examineRegisterUserTel.action',
			data:{tel:tel},
			dataType:'json',
			async:false,
			success:function(data) {
				code = data.code;
			}
		});

		$.ajax({
			type:'post',
			url:'/user/ajax_checkImgValid.action',
			data:{img_valid:checkCode_tel.val()},
			dataType:'text',
			async:false,
			success:function(data) {
				checkImgValid = data;
			}
		});
		var radio = "";
		if('.radio1 input:text' == obj){
			radio = "radio1";
			if(code == '1' || code == '2' || code == '3'){
				//手机号存在
				$(item).parent().addClass("focusError");
				$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
				$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html("手机号已存在，如果您是该用户，请立刻<a href='javascript:void(0)' onclick='javascript:chargebind()'>关联</a>");
				if (flag) {flag = false;}
				return false;
			}
		}else if('.radio2 input:text' == obj){
			radio = "radio2";
			if(code == '0'){
				//手机号不存在
				$(item).parent().addClass("focusError");
				$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
				$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html("您输入的手机号尚未注册，请立即  <a class='bind2' href='javascript:void(0)' onclick='javascript:chargebind2()'>绑定</a>");
				if (flag) {flag = false;}
				return false;
			}
		}
		if (checkCode_tel == "" || checkCode_tel.val() ==""){
			checkCode_tel.parent().addClass("focusError");
			checkCode_tel.parents('.radioWrap').find('.loginError').removeClass("hide");
			checkCode_tel.parents('.radioWrap').find('.loginError').find(".loginErrorText").html("请输入验证码");
			if (flag) {flag = false;}
			return false;
		}
		if (checkImgValid == 'false') {
			checkCode_tel.parent().addClass("focusError");
			checkCode_tel.parents('.radioWrap').find('.loginError').removeClass("hide");
			checkCode_tel.parents('.radioWrap').find('.loginError').find(".loginErrorText").html("图形验证码不正确，请重新输入");
			if (flag) {flag = false;}
			return false;
		}
		if(radio == "radio1"){
			if($(".radio1 #userid").val()==""){
				$(".radio1 #verificationcode").parent().addClass("focusError");
				$(".radio1 #verificationcode").parents('.radioWrap').find('.loginError').removeClass("hide");
				$(".radio1 #verificationcode").parents('.radioWrap').find('.loginError').find(".loginErrorText").html("请先获取短信验证码");
				if (flag) {flag = false;}
			}
		}else if(radio == "radio2"){
			if($(".radio2 #userid").val()==""){
				$(".radio2 #verificationcode").parent().addClass("focusError");
				$(".radio2 #verificationcode").parents('.radioWrap').find('.loginError').removeClass("hide");
				$(".radio2 #verificationcode").parents('.radioWrap').find('.loginError').find(".loginErrorText").html("请先获取短信验证码");
				if (flag) {flag = false;}

			}
		}

	});
	return flag;
}


function chargebind(){
//	$(".binded").trigger("click");

	$("#bind2").attr("checked", true);
	$(".radio2").removeClass('hide');
	$(".radio1").addClass('hide');

	$("#tel2").val($("#tel").val());
	$("#tel2").siblings('.placeholder').addClass("hide");
	return false;
}
function chargebind2(){
//	$(".notBind").trigger("click");

	$("#bind1").attr("checked", true);
	$(".radio1").removeClass('hide');
	$(".radio2").addClass('hide');

	$("#tel").val($("#tel2").val());
	$("#tel").siblings('.placeholder').addClass("hide");
	return false;
}

// 三方登录失去焦点验证
$('.radioBox input:text').not(".phoneCode,.bind2").each(function(i, item) {
	$(item).blur(function() {
		if ($.trim($(item).val()) == '') {
			$(item).parent().addClass("focusError");
			$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
			$(item).parents('.radioWrap').find(".loginErrorText").html($(item).attr('data-error'));
		}
		if ($.trim($(item).val()) != '' && $(item).attr('regexp') && $(item).attr('regexp_desc')) {
			var pattern = new RegExp($(item).attr('regexp'));
			if (!pattern.test($(item).val())) {
				$(item).parent().addClass("focusError");
				$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
				$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html($(this).attr('regexp_desc'));
			}
		}
		if ($(item).attr('ajaxValidate') == 'tel') {
			var tel = '';
			var img_valid = '';
			if($(item).attr("id") == "tel"){
				tel = $('#tel').val();
				img_valid = $("#checkCode_tel");
			}else if($(item).attr("id") == "tel2"){
				tel = $('#tel2').val();
				img_valid = $("#checkCode_tel2");
			}
			var code = '';
			$.ajax({
				type:'post',
				url:'/user/examineRegisterUserTel.action',
				data:{tel:tel},
				dataType:'json',
				async:false,
				success:function(data) {
					code = data.code;
				}
			});

			if($(item).attr("id") == "tel"){
				if(code == '1' || code == '2'|| code == '3'){
					//手机号已存在
					$(item).parent().addClass("focusError");
					$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
					$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html("手机号已存在，如果您是该用户，请立刻<a href='javascript:void(0)' onclick='javascript:chargebind()'>关联</a>");
				}else{
					$(".radio1").find('.loginError').addClass('hide').find(".loginErrorText").html("");
				}

			}else if($(item).attr("id") == "tel2"){
				if(code == '0'){
					//手机号不存在
					$(item).parent().addClass("focusError");
					$(item).parents('.radioWrap').find('.loginError').removeClass("hide");
					$(item).parents('.radioWrap').find('.loginError').find(".loginErrorText").html("您输入的手机号尚未注册，请立即  <a href='javascript:void(0)' onclick='javascript:chargebind2()'>绑定</a>");
				}else{
					$(".radio2").find('.loginError').addClass('hide').find(".loginErrorText").html("");
				}
			}

		}else if ($(this).attr('ajaxValidate') == 'img_valid') {
			if($(this).val() != ""){
				var thisself = $(this);
				$.ajax({
					type:'post',
					url:'/user/ajax_checkImgValid.action',
					data:{img_valid:$(this).val()},
					dataType:'text',
					async:false,
					success:function(data) {
						if (data == 'false') {
							thisself.parent().addClass("focusError");
							thisself.parents('.radioWrap').find('.loginError').removeClass("hide");
							thisself.parents('.radioWrap').find('.loginError').find(".loginErrorText").html("图形验证码不正确，请重新输入");
						}
					}
				});
			}
		}
	});
});
$("#log3Btn1").click(function() {
	if (checkLog3('.radio1 input:text')) {
		$.ajax({
			type:'post',
			url:'/user/thirdAccountLoginBindPhone.action',
			data:{userid:$('.radio1 #userid').val(),act:"bind_tel",verificationcode:$(".radio1 #verificationcode").val(),tel:$(".radio1 #tel").val()},
			dataType:'json',
			success:function(data) {
				if (data != "" && data.code == "2") {
					$('.popBg').show();
					$("#bindSucc").show();
					send1("#bindSucc");
				}else if (data != "" && data.code == "-1") {
					$(".radio1 #verificationcode").parent().addClass("focusError");
					$(".radio1 #tel").parents('.radioWrap').find('.loginError').removeClass("hide");
					$(".radio1 #tel").parents('.radioWrap').find('.loginError').find(".loginErrorText").html("短信验证码不正确，请重新输入");
				}
			}
			});
		return false;
	} else {
		return false;
	}
});
$("#log3Btn2").click(function(event) {
	if (checkLog3('.radio2 input:text')) {
		$('.popBg').show();
		$("#ifBind").show();
//		$("#registerForm2").submit();
		return false;
	} else {
		return false;
	}
});
$('.popBtn1').click(function() {
	$('.popBg').hide();
	$("#ifBind").hide();
	return false;
});
$('.popBtn2').click(function() {
	$.ajax({
	type:'post',
	url:'/user/thirdAccountLoginBindPhone.action',
	data:{userid:$('.radio2 #userid').val(),act:"bind_tel2",verificationcode:$(".radio2 #verificationcode").val(),tel:$(".radio2 #tel2").val()},
	dataType:'json',
	success:function(data) {
		var msg = '';
		if (data != "") {
			if(data.code == "2"){
				$('.popBg').show();
				$("#ifBind").hide();
				$('#associateSucc').show();
				send1("#associateSucc");
				return;
			}else if(data.code == "-1"){
				$('.popBg').hide();
				$("#ifBind").hide();
				$(".radio2 #verificationcode").parent().addClass("focusError");
				$(".radio2 #tel2").parents('.radioWrap').find('.loginError').removeClass("hide");
				$(".radio2 #tel2").parents('.radioWrap').find('.loginError').find(".loginErrorText").html("短信验证码不正确，请重新输入");
				return;
			}else{
				msg = data.msg;
			}
		}else{
			msg = "关联账户出现错误";
		}
		$('.popBg').hide();
		$("#ifBind").hide();
		$(".radio2 #tel2").parent().addClass("focusError");
		$(".radio2 #tel2").parents('.radioWrap').find('.loginError').removeClass("hide");
		$(".radio2 #tel2").parents('.radioWrap').find('.loginError').find(".loginErrorText").html(msg);
	}
	});
	return false;
});
// 下拉框
$(".regDrop li").hover(function() {
	$(this).addClass('dropHover');
}, function() {
	$(this).removeClass('dropHover');
});
$(".regDrop li").click(function(event) {
	$(this).parent().siblings('input').val($(this).html());
	$(".regDrop").slideUp(300);
	document.getElementById("arrow").innerHTML = "\&\#xe60f";
	$(this).parent().parent().removeClass('focusError');
	$(this).parent().siblings('.regDesc').addClass('hide');
	event.stopPropagation();
});
$("body").click(function(event) {
	if ($(".arrow").length > 0) {
		$(".regDrop").slideUp(300);
		document.getElementById("arrow").innerHTML = "\&\#xe60f";
	};
	event.stopPropagation();
});
$("#dropdown").click(function(event) {
	if ($(this).find('.regDrop').is(':visible')) {
		$(".regDrop").slideUp(300);
		document.getElementById("arrow").innerHTML = "\&\#xe60f";
		event.stopPropagation();
	}else {
		$(".regDrop").slideDown(300);
		document.getElementById("arrow").innerHTML = "\&\#xe604";
		event.stopPropagation();
	}
});
// 弹出层
(function($){
  $.fn.layer = function(){
    var isIE = (document.all) ? true : false;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var position = !isIE6 ? "fixed" : "absolute";
    var containerBox = $(this);
    containerBox.css({"z-index": "9999","display": "block","position": position ,"top": "50%","left": "50%","margin-top": -(containerBox.height() / 2) + "px","margin-left": - (containerBox.width() /2 ) + "px"});
    var layer=$("<div></div>");
    layer.css({"width": "100%","height": "100%","position": position,"top": "0px","left": "0px","background-color": "#000","z-index": "9998","opacity": "0.45"});
    $("body").append(layer);
    function layer_iestyle(){
      var maxWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
      var maxHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
      layer.css({"width": maxWidth , "height": maxHeight });
    }
    function containerBox_iestyle(){
      var marginTop = $(document).scrollTop - containerBox.height() / 2 + "px";
      var marginLeft = $(document).scrollLeft - containerBox.width() / 2 + "px";
      containerBox.css({"margin-top": marginTop , "margin-left": marginLeft });
    }
    if(isIE){
      layer.css("filter", "alpha(opacity=45)");
    }
    if(isIE6){
      layer_iestyle();
      containerBox_iestyle();
    }
    $("window").resize(function(){
      layer_iestyle();
    });
    layer.click(function(){
      containerBox.hide(300);
      $(this).remove();
    });
    $(".cClose").click(function(){
      containerBox.hide(300);
      $(layer).remove();
    });
  };
})(jQuery);
$('.popBg').click(function(event) {
	// $(this).parent().find('.pop').hide();
	// $(this).hide();
});
$(".regAgreementLink").click(function(event) {
	$(".popUp").layer();
	return false;
});
// 发送验证码
var count = 59; //倒计时总时间
function send(obj) {
	var InterValObj;
	var curCount=0;
	curCount = count;
     $(obj).attr("disabled", "true");
     $(obj).prop("disabled", true);
     $(obj).val(curCount + "秒后重新发送");
     InterValObj = setInterval(setRemainTime, 1000);
	function setRemainTime() {
		if (curCount == 1) {
			window.clearInterval(InterValObj);
			$(obj).val("获取短信验证码").css("color", "#666");
		 $(obj).prop("disabled", false);
		}
		else {
			curCount--;
			$(obj).val(curCount + "秒后重新发送");
			$(obj).blur(function() {
				$(obj).siblings('.regDesc').text('您即将收到一通电话，播报语音验证码，请注意接听');
			});
		}
	}
}
// 语音验证码点击事件
$("body").on("click",".voiceCode",function() {
	var flag  = 1;
	$(this).parents('.mCode').next('.getCode').trigger('click',"1");
	return false;
});
var t1 = 1,
	t2 = 1,
	t3 = 1,
	total = 99;
//未绑定手机号三方登录--短信验证码1
$("#getCode1").click(function(e, t) {
	var _btn = $(this);
	t = 0 || t;
	var type = 0;
	if(t1<total) {
		if (!t) { //直接点击
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.addClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.addClass('hide');
			});

			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(_btn).val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(_btn).val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
		}else {//语音按钮触发点击
			type = 1;
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.removeClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
			});
			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
			});
		};



		var pattern = /^1[34578]\d{9}$/;
		var num = $.trim($(".log3Ipt1").val());
	/*	if($.trim($(".log3Ipt1").val()) !="" && $.trim($(".log3Ipt2").val()) !="" && pattern.test(num)) {
			$("#getCode1").css("color", "#aaa");
			send("#getCode1");
			setTimeout(function() {
				$(".radio1").find('.mCode').find('.regDesc').html(_html).removeClass('hide');
			}, count*1000);
		} else*/ if(!$.trim($(".log3Ipt1").val())){
			$(".log3Ipt1").parent().addClass('focusError');
			$(".radio1").find('.loginError').removeClass('hide').find(".loginErrorText").html($(".log3Ipt1").attr("data-error"));
		} else if(!$.trim($(".log3Ipt2").val())) {
			$(".log3Ipt2").parent().addClass('focusError');
			$(".radio1").find('.loginError').removeClass('hide').find(".loginErrorText").html($(".log3Ipt2").attr("data-error"));
		} else if($.trim($(".log3Ipt1").val()) && !pattern.test(num)) {
			$(".log3Ipt1").parent().addClass('focusError');
			$(".radio1").find('.loginError').removeClass('hide').find(".loginErrorText").html("请输入正确的手机号");
		}else if($.trim($("#checkCode_tel").val()) == ""){
			$("#checkCode_tel").parent().addClass('focusError');
			$(".radio1").find('.loginError').removeClass('hide').find(".loginErrorText").html("请输入手机验证码");
		}else{

			$(".radio1").find('.loginError').addClass('hide').find(".loginErrorText").html("");

			t1++;

			$.ajax({
				type:'post',
				url:'/api/send_phone_code.action',
				data:{act:$(this).attr("act"),captcha:$("#checkCode_tel").val(),phone:$("#tel").val(),t:type},
				dataType:'json',
				async:false,
				success:function(rst) {
					// 如果发送成功
					if (rst && rst.errno == 0) {
						if (rst.data && rst.data.userID) {
							// 在注册页面需要该用户编号字段。
							// 注意：服务器端要再次检查！最好放入session
							$(".radio1 #userid").val(rst.data.userID);

							if($.trim($(".log3Ipt1").val()) !="" && $.trim($(".log3Ipt2").val()) !="" && pattern.test(num)) {
								$("#getCode1").css("color", "#aaa");
								send("#getCode1");
								// setTimeout(function() {
								// 	$(".radio1").find('.mCode').find('.regDesc').html(_html).removeClass('hide');
								// }, count*1000);
							}
						}
					}else{
						if(rst == 1004){//图形验证码错误
							$("#checkCode").parent().addClass("focusError");
							$("#checkCode").parents('.radioWrap').find('.loginError').removeClass("hide");
							$("#checkCode").parents('.radioWrap').find('.loginError').find(".loginErrorText").html(msg);
							return;
						}
						var msg = "发送验证码出现错误";
						if (rst && rst.msg) {
							if("手机号码已注册" == rst.msg){
								msg = "手机号已存在，如果您是该用户，请立刻<a href='javascript:void(0)' onclick='javascript:chargebind()'>关联</a>";
							}else{
								msg = rst.msg;
							}
						}
						$(".radio1 #verificationcode").parent().addClass("focusError");
						$(".radio1 #verificationcode").parents('.radioWrap').find('.loginError').removeClass("hide");
						$(".radio1 #verificationcode").parents('.radioWrap').find('.loginError').find(".loginErrorText").html(msg);
					}
				}
			});

		}
		return false;
	}else {
		$(this).attr("disabled", "true");
     		$(this).prop("disabled", true);
     		$(this).siblings('.comIptBox').find('.regDesc').text('您获取短信验证码超过限制，请明天再试');
	}
	return false;
});

//已绑定手机号三方登录--短信验证码2
$("#getCode2").click(function(e, t) {
	var _btn = $(this);
	t = 0 || t;
	var type = 0;
	if(t2<total) {
		if (!t) { //直接点击
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.addClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.addClass('hide');
			});

			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(_btn).val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(_btn).val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
		}else {//语音按钮触发点击
			type = 1;
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.removeClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
			});
			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
			});
		};



		var pattern = /^1[34578]\d{9}$/;
		var num = $.trim($(".log3Ipt4").val());
	/*	if($.trim($(".log3Ipt4").val()) !="" && $.trim($(".log3Ipt5").val()) !="" && pattern.test(num)) {
			$("#getCode2").css("color", "#aaa");
			send("#getCode2");
			setTimeout(function() {
				$(".radio2").find('.mCode').find('.regDesc').html(_html).removeClass('hide');
			}, count*1000);
		} else */if(!$.trim($(".log3Ipt4").val())){
			$(".log3Ipt4").parent().addClass('focusError');
			$(".radio2").find('.loginError').removeClass('hide').find(".loginErrorText").html($(".log3Ipt4").attr("data-error"));
		} else if(!$.trim($(".log3Ipt5").val())) {
			$(".log3Ipt5").parent().addClass('focusError');
			$(".radio2").find('.loginError').removeClass('hide').find(".loginErrorText").html($(".log3Ipt5").attr("data-error"));
		} else if($.trim($(".log3Ipt4").val()) && !pattern.test(num)) {
			$(".log3Ipt4").parent().addClass('focusError');
			$(".radio2").find('.loginError').removeClass('hide').find(".loginErrorText").html("请输入正确的手机号");
		}else if ($.trim($("#checkCode_tel2").val()) ==""){
			$("#checkCode_tel2").parent().addClass('focusError');
			$(".radio2").find('.loginError').removeClass('hide').find(".loginErrorText").html("请输入验证码");
		}else{
			$(".radio2").find('.loginError').addClass('hide').find(".loginErrorText").html("");
			t2++;
			$.ajax({
				type:'post',
				url:'/api/send_phone_code.action',
				data:{act:$(this).attr("act"),captcha:$("#checkCode_tel2").val(),phone:$("#tel2").val(),t:type},
				dataType:'json',
				async:false,
				success:function(rst) {
					// 如果发送成功
					if (rst && rst.errno == 0) {
						if (rst.data && rst.data.userID) {
							// 在注册页面需要该用户编号字段。
							// 注意：服务器端要再次检查！最好放入session
							$(".radio2 #userid").val(rst.data.userID);

							if($.trim($(".log3Ipt4").val()) !="" && $.trim($(".log3Ipt5").val()) !="" && pattern.test(num)) {
								$("#getCode2").css("color", "#aaa");
								send("#getCode2");
								// setTimeout(function() {
								// 	$(".radio2").find('.mCode').find('.regDesc').html(_html).removeClass('hide');
								// }, count*1000);
							}
						}
					}else{
						var msg = "发送验证码出现错误";
						if (rst && rst.msg) {
							msg = rst.msg;
						}
						$(".radio2 #verificationcode").parent().addClass("focusError");
						$(".radio2 #verificationcode").parents('.radioWrap').find('.loginError').removeClass("hide");
						$(".radio2 #verificationcode").parents('.radioWrap').find('.loginError').find(".loginErrorText").html(msg);
					}
				}
			});
		}
		return false;
	}else {
		$(this).attr("disabled", "true");
     		$(this).prop("disabled", true);
     		$(this).siblings('.comIptBox').find('.regDesc').text('您获取短信验证码超过限制，请明天再试');
	}
	return false;
});
// 手机注册--短信验证码
$("#getCode3").click(function(e,t) {

	t = 0 || t;
	var type = 0;
	if(t3<total) {
		if (!t) { //直接点击
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.addClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.addClass('hide');
			});

			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(".getCode").val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
				if ($.trim($(".getCode").val()) != "获取短信验证码") {
					$desc.addClass('hide');
				}else {
					$desc.removeClass('hide');
				};
			});
		}else {//语音按钮触发点击
			type = 1;
			var $desc = $(this).siblings('.mCode').find('.regDesc');
			$desc.removeClass('hide');
			$(this).siblings('.mCode').find('.phoneCode').focus(function(event) {
				$desc.removeClass('hide');
			});
			$(this).siblings('.mCode').find('.phoneCode').blur(function(event) {
				$desc.removeClass('hide');
			});
		};
		$(this).siblings('.mCode').find('.regDesc').removeClass('regErrorText');
		var pattern2 = /^1[34578]\d{9}$/;
		var num2 = $.trim($(".loginUserIpt").val());
		if(!$.trim($(".loginUserIpt").val())){
			$(".loginUserIpt").parent().addClass('focusError');
			$(".loginUserIpt").siblings('.regDesc').text($(".loginUserIpt").attr("data-error")).addClass('regErrorText').removeClass('hide');

		} else if(!$.trim($(".pureIpt").val())) {
			$(".pureIpt").parent().addClass('focusError');
			$(".pureIpt").siblings('.regDesc').text($(".pureIpt").attr("data-error")).addClass('regErrorText').removeClass('hide');
		} else if(!pattern2.test(num2)) {
			$(".loginUserIpt").parent().addClass('focusError');
			$(".loginUserIpt").siblings('.regDesc').text("请输入正确的手机号").addClass('regErrorText').removeClass('hide');
		} else if($("#checkCode_tel") == "") {
			$("#checkCode_tel").parent().addClass('focusError');
			$("#checkCode_tel").siblings('.regDesc').text("请输入图形验证码").addClass('regErrorText').removeClass('hide');
		}else{
			t3++;

			$.ajax({
			type:'post',
			url:'/api/send_phone_code.action',
			data:{act:$(this).attr("act"),captcha:$("#checkCode_tel").val(),phone:$("#tel").val(),t:type},
			dataType:'json',
			async:false,
			success:function(rst) {
				// 如果发送成功
				if (rst && rst.errno == 0) {
					if (rst.data && rst.data.userID) {
						// 在注册页面需要该用户编号字段。
						// 注意：服务器端要再次检查！最好放入session
						$("#userid").val(rst.data.userID);

						if($.trim($(".loginUserIpt").val()) !="" && $.trim($(".pureIpt").val()) !="" && pattern2.test(num2)) {
							$("#getCode3").css("color", "#aaa");
							send("#getCode3");
							// setTimeout(function() {
							// 	$('.mCode').find('.regDesc').html(_html).removeClass('hide').removeClass('regErrorText');
							// }, count*1000);
						}
					}
					$("#changeVal").click();
				}else if(rst && rst.errno == 1004){// 图形验证码不对
					$("#checkCode_tel").parent().addClass('focusError');
					$("#checkCode_tel").siblings('.regDesc').text("请输入图形验证码").addClass('regErrorText').removeClass('hide');
				}else{
					var msg = "发送验证码出现错误";
					if (rst && rst.msg) {
						msg = rst.msg;
//						$('.mCode').find('.regDesc').html(rst.msg).removeClass('regErrorText').removeClass('hide');
					}
					$("#validcode").parent().addClass('focusError');
					$("#validcode").siblings('.regDesc').text(msg).addClass('regErrorText').removeClass('hide');
				}
			}
		});
		}
		return false;
	} else {
		$(this).attr("disabled", "true");
     		$(this).prop("disabled", true);
     		$(this).siblings('.comIptBox').find('.regDesc').text('您获取短信验证码超过限制，请明天再试');
	}
	return false;
})
// 手机是否绑定样式
$(".notBind").click(function(event) {
	$("#bind1").attr("checked", true);
	$(".radio1").removeClass('hide');
	$(".radio2").addClass('hide');
});
$(".binded").click(function(event) {
	$("#bind2").attr("checked", true);
	$(".radio2").removeClass('hide');
	$(".radio1").addClass('hide');
});
//手机号注册 && 用户名注册 验证
function checkReg() {
	var flag = true;
	$("input:visible").not(":checkbox, :button, :radio").each( function(i,item){
		if ($.trim($(item).val()) == '' || $.trim($(item).val()) == '请选择密保问题') {
	 		$(item).parent().addClass("focusError");
			$(item).siblings('.regDesc').text($(item).attr("data-error")).addClass('regErrorText').removeClass('hide');
			if (flag) {flag = false;}
		}

		if ($.trim($(item).val()) != '' && $(item).attr('regexp') && $(item).attr('regexp_desc')) {
				var pattern = new RegExp($(item).attr('regexp'));
				if (!pattern.test($(item).val())) {
					$(item).parent().addClass("focusError");
					$(item).siblings('.regDesc').text($(item).attr("regexp_desc")).addClass('regErrorText').removeClass('hide');
					if (flag) {flag = false;}
				}
		}

		if($(this).attr('type') == 'password' && $(this).attr('id') == 'userPassword'){
			if($(this).val() != "" && $("#confirmPassword").val() != "" && $(this).val() != $("#confirmPassword").val()){
				$("#confirmPassword").parent().addClass("focusError");
				$("#confirmPassword").siblings('.regDesc').text("密码与确认密码不一致").addClass('regErrorText');
				if (flag) {flag = false;}
				return false;
			}
		}

		if ($(this).attr('type') == 'password' && $(this).attr('compare') == 'true') {
			if($(this).val() != ""){
				if ($(this).val() != $('#' + $(this).attr('compareid')).val()) {
					$(this).parent().addClass("focusError");
					$(this).siblings('.regDesc').text("密码与确认密码不一致").addClass('regErrorText');
					if (flag) {flag = false;}
				}else{
					$(this).parent().removeClass("focusError");
					$(this).siblings('.regDesc').text($(this).attr("data-normal")).removeClass('regErrorText');

				}
			}

		} else {
			if ($(this).attr('ajaxValidate') == 'username') {
				$.ajax({
					type:'post',
					url:'/user/examineUserName.action',
					data:{userName:$('#userName').val()},
					dataType:'text',
					async:false,
					success:function(data) {
						if (data == '0') {
							$('#userName').parent().addClass("focusError");
							$('#userName').siblings('.regDesc').html('该用户名已经存在，如果您是该用户，请立刻<a style="color:#06c" href="/7881_touristlogin.jsp">登录</a>').addClass('regErrorText');
							if (flag) {flag = false;}
						}else if(data== '2'){
							$('#userName').parent().addClass("focusError");
							$('#userName').siblings('.regDesc').text("存在非法字符，请更换用户名").addClass('regErrorText');
							if (flag) {flag = false;}
						}
					}
				});
			} else if ($(this).attr('ajaxValidate') == 'email') {
				$.ajax({
					type:'post',
					url:'/user/examineUserEmail.action',
					data:{email:$('#email').val()},
					dataType:'text',
					async:false,
					success:function(data) {
						if (data == '0') {
							$('#email').parent().addClass("focusError");
							$('#email').siblings('.regDesc').text("该邮箱已经存在，请更换邮箱地址").addClass('regErrorText');
							if (flag) {flag = false;}
						}
					}
				});
			}else if ($(this).attr('ajaxValidate') == 'codeImg') {
				if($('#checkCode').val() != ""){
					$.ajax({
						type:'post',
						url:'/user/examineUserCodeImg.action',
						data:{checkCode:$('#checkCode').val()},
						dataType:'text',
						async:false,
						success:function(data) {
							if (data == '0') {
								$('#checkCode').parent().addClass("focusError");
								$('#checkCode').siblings('.regDesc').text("图片验证码不正确，请重新输入").addClass('regErrorText');
								if (flag) {flag = false;}
							}
						}
					});
				}
			}else if ($(this).attr('ajaxValidate') == 'tel') {
				$.ajax({
					type:'post',
					url:'/user/examineRegisterUserTel.action',
					data:{tel:$('#tel').val()},
					dataType:'json',
					async:false,
					success:function(data) {
						if (data.code == '1' || data.code == '2') {
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号已存在，如果您是该用户，请立即<a style="color:#06c" href="/7881_touristlogin.jsp">登录</a>').addClass('regErrorText');
							if (flag) {flag = false;}
						}else if(data.code == '3'){
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号已绑定用户名，您可以<a style="color:#06c" href="/user/modifyPasswordByTel.action?tel='+$('#tel').val()+'">设置登录密码</a>').addClass('regErrorText');
							if (flag) {flag = false;}
						}else if(data.code == '0'){
						}
					}
				});
			}else if ($(this).attr('ajaxValidate') == 'tel_pwd') {
				$.ajax({
					type:'post',
					url:'/user/examineRegisterUserTel.action',
					data:{tel:$('#tel').val()},
					dataType:'json',
					async:false,
					success:function(data) {
						if (data.code == '1' || data.code == '2') {
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号已存在，如果您是该用户，请立即<a style="color:#06c" href="/7881_touristlogin.jsp">登录</a>').addClass('regErrorText');
							if (flag) {flag = false;}
						}else if(data.code == '3'){
//							$('#tel').parent().addClass("focusError");
//							$('#tel').siblings('.regDesc').html('该手机号已绑定用户名，您可以<a style="color:#06c" href="/user/modifyPasswordByTel.action?tel='+$('#tel').val()+'">设置登录密码</a>').addClass('regErrorText');
//							if (flag) {flag = false;}
						}else if(data.code == '0'){
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号没有绑定用户名，您可以重新输入').addClass('regErrorText');
							if (flag) {flag = false;}
						}
					}
				});
			}else if ($(this).attr('ajaxValidate') == 'validcode') {
				/*if($('#validcode').val() != ""){
					$.ajax({
						type:'post',
						url:'/api/validate_phone_code.action',
						data:{userID:$("#userid").val(),act:"reg",phone:$("#tel").val(),code:$('#validcode').val()},
						dataType:'json',
						async:false,
						success:function(rst) {
							// 如果发送成功
							if (rst && rst.errno == 0) {

							}else{
								if (rst && rst.msg) {
									if(rst.msg == "用户编号无效"){
										$('#validcode').parent().addClass("focusError");
										$('#validcode').siblings('.regDesc').text("请先获取短信验证码").addClass('regErrorText').removeClass('hide');
										if (flag) {flag = false;}
									}else if(rst.msg == "验证码过期或不正确"){
										$('#validcode').parent().addClass("focusError");
										$('#validcode').siblings('.regDesc').text("您输入的动态密码有误，请核对后重新输入").addClass('regErrorText').removeClass('hide');
										if (flag) {flag = false;}
									}else{
										$('#validcode').parent().addClass("focusError");
										$('#validcode').siblings('.regDesc').text(rst.msg).addClass('regErrorText').removeClass('hide');
										if (flag) {flag = false;}
									}
								}else{
									$('#validcode').parent().addClass("focusError");
									$('#validcode').siblings('.regDesc').text("短信验证码错误").addClass('regErrorText').removeClass('hide');
									if (flag) {flag = false;}
								}

							}

						}
					});
				}*/
			}
		}

	});
	return flag;
}
// 用户名注册点击
$("#usrRegBtn").click(function() {
	if(checkReg()) {
		$("#registerForm").submit();
	};
	return false;
});
//手机号点击注册
$("#mRegBtn").click(function() {
	if(checkReg()) {
		$("#registerForm").submit();
	};
	return false;
});
// 注册失去焦点校验
$(".regBody input:visible").not(":checkbox, :button, :radio, .phoneCode").each(function(i, item) {
	$(item).blur(function() {
		if ($.trim($(item).val()) == '' || $.trim($(item).val()) == '请选择密保问题') {
	 		$(item).parent().addClass("focusError");
			$(item).siblings('.regDesc').text($(item).attr("data-error")).addClass('regErrorText');
		}
		if ($.trim($(item).val()) != '' && $(item).attr('regexp') && $(item).attr('regexp_desc')) {
			var pattern = new RegExp($(item).attr('regexp'));
			if (!pattern.test($(item).val())) {
				$(item).parent().addClass("focusError");
				$(item).siblings('.regDesc').text($(item).attr("regexp_desc")).addClass('regErrorText');
				return false;
			}
		}

		if($(this).attr('type') == 'password' && $(this).attr('id') == 'userPassword'){
			if($(this).val() != "" && $("#confirmPassword").val() != ""){
				$("#confirmPassword").parent().addClass("focusError");
				$("#confirmPassword").siblings('.regDesc').text("密码与确认密码不一致").addClass('regErrorText');
			}
		}

		if ($(this).attr('type') == 'password' && $(this).attr('compare') == 'true') {
			if ($(this).val() != $('#' + $(this).attr('compareid')).val()) {
				$(this).parent().addClass("focusError");
				$(this).siblings('.regDesc').text("密码与确认密码不一致").addClass('regErrorText');
			}else{
				$(this).parent().removeClass("focusError");
				$(this).siblings('.regDesc').text($(this).attr("data-normal")).removeClass('regErrorText');

			}
		} else {
			if ($(this).attr('ajaxValidate') == 'username') {
				$.ajax({
					type:'post',
					url:'/user/examineUserName.action',
					data:{userName:$('#userName').val()},
					dataType:'text',
					success:function(data) {
						if (data == '0') {
							$('#userName').parent().addClass("focusError");
							$('#userName').siblings('.regDesc').html('该用户名已经存在，如果您是该用户，请立刻<a style="color:#06c" href="/7881_touristlogin.jsp">登录</a>').addClass('regErrorText');
						}else if(data== '2'){
							$('#userName').parent().addClass("focusError");
							$('#userName').siblings('.regDesc').text("存在非法字符，请更换用户名").addClass('regErrorText');
						}else {

						}
					}
				});
			} else if ($(this).attr('ajaxValidate') == 'email') {
				$.ajax({
					type:'post',
					url:'/user/examineUserEmail.action',
					data:{email:$('#email').val()},
					dataType:'text',
					success:function(data) {
						if (data == '0') {
							$('#email').parent().addClass("focusError");
							$('#email').siblings('.regDesc').text("该邮箱已经存在，请更换邮箱地址").addClass('regErrorText');
						}else {
						}
					}
				});
			}else if ($(this).attr('ajaxValidate') == 'codeImg') {
				if($('#checkCode').val() != ""){
					$.ajax({
						type:'post',
						url:'/user/examineUserCodeImg.action',
						data:{checkCode:$('#checkCode').val()},
						dataType:'text',
						success:function(data) {
							if (data == '0') {
								$('#checkCode').parent().addClass("focusError");
								$('#checkCode').siblings('.regDesc').text("图片验证码不正确，请重新输入").addClass('regErrorText');
							}else {

							}
						}
					});
				}
			}else if ($(this).attr('ajaxValidate') == 'tel') {
				$.ajax({
					type:'post',
					url:'/user/examineRegisterUserTel.action',
					data:{tel:$('#tel').val()},
					dataType:'json',
					success:function(data) {
						if (data.code == '1' || data.code == '2') {
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号已存在，如果您是该用户，请立即<a style="color:#06c" href="/7881_touristlogin.jsp">登录</a>').addClass('regErrorText');
						}else if(data.code == '3'){
							$('#tel').parent().addClass("focusError");
							$('#tel').siblings('.regDesc').html('该手机号已绑定用户名，您可以<a style="color:#06c" href="/user/modifyPasswordByTel.action?tel='+$('#tel').val()+'">设置登录密码</a>').addClass('regErrorText');
						}else if(data.code == '0'){
//							$('#tel').parent().append('<i class="ok"></i>');
//							$('#tel').attr('valid', 'true');
						}
					}
				});
			}else if ($(this).attr('ajaxValidate') == 'img_valid') {
				if($('#checkCode_tel').val() != ""){
					$.ajax({
						type:'post',
						url:'/user/ajax_checkImgValid.action',
						data:{img_valid:$('#checkCode_tel').val()},
						dataType:'text',
						success:function(data) {
							if (data == 'false') {
								$('#checkCode_tel').parent().addClass("focusError");
								$('#checkCode_tel').siblings('.regDesc').text("图片验证码不正确，请重新输入").addClass('regErrorText');
							}else {

							}
						}
					});
				}
			}else if ($(this).attr('ajaxValidate') == 'validcode') {
//				if($('#validcode').val() != ""){
//					$.ajax({
//						type:'post',
//						url:'/api/validate_phone_code.action',
//						data:{userID:$("#userid").val(),phone:$("#tel").val(),code:$('#validcode').val()},
//						dataType:'json',
//						success:function(rst) {
//							// 如果发送成功
//							if (rst && rst.errno == 0) {
//								
//							}else{
//								if (rst && rst.msg) {
//									if(rst.msg == "用户编号无效"){
//										$('#validcode').parent().addClass("focusError");
//										$('#validcode').siblings('.regDesc').text("请先获取短信验证码").addClass('regErrorText').removeClass('hide');
//									}else{
//										$('#validcode').parent().addClass("focusError");
//										$('#validcode').siblings('.regDesc').text(rst.msg).addClass('regErrorText').removeClass('hide');
//									}
//								}else{
//									$('#validcode').parent().addClass("focusError");
//									$('#validcode').siblings('.regDesc').text("验证码错误").addClass('regErrorText').removeClass('hide');
//								}
//								
//							}
//							
//						}
//					});
//				}
			}
		}


	});
});
$('input').not(':checkbox, :button, :radio, .phoneCode').focus(function() {
	if ($.trim($(this).val()) == '') {
		$(this).siblings('.regDesc').text($(this).attr("data-normal")).removeClass('hide');
	};
	$(this).parent().removeClass('focusError');
	if($(this).parents('.loginMain').length ===0) {
		$(".loginError").addClass("hide");
	}

	$(this).siblings('.regDesc').text($(this).attr("data-normal")).removeClass('regErrorText');
});
$('.phoneCode').not(".log3 .phoneCode").blur(function(event) {
	if ($.trim($(this).val())) {
		$(this).parent().removeClass('focusError');
		if ($(this).siblings('.regDesc').text() == "请输入手机验证码") {
			$(this).siblings('.regDesc').addClass('hide');
		};
	};
});
// var _html = '收不到短信验证码，试试 <a class="voiceCode" href="javascript:void(0)">语音验证码</a>';
//三方登录弹出框倒计时跳转
var count1 = 3;
function send1(obj) {
	var InterValObj1;
	var curCount1;
	curCount1= count1;
     $(obj).find('.second').text(curCount1);
     InterValObj1 = setInterval(setRemainTime1, 1000);
	function setRemainTime1() {
		if (curCount1 == 1) {
			window.clearInterval(InterValObj1);
			window.location.href="http://www.7881.com";
		}
		else {
			curCount1--;
			$(obj).find('.second').text(curCount1);
		}
	}
};