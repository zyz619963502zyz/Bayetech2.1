//轮播图
define(['jquery', 'swiper'], function ($, Swiper) {
    var html = `<div class="swiper-container">
                                    <div class="wrapper-car">
                                        <div v-for="item in object" class ="car-slide">
                                             <a :href="item.url" target="_blank"><img :src="item.img" :title="item.title" /></a>
                                         </div>
                                    </div>
                                    <!-- Add Pagination -->
                                    <div class="swiper-pagination"></div>
                                    <!-- Add Arrows -->
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>`;

    var data = {
        object: [{
            title: "地下城与勇士全类目免手续费",
            url: "http://www.7881.com/b2b/buy-G10.html",
            img: "../../Content/images2018/5比2焦点海报dnf-1.jpg"
        }, {
            title: "八折代充王者荣耀",
            url: "http://search.7881.com/201612376074038.html",
            img: "../../Content/images2018/5比2焦点海报lol-1.jpg"
        }, {
            title: "假期已完 福利不断",
            url: "http://search.7881.com/list.html?gameId=A2807&gtid=100131&groupId=&serverId=",
            img: "../../Content/images2018/5比2焦点海报-魔兽-1.jpg"
        }, {
            title: "假期已完 福利不断",
            url: "http://search.7881.com/list.html?gameId=A2807&gtid=100131&groupId=&serverId=",
            img: "../../Content/images2018/5比2焦点海报王者荣耀1.jpg"
        },
        {
            title: "假期已完 福利不断",
            url: "http://search.7881.com/list.html?gameId=A2807&gtid=100131&groupId=&serverId=",
            img: "../../Content/images2018/5比2焦点海报dnf-2.jpg"
        },
        ],
        imgObj:{},
    }

    var components = {
        name: "index-slidebox",
        data() {
            return data;
        },
        template: html,
        mounted: function () {
            var FirstSwiper = new Swiper('.swiper-container', {
                wrapperClass: 'wrapper-car',        //设置wrapper的css类名
                slideClass: 'car-slide',            //设置slide的类名
                direction: 'horizontal',             //横向水平滑动
                pagination: {                       //分页器
                    el: '.swiper-pagination',       //分页类名
                },
                navigation: {
                    nextEl: '.swiper-button-next',   //下一张
                    prevEl: '.swiper-button-prev',   //上一张
                },
                autoplay: {                         //自动切换
                    delay: 2000,                     //切换速度
                },
                slidesPerView: 1,                   //同时显示数量
                spaceBetween: 30,                   //相邻图片边距                
                loop: true,                         //无限循环模式

            });
        },
        methods: {

        }
    };
    return components;
});