import Vue from '../vue.js'
import "../jquery-1.10.2.min.js"


var data = {
    url: "/api/Login/AdminLogion",
    Param: {
        //User_ID:"admin",
        //User_PWD:"111111",
        User_ID: "",
        User_PWD: ""
    }
};

new Vue({
    el:"#LoginDiv",
    data:data,
    methods:{
        LoginIn(){
            var self = this;
            comCompnent.default.postWebJson(self.url,self.Param,function(data){
                if (data) {
                    window.location.href = "/Page/BayMain.html";
                }else {
                    alert(data.Content);
                }  
            });
        }
    }
})