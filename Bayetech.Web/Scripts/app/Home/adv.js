﻿//首页广告
define([], function () {
    var html = `
    <div class="index-adv clearfix">
        <div class="adv-item" v-for="item in object">
            <a :href="item.url" class ="img-a"><img :src="item.img" width="435" height="180" alt="" /></a>
            <dl>
                <dt>
                    <h2><a :href="item.url" target="_blank">{{item.centent}}</a></h2>
                    <p>{{item.centent}}</p>
                </dt>
                <dd><a :href="item.url" target="_blank">{{item.fnname}}</a></dd>
            </dl>
        </div>
    </div>`;

    var data = {
        object: [{
            title: "《地下城与勇士》收货网",
            centent: "一键出货，轻松收钱，无需等待，方便快捷！",
            url: "http://www.7881.com/b2b/buy-G10.html",
            img: "../../../../Content/Images/guanghui.jpg",
            fnname: "现在出货",
        },
        {
            title: "手游充值",
            centent: "玩转IOS和安卓，秒冲实惠有保障！",
            url: "http://www.7881.com/b2b/buy-G10.html",
            img: "../../../../Content/Images/hanbing.jpg",
            fnname: "立即充值",
        }, {
            title: "《剑侠情缘三》游戏币比例优惠",
            centent: "比例优惠，安全，发货快！",
            url: "http://www.7881.com/b2b/buy-G10.html",
            img: "../../../../Content/Images/qinnv.jpg",
            fnname: "现在出货",
        }, {
            title: "《LOL英雄联盟》代练",
            centent: "平台担保 账号加密 王者操刀 打坏必赔",
            url: "http://www.7881.com/b2b/buy-G10.html",
            img: "../../../../Content/Images/lunzima.jpg",
            fnname: "我要代练",
        },],
    }

    var components = {
        name: "index-adv",
        data() {
            return data;
        },
        template: html,
        created:function() {

        },
        methods: {
        }
    };
    return components;
});