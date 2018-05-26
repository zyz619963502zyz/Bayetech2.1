import Vue from '../vue.js'
import comCompnent from '../common.js'
import "../jquery-1.10.2.min.js"


var data = {
    url:"/api/Login/AdminLogion",
    tools:{
        _comCompnent:comCompnent,
    },
    Param:{
        UserId:"123",
        UserPassword:"123",
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
    
                }  
            });
        }
    }
})