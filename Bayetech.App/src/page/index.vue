<template>
  <div>
    <top  v-bind:pagetype="PageType" v-bind:goodinfoarray="goodinfoarray"  > </top>
  </div>

</template>
<script>
  import top from '../components/top.vue'

  let vmdata=new Object();

  vmdata.PageType='czxv';
  vmdata.goodinfoarray=2;

  export default {
  name: 'index',
  data (){
  return vmdata;

  },

  components:{
  top:top
  }

  }
</script>
