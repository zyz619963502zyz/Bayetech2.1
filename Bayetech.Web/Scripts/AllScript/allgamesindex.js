/**
 * Created with JetBrains PhpStorm.
 * User: weiyouzhi
 * Date: 13-3-23
 * Time: 上午9:52
 * To change this template use File | Settings | File Templates.
 */
;(function($){
    $.extend($.easing,{
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });
    
    function getUrl(gameInfo,isList,buying,gtid){
    	if(gameInfo.shortname){
    		if(isList){
    			return 'http://shouyou.7881.com/'+gameInfo.shortname.toLowerCase()+'-'+(gameInfo.mobilegametype==0?'ios':'android')+(gtid?'-0-0-0-'+gtid+'-0-0-0-0-0-0':'')+'.html';
    		}else{
    			return 'http://shouyou.7881.com/'+gameInfo.shortname.toLowerCase()+'/'+(gameInfo.mobilegametype==0?'ios':'android')+'/goods-'+gtid+(buying?'-buy':'')+'.html';
    		}
    	}else{
    		if(isList){
                return '/buy-'+gameInfo.gameid+'.html';
    		}else{
    			return '/goods-'+(buying?'buying'+'-':'')+gameInfo.gameid+(gtid?'-'+gtid:'')+'.html';
    		}
    	}
    }
    
    $.game = $.game||{};
    $.game={
        inits:function(){
        	// 初始化game-top的tab标签选择
			var type_index = parseInt($('#type_index').val());
			$('.game-top ul li:eq('+type_index+')').addClass('game-hover');
			var mobilegametype = -1;
        	switch(type_index) {
        		case 0:
        			$('.intgame').parent().show();
        			break;
        		case 1:
        			$('.appgame').parent().show();
        			mobilegametype = 0;
        			break;
        		case 2:
        			$('.aorgame').parent().show();
        			mobilegametype = 1;
        			break;
        	}
        	var gtid = parseInt($('#gtid').val());
        	// 初始化热门手机游戏
        	$.each(allgames, function(i, item){
        		if (item.gametype == 1 && item.hot != 'null') {
        			if (!isNaN(gtid) && mobilegametype == item.mobilegametype && item.gameid != 'A1083') {
        				if (gtid == 100137||gtid == 100131||gtid == 100116) {
        					$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,false,true,gtid)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
        				} else {
        					$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,true,false,gtid)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
        				}
        			} else {
        				$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,true,false)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
        			}
        		}
        	});
            $('.game-box').tab({tablist:'.game-top',tabcon:'.game-mid',conClass:'.game',addClass: 'game-hover'});
            this.movelist('intgame');
            this.movelist('appgame');
            this.movelist('aorgame');
			$('.webGame').find('li').hover(function(){
				$(this).addClass('on');
				},function(){
					$(this).removeClass('on');
					})
            /*$('.intgame').find('li').click(function(){
                $(this).parent().find('.appleGame').hide();
                $(this).parent().find('.gameName').show();
            });
            $('.intgame').find('span').click(function(){
                $(this).parent().find('.appleGame').show();
                $(this).parent().find('.gameName').hide();
            })*/
        },
        tab:function(options){
            $.game.tab.def = {
                tablist:'.tab-menu',
                tabcon:'.tab-con',
                list:'li',
                conClass:'.con-list',
                addClass: 'on',
                usevent:'click'
            };
            var that = this;
            var opts = $.extend($.game.tab.def, options);
            var timer = null;
            var sec = null;
            this.each(function(a){
                var _list = that.eq(a).find(opts.tablist).find(opts.list);
                var _con =  that.eq(a).find(opts.tabcon).find(opts.conClass);
                _list.each(function(i){
                    opts.usevent == 'mouseover'?sec=200:sec=0;
                    $(this).mouseout(function(){
                        clearTimeout(timer);
                    })
                    $(this)[opts.usevent](function(e){
                        e.stopPropagation();
                        clearTimeout(timer);
                        timer = setTimeout(function(){
                            _con.hide();
                            _list.removeClass(opts.addClass)
                            _list.eq(i).addClass(opts.addClass)
                            _con.eq(i).show();
                            /*if(i!=0){
                                _con.eq(i).tablazy();
                                $(window).scroll(function(){_con.eq(i).tablazy();})
                            }*/
                        },sec)
                    });
                })
            })
        },
        movelist:function(container){
            var _move = $('.'+container).find('b');
            var _hot = $('.'+container).find('span');
            var _list = $('.'+container).find('li');
            _hot.hover(function(){
                _move.stop().animate({left:42,width:68},300)
            },function(){
                if($(this).attr('selected')){
                    return;
                }else{
                    var nlist = $('.'+container).find('li');
                    nlist.each(function(b){
                        if($(this).attr('selected')){
                            _move.stop().animate({left:134+b*30,width:30},300,function(){
                                _move.css({left:134+b*30,width:30});
                            });
                        }
                    })
                }
            });
            _hot.click(function(){
                $(this).attr('selected',true);
                _list.removeAttr('selected');
                _move.css({left:42,width:68});
               	// 将被选中tab标签下的手机热门游戏重新初始化
               	if (container == 'appgame' || container == 'aorgame') {
               		var mobilegametype = 0;
               		if (container == 'aorgame') {
               			mobilegametype = 1;
               		}
		        	$('.appleGame:eq('+mobilegametype+') ul').empty();
		        	$.each(allgames, function(i, item){
		        		if (item.gametype == 1 && item.mobilegametype == mobilegametype && item.hot != 'null') {
		        			$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,true,false)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
		        		}
		        	});
               	}
                $(this).parent().parent().find('.webGame').show();
                $(this).parent().parent().find('.gameName').hide();
            });
            _list.each(function(a){
                $(this).click(function(){
                	var gametype = 0;
                	var mobilegametype = -1;
                	$.each($('.game-top ul li'), function(i, item){
                		if ($(item).attr('class') == 'game-hover') {
				        	switch(i) {
				        		case 1:
				        			gametype = 1;
				        			mobilegametype = 0;
				        			break;
				        		case 2:
					        		gametype = 1;
				        			mobilegametype = 1;
				        			break;	
				        	}
				        	return false;
                		}
                	});
                	// 加载对应该首字母下的所有游戏
                	if (gametype == 0) {
                		$('.gameName ul').empty();
                	} else {
                		$('.appleGame:eq('+mobilegametype+') ul').empty();
                	}
                	var px = $.trim($(this).text());
                	var gtid = parseInt($('#gtid').val());
                	var type_index = parseInt($('#type_index').val());
		        	$.each(allgames, function(i, item){
		        		if (item.gametype == gametype && item.mobilegametype == mobilegametype && item.px == px) {
		        			if (gametype == 0) {
                                if(goodsType!='null' && goodsType!=''){
                                    //return '/buy-'+gameInfo.gameid+'-0-' + goodsType+ '-0-0-0-0-0-0-0-1a1500.html';
                                    $('.gameName ul').append('<li><a href="/buy-'+item.gameid+'-0-' + goodsType + '-0-0-0-0-0-0-0-1a1500.html">'+item.gamename+'</a></li>');
                                }else{
                                    $('.gameName ul').append('<li><a href="/buy-'+item.gameid+'.html">'+item.gamename+'</a></li>');
                                }

		        			} else {
					        	if (!isNaN(gtid) && type_index - 1 == item.mobilegametype && item.gameid != 'A1083') {
			        				if (gtid == 100137||gtid == 100131||gtid == 100116) {
			        					$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,false,true,gtid)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
			        				} else {
			        					$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,true,false,gtid)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
			        				}
			        			} else {
			        				$('.appleGame:eq('+item.mobilegametype+') ul').append('<li><a href="'+getUrl(item,true,false)+'"><img src="http://pic.7881.com/7881/market/images/app_8080/'+item.gameid+'.png" /><p>'+item.gamename+'</p></a></li>');
			        			}
		        			}
		        		}
		        	});
                	if (gametype == 0) {
                		$('.webGame').hide();
                		$('.gameName').show();
                	}
                    $(this).attr('selected',true).siblings().removeAttr('selected');
                    _hot.removeAttr('selected');
                    _move.css({left:134+a*30,width:30});
                });
                $(this).hover(function(){
                    _move.stop().animate({left:134+a*30,width:30},300);
                },function(){
                    if(_hot.attr('selected')){
                        _move.stop().animate({left:42,width:68},300,function(){
                            _move.css({left:42,width:68});
                        });
                    }else{
                        var nlist = $('.'+container).find('li');
                        nlist.each(function(b){
                            if($(this).attr('selected')){
                                _move.stop().animate({left:134+b*30,width:30},300,function(){
                                    _move.css({left:134+b*30,width:30});
                                });
                            }
                        })
                    }
                })
            })
        }
    }
    $.extend($.fn,$.game);
    $(function(){$.game.inits();})
})(jQuery)

