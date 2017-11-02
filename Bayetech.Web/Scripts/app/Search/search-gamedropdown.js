//搜索框下拉
define([], function () {
    var html = `<div class="main_con" style="display: block;">
        <ul class="main_name_select">
            <a href="javascript:void(0)" class="hover">网络游戏</a>
            <a href="javascript:void(0)" class="">手机游戏</a>
            <ul class="gamename_quicksearch">
                <input type="text" onkeyup="return fastSearchKeyUp();" value="请输入游戏关键字或拼音" id="sselect_gamename" class="q_input gray_a" onclick="if(this.value=='请输入游戏关键字或拼音'){this.value='';this.className='q_input'}" onblur="if(this.value=='') {this.value='请输入游戏关键字或拼音';this.className='q_input gray_a'}">
            </ul>
            <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
        </ul>
        <ul class="main_letter_select">
            <a href="javascript:void(0)" id="hotgame" class ="current">热门游戏</a>
            <a v-for="item in alphabet" href="javascript:void(0)">{{item}}</a>
        </ul>
        <dl class="con_list" id="letter_game">
            <dt v-for="item in list"><a href="javascript:void(0)": itemid="item.id" @click="loadCarriersGroupsByGame(item.id)"><font style="color: #ff6700">{{item.title}}</font></a></dt>
        </dl>
    </div>`;

    var data = {
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        list:[],
    }

    var components = {
        name: "search-dropdown",
        props: ['data'],
        data:function(){
            return data;
        },
        template: html,
        methods: {
        }
    };
    return components;
});
