< !--底部导航-->
 < !-- import priceFilter from '@/components/filter/priceFilter.vue'-->
< !--< priceFilter @minPrice="(x)=>{this.content.minPrice=x}" @maxPrice="(x)=>{this.content.maxPrice=x}" ></priceFilter > -->

<template>

  <div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <i data-v-6b09e788="" class="fr src-ico manycheck" @click="content.chooseZQ=true">

        <span v-show="content.accrossList.length==0">不限</span>
        {{content.accrossListName.join(',')}}
      </i>
      战区
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <!---->
      <!---->
      <div data-v-6b09e788="" v-show="content.chooseZQ">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="" @click="content.chooseZQ=false">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">战区</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;">
              <li v-for="accross in  content.accrossList" @click="$choose('content','accrossList', accross.accrossId);$choose('content','accrossListName', accross.accrossName)">{{accross.accrossName}} <a :class="{'chore-ico':true,fr:true,'chore-ico-hov':$isChoice('content','accrossList',accross.accrossId)}" /></li>
              <!--  <a :class="{chore-ico:true,fr:true,chore-ico-hov:$isChoice('content',('accrossList',accorssId)}" @click="$choose('content','accrossList', accross.Id)"></a>-->
            </ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff" @click="content.chooseZQ=false">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data() {
      return {


        content: {
          chooseZQ:true,
          accrossListName: [],
          accrossList:[]
        }

      }
    },
    watch: {
     

       
    },
    mounted: function () {

    },
    methods: {

    },
    name: 'top',


  }
</script>


