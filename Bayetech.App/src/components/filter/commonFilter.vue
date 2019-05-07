<template>

  <div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <i data-v-6b09e788="" class="fr src-ico manycheck" @click="openDialog()">

        <span v-show="selectedValues.length==0">不限</span>
        {{selectedTexts.join(',')}}
      </i>
      {{title}}
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <!---->
      <!---->
      <div data-v-6b09e788="" v-show="isBlock">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="" @click="isBlock=false">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36"> {{title}}</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;">
              <!--<li v-for="obj in  list">
                {{obj.text}}
              </li>-->
              <li >
                221
              </li>
              <li v-for="obj in  list" @click="choose( obj);">{{obj.text}} <a :class="{'chore-ico':true,fr:true,'chore-ico-hov':isChoice(obj)}" /></li>
              <!--  <a :class="{chore-ico:true,fr:true,chore-ico-hov:$isChoice('content',('accrossList',accorssId)}" @click="$choose('content','accrossList', accross.Id)"></a>-->
            </ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff" @click="isBlock=false">确定</a>
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
        isBlock:false
        , 
        selectedValues: [],
        selectedTexts:[],
        list:[]

       

      }
    },
    props: ['title','value','text','search'],
    props: { //可以指定属性具体的数据类型哦！
      'title': String,
      'value': String,
      'text':String,
      'search': Function
    } ,

    watch: {
      selectedValues: function (newval) {
       
        
      }

      
    },
    mounted: function () {
      
     
    },
    methods: {
      openDialog: function () {
        console.log(1)
        let self = this;
        if (self.list.length == 0) {
          let func = self.search();
          func.then(function (result) {
            console.log(self.value)
            console.log(self.text)
            if (result.result) {
              self.list = [];
              for (let item of result.content) {

                self.list.push({ value: item[self.value], text: item[self.text] })
              }

            }

          })
          
        }
        self.isBlock = true;
      },
      choose: function (obj) {
        let self = this;
        if (self.selectedValues.indexOf(obj.value) >= 0) {
          self.selectedValues.splice(self.selectedValues.indexOf(obj.value), 1)
          self.selectedTexts.splice(self.selectedTexts.indexOf(obj.text), 1)

        } else {
          self.selectedValues.push(obj.value);
          self.selectedTexts.push(obj.text);
        }
      },
      isChoice: function (obj) {
        let self = this;
        return self.selectedValues.indexOf(obj.value) >= 0;
       
       
      }
    },
    name: 'top',


  }
</script>
