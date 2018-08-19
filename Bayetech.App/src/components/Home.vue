<template>
  <h1>{{text}}</h1>
</template>
<script>
 alert('home')
export default {
  name: 'Home',
  data () {
    return {
      text: ' home App'
    }
  },
  mounted: function () {
    
    alert(1);
    
  }
}
</script>
