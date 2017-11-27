//搜索框下拉
define(["common"], function (common) {
    var html = `<div class="b_blue_box">
    <div class="main_con">
        <ul v-if="data.Type > 1" class ="box_title">
            选择{{data.Title}}
            <a onclick="">全部{{data.Title}}</a>
            <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
        </ul>
        <ul v-if="data.Type <= 1" class ="main_name_select">
            <a href="javascript:void(0)" class ="hover"  @click="loadDropdown('0')">网络游戏</a>
            <a href="javascript:void(0)" class ="" @click="loadDropdown('1')">手机游戏</a>
            <ul class="gamename_quicksearch">
                <input type="text" onkeyup="return fastSearchKeyUp();" value="请输入游戏关键字或拼音" id="sselect_gamename" class="q_input gray_a" onclick="if    (this.value=='请输入游戏关键字或拼音'){this.value='';this.className='q_input'}" onblur="if(this.value=='') {this.value='请输入游戏关键字或拼    音';this.className='q_input gray_a'}">
            </ul>
            <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
        </ul>
        
        <ul v-if="data.Type <= 1" class ="main_letter_select">
            <a href="javascript:void(0)" id="hotgame" class ="current" @click="loadDropdown(data.Type)">热门游戏</a>
            <a v-for="item in alphabet" href="javascript:void(0)" @click="GetGameListByLetter(item,data.Type)">{{item}}</a>
        </ul>
        <dl class="con_list">
            <dt v-for="item in data.List">
                <a href="javascript:void(0)" @click="loadDropdown(data.Child,item.Id,item.Name)">{{item.Name}}</a>
            </dt>
        </dl>
    </div>
</div>`;

    var data = {
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        list: [],
    }

    var components = {
        name: "search-dropdown",
        props: ['data'],
        template: html,
        data: function () {
            return data;
        },
        methods: {
            loadDropdown: function (type,id,name) {
                this.$parent.loadDropdown(type, id,name);
            },
            GetGameListByLetter: function (letter,type) {
                common.getWebJson("/api/Game/GetGameListByLetter", { letter:letter, type: type }, function (data) {
                    nowVue.$props.data.List = data;
                });
            },
        }
    };
    return components;
});
