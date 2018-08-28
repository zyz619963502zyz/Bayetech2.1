<template>
  <div>
    {{ $route.params.userId }}
    <div id="wrapper" class="search2">
   
      
      <div class="rake pl-30 bg-fff " style=" position: absolute; width: 100%;">
        
        
        <div class=" rake-con clearfix border-bottom" v-for="game in gameList">
          <router-link :to="{ path: '/gameSearch', query: game.queryModel }">
            <div class="search-all-head rake-con-l  ps-a">
              <i></i>
              <h4 class=" f30 color-000 dis-in">{{game.Name}}</h4>
            </div>
            <img src="/dist/src/assets/images/common/right.png?38b0535618eb695ef1dcfa7c88a64ff0" class="ps-a ">
          </router-link>
     
          <!---->
          <!---->
        </div>
        
      </div>
    </div>
  </div>

</template>
<script>
  import '@/assets/css/gameSearch.css';
  let vmdata = new Object();
  vmdata.gameList=new Array();
  vmdata.goodsType='';
  export default {
  name: "hotGameSearch",
  data() {
  return vmdata;
  },
  mounted: function ()
  {

  this.$data.goodsType=this.$route.query.goodsType;
  console.log(this.$route.params.userId);
  this.getHotGame();
  }, methods: {
  getHotGame:function()
  {
  let self=this;
  try
  {
  this.$get("web/api/Game/GetHotGameList", { type: 0, count: 10})
  .then(

  function(result)
  {
  console.log(self);
  vmdata.gameList=result;

  for(let game of vmdata.gameList){
  game.queryModel={};
  game.queryModel.id=game.Id;
  game.queryModel.goodsType=self.goodsType;
  }
  console.log(result);
  }
  )
  }
  catch(err)
  {
  console.log(err)
  }
  }

  }
  };
</script>

