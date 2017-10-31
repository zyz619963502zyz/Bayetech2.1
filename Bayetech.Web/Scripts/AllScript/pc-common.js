/**
 * Created by Administrator on 2017/8/7.
 */
/*ajax通用方法*/
function ajaxFunction(url,data,success,error,asyncFlag){
    if(typeof error == "boolean"){
        asyncFlag = error;
    }
    if(typeof error != "function" ){
        error = function(result){
            console.log("服务器异常！");
        }
    }
    //默认异步
    if(typeof asyncFlag != "boolean"){
        asyncFlag = true;
    }
    $.ajax({
        "url":url,
        "type":"post",
        "data":data,
        "dataType":"json",
        "success":success,
        "error":error,
        "async":asyncFlag
    })
}

function calcDateTimeRanges(start, end){
    var startTime = new Date(start);
    var endTime = new Date(end);
    endTime.setHours(endTime.getHours() - 1);
    var arr = new Array();
    var i = 0;
    while((endTime.getTime()-startTime.getTime())>=0){
        var year = startTime.getFullYear();
        var month = startTime.getMonth().toString().length==1?"0"+(startTime.getMonth()+1): (startTime.getMonth()+1);
        var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
        var hour = startTime.getHours().toString().length == 1? "0"+startTime.getHours():startTime.getHours();
        arr[i] = year+"-"+month+"-"+day+" "+hour+":00";
        startTime.setHours(startTime.getHours()+1);
        i++;
    }
    return arr;

}
