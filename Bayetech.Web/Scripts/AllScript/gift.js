var _title = "";
var game_name = "御龙在天";
$(function () {
    $(".btn-draw").click(function () {
        _title = $(this).attr("gift-game");
        if ($(this).attr("gift-type") == "0") {
            _title += "首充号";
            $("#pop-draw-first").find(".tip").html("每位用户只能领取一次");
        } else {
            _title += "礼包";
            var giftdepict = $(this).attr("gift-Depict");
            $("#pop-draw-first").find(".tip").html(giftdepict);
        }

        var giftTile =  $(this).attr("gift-name");
        $("#pop-draw-first h2").html(giftTile);

        var giftLeft = $(this).attr("gift-left");
        $(".residue").show();
        $(".residue").find("span").html("剩余"+giftLeft+"%");

        var startTime = $(this).attr("startTime");
        var endTime = $(this).attr("endTime");
        $("#pop-draw-first").find(".deadline>span").html("使用期限："+startTime+" 至 "+endTime);

        drawPop(_title, "pop-draw-first", $(this).attr("gift-id"), giftTile,this);
    });

    $(".btn-ylq").each(function(i,o){
        ylqClick(o);
    });

});
/*已领取点击事件*/
function ylqClick(obj){
    $(obj).click(function(){
        _title = $(this).attr("gift-game");
        if ($(this).attr("gift-type") == "0") {
            _title += "首充号";
        } else {
            _title += "礼包";
        }

        var giftTile =  $(this).attr("gift-name");
        var id = $(this).attr("gift-id");
        getCdkey(_title, id, giftTile);
    });
}

//领取礼包
function drawPop(_title, pop_id, giftId, giftTile,obj) {
    var _pop_id = "#" + pop_id;
    layer.open({
        type: 1,
        title: [_title, 'font-size: 18px;'],
        skin: "oyhide",
        content: $(_pop_id),
        area: '520px',
        scrollbar: false,
        success: function () {
            $(".btn-draw-lj").bind("click", function () {
                getCdkey(_title, giftId, giftTile,obj);
                layer.closeAll();
            });
        },
        end:function(){
            $(".btn-draw-lj").unbind();
        }
    });
}

function getCdkey(_title, id, giftTile,obj) {
    $.ajax({
        type: 'post',
        url: '/store/drawGift.action',
        dataType: 'json',
        data: {id: id},
        success: function (json) {
            if (json.success) {
                if (json.code == 0) {
                    $("#tips").html("恭喜您,您已成功领取");
                    if(_title.indexOf("首充号") >=0 ){
                        var content= '帐号:<span>'+json.data.cdkey+'</span><br/> 密码:<span>'+json.data.password+'</span>';
                        $(".gift").html(content);
                        $("#suc-draw-first>h2 em").html(giftTile);
                        $("#suc-draw-first").find(".tip").html("每位用户只能领取一次");
                    }else{
                        var content= '激活码：<span id="gift_password">'+json.data.password+'</span>';
                        $(".gift").html(content);
                        $("#suc-draw-first>h2 em").html(giftTile);
                        $("#suc-draw-first").find(".tip").html(json.data.giftDepict);
                    }
                    drawPop(_title, "suc-draw-first");

                    $(obj).removeClass("btn-draw");
                    $(obj).addClass("btn-ylq");
                    $(obj).html("已领取");
                    $(obj).unbind("click");
                    ylqClick(obj);
                } else {
                    $("#tips").html("恭喜您,您已领取过");
                    if(_title.indexOf("首充号") >=0 ){
                        var content= '帐号:<span>'+json.data.cdkey+'</span><br/> 密码:<span>'+json.data.password+'</span>';
                        $(".gift").html(content);
                        $("#suc-draw-first>h2 em").html(giftTile);
                        $("#suc-draw-first").find(".tip").html("每位用户只能领取一次");
                    }else{
                        var content= '激活码：<span>'+json.data.password+'</span>';
                        $(".gift").html(content);
                        $("#suc-draw-first>h2 em").html(giftTile);
                        $("#suc-draw-first").find(".tip").html(json.data.giftDepict);
                    }
                    $("#suc-draw-first>h2 em").html(giftTile);
                    drawPop(_title, "suc-draw-first");
                }
                $("#suc-draw-first").find(".deadline>span").html("使用期限："+json.data.startTime+" 至 "+json.data.endTime);
            } else {
                //noinspection GjsLint,Eslint
                if (json.code == 1) {
                    window.location.href = 'http://www.7881.com/7881_touristlogin.jsp?comeback=http://shouyou.7881.com/dianpu.html';
                } else { //noinspection GjsLint
                    if (json.code == 2) {
                                        alert(json.msg);
                                    } else if (json.code == 3) {
                                        if (confirm("对不起,您还未绑定手机号码,立即取绑定?")) {
                                            window.location.href = 'http://www.7881.com/commerical/toEditPhone.action';
                                        }
                                    } else if (json.code == 4) {
                                        alert(json.msg);
                                    } else if (json.code == 5 || json.code == 9) {
                                        alert("其他异常,请联系客服!");
                                    }
                }
            }
        },
        error: function () {
            alert("其他系统异常,请联系客服!");
        }
    });
}

function search() {
    if ($("#gameName") == undefined || $("#gameName").val() == undefined || $("#gameName").val() == '') {
        alert("请输入游戏名称");
        return false;
    }
    location.href = "/topic-gift.html?gameName=" + encodeURI(encodeURI($("#gameName").val()));
}