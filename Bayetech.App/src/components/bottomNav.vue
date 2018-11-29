<!--底部导航-->
<template>
  
  <div data-style="fixed-bottom" class="newfooter fixed-bottom">
    <ul>
      <li class="">
        <router-link :to="{path:'/'}" class="foot-home">
          <span class="i_tx">主页</span>
        </router-link>
        <!--<a href="#" class="foot-home">
          <span class="i_home">主页</span>
        </a>-->
      </li>
      <li class="">
        <a href="#" class="foot-home">
          <span class="i_mybuy">我要买</span>
        </a>
      </li>
      <li class="">
        <router-link :to="{path:'/goodsPublish'}" class="foot-home">
          <span class="i_tx">我要卖</span>
        </router-link>
        <!--<a href="#" class="foot-home">
          <span class="i_mysell">我要卖</span>
        </a>-->
      </li>
      <li class="">
        <a href="#" class="foot-message">
          <span class="i_message">消息</span>
        </a>
      </li>
      <li class="">
        <router-link :to="{path:'/center'}" class="foot-home">
          <span class="i_tx">我的</span>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>

  export default{
    
    name:'top',
    
    props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>

<style>

</style>
