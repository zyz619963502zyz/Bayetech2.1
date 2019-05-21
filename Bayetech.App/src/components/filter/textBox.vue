<template>
  <div data-v-7a08d46c="">

    <section data-v-7a08d46c="" data-i="选择职业" propertyid="32"></section>
    <div data-v-7a08d46c="" class="order-container bg-fff f30  color-000 border-bottom">
      <span data-v-7a08d46c="" class="span-icon-xinhao" style="width: 2rem; word-break: normal; white-space: pre-wrap; overflow-wrap: break-word;">{{label}}</span>
      <input data-v-7a08d46c="" :value="value" @input="updateVal($event.target.value)" maxlength="50" type="text" v-bind:placeholder="placeHolder==false?'请输入'+label:placeHolder" />
    </div>
  </div>
</template>


<script>

  export default {
    data() {
      return {
      
       

      }
    },
    props: ['value','label','placeHolder'],
    props: {
      'value': [String, Number],
      'label':String,
      'placeHolder': String //提示框，不传值默认 请输入+label
     
    } ,

    watch: {
      label: function (newval)
      {
          placeHolder = '请输入' + label;
        
      }

      
    },
    mounted: function () {
      
     
    },
    methods: {
      updateVal: function (val) {
                   // 2、手动触发父组件的input事件并将值传给父组件
                   this.$emit('input', val);

      }
    },
    name: 'textBox',


  }
</script>
