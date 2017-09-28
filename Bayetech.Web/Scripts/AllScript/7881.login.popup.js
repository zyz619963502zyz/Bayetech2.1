


(function() {

	window.enterSearch = function(event) {
		var eventObj = event || window.event;

		if (eventObj.keyCode == 13) {
			$('#hlkOKlg').click();
		}
	}
	$(function() {
			// body...
			var loginPopLayer = $('#login-pop-cover');
			var pop = $('#tp-login');
			// $('body').css('overflow-x', 'hidden')

			function adjustToScreen(argument) {
				loginPopLayer.css({
					height: $(window).height() + 25
				})
				pop.css({
					left: ($(window).width() - loginpop.p.w) / 2,
					top: ($(window).height() - loginpop.p.h) / 2
				})

			}
			window.loginpop = {
				show: function(argument) {
					loginPopLayer.css('display', 'block');
					pop.css('display', 'block');
					adjustToScreen();
				},
				hide: function(argument) {
					loginPopLayer.fadeOut(300).css('display', 'none');;
					pop.fadeOut(300).css('display', 'none');;
				},
				p: {
					w: pop.width(),
					h: pop.height()
				}
			}
			$(window).resize(function(argument) {
				// if (loginPopLayer.is(':visible') && pop.is(':visible')) {
				// 	adjustToScreen();
				// }
				adjustToScreen();
			})

			$('.tp-login-il,.tp-login-ip,.captcha').bind({
				focus: function() {
					// body...
					$(this).prev().hide();

				},
				blur: function(argument) {
					// body...
					if ($(this).val() == '') {
						$(this).prev().show();
					}
				}
			}).each(function(argument) {
				// body...
				if ($(this).val() == '') {
					$(this).prev().show();
				} else {
					$(this).prev().hide();
				}
			});
			// body...
		})
		///////////////////////////////////////////////

	//验证码相关
	var change_img_valid = function(obj) {
		obj.src = '/img_valid.jsp?param=' + new Date().getTime();
	}

	function dialog_show(box) {
		var _this = $(box);
		var w = _this.outerWidth();
		var h = _this.outerHeight();
		var _dl = document.documentElement.scrollTop || document.body.scrollTop;
		var l = Math.round((document.documentElement.clientWidth - w) / 2 + document.documentElement.scrollLeft);
		var t = Math.round((document.documentElement.clientHeight - h) / 2 + _dl);
		_this.css({
			"top": t,
			"left": l
		});
		var ch = document.documentElement.scrollHeight;
		var cw = document.documentElement.scrollLeft + document.documentElement.clientWidth;
		var cover = document.createElement("div");
		cover.id = "cover";
		cover.style.position = "absolute";
		cover.style.top = "0px";
		cover.style.left = "0px";
		cover.style.width = cw + "px";
		cover.style.height = ch + "px";
		cover.style.zIndex = "999";
		cover.style.filter = "alpha(opacity=0)";
		cover.style.opacity = "0";
		cover.style.display = "block";
		cover.style.background = "#000";
		cover.innerHTML = '<iframe id="if" name="if" style="position:absolute;top:-5px;left:0;border:none;width:100%;height:100%;background:#666666;filter:alpha(opacity=0);" ></iframe>';
		document.body.appendChild(cover);
		$("#cover").animate({
			opacity: 0.3
		}, 200, function() {
			_this.fadeIn(300);
		})
		$(window).resize(function() {
			var ncw = document.documentElement.scrollLeft + document.documentElement.clientWidth;
			$("#cover").width(ncw);
		})
	}

	function enterSearch(event) {
		var eventObj = event || window.event;
		if (eventObj.keyCode == 13) {
			$('#hlkOKlg').click();
		}
	}

	function dialog_close() {
		$("#cover").remove();
		$("#tp-login").fadeOut(100);
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
					beforeSend:function()
					{
						$("#login_login").hide();
						$("#login_loading").show();
					},
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
															 jQuery('#span_user').empty();
															 if(result[2]!='0'){
															 	htmlText = '<a class="dlzc" rel="nofollow" href="/personal.html">'+result[1]+'</a>&nbsp;&nbsp;<a class="dlzc" href="/msg/notReadMsg.action" rel="nofollow"><img align="absmiddle" src="http://pic.7881.com/7881/market/images/Personal/znx_wd.png"/>[' + result[2] + ']</a>&nbsp;&nbsp; <a href="/logout.action" rel="nofollow">退出</a>';
															 }else{
															 	htmlText = '<a class="dlzc" rel="nofollow" href="/personal.html">'+result[1]+'</a>&nbsp;&nbsp;<a class="dlzc" href="/msg/notReadMsg.action" rel="nofollow"><img align="absmiddle" src="http://pic.7881.com/7881/market/images/Personal/message.png"/>[' + result[2] + ']</a>&nbsp;&nbsp; <a href="/logout.action" rel="nofollow">退出</a>';
															 }
															 userid=result[2];
															 jQuery('#span_user').html(htmlText);
															 dialog_close();

														}
												}
											});
								} else {
									$("#tp-tip").html(obj.message);
									$("#tp-tip").show();
									$("#login_login").show();
									$("#login_loading").hide();
									
									
									if(obj.result=='61' || obj.result=='62' || obj.result=='101' || obj.result=='102'){
										var t = new Date();
											while (new Date() - t <= 3000){
										
										}
										window.location = "/user/toLoginAgainCheck.action";
									}
									
									return;
								}
							}
						});
			}

	$(function() {

		// $(".input_login").click(function() {
		// 	$(this).prev("label").hide();
		// });
		$('#imgValid').click(function() {
			this.src = '/img_valid.jsp?param=' + new Date().getTime();
		});
		// $(".input_login").blur(function() {
		// 	var txt = $(this).val();
		// 	if (txt == "") {
		// 		$(this).prev("label").show();
		// 	}
		// });

		// 更换验证码
		// $('#hlkChange').click(function() {
		// 	$('#imgValid').trigger('click');
		// });

		// 关闭
		$(".closebox").click(function() {
			// $("#tp-login").fadeOut(100);
			loginpop.hide();
		});

//		$('#hlkOKlg').click(function() {
//			$.ajax({
//				type: 'post',
//				url: '/getRandom.action',
//				dataType: 'text',
//				success: function(txt) {
//					$('#random').val(txt);
//
//					do_login();
//
//				},
//				failure: function(txt) {
//					alert(txt);
//				}
//			});
//			return false;
//		});

	});


})()