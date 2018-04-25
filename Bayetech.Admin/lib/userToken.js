(function ($) {
    var that = this;
    that.Url = "/api/CustomerLogin/GetToken";
    that.HomeUrl = '/UserLogin.html';

    that.getToken = function () {
        getWeb(that.Url, '', function (data) {
            //console.info(data);
            if (data) {
                if (data.success === false) {
                    alert(data.errorMsg);
                    window.location.href = that.HomeUrl;
                }
            } else {
                alert('系统尚未启动，请联系管理员！');
                window.location.href = that.HomeUrl;
            }
        });
    }();
})();