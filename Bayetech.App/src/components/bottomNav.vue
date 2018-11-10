<!--底部导航-->
<template>
  
  <div data-style="fixed-bottom" class="newfooter fixed-bottom">
    <ul>
      <a href="/" class="foot-home">
        <li class="">
          <span class="i_home">主页</span>
        </li>
      </a>
      <a href="/vue/gameList/2" class="foot-home">
        <li class="">
          <span class="i_mybuy">我要买</span>
        </li>
      </a>
      <a href="/vue/sell-home/1" class="foot-home">
        <li class="">
          <span class="i_mysell">我要卖</span>
        </li>
      </a>
      <a href="/vue/message" class="foot-message">
        <li class="">
          <span class="i_message">消息</span>
        </li>
      </a>
      <a href="/vue/center" class="foot-home">
        <li class="">
          <span class="i_tx">我的</span>
          <!---->
        </li>
      </a>
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
