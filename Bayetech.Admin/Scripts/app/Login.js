import Vue from '../vue.js'
import comCompnent from '../common.js'
import "../jquery-1.10.2.min.js"


var data = {
    url:"/api/Login/AdminLogion",
    tools:{
        _comCompnent:comCompnent,
    },
    Param:{
        User_ID:"admin",
        User_PWD:"111111",
    }
}

new Vue({
    el:"#LoginDiv",
    data:data,
    methods:{
        LoginIn(){
            var self = this;
            self.tools._comCompnent.postWebJson(self.url,self.Param,function(data){
                if (data) {
                    window.location.href = "/Page/BayMain.html";
                }else {
                    alert(data.Content);
                }  
            });
        }
    }
})