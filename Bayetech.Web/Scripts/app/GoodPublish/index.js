//模块之间的操作

require(['vue', 'jquery', 'common', 'v-header', 'Scripts/app/GoodPublish/Step1', 'Scripts/app/GoodPublish/Step2', 'Scripts/app/GoodPublish/Step3', 'API', 'nav-top', 'v-footer',
	'css!../Content/bootstrap/font-awesome.min','css!../Content/bootstrap/bootstrap.min','css!../Content/fileupload/fileinput','css!../Content/common','css!../Content/publish',],
	function (Vue, $, common, header, step1, step2, step3, API, navt,footer) {
	    var data={
	        Step: step1,
            GameInfo:{},
	    };

	    var vm = new Vue({
	        el: '#app',
	        data() {
	            return data;
	        },
	        //router: router,
	        components: {
	            "v-header": header,
	            "nav-top": navt,
                "v-footer": footer
	        },
	        methods: {
                //下一步
	            Next: function (to) {
	                switch (to) {
	                    case "step1":
	                        //进度显示修改
	                        $("[name=process]").removeClass('gc').addClass('bg');
	                        $("[name=process]").eq(0).removeClass('bg').addClass('gc');
	                        this.Step=step1;//切换组件
	                        break;
	                    case "step2":
	                        if (!this.GameInfo.GameId) {
	                            alert("请选择游戏！");
	                            return;
	                        }
	                        if (!this.GameInfo.GroupId) {
	                            alert("请选择区服！");
	                            return;
	                        }
	                        if (!this.GameInfo.ServerId) {
	                            alert("请选择服务器！");
	                            return;
	                        }
	                        if (!this.GameInfo.GoodTypeId) {
	                            alert("交易类型！");
	                            return;
	                        }
	                        $("[name=process]").eq(1).removeClass('bg').addClass('gc');
	                        this.Step=step2;
	                        break;
	                    case "step3":
	                        $("[name=process]").eq(2).removeClass('bg').addClass('gc');
	                        var slef=this;
	                        var data=$("form").serialize();
                            //组装账号信息
	                        var accountInfo=[];
	                        $("#gameAccountInfo :input").each(function () {
	                            accountInfo.push({ PropertyId: $(this).attr("id"), PropertyValue: $(this).val() })
	                        });
	                        data+=`&Status=-1&accountInfo=${JSON.stringify(accountInfo)}`;
	                        //组装游戏额外属性对象
	                        if (this.GameInfo.GoodTypeId === 3) {
	                            var gameProps=[];
	                            $("#GameProps :input").each(function () {
	                                gameProps.push({ PropertyId: $(this).attr("id"), PropertyValue: $(this).val() })
	                            });
	                            data+=`&gamePropsInfo=${JSON.stringify(gameProps)}`;
	                        }
                            //添加商品
	                        API.Good.AddGood(data, function (result) {
	                            if (result) {
	                                slef.Step=step3;
	                            }
	                            slef.Step=step3;
	                        })
	                        break;
	                    default:
	                        this.Step=step1;
	                        break;
	                }
	                window.scrollTo(0, 0);//返回顶部
	            },
	        },
	    });

	});