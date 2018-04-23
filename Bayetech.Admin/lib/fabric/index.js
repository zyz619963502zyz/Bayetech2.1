$(function(){
    function controlSize(){
        $('.left-nav').height($(window).height()-54);
        $('.white-content,.tool-box').height($(window).height()-$(".top-link").height()-63);
    }
    //菜单折叠箭头
    $('#accordion').on('shown.bs.collapse', function () {
        $('.panel-title').removeClass('active');
        $('.panel-collapse.in').prev().find('h4').addClass('active');
    }).on('hidden.bs.collapse', function () {
        $('.panel-title').removeClass('active');
    });
    //自适应调整高度 
    controlSize();
    $(window).resize(function() {
        controlSize();
    });
    
//颜色
    //$('#color').ColorPicker({
    //    color: '#0000ff',
    //    onShow: function (colpkr) {
    //        $(colpkr).fadeIn(500);
    //        return false;
    //    },
    //    onHide: function (colpkr) {
    //        $(colpkr).fadeOut(500);
    //        return false;
    //    },
    //    onChange: function (hsb, hex, rgb) {
    //        $('#color').css('backgroundColor', '#' + hex);
    //        $('#color-hide').val('#' + hex);
    //    }
    //});
});