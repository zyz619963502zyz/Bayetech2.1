//模块之间的操作
require(['vue', 'jquery', 'common','bootstrap','swiper', 'v-header', 'v-footer', 'footer-server', 'footer-nav', 'index-notice', 'index-convenience', 'index-hotgamelist', 'index-banner', 'index-tabslist', 'v-tab', "index-gameranking", 'index-adv', 'index-mgamelist', 'v-partner', 'index-nav', 'v-search'],
	function (Vue, $, common, bootstrap, Swiper, head, footer, footerserver, footernav, notice, convenience, hotgamelist, banner, tabsListbox, tab, gameranking, adv, mgamelist, partner, nav, search) {
     
    new Vue({
        el: '#app',
        data() {
            return {
                notice: notice,
                gameranking: gameranking,
            }
        },
        created: function () {
                var FirstSwiper = new Swiper('.swiper-container', {
                    wrapperClass: 'wrapper-car',        //设置wrapper的css类名
                    slideClass: 'car-slide',            //设置slide的类名
                    direction:'horizontal',             //横向水平滑动
                    pagination: {                       //分页器
                        el: '.swiper-pagination',       //分页类名
                    },
                    navigation:{
                        nextEl:'.swiper-button-next',   //下一张
                        prevEl:'.swiper-button-prev',   //上一张
                    },
                    autoplay: {                         //自动切换
                        delay:2000,                     //切换速度
                    },
                    slidesPerView: 1,                   //同时显示数量
                    spaceBetween: 30,                   //相邻图片边距                
                    loop: true,                         //无限循环模式

                });
        },
        components: {
            "v-header": head,
            "v-footer": footer,
            "v-tab": tab,
            "v-partner": partner,
            "v-search":search,
            "footer-server": footerserver,
            "footer-nav": footernav,
            "index-convenience": convenience,
            "index-hotgamelist": hotgamelist,
            "index-banner": banner,
            "index-tabslist": tabsListbox,
            "index-adv": adv,
            "index-mgamelist": mgamelist,
            "index-nav": nav,

        }
    });

});