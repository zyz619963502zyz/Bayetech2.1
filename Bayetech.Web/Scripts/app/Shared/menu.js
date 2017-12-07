//左侧模板
define(['vue', 'jquery', 'common'], function (Vue, $, common) {
    debugger;
    var html = `<div class="personal_left">
    <a :href="data.home" style="cursor:pointer; text-decoration:none"><h1>{{data.title}}</h1></a>
    <div v-for="(value,index) in data.list">
        <lable>
            <a :click="ShowFLT(index)" href="javascript:void(null)">
                <img id="treePic1" src="http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif"> {{ value.title }}
            </a>
        </lable>
        <ul :id="'LM'+index">
            <li v-for="item in value.items"><a @click="view(item.itemid)">{{ item.title }}</a></li>
        </ul>
    </div>
</div>`;

    var components = {
        props: ['data'],
        name: "v-menu",
        template: html,
        methods: {
            ShowFLT:function(index){
                lbmc = eval('LM' + index);
                treePic = eval('treePic' + iindex)
                if (lbmc.style.display == 'none') {
                    treePic.src = 'http://pic.ofcard.com/7881/market/images/Personal/bit_2.gif';
                    lbmc.style.display = '';
                }
                else {
                    treePic.src = 'http://pic.ofcard.com/7881/market/images/Personal/bit_1.gif';
                    lbmc.style.display = 'none';
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
