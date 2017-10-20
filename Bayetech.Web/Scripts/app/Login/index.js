require(jsconfig.baseArr, function (Vue, $, left, right) {
  //登录的数据
    var data = {
        GameUser: "",
        GamePass: "",
    }

    var vm = new Vue({
        el: '#LoginMain',
        data: data,
        created: function () {

        }
    });
});