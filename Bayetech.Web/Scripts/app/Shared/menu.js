//左侧菜单模板
define(['vue', 'jquery', 'common'], function (Vue, $, common) {

    var html=`<div class="col-md-3 wd-sm">
    <router-link to="/"><h5 class ="left-nav-title text-center">{{data.Title}}</h5></router-link>

	<div class="left-nav personal-info">
        <a href="javascript:void(0)">用户信息</a>
        <ul class="info-list">
			<li><span class="user-name">liuzy1110</span> &nbsp;&nbsp;[<span class="current-state">在线</span>]</li>
            <li>买家成交数：<span></span></li>
            <li>卖家成交数：<span></span></li>
            <li>芝麻信用：<span>00</span><img src="../../Content/NewImages/zhima.gif" width="15px" class="pull-right"/></li>
            <li>我的余额：<span><a href="#" traget="_blank" class="balance">0.00</a></span><img src="../../Content/NewImages/jinbi.png" width="15px" class="pull-right"/></li>
            <li><a href="#" target="_blank" class="enter-account">进入我的账户</a></li>
            <li class="text-center">
                <a href="#" class="my-game">我的yxlm</a>
                <a href="#" class="sign-out">退出登录</a>
            </li>
        </ul>
    </div>
    <div v-for="(value,index) in data.List" class="left-nav">
        <a @click="toggleTab(index)" href="javascript:void(0)">
            <img :id="'pic'+index" src="http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif"> {{ value.Title }}
        </a>     
        <ul :id="'tab'+index" class ="list-group">
            <li v-for="item in value.Items" class ="list-group-item">
                <a :href="item.Path" target="_blank" v-if="item.Type&&item.Type=='url'">{{item.Title}}</a>
                <router-link :to="{ path: item.Path, query:item.Params}" v-else >{{item.Title}}</router-link>
            </li>
        </ul>
    </div>
</div>`;

    var components = {
        props: ['data'],
        name: "v-menu",
        template: html,
        methods: {
            toggleTab: function (index) {
                tab = eval('tab'+index);
                pic = eval('pic'+index);
                if (tab.style.display=='none') {
                    pic.src='http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif';
                    tab.style.display='';
                }
                else {
                    pic.src='http://pic.ofcard.com/7881/market/images/Personal/bit_1.gif';
                    tab.style.display='none';
                }
            },
            view:function(itemId) {
                this.$parent.view(itemId);
                //this.$emit('view', itemId);
            }
        }
    };
    return components;
});
