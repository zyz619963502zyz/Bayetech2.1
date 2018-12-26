import Vue from '../vue.js'
import "../jquery-1.10.2.min.js"


var data = {
    url: "/api/Login/AdminLogion",
    Param: {
        //User_ID:"admin",
        //User_PWD:"111111",
        User_ID: "admin",
        User_PWD: "111111"
    }
};

new Vue({
    el:"#LoginDiv",
    data:data,
    methods:{
        LoginIn(){
            var self = this;
            localStorage.setItem("User_Id", self.Param.User_ID);
            localStorage.setItem("User_Code", "");
            comCompnent.default.postWebJson(self.url,self.Param,function(data){
                if (data.result) {
                    localStorage.setItem("User_Id", data.User.User_Id);
                    localStorage.setItem("User_Code", data.User.User_Code);
                    window.location.href = "/Page/BayMain.html";
                }else {
                    alert(data.Content);
                }
            }, function (error) {//错误信息。
                alert(error);
            });
        }
    }
})