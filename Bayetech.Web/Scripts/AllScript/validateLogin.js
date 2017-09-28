/// 判断是否登录
$.ajax({
	type : 'get',
	url : '/loginCheckReturn.action?ip=' + Math.round(Math.random()*10000),
	success : function(resultData) {
		var result = resultData.split('#');
		if(result[0] == '500')
		{
			location.href="/7881_touristlogin.jsp";
		}
		else if (result[0] == '200' && result.length > 2) {
			//new code for login
			$('#noLog').hide();
			$('#alreadyLog').show();
			if(result[2]!='0'){
				htmlText = '<span><a href="/personal.html">'+result[1]+'</a>,欢迎回来！</span><em>|</em> <a href="/msg/notReadMsg.action" class="on" rel="nofollow"><i class="icon-com message"></i>消息（<b>'+result[2] +'</b>）</a><em>|</em> <a href="/logout.action" rel="nofollow">退出</a>';
			}else{
				htmlText = '<span><a href="/personal.html">'+result[1]+'</a>,欢迎回来！</span><em>|</em> <a href="/msg/notReadMsg.action"  rel="nofollow"><i class="icon-com message"></i>消息（<b>'+result[2] +'</b>）</a><em>|</em> <a href="/logout.action" rel="nofollow">退出</a>';
			}
			$('#alreadyLog').html(htmlText);

		}
	}
});
//document.domain="7881.com";



