<!--底部导航-->
 <!-- import priceFilter from '@/components/filter/priceFilter.vue'-->
<!--<priceFilter @minPrice="(x)=>{this.searchModelSub.minPrice=x}" @maxPrice="(x)=>{this.searchModelSub.maxPrice=x}"></priceFilter>-->

<template>

  <div data-v-6b09e788="" class="screen-price bg-fff">
    <div data-v-6b09e788="" class="screen-titl border-bottom color-000 f32 px-30 bg-fff screen-ico">
      价格区间
    </div>
    <div data-v-6b09e788="" class="price-list px-30 py-30">
      <input data-v-6b09e788="" type="tel" placeholder="最低价" maxlength="7" class="price-input fl f30" v-model="content.minPrice" @keydown="content.priceRangeLock=true;content.priceRange=new Array()" @blur="content.priceRangeLock=false" />
      <span data-v-6b09e788="" class="hern fl"></span>
      <input data-v-6b09e788="" type="tel" placeholder="最高价" maxlength="7" class="price-input fl f30" v-model="content.maxPrice" @keydown="content.priceRangeLock=true;content.priceRange=new Array()" @blur="content.priceRangeLock=false" />
    </div>
    <div data-v-324f8118="" class="price-type pl-30">
      <ul data-v-324f8118="">
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','1-50',true),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','1-50',true)">
          <a data-v-324f8118="">
            <span data-v-324f8118="" class="border f30">50元以下</span>
          </a>
        </li>
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','50-100'),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','50-100',true)">
          <a data-v-324f8118=""><span data-v-324f8118="" class="border f30">50-100元</span></a>
        </li>
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','100-500'),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','100-500',true)">
          <a data-v-324f8118=""><span data-v-324f8118="" class="border f30">100-500元</span></a>
        </li>
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','500-1000'),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','500-1000',true)">
          <a data-v-324f8118=""><span data-v-324f8118="" class="border f30">500-1000元</span></a>
        </li>
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','1000-2000'),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','1000-2000',true)">
          <a data-v-324f8118=""><span data-v-324f8118="" class="border f30">1000-2000元</span></a>
        </li>
        <li data-v-324f8118="" :class="{active:$isChoice('content','priceRange','2000-'),fl:true,'mb-30':true}" @click="$chooseSingle('content','priceRange','2000-',true)">
          <a data-v-324f8118=""><span data-v-324f8118="" class="border f30">2000元以上</span></a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        $chooseSingleServer: true,
        serverKeyWords: '',

        content: {
          minPrice: "",
          maxPrice: "",
          priceRangeLock: false,

          priceRange: []
        }

      }
    },
    watch: {
      "content.minPrice": function (newVal) {

        this.$emit("minPrice", newVal)
      },
      "content.maxPrice": function (newVal) {

        this.$emit("maxPrice", newVal)
      },
      "content.priceRange": function (newVal, oldVal) {


        let self = this;

        if (self.content.priceRangeLock) {
          return;
        }

        if (newVal.length == 0) {
          self.content.minPrice = undefined;
          self.content.maxPrice = undefined;
          return;
        }
        let s = newVal[0].split('-');
        self.content.minPrice = s[0];

        self.content.maxPrice = s[1];
      }
    },
    mounted: function () {

    },
    methods: {

    },
    name: 'top',


  }
</script>
<style>
</style>

