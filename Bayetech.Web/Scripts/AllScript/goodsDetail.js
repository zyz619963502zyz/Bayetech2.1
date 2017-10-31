/**
 * Created by Administrator on 2017/8/9.
 */

$(function(){
    //获取积分商城活动积分
    queryMallScore(1);
    //查询折扣信息
    queryFlags();
});

/**
 * 商品购买跳转
 */
function buyGoods(){
    var url = "";
    var gameType = $("#gameType").val();
    var goodsId = $("#goodsId").val();
    var buyNum = $(".sub-input-plus > input").val();
    buyNum = buyNum == undefined?"1":buyNum;
    if(gameType == "1"){
        var gameShortName = $("#gameShortName").val();
        var mobileGameTypeEN = $("#mobileGameTypeEN").val();
        url = "http://shouyou.7881.com/"+gameShortName+"/"+mobileGameTypeEN+"/goods-"+goodsId+"-buy.html?buyNum="+buyNum;
    }else{
        url = "http://www.7881.com/goods-buying-"+goodsId+".html?buyNum="+buyNum;
    }
    url += "&random="+Math.random();
    window.location.href=url;
}

/**
 * 购买数量变动调用方法
 */
function comfunction(buyNum){
    queryMallScore(buyNum);
}

/**
 * 查询折扣信息
 */
function queryFlags(){
    var goodsIds = [];
    goodsIds.push($("#goodsId").val());

    var url = "/queryFlags";
    var data = {
        "goodsIds":goodsIds,
        "channelId":12
    };
    var successFun = function(result){
        $.each(result,function(index,item){
            if(item.flagIds.length > 0 && item.flagIds.indexOf(1) != -1){
                var length = $(".detail_ico > a").length;
                if(length < 8){
                    $(".detail_ico > a:last").after('<a href="javascript:void(0)" ><i class="tags icon-jsmc"></i></a>');
                    $(".detail_ico > .ico_text > p:last").after('<p style="display: none;"><i class="tags icon-jsmc"></i>极速秒充：该商品的充值速度非常快，基本以秒计算</p>');
                }
            }

        });
    };
    ajaxFunction(url,data,successFun);
}

/**
 * 获取积分商城活动积分
 * @param buyNum
 */
function queryMallScore(buyNum){
    var gameId = $("#gameId").val();
    var gtId = $("#gtId").val();
    var groupId = $("#groupId").val();
    var serverId = $("#serverId").val();
    var price = $("#price").val();

    var url = "/detail/queryMallScore";
    var data = {
        "gameId":gameId,
        "gtid":gtId,
        "groupId":groupId,
        "serverId":serverId,
        "price":price,
        "buyNum":buyNum
    };
    var successFun = function(result){
        if(result.creditPoint && result.creditPoint != 0){
            $(".gift").html("送积分：<span>"+result.creditPoint+"分</span>");
        }else{
            $(".gift").html("");
        }
    };
    ajaxFunction(url,data,successFun);

}

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":["weixin","tsina","qzone","tqq","renren","sqq"],"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
