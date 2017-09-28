$(".tablelist tr:even").addClass("even");
$("header nav li a").click(function(){
	$(this).parent().parent().find("li").removeClass("current");
	$(this).parent().addClass("current");
});
$(".lists li").click(function(){
	$(this).parent().find("li").removeClass("selected")
	$(this).addClass("selected");
});
$(".phoneNums .numLists").click(function(e){
	$(this).parent().find(".historyNum").show();
	e.stopPropagation();
  }
);
$(".historyNum p").click(function(){
	$(this).parent().hide();
	$(".phoneNum").val($(this).text());		
});
$(".historyNum").click(function(e) {
    e.stopPropagation();
});
 $(document).click(function() {
    $(".historyNum").hide();
    $(".phoneNums").find(".lists").hide();
});
function checkPhoneNum () {
	var PhoneNum = $(".phoneNum").val();
	$(".tellTipArea h3").empty().append(PhoneNum.slice(0,3) + "<samp></samp>" + PhoneNum.slice(3,6) + "<samp></samp>" + PhoneNum.slice(6,9) + "<samp></samp>"+ PhoneNum.slice(9,11));
	if (PhoneNum.length <= 0){
		$(".tellTipArea").hide();
		} 
}//checkPhoneNum end
$(".phoneNum").blur(function() {

		$(".tellTipArea").hide();

})

$(".phoneNum").keyup(function() {
	checkPhoneNum ();
	$(".verify").show();
});
$(".tab").next().children().not(".showOne").hide();
	$(".tab li a").click(function() {
		$(this).parent().parent().children().removeClass("current");
		$(this).parent().addClass("current");
		var tabindex = ($(this).parent().parent().find("li a").index($(this)));
		var nextdiv = $(this).parent().parent().next();
		$(nextdiv.children()).hide();
		$(nextdiv.children().get(tabindex)).show();
});
function show(index){			
	var _count=$(".lists li").length;
	for(var i=1;i<=_count;i++)
	{
		if(index==i)
		{
			$("#block"+i).removeClass("hide");
		}
			else
		{
			$("#block"+i).addClass("hide");
		}
	}
}

$(".listype").click(function(){
    $(this).siblings(".lists").show();
});
$(".phoneNums").find(".lists").find("em").click(function(){
    var $text = $(this).text();
    var $pret = $(this).parent().parent();
    var $listype = $pret.find(".listype");
    $listype.text($text);
    $pret.find(".lists").hide();
});
$("#first").click(function(){
    $(this).find(".bubble").show();
});
$(".bubble").find("b").click(function(e){
    e.stopPropagation();
    $(this).parent().parent().hide();
});
/*$(".iphone-l").find(".hot").mouseover(function(){
    $(".iphone-l").find(".list").find("li").removeClass("on");
    $(this).siblings(".bubble").show();
});*/
/*$(".iphone-l").find(".list").find("li").mouseover(function(){
    $(".iphone-l").find(".list").find("li").removeClass("on");
    $(this).addClass("on");
    $(this).parent().siblings(".bubble").show();
});*/
/*
$(".iphone-l").find(".bubble").hover(function(){
    $(this).show();
},function(){
    $(this).hide();
    $(".iphone-l").find(".list").find("li").removeClass("on");
})*/
