<template>
  
  <div>
    我是{{pagetype}} {{goodinfoarray}}
  </div>

</template>

<script>

  export default{
    
    name:'top',
    
    props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>