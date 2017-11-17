//广告位1
define(['jquery'], function ($) {
    var html = `<div class="tabsList-box">
    <ul class="tabsList" id="TabBox">
        <li class="tit on" v-for="item in object" style="width: 190px; overflow: hidden;">
            <h4><img :src="item.img" width="190" height="340"/></h4>
            <div class="tabBody" >
                <h2><span>商品类型</span><a :href="item.url" target="_blank">进入游戏专题页 ></a></h2>
                <div class="shop-type">
                    <ul>
                        <li v-for="type in item.typeList"><a href="type.url" target="_blank">{{type.title}} </a></li>
                    </ul>
                </div>
                <h2 class="new-cj-tit"><span>最新成交信息</span></h2>
                <div class="txtScroll-top">
                    <div class="bd">
                        <ul class="infoList">
                            <li v-for="trade in item.tradeList"><p><span>{{trade.name}}</span>{{trade.info}}</p><em><i>10</i>元</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>`;
    //width: 539px; @click="javascript:window.open('item.url','_blank')" width: 190px; overflow: hidden;

    var data = {
        asd:"11",
        object: [
            {
                name: "地下城与勇士",
                img: "../../Content/Images/pic-01.jpg1",
                url: "http://www.7881.com/buy-G10.html",
                typeList: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                tradeList: [{ name: 'u***91120970433', info: '刚购买了6000万金=136元', money: '136', element: '元' },
                { name: 'u***81721252312', info: '刚购买了10000万金=222元', money: '222', element: '元' },
                { name: 'u***81721252386', info: '刚购买了4550万金=100元', money: '100', element: '元' },
                { name: 'u***81722552358', info: '刚购买了2190万金=50元', money: '50', element: '元' },
                { name: 'u***81721252314', info: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
            {
                name: "剑侠情缘3",
                img: "../../Content/Images/pic-03.jpg1",
                url: "http://www.7881.com/buy-G10.html",
                typeList: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                tradeList: [{ name: 'u***91120970433', info: '刚购买了6000万金=136元', money: '136', element: '元' },
                { name: 'u***81721252312', info: '刚购买了10000万金=222元', money: '222', element: '元' },
                { name: 'u***81721252386', info: '刚购买了4550万金=100元', money: '100', element: '元' },
                { name: 'u***81722552358', info: '刚购买了2190万金=50元', money: '50', element: '元' },
                { name: 'u***81721252314', info: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
            {
                name: "王者荣耀",
                img: "../../Content/Images/pic-04.jpg1",
                url: "http://www.7881.com/buy-G10.html",
                typeList: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                tradeList: [{ name: 'u***91120970433', info: '刚购买了6000万金=136元', money: '136', element: '元' },
                { name: 'u***81721252312', info: '刚购买了10000万金=222元', money: '222', element: '元' },
                { name: 'u***81721252386', info: '刚购买了4550万金=100元', money: '100', element: '元' },
                { name: 'u***81722552358', info: '刚购买了2190万金=50元', money: '50', element: '元' },
                { name: 'u***81721252314', info: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
        ],
        show:false ,
        hide: true,
        tabObject: {

        },
    };

    var components = {
        name: "index-tabsList",
        data() {
            return data;
        },
        mounted: function () {
            $("#TabBox > li")[0].style.width = '540px';
            $("#TabBox > li").mouseover(function () {
                $(this).width(540).siblings().not(this).width(190);
            });
        },
        template: html,
        methods: {
            showTab(e) {
                //debugger;
                var a = $(e);
                //$(e).width(540).parent().find("list").not(e).width(190);
                
                //this.show = !this.show;
                //this.hide = !this.hide;
                //$(this).siblings("li").removeClass("on").stop().animate({
                //    width: "190px"
                //}, 250);
                //$(this).addClass("on").stop().animate({
                //    width: "538px"
                //}, 250);
            }
        }
    };
    return components;
});