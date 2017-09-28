var userid = '';
//弹框登录
var userid='';
function checkLogin(){
	isOKFlag();
	if (userid == null || userid == "" || userid=="null") {
		$(this).popLogin();
		return;
	}else{
		try{
			popLoginCallback();
		}catch(e){};
		return;
	}
}
function isOKFlag(){
//成功,执行回调
// 判断是否登录
	jQuery.ajax( {
		type : 'get',
		url : '/loginCheckReturn.action?ip=' + Math.round(Math.random() * 10000),
		async:false,
		success : function(resultData) {
			var result = resultData.split('#');
			if (result[0] == '200' && result.length > 2) {
				userid=result[2];
			}
		}
	});
}
function loginReady(){
	$.ajax( {
		type : 'post',
		url : '/getRandom.action',
		dataType : 'text',
		success : function(txt) {
			$('#random').val(txt);
			do_login();
		},
		failure : function(txt) {
			alert(txt);
		}
	});
}
//处理登录
function do_login() {
	$("#tp-tip").hide();
	var username = $("#username").val();
	var password = $("#password").val();
	var img_valid = $("#img_valid").val();

	if(""==username)
	{
		$("#tp-tip").html("请输入用户名");
		$("#tp-tip").show();
		$("#username").focus();
		return;
	}
	if(""==password)
	{
		//alert("请输入密码");
		$("#tp-tip").html("请输入密码");
		$("#tp-tip").show();
		$("#password").focus();
		return;
	}
	if(""==img_valid)
	{
		//alert("请输入验证码");
		$("#tp-tip").html("请输验证码");
		$("#tp-tip").show();
		$("#img_valid").focus();
		return;
	}
	var des_password = hex_md5(hex_md5(password) + $('#random').val());
	$.ajax({
		type:'post',
		url:'/user/ajax_login.action',
		dataType:'json',
		data:
		{
			username:username,
			password:des_password,
			img_valid:img_valid
		},
		success:function(obj) {
			if (obj.result == 1) {
				//成功,执行回调
				// 判断是否登录
				jQuery.ajax( {
					type : 'get',
					url : '/loginCheckReturn.action?ip=' + Math.round(Math.random() * 10000),
					success : function(resultData) {
						var result = resultData.split('#');
						if(result[0] == '500')
						{
							location.href="/7881_touristlogin.jsp";
						}
						else if (result[0] == '200' && result.length > 2) {
							$('#noLog').hide();
							$('#alreadyLog').show();
							if(result[2]!='0'){
								htmlText = '<span><a href="/personal.html">'+result[1]+'</a>,欢迎回来！</span><em>|</em> <a href="/msg/notReadMsg.action" class="on" rel="nofollow"><i class="icon-com message"></i>消息（<b>'+result[2] +'</b>）</a><em>|</em> <a href="/logout.action" rel="nofollow">退出</a>';
							}else{
								htmlText = '<span><a href="/personal.html">'+result[1]+'</a>,欢迎回来！</span><em>|</em> <a href="/msg/notReadMsg.action"  rel="nofollow"><i class="icon-com message"></i>消息（<b>'+result[2] +'</b>）</a><em>|</em> <a href="/logout.action" rel="nofollow">退出</a>';
							}
							$('#alreadyLog').html(htmlText);
							layer.closeAll();
							try{
								popLoginCallback();
							}catch(e){};
						}
					}
				});

			} else {
				$(".loginError").removeClass("hide").find(".loginErrorText").html(obj.message);
				if(obj.result=='61' || obj.result=='62' || obj.result=='101' || obj.result=='102'){
					var t = new Date();
					while (new Date() - t <= 3000){

					}
					window.location = "/user/toLoginAgainCheck.action";
				};
				$(".loginBtn").html('登&nbsp;&nbsp;&nbsp;录');
				return;
			}
		}
	});
}
