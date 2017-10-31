$(function(){
	var _html = $("#gamePrintScreenDTOList").html();
	if(_html){
	    gamePrintScreenDTOList = JSON.parse(_html);
	}else{
	    gamePrintScreenDTOList = [];
	}
	var _len = $("#typecho").find("li").length;
	$(".cut-type .next").click(function(){
		if(!$(this).hasClass("nextStop")){
			
			var flag = $("#typecho").find(".on").index();
			if(flag>=_len-2){
				$(this).addClass("nextStop");
			}else{
				$(this).removeClass("nextStop");
			};
			
		};
	});
	
	$(".cut-type .prev").click(function(){
		if(!$(this).hasClass("prevStop")){
			var flag = $("#typecho").find(".on").index();
			if(flag<=1){
				$(this).addClass("prevStop");
			}else{
				$(this).removeClass("prevStop");
			}
		}
		
	});
	
	$(".cut-type").on("click","li",function(){
		var flag = $(this).index();
		$(this).addClass("on").siblings("li").removeClass("on");
		var dataid = $("#typecho").find(".on").attr("data-id");
		if(flag==_len-1){
			$(".next").addClass("nextStop");
		}else{
			$(".next").removeClass("nextStop");
		}
		if(flag==0){
			$(".prev").addClass("prevStop");
		}else{
			$(".prev").removeClass("prevStop");
		}
		preLoad(dataid);
	});
	
    var typechoLi = "";
    $.each(gamePrintScreenDTOList, function (n, value) {
    	if(n == 0){
    		typechoLi = typechoLi + '<li class="on" data-id="'+n+'">'+value.typeName+'</li>';
    	}else{
    		typechoLi = typechoLi + '<li data-id="'+n+'">'+value.typeName+'</li>';
    	}
   	});
   	$("#typecho").html(typechoLi);
   	jQuery(".cut-type").slide({mainCell:".bd ul",prevCell:".prev",nextCell:".next",autoPage:true,effect:"left",vis:9,delayTime:0,pnLoop:false});
   	preLoad(0);
});



function loadImg(id){
	$.each(gamePrintScreenDTOList, function (n, value) {
    	if(n == id){
    		var picgdA = "";
    		var listBoxLi = "";
    		$.each(value.urlList, function (n1, value1) {
    			if(n1==0){
		    		listBoxLi = listBoxLi + '<li class="on"><i class="arr2"></i><img src="'+value1+'" /></li>';
    			}else{
		    		listBoxLi = listBoxLi + '<li><i class="arr2"></i><img src="'+value1+'" /></li>';
    			};
    			var img = new Image();
    			img.src = value1;
				picgdA = picgdA+'<a href="'+value1+'" data-size="'+img.width+'x'+img.height+'"><img src="'+value1+'" alt="" /></a>';
		   	});
		   	$("#picgd").html(picgdA);
		   	$("#listBox").find("ul").html(listBoxLi);
		   	$("#picgd").css("left","0");
		   	$("#listBox").find(".cf").css("left","0");
		   	loadJs('http://pic.7881.com/7881-2016/js/ifoucs/js/photoswipe.min.js');
			loadJs('http://pic.7881.com/7881-2016/js/ifoucs/js/photoswipe-ui-default.min.js');
			loadJs('http://pic.7881.com/7881-2016/js/ifoucs/js/shixian.js');
    		return false;
    	}
   	});
};

function preLoad(id){
	var imgdefereds=[];
	$(".preloading").show();
	$.each(gamePrintScreenDTOList, function (n, value) {
    	if(n == id){
    		$.each(value.urlList, function (n1, value1) {
    			var img = new Image();
    			img.src = value1;
    			var dfd=$.Deferred();
    			
			    $(img).bind('load',function(){
			        dfd.resolve();  
			    }).bind('error',function(){  
			    //图片加载错误，加入错误处理  
			    //  dfd.resolve();  
			    });
			    if(img.complete) setTimeout(function(){  
			        dfd.resolve();
			    },1000);
			    imgdefereds.push(dfd);
		   	});
    		return false;
    	}
   	});
	$.when.apply(null,imgdefereds).done(function(){
		$(".preloading").hide();
	    loadImg(id);
	});  
}

function loadJs(file) {
    var head = $("head").remove("script[role='reload']");
    $("<scri" + "pt>" + "</scr" + "ipt>").attr({ role: 'reload', src: file, type: 'text/javascript' }).appendTo(head);
};

