//左侧模板
define(['vue', 'jquery', 'common'], function (Vue, $, common) {

    var html=`<div class="menu">
    <a :href="data.Home" style="cursor:pointer; text-decoration:none"><h1>{{data.Title}}</h1></a>
    <div v-for="(value,index) in data.List">
        <span>
            <a @click="toggleTab(index)" href="javascript:void(null)">
                <img :id="'pic'+index" src="http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif"> {{ value.Title }}
            </a>
        </span>
        <ul :id="'tab'+index">
            <li v-for="item in value.Items"><a @click="view(item.Id)">{{ item.Title }}</a></li>
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
            },
        }
    };
    return components;
});
