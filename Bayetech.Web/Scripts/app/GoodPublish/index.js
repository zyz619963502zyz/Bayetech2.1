//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'VueRouter', 'v-header', 'Scripts/app/GoodPublish/Step1', 'Scripts/app/GoodPublish/Step2', 'Scripts/app/GoodPublish/Step3'],
	function (Vue, $, common, bootstrap, VueRouter, header, step1, step2, step3) {
	    var routes=[{ path: '/', redirect: '/step1' },
            { path: '/step1', name: 'step1', component: step1 },
            { path: '/step2', name: 'step2', component: step2 },
            { path: '/step3', name: 'step3', component: step3 }, ];

	    Vue.use(VueRouter)
	    /* 创建路由器  */
	    var router=new VueRouter(router);
	    router.beforeEach((to, from, next) => {
	        switch (to.path) {
	            case "/Step1":
	                next();
	                break;
	            case "/Step2":
	                next();
	            case "/Step3":
	                next();
	                break;
	            default:
	                next();
	                break;
	        }
	    })

	    new Vue({
	        el: '#app',
	        data() {
	            return {}
	        },
	        components: {
	            "v-header": header,
	            "step1": step1,
	        },
	        methods: {
	           
	        },
	    });

	});