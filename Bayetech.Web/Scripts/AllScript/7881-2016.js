;(function($){
	$.pc7881 = $.pc7881||{};
    $.pc7881={
        inits:function(){
			$(".top-common-right").Top();
			$(".dnfdl-percenter").nav03Pre();
			$(".index-tab").hoverTab(".index-tab-top",".index-tab-item");
			$(".placeholder").placeholder();
			$(".phoneNum").checkNumber();
			$(".onlynum").checkNumber();
			$(".kf-scrolltop").scroll_top(".kf-scrolltop");
			$(".top-adv-box").topAdv();
			$(".top-tips").topTips();
			$(".comselect").comSelect();
			$(".onlynum").OnlyNum();
			$(".onlynums").OnlyNums();
			$("body").subInputPlus();
        },      
		Top:function(){
			$(this).find("a").hover(function(){
				$(this).find("i").removeClass("downJt").addClass("upJt");
			},function(){
				$(this).find("i").removeClass("upJt").addClass("downJt");
			});
		},
		nav03Pre:function(){
			$(this).mouseenter(function(){
				if(!$(this).hasClass("not-login")){
					$(this).find(".dnfdl-percenter-top").addClass("on").parent().find(".dnfdl-percenter-bot").show();
				}
			});
			$(this).mouseleave(function(){
				$(this).find(".dnfdl-percenter-top").removeClass("on").parent().find(".dnfdl-percenter-bot").hide();
			});
		},
		hoverTab:function(obj1,obj2){
			$(this).children(obj1).find("li").hover(function(){
				$(this).addClass("on").siblings("li").removeClass("on");
				var flag= $(this).index();
				$(this).parent().parent().parent().find(obj2).eq(flag).show().siblings(obj2).hide();
			});
		},
		clickTab:function(obj1,obj2){
			$(this).children(obj1).find("li").click(function(){
				$(this).addClass("on").siblings("li").removeClass("on");
				var flag= $(this).index();
				$(this).parent().parent().parent().find(obj2).eq(flag).show().siblings(obj2).hide();
			});
		},
		placeholder:function(){
			$(".placeholder").find("input").val("");
			$(this).find("input").bind('propertychange input', function() { 
				if($(this).val() == ""){
					$(this).parent("label").find("span").show();
				}else{
					$(this).parent("label").find("span").hide();
				}
			});
			// 兼容IE9
			if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
				$(".placeholder").each(function(index){
					var myInput = document.getElementsByClassName("placeholder")[index].childNodes[0], 
				    	lastValue = myInput.value;
					var onInput = function() {
					    if(lastValue !== myInput.value){
					    	lastValue = myInput.value;
					    	if(lastValue == ""){
					    		$(".placeholder").eq(index).find("span").show();
							}else{
								$(".placeholder").eq(index).find("span").hide();
							}
					    }
				  	};
				  	var onFocusChange = function(event) {
					    if(event.type === "focus") {
					    	document.addEventListener("selectionchange", onInput, false);
					    }else{
					    	document.removeEventListener("selectionchange", onInput, false);
					    }
				  	};
				  	myInput.addEventListener("input", onInput,false);
				  	myInput.addEventListener("focus", onFocusChange,false);
				  	myInput.addEventListener("blur", onFocusChange,false);
				});
			};
		},
		checkNumber:function(){
			$(this).bind("keypress",
		    function(c) {
		    	if(navigator.userAgent.indexOf("Firefox")<=0){//火狐存在兼容问题，将其排除
		    		var a = c || window.event;
		    		var b = typeof a.charCode == "number" ? a.charCode: a.keyCode;
		    		b == 0 ? b = b: b = String.fromCharCode(b);
		    		if (! ((/\d/.test(b)) && !(b > 9) && !a.ctrlKey)) {
		    			a.preventDefault ? a.preventDefault() : (a.returnValue = false)
		    		}
		    	}
		    }).bind("keyup",
		    function(d) {
		        var e = $(this),
		        b = e.val(),
		        c = [],
		        a = d.keyCode;
		        if (! (/^\d*$/).test(b)) {
		            e.val(e.val().replace(/[^0-9]/ig, ""));
		            return
		        }
		    });
		},
		scroll_top:function(obj){
            if (document.all && !document.querySelector) {
				$(obj).fadeIn();
			}else{
				$(window).bind("scroll", function(event){
	                if( $(window).scrollTop() >= 400 ) {
	                    $(obj).fadeIn();
	                }else{
	                    $(obj).fadeOut();
	                };
	            });
			}
            $("body").on("click",obj,function(){
            	$("html,body").animate({scrollTop: 0},200);
            });
        },
        topAdv:function(){
        	$(this).find(".close").click(function(){
        		$(".top-adv").slideUp("200");
        		$(".top-adv-box").find(".close").hide().css("top","-26px");
        		$(".top-adv-box").find(".open").css("display","block").animate({top:"-26px"},400);
        	});
        	
        	$(this).find(".open").click(function(){
        		$(".top-adv").slideDown("200");
        		$(".top-adv-box").find(".open").hide().css("top","10px");
        		$(".top-adv-box").find(".close").css("display","block").animate({top:"10px"},400);
        	});
        },
        topTips:function(){
        	$(this).find("span").click(function(){
        		$(this).parent().hide();
        	});
        },
        popLogin:function(){
        	var _html = $(".login-pop").html();
			$(".login-pop").children().remove();
        	layer.open({
		        type: 1,
		        title: false,
		        area: ['380px', '460px'],
		        content: _html,
		        cancel: function(){ $(".login-pop").append(_html); },
		        success: function(){
					login_2016();
				}
		    });
        },
        comSelect:function(){
        	$(document).click(function(){
        		$(".comselect").removeClass("act");
        		$(".comselect-menu").hide();
        		$(".comselect-icon").removeClass("up");
        		$(".common-form").find(".form-item").css("z-index","1");
				$(".common-form").find(".form-item-r").css("z-index","1");
        	});
        	$(document).on("click",".comselect",function(event){
        		event.stopPropagation();
        	});
        	
        	$("body").on("click",".comselect-icon",function(){
        		if($(this).hasClass("up")){
        			$(document).trigger("click");
        			return false;
        		}
        	});
        	$("body").on("click",".comselect-val",function(){
        		$(this).parents(".form-item").css("z-index","99");
				$(this).parents(".form-item-r").css("z-index","99");
        		if(!$(this).parent(".comselect").hasClass("disabled")){
	        		$(".comselect").removeClass("act");
	        		$(".comselect-menu").hide();
	        		$(".comselect-icon").removeClass("up");
	        		$(this).parent().removeClass("Validform_error");
	        		$(this).parent().addClass("act");
	        		$(this).find(".comselect-menu").hide();
	        		$(this).find(".comselect-icon").removeClass("up");
	        		if($(this).parent().find(".comselect-menu").find("li").length>0){
	        			$(this).parent().find(".comselect-menu").show();
	        			$(this).parent().find(".comselect-icon").addClass("up");
	        		}
        		}
        	});
	        $("body").on("click",".comselect-menu li",function(){
	        	
	        	if(!$(this).hasClass("disab")){
		        	$(this).parents(".form-item").css("z-index","1");
					$(this).parents(".form-item-r").css("z-index","1");
					$(this).parent().parent().find(".comselect-icon").removeClass("up");
					$(this).parents(".comselect").removeClass("Validform_error");
					if($(this).parents(".comselect").hasClass("select-game")){
						var _text = $(this).text().substr(2,$(this).text().length);
					}else{
						var _text = $(this).text();
					}
					var _val = $(this).data("value");
					$(this).parent().parent().find(".comselect-val").children(".comselect-input").val(_text).attr("data-value",_val);
					$(this).parent().parent().find(".comselect-val").children(".comselect-input").next("input").val(_val).attr("data-value",_text);
					if($(this).parent().parent().hasClass("linkage") == true){
						var flag = $(this).parent().parent(".linkage");
						var _index = $(".linkage").index(flag);
						try{
							ComLinkage(_index);
							$(".linkage").eq(_index+1).find(".comselect-input").val("").attr("data-value","");
							$(".linkage").eq(_index+1).find(".comselect-input").next("input").val("").attr("data-value","");
						}catch(e){
							
						}
					};
					
					if($(this).parent().parent().hasClass("callback")){
						var _index = $(".callback").index($(this).parent().parent(".callback"));
						try{
							Callback(_index);
						}catch(e){}
					}
					$(this).parent(".comselect-menu").hide();
					$(this).parents(".comselect").removeClass("act");
				}
	        	
			});
		},
		OnlyNum:function(){ //只能输入数字
			$(this).keyup(function(){      
		        $(this).val($(this).val().replace(/\D|/g,''));
		        if($(this).val().indexOf(".")< 0 && $(this).val() !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
				   $(this).val(parseFloat($(this).val()));
				};
		    }).bind("paste",function(){  //CTR+V事件处理      
		        $(this).val($(this).val().replace(/\D|^0/g,''));
		    }).css("ime-mode", "disabled");
		},
		OnlyNums:function(){ //只能输入数字和小数点后两位
			$(this).keyup(function(){
				$(this).val($(this).val().replace(/[^\d.]/g,""));  //清除“数字”和“.”以外的字符   
				$(this).val($(this).val().replace(/\.{2,}/g,".")); //只保留第一个. 清除多余的   
				$(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$","."));  
				$(this).val($(this).val().replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'));//只能输入两个小数   
				if($(this).val().indexOf(".")< 0 && $(this).val() !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
				   $(this).val(parseFloat($(this).val()));
				};
            }).bind("paste",function(){  //CTR+V事件处理      
            	$(this).val($(this).val().replace(/[^\d.]/g,""));  //清除“数字”和“.”以外的字符   
				$(this).val($(this).val().replace(/\.{2,}/g,".")); //只保留第一个. 清除多余的   
				$(this).val($(this).val().replace(".","$#$").replace(/\./g,"").replace("$#$","."));  
				$(this).val($(this).val().replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'));//只能输入两个小数   
				if($(this).val().indexOf(".")< 0 && $(this).val() !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
				   $(this).val(parseFloat($(this).val()));
				};
            }).css("ime-mode", "disabled");
		},
		subInputPlus:function(){
        	$(this).on("click",".sub-input-plus .btn-num",function(){
				var _this=$(this);
				var _min = parseInt(_this.parent().find("input").attr("data-min"));
				var _max = parseInt(_this.parent().find("input").attr("data-max"));
				var v=parseInt(_this.parent().find("input").val());
				if(_this.hasClass("btn-l")&&v>_min){
					v--;
					_this.parent().find("input").val(v);
					_this.parent().find("span").removeClass("unusable");
					if(v==_min){
						_this.addClass("unusable");
					}
					try{
						inputLinkage();
					}catch(e){
					}
					
				}
				if(_this.hasClass("btn-r")&&v<_max){
					v++;
					_this.parent().find("input").val(v);
					_this.parent().find("span").removeClass("unusable");
					if(v==_max){
						_this.addClass("unusable");
					}
					try{
						inputLinkage();
					}catch(e){
					}
				}
			});
      	}
        
    }
    $.extend($.fn,$.pc7881);
    $(function(){$.pc7881.inits();})
})(jQuery);

function login_2016(){
	// 模拟placeholder && 获取焦点发光
	$(".placeholder").click(function(event) {
		$(this).siblings('.comIpt').focus();
		if($(this).siblings('.pureIpt').length > 0) {
			$(this).siblings('.pureIpt').focus();
		}
		$(this).addClass("hide");
	});
	$(".loginBox").find("input").not(":checkbox, :button, :radio").focus(function() {
		if($(this).siblings('.placeholder').length > 0) {
			$(this).siblings('.placeholder').addClass("hide");
		}
		if ($(this).hasClass('loginUserIpt') && $.trim($(this).val())) {
			$(this).next('.delIcon').removeClass('hide');
		};
		$(this).parent().addClass('focusShadow');
	});
	$(".loginBox").find("input").not(":checkbox, :button, :radio").blur(function() {
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
		this.src = 'http://www.7881.com/img_valid.jsp?param=' + new Date().getTime();
	});
	$(".changeOne").click(function(event) {
		$(".codeImg").trigger('click');
		return false;
	});
	$(function() {
		$(".loginBox").find("input").not(":checkbox, :button, :radio, .dropIpt, .passContainer input").val("");
		$('.passContainer input:eq(0)').val('请输入密码');
		$('.passContainer input:eq(1)').val('');
	});
	// 点击登录按钮
	$(".loginBtn").click(function(event) {
		checkLogin();
		return false;
	});
	function checkLogin() {
		if (!$.trim($('.loginUserIpt').val())) {
			$('.loginUserIpt').parent().addClass("focusError");
			$(".loginError").removeClass("hide");
			$(".loginErrorText").html($('.loginUserIpt').attr("data-error"));
		} else if ($('.loginPwdIpt:eq(0)').val() == '' || $('.loginPwdIpt').val() == '请输入密码') {
			$('.loginPwdIpt').parent().addClass("focusError");
			$(".loginError").removeClass("hide");
			$(".loginErrorText").html($('.loginPwdIpt').attr("data-error"));
		} else if (!$.trim($('.pureIpt').val())) {
			$('.pureIpt').parent().addClass("focusError");
			$(".loginError").removeClass("hide");
			$(".loginErrorText").html($('.pureIpt').attr("data-error"));
		} else {
			$(".loginBtn").text('正在登录...');
			$(".loginBtn").attr("disabled","disabled");
			$(".loginError").addClass("hide");
		};
	}
	$(".loginBox input").keydown(function() {
		$(this).parent().removeClass('focusError');
		$(".loginError").addClass("hide");
	});
};

//验证手机号
function checkphone(obj){ 
	var valnum = $(obj).val().length;
	var tel = $(obj).val().replace(/\s+/g,"");//获取手机号并清空空格
	var telReg = !!tel.match(/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[1-9]|18[0-9]{9}$/);
	if(telReg == false){ //如果手机号码不能通过验证
		return true;
	}else{ //如果手机号码通过验证
		return false;
	}
};

/**
 * 通用一句话弹出层
 * tit：弹出层标题
 * txt：弹出层文本
 * qxflag：true有取消按钮,false没有取消按钮
 * fun1：确认回调函数
 * fun2：取消回调函数
**/
function Alert(tit,txt,qxflag,fun1,fun2,btn1txt,btn2txt){
	var _btn_box1;
	var _btn_box2;
	if(typeof(btn1txt)=="undefined"){
		_btn_box1 ='<p class="popup-btn"><a href="javascript:void(0)" class="com-btn-03 color01 confirm-btn">确 认</a></p>';
	}else{
		_btn_box1 ='<p class="popup-btn"><a href="javascript:void(0)" class="com-btn-03 color01 confirm-btn">'+btn1txt+'</a></p>';
	};
	if(typeof(btn2txt)=="undefined"){
		var _btn_box2 = '<p class="popup-btn"><a href="javascript:void(0)" class="com-btn-03 color01 confirm-btn">确 认</a><a href="javascript:void(0)" class="com-btn-03 color03 cancel-btn">取 消</a></p>';
	}else{
		var _btn_box2 = '<p class="popup-btn"><a href="javascript:void(0)" class="com-btn-03 color01 confirm-btn">'+btn1txt+'</a><a href="javascript:void(0)" class="com-btn-03 color03 cancel-btn">'+btn2txt+'</a></p>';
	};
	if(qxflag){
		btn_box = _btn_box2
	}else{
		btn_box =_btn_box1
	};
	layer.open({
		type: 1,
		skin: 'com-popup',
		area: '400px',
		move:false,
		title:tit,
		shadeClose: true,
		content: '<div class="compop-box">'+
						'<h2>'+txt+'</h2>'+
						btn_box+
					'</div>',
		success:function(){
			$(".confirm-btn").click(function(){
				try{
					fun1();
				}catch(e){
					
				}
				layer.closeAll();
			});
			$(".cancel-btn").click(function(){
				try{
					fun2();
				}catch(e){
					
				}
				layer.closeAll()
			});
		}
	});
};