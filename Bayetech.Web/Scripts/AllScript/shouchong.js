/**
 * Created with JetBrains PhpStorm.
 * User: weiyouzhi
 * Date: 13-3-23
 * Time: 上午9:52
 * To change this template use File | Settings | File Templates.
 */
(function($){
    $.game={
        inits:function(){
        	// 初始化game-top的tab标签选择
            this.movelist('appgame');
            
        },
        movelist:function(container){
            var _move = $('.'+container).find('b');
            var _hot = $('.'+container).find('span');
            var _list = $('.'+container).find('li');
            _hot.hover(function(){
                _move.stop().animate({left:15,width:90},300)
            },function(){
                if($(this).attr('selected')){
                    return;
                }else{
                    var nlist = $('.'+container).find('li');
                    nlist.each(function(b){
                        if($(this).attr('selected')){
                            _move.stop().animate({left:120+b*30,width:30},300,function(){
                                _move.css({left:120+b*30,width:30});
                            });
                        }
                    })
                }
            });
            
             _hot.click(function(){
                $(this).attr('selected',true);
                _list.removeAttr('selected');
                _move.css({left:15,width:90});               
            });
                	
            _list.each(function(a){
            	$(this).click(function(){
            	 	$(this).attr('selected',true).siblings().removeAttr('selected');
                    _hot.removeAttr('selected');
                    _move.css({left:120+a*30,width:30});
                });
                $(this).hover(function(){
                    _move.stop().animate({left:120+a*30,width:30},300);
                },function(){
                    if(_hot.attr('selected')){
                        _move.stop().animate({left:15,width:90},300,function(){
                            _move.css({left:15,width:90});
                        });
                    }else{
                        var nlist = $('.'+container).find('li');
                        nlist.each(function(b){
                            if($(this).attr('selected')){
                                _move.stop().animate({left:120+b*30,width:30},300,function(){
                                    _move.css({left:120+b*30,width:30});
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
    
    jQuery(".slideBan").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});

	$(".sure-info input").keyup(function(){		
			$(".sure-info input").addClass("inpt");		
	});
	
	$(".game-ch").click(function(){
	  $(".game-ch").toggleClass("chbg");
	  $(".one-a").toggleClass("on");
	});
	
	if($(".so-many li").children("div").hasClass("chbg")){
               $(".many-a").addClass("on");
        }else{
        $(".many-a").removeClass("on");
    }

    $(".so-many li").each(
        $(".so-many").delegate("li","click",function(){
        	if($(this).children("div").hasClass("chbg")){
        		$(this).children("div").removeClass("chbg"); 
        		$(".many-a").removeClass("on");
        	}else{
        		$(".so-many li").children("div").removeClass("chbg");
        		$(this).children("div").addClass("chbg");
        		$(".many-a").addClass("on");
        	}
        })
    );            
})(jQuery)


