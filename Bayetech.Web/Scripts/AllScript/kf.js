/**
 * Created by zhangliang on 16/8/24.
 */
var ajax = {
    getJSONP: function (url, callbackFun) {
        $.ajax({
            url:encodeURI(url),
            type: "get",
            async: false,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "jsonpCallback",
            scriptCharset:'utf-8',
            success: function(resp) {
                callbackFun(resp)
            },
            error: function(){
                console.log('Error')
            }
        });
    }
}
$(function () {
    var robot = ''
        + '<div class="customer-service-robot" style="display:none">'
        + '<div class="robot-tit">'
        + '<span>客服小柒</span><em class="iconfont">&#xe610;</em>'
        + '</div>'
        + '<div class="facility">'
        + '<div class="facili-top">'
        + '<ul>'
        + '<li class="topli1"><span class="iconfont">&#xe603;</span></li>'
        + '<li class="topli2"><span class="iconfont">&#xe602;</span></li>'
        + '<li class="topli3"><span class="iconfont">&#xe63d;</span></li>'
        + '</ul>'
        + '</div>'
        + '<div class="facili-bot">'
        + '<ul>'
        + '<li class="botli1"><a href="http://www.7881.com/selfService/preToSelfService.action?urlType=1" target="_blank">修改绑定手机号</a></li>'
        + '<li class="botli2" style="display: none;"><a href="http://www.7881.com/selfService/preToSelfService.action?urlType=2" target="_blank">修改邮箱</a></li>'
        + '<li class="botli3" style="display: none;"><a href="http://www.7881.com/selfService/preToSelfService.action?urlType=3" target="_blank">修改开户名</a></li>'
        + '</ul>'
        + '</div>'
        + '</div>'
        + '<div class="chat-window">'
        + '<div class="window-hei">'
        + '<div class="cus-ser-win"><h3>客服小柒<span>' + getCurrentTime() + '</span></h3><div class="chat-server"><em></em><div class="seven-answer"><p>尊敬的7881用户，客服小柒24小时随时为您服务!</p></div></div></div>'
        + '</div>'
        + '</div>'
        + '<div class="robot-search-box">'
        + '<input type="text" placeholder="请输入问题关键字或订单号" class="search-key"/>'
        + '<div class="matching-result">'
        + '<p>您是否在搜索：</p>'
        + '<ul>'

        + '</ul>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="result-big-pic">'
        + '<img src="http://pic.7881.com/7881-2016/images/bigpic.jpg">'
        + '</div>';
    $('body').append(robot);

    winResize();
    $(window).resize(function () {
        winResize();
    });
    $(".view-larger").click(function () {
        openPic();
    });
    $(".facility").children(".facili-top").find("li").hover(function () {
        var flag = $(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        if (flag == 2) {
            $(this).addClass("on").siblings("li").addClass("on");
        }
        $(this).parents(".facility").find(".facili-bot").find("li").eq(flag).show().siblings("li").hide();
    });
    $(".robot-tit").find("em").click(function () {
        $(this).parent().parent().hide();
    });

    $(".matching-result").find("ul").on("click", "li", function () {
        var txt = $(this).text();
        $(".search-key").val(txt);
        enterKey($(this).attr("qa-id"), $(this).attr("es-id"));
    });
    $("body").click(function () {
        $(".matching-result").hide();
    });
    $(".matching-result").click(function (event) {
        event.stopPropagation();
    });
    $(".search-key").click(function (event) {
        event.stopPropagation();
    });

    $(".kf-robot").click(function () {
        $(".customer-service-robot").toggle();
    });

    //高度自适应
    function winResize() {
        var _bowhei = $(window).height() - 400;
        $(".chat-window").height(_bowhei);
    }

    function scrollDown() {
        $(".chat-window").scrollTop($(".window-hei").height());
    }

    //查看大图弹窗
    function openPic() {
        layer.open({
            type: 1,
            title: false,
            area: '960px',
            shadeClose: true,
            content: $('.result-big-pic')
        });
    };
    //输入框输入联动
    $(".search-key").bind("input propertychange", function () {
        var iptnum = $(this).val();
        //ajax 加载根据输入后的相关账号最多3个 格式如下
        if (!(/^[0-9]*$/.test(iptnum))) {
            $(".matching-result").find("ul").html('');
            if (iptnum && iptnum.length > 1) {
                var uri = "http://so.7881.com/so/kf?q=" + iptnum;
                ajax.getJSONP(uri, function(resp){
                    if (resp.code == 0) {
                        var tmp = '';
                        for (var i = 0; i < resp.data.titles.length; i++) {
                            tmp += '<li qa-id="' + resp.data.titles[i].qaId + '" es-id="' + resp.data.titles[i].esId + '"><a href="javascript:void(0)">' + resp.data.titles[i].highLight + '</a></li>'
                        }
                        $(".matching-result").find("ul").html(tmp);
                        var len = $(".matching-result").find("li").length;
                        if (len > 0) {
                            $(".matching-result").show();
                        } else {
                            $(".matching-result").hide();
                        }
                        if (iptnum == "") {
                            $(".matching-result").hide();
                        }
                    }
                });
            }
        } else {
            $(".matching-result").find("ul").html('');
        }
    });

    $(".search-key").keyup(function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var iptnum = $(this).val();
        if(e && e.keyCode==13){
            if (iptnum !== "") {
                enterKey(-1);
            }
        }
    });

    function enterKey(code, esCode) {
        var ipttxt = $(".search-key").val();
        $(".search-key").val("");
        $(".matching-result").hide();
        //输入框内容发送
        $(".chat-window").children(".window-hei").append('<div class="client-win"><h3>我<span>' + getCurrentTime() + '</span></h3><div class="chat-client"><em></em><div class="client-ask"><p>' + ipttxt + '</p></div></div></div>');
        //加载小柒回复内容
        if (code == -1) {
            if (/^12[0-9]{22}$/.test(ipttxt)) {
                var ord_detail = 'http://www.7881.com/payment/endPayout.action?pop=notshow&orderid=' + ipttxt;
                var tmp = '<div class="cus-ser-win rec-problem"> <h3>客服小柒<span>' + getCurrentTime() + '</span></h3> <div class="chat-server"> <em></em><div class="seven-answer">' +
                    '<p><a href="' + ord_detail + '" class="view-larger" target="_blank">&gt;&gt;点击查看订单详情</a></p></div></div></div>';
                $(".chat-window").children(".window-hei").append(tmp);
            } else {
                if (ipttxt && ipttxt.length > 1) {
                    var uri = "http://so.7881.com/so/kf?q=" + ipttxt;
                    ajax.getJSONP(uri, function (resp) {
                        if (resp.code == 0) {
                            var tmp = '';
                            var size = resp.data.titles.length;
                            if (size > 0) {
                                reply(2, resp.data.titles);
                            } else {
                                reply(1);
                            }
                        } else {
                            reply(1);
                        }
                        scrollDown();
                    });
                }
            }
        } else {
            console.log(code);
            ajax.getJSONP("http://so.7881.com/so/answer?qaId=" + code, function (resp) {
                if (resp.code == 0) {
                    reply(0, resp.data.answer);
                    scrollDown();
                } else {
                    reply(1);
                }
            });
        }
        scrollDown();
    }

    function reply(result, content) {
        var tmp = ''
        if (result == 0) {
            tmp = '<div class="cus-ser-win rec-problem"> <h3>客服小柒<span>' + getCurrentTime() + '</span></h3> <div class="chat-server"> <em></em><div class="seven-answer">' +
                ' <p>' + content + '</p></div></div></div>';
        } else if (result == 1) {
            tmp = '<div class="cus-ser-win rec-problem"> <h3>客服小柒<span>' + getCurrentTime() + '</span></h3> <div class="chat-server"> <em></em><div class="seven-answer">' +
                '  <em></em>' +
                ' <p>小柒没理解您的意思，请<a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001877881&aty=0&a=0&curl=&ty=1" target="_blank">联系客服</a>咨询</p></div></div></div>';
        } else {
            tmp = '<div class="cus-ser-win rec-problem"> <h3>客服小柒<span>' + getCurrentTime() + '</span></h3> <div class="chat-server"> <em></em><div class="seven-answer">' +
                ' <p>小柒找到以下可能可以解决您的问题：</p>';
            var size = content.length;
            for (var i = 0; i < size; i++) {
                tmp += '<p><a href="javascript:void(0);" class="needans" data="' + content[i].qaId + '">' + content[i].title + '</a></p>'
            }
        }
        $(".chat-window").children(".window-hei").append(tmp);
    }

    function getCurrentTime(){
        return moment().format("HH:mm");
    }

    $(document).on("click", ".needans", function () {
        var seruslt = $(this).text();
        $(".chat-window").children(".window-hei").append('<div class="client-win"><h3>我<span>' + getCurrentTime() + '</span></h3><div class="chat-client"><em></em><div class="client-ask"><p>' + seruslt + '</p></div></div></div>');
        scrollDown();
        var qaId = $(this).attr("data");
        if (qaId && qaId != "") {
            ajax.getJSONP("http://so.7881.com/so/answer?qaId=" + qaId, function (resp) {
                if (resp.code == 0) {
                    reply(0, resp.data.answer);
                    scrollDown();
                } else {
                    reply(1);
                }
                scrollDown();
            });
        }
    });


});
