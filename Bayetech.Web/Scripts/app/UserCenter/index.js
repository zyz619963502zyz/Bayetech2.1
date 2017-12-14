var requireArr = ['vue', 'jquery', 'common','VueRouter','v-header', 'v-footer', 'v-nav', 'v-search', 'v-menu'];

//个人中心主模块
require(requireArr, function () {
    //api
    var Vue=arguments[0];
    var $=arguments[1];
    var common=arguments[2];
    var VueRouter=arguments[3];
    var components={};
    for (var i=3; i<arguments.length; i++){
        components[arguments[i].name]=arguments[i];
    }

    var data={
        menuData: {
            Title: "个人中心",
            Home: "#",
            List: [{
                Title: "我是买家",
                Items: [{ Id: 1, Title: "我要买",Path: "/About"},
                    { Id: 1, Title: "我购买的订单", Path: "/Home" },
                    { Id: 1, Title: "我的代练订单", Path: "/About" },
                    { Id: 1, Title: "我发布的代练需求", Path: "/About" },
                    { Id: 1, Title: "买家代练订单", Path: "/About" }],
            }]
            
        },
    }
    var Home=Vue.extend({
        template: '<p>#HomeMoudle</P>',
    })

    var About=Vue.extend({
        template: '<p>#AboutMoudle</p>'
    })

    Vue.use(VueRouter)
    /* 创建路由器  */
    var router=new VueRouter({
        routes: [
            { 
                path: '/Home',
                component: Home,
            },
            { 
                path: '/About',
                component: About
            },
        ]
    });


    var vm = new Vue({
        el: '#app',
        data: data,
        router:router,
        components: components,
    });

});


