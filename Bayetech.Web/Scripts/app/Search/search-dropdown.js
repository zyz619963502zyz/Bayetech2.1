/// <reference path="search-dropdown.js" />
//搜索框下拉
define([], function () {
    var html = `<div class="b_blue_box">
        <div class="main_con">
        <slot>
            <ul class="box_title">
                选择{{data.title}}
                <a onclick="">全部{{data.title}}</a>
                <a target="_blank" href="/toQuFuCollection.action?entrance=0" class="qf-tips">找不到您要的游戏或区服？</a>
            </ul>
         </slot>
            <dl class ="con_list" id="letter_group">
                <dt v-for="item in data.list">
                   <a href="javascript:void(0)" @click="loadDropdown(item.type,item.id)">{{item.title}}</a>
                </dt>
            </dl>
        </div>
      </div>`;

    var components = {
        name: "search-dropdown",
        props: ['data'],
        template: html,
        methods: {
            loadDropdown: function () {
                this.$parent.loadDropdown(itemId);
            }
        }
    };
    return components;
});
