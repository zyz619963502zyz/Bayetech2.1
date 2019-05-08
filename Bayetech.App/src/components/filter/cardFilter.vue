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
          <li data-v-6b09e788="" v-for="(value, key) in options" :class="{active:isChoice(key),fl:true,'mb-30':true}" @click="choose(key)">
            <span data-v-6b09e788="" class="border f30">{{value}}</span>
           
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
        selectedValues: [],
        selectedTexts:[],
        list:[]

       

      }
    },
   
    props: { //可以指定属性具体的数据类型哦！
      'title': String,
      'options': Object,
      'multiSelected': Boolean
     
     
    } ,

    watch: {
      selectedValues: function (newVal) {

        if (!this.multiSelected) {
          this.$emit("result", newVal[0])
        } else
        {
          this.$emit("result", newVal)
        }

       
        
      }

      
    },
    mounted: function () {
     
     
    },
    methods: {
     
      choose: function (obj) {
        let self = this;
        if (!this.multiSelected)
        {
          self.selectedValues.length = 0;
        }
        if (self.selectedValues.indexOf(obj) >= 0) {
          self.selectedValues.splice(self.selectedValues.indexOf(obj), 1)
        } else {
          self.selectedValues.push(obj);         
        }
      },
      isChoice: function (obj) {
        let self = this;
        return self.selectedValues.indexOf(obj) >= 0;
      }
    },
    name: 'top',


  }
</script>
