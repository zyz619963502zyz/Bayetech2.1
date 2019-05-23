//注册模块
jsconfig.baseArr.push('swiper');
define(jsconfig.baseArr, function (Vue, $, common, swiper) {
    //Api
    //var _CreatAccountUrl = "/api/Account/CreatAccount"; //创建账号
    //var _GetGoodInfo = "";

    //模板
    var pictureHtml = `<div class="account-info w1190">
                    <div class="tab-account">
                        <ul>
                            <li class="on">商品详情</li>
                        </ul>
                    </div>
                    <div class="account-detail">
                        <div class="account-outline">
                            <h2><span>商品描述</span></h2>
                        </div>
                        <div class="account-desc">
                            <p>
                                《蛋总专卖》多年账号销售！量大请搜索《蛋总专卖》。最平价的账号，最好的质量！所有账号均有找回包赔服务！已向平台缴付押金，请亲们放心购买。交易时间8:00-凌晨1:00，看到就会处理
                            </p>
                        </div>
                        <div class="account-outline">账号截图</div>
                        <div class="account-pic">
                            <div class="cut-type">
                                <div class="hd"><a class="prev prevStop"></a><a class="next nextStop"></a></div>
                                <div class="bd">
                                    <ul id="typecho"><li class="on" data-id="0">角色选择</li></ul>
                                </div>
                            </div>
                        </div>
                        <div class="mod18">
                            <div class="preloading" style="display: none;"><img src="../../Content/Images/loading-2.gif" /></div>
                           
                           
                            <!--div id="picBox" class="picBox">
                                <div id="picgd" class="cf demo-gallery" data-pswp-uid="1" style="left: 0px; width: 2040px;">
                                    <a href="./账号查看_files/b123f30809434931a6e623fad7b166cf(1).png" data-size="800x600">
                                        <img src="../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png" />
                                    </a>
                                    <a href="./账号查看_files/b50c668b1a0549cc84dbeaeac6003826.png" data-size="800x600">
                                        <img src="../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png" />
                                    </a>
                                </div>
                            </div-->

                            <div class="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal">
                                <div class="swiper-wrapper">
                                    <!--<div class="swiper-slide" v-for="item in imgList">
                                      <img :src="item"/>
                                    </div>-->
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                </div>
                                <span  class="swiper-button-prev"></span>
                                <span  class="swiper-button-next"></span>
                            </div>
                            <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-thumbs gallery-thumbs">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png')"></div>
                                    <div class="swiper-slide" style="background-image:url('../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png')"></div>
                                </div>
                                <span  class="swiper-thumbs-prev"></span>
                                <span  class="swiper-thumbs-next"></span>
                            </div> 

                            <!--<div id="listBox" class="listBox">
                                <ul class="cf" style="left: 0px; width: 230px;">
                                    <li class="on">
                                        <i class="arr2"></i>
                                        <img src="../../Content/Images/b123f30809434931a6e623fad7b166cf(1).png" />
                                    </li>
                                    <li>
                                        <i class="arr2"></i>
                                        <img src="../../Content/Images/b50c668b1a0549cc84dbeaeac6003826.png" />
                                    </li>
                                </ul>
                            </div>-->
                        </div>
                        <div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="pswp__bg"></div>
                            <div class="pswp__scroll-wrap">
                                <div class="pswp__container">
                                    <div class="pswp__item"></div>
                                    <div class="pswp__item"></div>
                                    <div class="pswp__item"></div>
                                </div>
                                <div class="pswp__ui pswp__ui--hidden">
                                    <div class="pswp__top-bar">
                                        <div class="pswp__counter"></div>
                                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                        <div class="pswp__preloader">
                                            <div class="pswp__preloader__icn">
                                                <div class="pswp__preloader__cut">
                                                    <div class="pswp__preloader__donut"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                                    <div class="pswp__caption">
                                        <div class="pswp__caption__center"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

    var data = {
        pictureInfo: [
            { id: "等级:", src: "" },
            { id: "等级:", src: "" }
        ]
    }

    var goodInfoComponent = {//全局注册
        template: pictureHtml,
        data() {
            return data;
        },
        mounted() {
            //this.initSwiper()
            //var mySwiper = new Swiper('.swiper-container', {
            //    autoplay: false,
            //    loop: true,
            //    pagination: {
            //        el: '.swiper-pagination'
            //    },
            //})

            //var swiper = new Swiper('.swiper-container', {
            //    autoplay: 3000,
            //    loop: true,
            //    centeredSlides: true,
            //    navigation: {
            //        nextEl: '.swiper-button-next',
            //        prevEl: '.swiper-button-prev',
            //    },
            //    breakpoints: {
            //        668: {
            //            slidesPerView: 1,
            //        }
            //    }
            //});

            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                slidesPerView: 4,              
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-thumbs-next',
                    prevEl: '.swiper-thumbs-prev',
                },
            });
            var galleryTop = new Swiper('.gallery-top', {
                centeredSlides: true,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        },
        created() {
            //this.GetNavBar();
        },
        methods: {
            GetNavBar: function () {
                common.getWebJson(_GetGoodInfo, { accountName: this.$props.value.Iphone }, function (data) {
                    if (data == false) {
                        this.data = data;
                    }
                });
            }
        }
    }

    return goodInfoComponent;
})