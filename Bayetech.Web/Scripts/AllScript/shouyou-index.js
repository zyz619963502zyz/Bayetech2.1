;(function($){
	$.index = $.index||{};
    $.index={
        inits:function(){
			$(".sy-hot-games").subMenu();
			$(".sy-dp-list").hovEffect();
			$(".az-top").azEffect();
			$(".deal-top-box").abSwitch();
			$(".slideBox").autoWidth();
			$(".cz-box").czHover();
			$(".qa-dl-box").toSpan();
			$(".selectbox").selectBox();
			$(".select-game").selectGame();
			$("body").slideEffect();
			$("body").wrapEffect();
			$(".tabsList").tabsList();
			$(".sy-wx").syWx();
        },      
		subMenu:function(){
			$(document).mouseover(function(){
				$(".hot-games").removeClass("act");
				$(".sub-menu").hide();
				$(".sub-menu").find(".sub-menu-item").hide();
				$(".sy-hot-games").find("dl").removeClass("act");
				$(".sy-hot-games").find("dl").stop().animate({paddingLeft: "0px",paddingRight: "0px"},200);
			});
			
			$(this).find("dl").mouseover(function(event){
				event.stopPropagation();
				var flag = $(this).index()-1;
				$(this).siblings().stop().animate({paddingLeft: "0px",paddingRight: "0px"},200);
				if(!$(this).hasClass("act")){
					$(this).stop().animate({
						paddingLeft: "28px",
						paddingRight: "8px"
					},200);
				};
				$(this).addClass("act").siblings().removeClass("act");
				$(".hot-games").addClass("act");
				$(".sub-menu").find(".sub-menu-item").eq(flag).show().siblings().hide();
				$(".sub-menu").show();
			});
			
			$(".sub-menu,.tab-bottom").mouseover(function(event){
				event.stopPropagation();
			});
			
		},
		hovEffect:function(){
			$(this).find("li").mouseover(function(){
				$(this).addClass("act").siblings("li").removeClass("act");
			});
			$(this).find("li").mouseleave(function(){
				$(this).removeClass("act");
			});
		},
		azEffect:function(){
			$(document).mouseover(function(){
				$(".az-bot").hide()
				$(".az-bot").find(".az-bot-item").hide();
			});
			$(this).find("li").mouseover(function(event){
				event.stopPropagation();
				var flag = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(".az-bot").show()
				$(".az-bot").find(".az-bot-item").eq(flag).show().siblings().hide();
			});
			$(".az-bot").mouseover(function(event){
				event.stopPropagation();
			});
		},
		czHover:function(){
			$(".cz-bot").find("li").click(function(){
				var flag = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(".cz-top").find(".cz-item").eq(flag).show().siblings().hide();
			});
		},
		toSpan:function(){
			$(this).find("div").remove();
			$(this).find("p").each(function(){
				$(this).html($(this).html().replace(/<.*?>/ig,""));
			});
		},
		selectBox:function(){
        	$(document).click(function(){
        		$(".selectbox-menu").hide();
        		$(".selectbox-icon").removeClass("up");
        	})
        	$(document).on("click",".selectbox",function(event){
        		event.stopPropagation();
        	});
        	$("body").on("click",".selectbox-val",function(){
        		$(this).parent().removeClass("error");
        		$(this).find(".selectbox-menu").hide();
        		$(this).find(".selectbox-icon").removeClass("up");
        		if($(this).parent().find(".selectbox-menu").find("li").length>0){
        			$(this).parent().find(".selectbox-menu").show();
        			$(this).parent().find(".selectbox-icon").addClass("up");
        		}
        	});
	        $("body").on("click",".selectbox-menu li",function(){
				$(this).parent().parent().find(".selectbox-icon").removeClass("up");
				$(this).parents(".selectbox").removeClass("error");
				if($(this).parents(".selectbox").hasClass("select-game")){
					var _shortname = $(this).attr("data-shortname");
					var _text = $(this).text().substr(2,$(this).text().length);
					$(this).parent().parent().find(".selectbox-val").children("input").val(_text).attr("data-shortname",_shortname);
				}else{
					var _text = $(this).text();
				};
				var _val = $(this).data("value");
				$(this).parent().parent().find(".selectbox-val").children("input").val(_text).attr("data-value",_val);
				if($(this).parent().parent().hasClass("linkage") == true){
					var flag = $(this).parent().parent(".linkage");
					var _index = $(".linkage").index(flag);
					try{
						ComLinkage(_index);
					}catch(e){
						
					}
				};
				$(this).parent(".selectbox-menu").hide();
				
			});
		},
		selectGame:function(){
			try{
				allgames.sort(function(a,b){
					return a.px > b.px ? 1 : a.px == b.px ? 0 : -1;
				});
			}catch(e){};
			
			var andGame = [];  //安卓手游
			var iosGame = [];  //苹果手游
			for(var i = 0, len = allgames.length; i < len; i++){
		        if( allgames[i].gametype == "1" && allgames[i].mobilegametype == "1" ){
		            andGame.push(allgames[i]);
		        }
		   	};
		   	for(var i = 0, len = allgames.length; i < len; i++){
		        if( allgames[i].gametype == "1" && allgames[i].mobilegametype == "0" ){
		            iosGame.push(allgames[i]);
		        }
		   	};
		   	
			
			$(this).find(".selectbox-input").blur(function(){
				if($(this).val() == ""){
					if($(this).parents().hasClass("android-game")){
						$(this).val("请选择安卓手游").attr("data-value","");
					}else if($(this).parents().hasClass("ios-game")){
						$(this).val("请选择苹果手游").attr("data-value","");
					}
				}else{
					var _val = $(this).val();
					console.log(_val);
					//循环查找包含关键字游戏
					for( var p in allgames){
						if( allgames[p].gamename==_val){
							$(this).attr("data-value",allgames[p].gameid);
							return false;
						}
					};
					$(this).parents(".select-game").addClass("error");
					$(this).attr("data-value","");
				}
			});
			
			$(this).find(".selectbox-input").focus(function(){
				if($(this).val() == "请选择安卓手游" || $(this).val() == "请选择苹果手游" ){
					$(this).val("");
					if($(this).parents().hasClass("android-game")){
						allgames = andGame;
					}else if($(this).parents().hasClass("ios-game")){
						allgames = iosGame;
					}
					for( var p in allgames){
						if( allgames[p].gamename){
							$(this).parents(".select-game").find(".selectbox-menu").append("<li data-value="+allgames[p].gameid+" data-shortname="+allgames[p].shortname+">"+allgames[p].px + '-' + allgames[p].gamename+"</li>");
						};
					};
				}else{
					if($(this).parents(".select-game").find(".selectbox-menu").find("li").length == 0){
						$(this).parents(".select-game").find(".selectbox-menu").hide();
					}else{
						$(this).parents(".select-game").find(".selectbox-menu").show();
					}
				}
			});
			
			$(this).on("input ropertychange",".selectbox-input",function(){
				
				var _val = $(this).val();
				if(_val=="请选择安卓游戏"){
					allgames = andGame;
					for( var p in allgames){
						if( allgames[p].gamename){
							$(this).parents(".select-game").find(".selectbox-menu").append("<li data-value="+allgames[p].gameid+" data-shortname="+allgames[p].shortname+">"+allgames[p].px + '-' + allgames[p].gamename+"</li>");
						};
					};
				}else if(_val=="请选择苹果游戏"){
					allgames = iosGame;
					for( var p in allgames){
						if( allgames[p].gamename){
							$(this).parents(".select-game").find(".selectbox-menu").append("<li data-value="+allgames[p].gameid+" data-shortname="+allgames[p].shortname+">"+allgames[p].px + '-' + allgames[p].gamename+"</li>");
						};
					};
				}else{
					$(this).parents(".select-game").find(".selectbox-menu").html("");
					var val = _val.toLowerCase();
					var len = _val.length;
					
					if($(this).parents().hasClass("android-game")){
						allgames = andGame;
					}else if($(this).parents().hasClass("ios-game")){
						allgames = iosGame;
					}
					//循环查找包含首字母游戏
					if(len<2){
						if (escape(val).indexOf("%u")!=-1){
						}else if(val.match(/\D/)!=null){ 
							for( var p in allgames){
								if( allgames[p].px.toLowerCase().indexOf(val)>-1){
									$(this).parents(".select-game").find(".selectbox-menu").append("<li data-value="+allgames[p].gameid+" data-shortname="+allgames[p].shortname+">"+allgames[p].px + '-' + allgames[p].gamename+"</li>");
								};
							};
						};
					};
					//循环查找包含关键字游戏
					for( var p in allgames){
						if( allgames[p].gamename.toLowerCase().indexOf(val)>-1){
							$(this).parents(".select-game").find(".selectbox-menu").append("<li data-value="+allgames[p].gameid+" data-shortname="+allgames[p].shortname+">"+allgames[p].px + '-' + allgames[p].gamename+"</li>");
						};
					};
					
					//没有查询到关键字提示
					if($(this).parents(".select-game").find(".selectbox-menu").find("li").length == "0"){
						$(this).parents(".select-game").find(".selectbox-menu").hide();
					}else{
						$(this).parents(".select-game").find(".selectbox-menu").show();
						$(this).parents(".select-game").find(".selectbox-icon").addClass("up");
					}
				};
			});
		},
		autoWidth:function(){
			var _len = $(this).children(".hd").find("li").length;
			if(_len == 3){
				$(this).children(".hd").find("li").css("width","227px");
				$(this).children(".hd").find("li").last().css("width","226px");
			}else{
				var _percentage = (100/_len).toFixed(0);
				$(this).children(".hd").find("li").css("width",_percentage+"%");
			};
			$(".txtBg").show();
			$(".hd").show();
			
		},
		slideEffect:function(){
			//大图和文字切换
			var _len1 = $(".banner-box").find(".bd").find("li").length;
			if(_len1 == 1){
				$(".txtBg").show();
				$(".hd").show().find("li").addClass("on").find("h5").hide();
			}else{
				jQuery(".slideBox").slide({ mainCell:".bd ul",effect:"leftLoop", autoPlay:true, delayTime:300,interTime:5000,
					startFun:function(i,c){
						$(".slideBox").find(".hd").children("ul").children("li").find("h5").children("em").stop().width("0");
						var _wid = $(".slideBox").find(".hd").children("ul").children("li").eq(i).width();
						$(".slideBox").find(".hd").children("ul").children("li").eq(i).find("em").animate({width:_wid},5000,"linear");
						$(".slideBox").mouseover(function(){
							$(".slideBox").find(".hd").children("ul").children("li").find("h5").hide().children("em").stop().width("0");
						});
						$(".slideBox").mouseleave(function(){
							$(".slideBox").find(".hd").children("ul").children("li").find("h5").show().find("em").show().stop().css("width","0px").animate({width:_wid},5000,"linear");
						});
				   	}
			    });
		   	};
			
			var _len = $("#focus_smaillPic_list").find("li").length;
			//大图和文字切换
			jQuery(".txMovie").slide({ titCell:".focus_nav li", mainCell:".focus_pic",prevCell:".a1",nextCell:".a2",autoPlay:false,delayTime:100});
			//小图滚动
			jQuery(".txMovie").slide({mainCell:".focus_nav ul",prevCell:".navPrev",nextCell:".navNext",autoPage:true,effect:"left",vis:3,delayTime:0,pnLoop:false});
			
			//关联
			$(".navNext").click(function(){
				var flag = $("#focus_smaillPic_list").find(".on").index();
				if (flag !== _len-1 ){
					jQuery(".a2").click();
				};
			});
			$(".navPrev").click(function(){
				var flag = $("#focus_smaillPic_list").find(".on").index();
				if (flag !== 0 ){
					jQuery(".a1").click();
				};
			});
		},
		abSwitch:function(){
			$(this).find("li").hover(function(){
				$(this).addClass("on").siblings("li").removeClass("on");
			});
		},
		tabsList:function(){
			$(this).children("li").mouseover(function(){
				var flag = $(this).index();
				$(this).siblings("li").removeClass("on").stop().animate({
					width:"190px"
				},250);
				if(flag == "2"){
					$(this).addClass("on").stop().animate({
						width:"538px"
					},250);
				}else{
					$(this).addClass("on").stop().animate({
						width:"539px"
					},250);
				};
			});
		},
		syWx:function(){
			$(this).find("a").click(function(){
				$(this).parent().hide();
			})
		},
		wrapEffect:function(){
			$(".close-pup").click(function(){
				layer.closeAll();
			});
		}
      
    }
    $.extend($.fn,$.index);
    $(function(){$.index.inits();})
})(jQuery);