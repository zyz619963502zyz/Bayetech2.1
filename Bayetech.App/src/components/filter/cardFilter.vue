<template>

  <div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <!---->
      {{title}}
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <div data-v-6b09e788="" class="price-type pl-30 pt-30">
        <ul data-v-6b09e788="">
          <li data-v-6b09e788="" v-for="(val, key) in options" :class="{active:isChoice(key),fl:true,'mb-30':true}" @click="choose(key)">
            <span data-v-6b09e788="" class="border f30">{{val}}</span>
          </li>
        </ul>
        <!---->
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
        selectedValues:this.value,
        selectedTexts:[],
        list:[]

       

      }
    },
   
    props: { //可以指定属性具体的数据类型哦！
      'value': [Array,String],
      'title': String,
      'options': Object,
      'multiSelected': Boolean
     
     
    } ,

    watch: {
    

      
    },
    mounted: function () {
     
     
    },
    methods: {

     
      choose: function (value) {
        let self = this;
        if (self.multiSelected) {
          self.chooseMulti(value);
        } else {
          self.chooseSingle(value);
        }
      },

      chooseMulti: function (value) {
        let self = this;
        if (!self.selectedValues) {
          self.selectedValues = new Array();
        }
        if (self.selectedValues.indexOf(value) >= 0) {
          self.selectedValues.splice(self.selectedValues.indexOf(value), 1)
      

        } else {
          self.selectedValues.push(obj);
        
        }
      },
      chooseSingle: function (value) {
        let self = this;
        if (!self.selectedValues) {
          self.selectedValues = '';
        }
        if (self.selectedValues == value) {
          self.selectedValues = '';
         

        } else {
          self.selectedValues = value;
         
        }
      },

      isChoice: function (value) {
        let self = this;
        if (!self.selectedValues) {
          return;
        }
        if (self.multiSelected) {
          return self.selectedValues.indexOf(value) >= 0;
        } else {
          return self.selectedValues == value;
        }

      }
    },
    name: 'cardFilter',


  }
</script>
