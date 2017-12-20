//左侧菜单模板
define(['vue', 'jquery', 'common'], function (Vue, $, common) {

    var html=`<div class="col-md-3">
    <router-link to="/"><h1 class="left-nav-title text-center">{{data.Title}}</h1></router-link>
    <div v-for="(value,index) in data.List" class="left-nav">
        <div>
            <a @click="toggleTab(index)" href="javascript:void(null)">
                <img :id="'pic'+index" src="http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif"> {{ value.Title }}
            </a>
        </div>
        <ul :id="'tab'+index" class="list-group">
            <li v-for="item in value.Items" class="list-group-item"><router-link :to="{ path: item.Path,params:{id:item.Id}}">{{ item.Title }}</router-link></li>
        </ul>
    </div>
</div>`;

    //<a @click="view(item.Id)">{{ item.Title }}</a>
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
            },
        }
    };
    return components;
});
