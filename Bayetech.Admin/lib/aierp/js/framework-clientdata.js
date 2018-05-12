var clients = [];
$(function () {
    clients = $.clientsInit();
})
$.clientsInit = function () {
    var dataJson = {
        dataItems: [],
        organize: [],
        role: [],
        duty: [],
        user: [],
        authorizeMenu: [],
        authorizeButton: []
    };
    debugger;
    var dd = { UserName: "3333", Password: "123654" };
    var aaa = 0;
    var init = function () {
        $.ajax({
            url: "/api/AdminManage/UserAdd",
            data:JSON.stringify(dd),
            type: "post",
            dataType: "json",
            async: false,
            success: function (ret) {
                //alert('tt');
                var data = ret;
                //console.info(ret);

                //dataJson.dataItems = data.dataItems;
                //dataJson.organize = data.organize;
                //dataJson.role = data.role;
                //dataJson.duty = data.duty;
                dataJson.authorizeMenu = eval(data.authorizeMenu);
                //dataJson.authorizeButton = data.authorizeButton;
            }
        });
    }
    init();
    return dataJson;
}