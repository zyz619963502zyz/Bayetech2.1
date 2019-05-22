<template>
  <div id="comppnent_gallery" class="newhmban">
    

    <div class="swiper-container index-banner swiper-container-horizontal swiper-container-autoheight " style="height:15rem">
      <div style="width:100%">
       
        <a style="float:right ;height:50px;width:10%; background:yellow" @click="()=>{this.$emit('close')}"> X</a>
      </div>
      <div class="swiper-wrapper">
        <!--<div class="swiper-slide" v-for="item in imgList">
            <img :src="item"/>
        </div>-->
        <div class="swiper-slide" v-for="img in imgList">
          <span>{{img}}</span>
          <img :src="img" alt="Alternate Text" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>


<script>
  import Swiper from 'swiper';
  //import Swiper from '@/assets/scripts/utils/swiper/swiper.js';
  import '@/assets/css/plugin/swiper/swiper.css';

  export default {
    name: 'swiper',
    props: ["imgList"],
    data() {
      return {
        mySwiper: null,

        //imgList: [
        //  '@/assets/content/images/89b143feec4646b68f8c49722e27a660.jpg',
        //  '@/assets/content/images/b55482e51de3458885385fc7b05d403d.jpg',
        //  '@/assets/content/images/fbc0ca1405b94f41b11aafb7cf9eb4c3.jpg',
        //  '@/assets/content/images/a29ec62d89bf4a6eb3ae850205cf30c2.jpg',
        //  '@/assets/content/images/f2b03764ce81476291e41bd5c27df2b4.jpg'
        //],
       
      }
    },
    mounted() {
      //this.initSwiper()
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: false,
        
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
      })
    },
    methods: {
      //initSwiper(){
      //    this.mySwiper = new Swiper('.swiper-container',{
      //        autoplay:2000,
      //        loop:true,
      //        pagination:'.swiper-pagination-bullets'
      //    })
      //}

    }
  }
</script>

<style scoped lang="scss">
  .search-bar {
    width: 100%;
  }

  .swiper-container {
    width: 100%;
    background: #000;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .swiper-wrapper

  {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    transition-property: transform, height;
    .swiper-slide

  {
    text-align: center;
    img

  {
    width: 100%;
    height: auto;
  }

  }
  }
  }

  .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
    height: auto;
  }

  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }

  .swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .swiper-pagination-bullet {
    opacity: .45;
    background: #000;
  }

  .swiper-pagination-bullet-active {
    background: #fff !important;
    opacity: 1 !important;
  }

  .newhmban .swiper-container .swiper-pagination-bullet {
    opacity: .6;
  }

  .newhmban .swiper-container .swiper-pagination {
    margin-right: 0;
    width: 100%;
    background: none;
    right: auto;
    opacity: 1;
    left: auto;
    border-radius: 100%;
    line-height: 0;
    bottom: .2rem;
  }

  .newhmban .swiper-wrapper {
    width: 100%;
    height: auto;
    line-height: normal;
  }

  .index-banner {
    height: auto;
    display: block;
    overflow: hidden;
    position: relative;
  }
  .newhmban .swiper-wrapper img{
    max-height:100rem !important
  }
</style>
