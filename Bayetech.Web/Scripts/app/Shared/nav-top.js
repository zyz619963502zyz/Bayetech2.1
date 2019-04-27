//顶部导航

define(jsconfig.baseArr, function (Vue, $, common) {
    var tophtml = `<nav class ="nav navbar-default nav-t">
                <div class ="container">
                    <div class ="navbar-header">
                        <button type="button" class ="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class ="sr-only">Toggle navigation</span>
                            <span class ="icon-bar"></span>
                            <span class ="icon-bar"></span>
                            <span class ="icon-bar"></span>
                        </button>
                        <a class ="navbar-brand" href="#">游戏联盟</a>
                    </div>
                    <div class ="collapse navbar-collapse">
                        <ul class ="nav navbar-nav">
                            <li class ="login-a"><a href="../Login/Login.html">请登录</a></li>
                            <li><span id="qqLoginBtn"></span></li>
                            <li><a href="#" @click="InsertIn">新增</a></li>
                            <li></li>
                        </ul>
                        <ul class ="nav navbar-nav navbar-right">
                            <li class ="dropdown">
                                <a href="../../Page/DLService/DLList.html" target="_blank">我的6666 <span class ="caret"></span></a>
                                <ul class ="dropdown-menu">
                                    <li><a href="#">我购买的商品</a></li>
                                    <li><a href="#">出售中的商品</a></li>
                                    <li><a href="#">我的订单管理</a></li>
                                </ul>
                            </li>
							<li class="dropdown"><a href="#">买家中心 <span class ="caret"></span></a>
								<ul class ="dropdown-menu">
                                    <li><a href="../../Page/Game/List.html">我要买</a></li>
                                    <li><a href="../../Page/UserCenter/Index.html#/MyOrders?flag=All">我购买的商品</a></li>
                                </ul>
							</li>
							<li class ="dropdown"><a href="#">卖家中心 <span class ="caret"></span></a>
								<ul class ="dropdown-menu">
                                    <li><a href="#">订单管理</a></li>
                                    <li><a href="#">出售中的宝贝</a></li>
                                    <li><a href="#">仓库中的宝贝</a></li>
                                    <li><a href="#">卖家助手</a></li>
                                </ul>
							</li>
							<li class="label-cash"><a href="#" class="pay">充值</a> <a href="#" class="take-out">提现</a></li>
                            <li class ="dropdown">
                                <a href="#">服务中心 <span class ="caret"></span></a>
                                <ul class ="dropdown-menu">
                                    <li><a href="../../Page/ServiceCenter/ArticleCenter.html" target="_blank">资讯中心</a></li>
                                    <li><a href="#">安全中心</a></li>
                                    <li><a href="#">帮助中心</a></li>
                                    <li><a href="#">我要咨询</a></li>
                                </ul>
                            </li>
                            <li class ="dropdown">
								<a href="#" style="color:#3d86ea">网站导航 <span class ="caret"></span></a>
								<ul class ="dropdown-menu">
                                    <li class="homebg"><a href="#">首页</a></li>
                                    <li><a href="../Page/Game/List.html" target="_blank">金币交易</a></li>
                                    <li><a href="../Page/Game/List.html" target="_blank">账号交易</a></li>
                                    <li><a href="../Page/Game/List.html" target="_blank">装备交易</a></li>
									<li><a href="#">游戏代练</a></li>
                                </ul>
							</li>
                            <li><a href="#">官方微博</a></li>
                        </ul>
                    </div>
                </div>
            </nav>`;
    //Api
    var UserUrl = "/api/User/InsertIsValiteUser"; //保存信息
    //筛选和列表整合数据
    var data = {
            ret: 0,
            msg: "",
            is_lost: 0,
        nickname: "Keny",
            gender: "",
            province: "",
            city: "",
            year: "",
            constellation: "",
            figureurl_type: "",
            is_yellow_vip: "",
            vip: "",
            yellow_vip_level: "",
            level: "",
            is_yellow_year_vip: ""
    };

    var components = {
        name: "nav-top",
        template: tophtml,
        data() {
            return data;
        },
        mounted() {
            var self = this;
            self.RegistQQLogin();
        },
        methods: {
            Instock() {
                 var self = this;
                if (localStorage.isTrue !="Instock") {
                    //alert("我入库了!");
                    var paras = {};
                    QC.api("get_user_info", paras)
                        //指定接口访问成功的接收函数，s为成功返回Response对象
                        .success(function (s) {
                            self.$data.nickname = s.data.nickname;
                            common.postWebJson(UserUrl, JSON.stringify(self.$data), function (data) {
                                if (data.result) {
                                    if (!data.data) {
                                        window.location.href = "../Sign/Signin.html";
                                        localStorage.nickname = self.$data.nickname;
                                        
                                    }
                                }
                            });
                            
                        })
                        //指定接口访问失败的接收函数，f为失败返回Response对象
                        .error(function (f) {
                            //失败回调
                            alert("获取用户信息失败！");
                        })
                        //指定接口完成请求后的接收函数，c为完成请求返回Response对象
                        .complete(function (c) {
                           
                        });
                   
                   
                }
            },
            InsertIn() {
                var param = this.$data;
                debugger;
                common.postWebJson(UserUrl, JSON.stringify(param), function (data) {
                    if (data.result) {
                        if (!data.data) {
                            window.location.href = "../Sign/Signin.html";
                            localStorage.nickname = param.nickname;
                        }
                    }
                });
            },
            RegistQQLogin() {
                var that = this;
                if (QC) {
                    QC.Login({
                        //插入按钮的节点id
                        btnId: "qqLoginBtn",
                        scope: "all",
                        size: "B_M"
                    }, function (reqData, opts) {//登录成功
                        //根据返回数据，更换按钮显示状态方法
                        var dom = document.getElementById(opts['btnId']),
                            _logoutTemplate = [
                                //头像
                                '<span><img src="{figureurl}" class="{size_key}"/></span>',
                                //昵称
                                '<span>{nickname}</span>',
                                //退出
                                '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
                            ].join("");
                        dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
                            nickname: QC.String.escHTML(reqData.nickname),
                            figureurl: reqData.figureurl
                        }));
                        if (QC.Login.check()) {//如果已登录
                            that.Instock();
                            localStorage.isTrue = "Instock";
                        }
                    }, function (opts) {//注销成功
                        //alert('QQ登录 注销成功');

                    }
                    ); 
                }
            }
        }
    };
    return components;
});