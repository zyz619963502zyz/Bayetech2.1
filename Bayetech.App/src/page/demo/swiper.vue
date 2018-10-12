<template>
    <div class="newhmban">
        <div class="swiper-container index-banner swiper-container-horizontal swiper-container-autoheight" data-v-4a678b7c="">
            <div class="swiper-wrapper" style="height: 146px; transform: translate3d(-3072px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide" style="width: 375px;">
                    <img src="@/assets/content/images/89b143feec4646b68f8c49722e27a660.jpg" />
                </div>
                <div class="swiper-slide" style="width: 375px;">
                    <img src="@/assets/content/images/b55482e51de3458885385fc7b05d403d.jpg" />
                </div>
                <div class="swiper-slide" style="width: 375px;">
                    <img src="@/assets/content/images/fbc0ca1405b94f41b11aafb7cf9eb4c3.jpg" />
                </div>
                <div class="swiper-slide swiper-slide-prev" style="width: 375px;">
                    <img src="@/assets/content/images/a29ec62d89bf4a6eb3ae850205cf30c2.jpg" />
                </div>
                <div class="swiper-slide swiper-slide-active" style="width: 375px;">
                    <img src="@/assets/content/images/f2b03764ce81476291e41bd5c27df2b4.jpg" />
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets">
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
    </div>
</template>


<script>
    import Swiper from '@/assets/script/utils/swiper'

    export default{
        
    }
</script>

<style lang="scss" scoped>

    .swiper-container {
        width: 100%;
        height: 4rem;
        margin-top: 0.9rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
            .swiper-slide {
                background-size: cover;
                width: 100%;
                height: 4rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

</style>