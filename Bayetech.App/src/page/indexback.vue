<template>
  <div id="wrapper" class="pb-125">
    <div class="appdownload" data-v-4a678b7c="">
      <div class="appload-conn fl">
        <div class="appload-close fl">
          <a href="javascript:void(0);" class="appclose"></a>
        </div>
        <div class="appload-ico fl pt-15">
          <img src="../assets/images/coins/5173app-ico.png">
        <!--<img src="../assets/images/Icon/home.png">-->
        </div>
        <div class="appload-info fl pt-15">
          <div class="appinfo-titl f28 color-fff">下载5173APP</div>
          <div class="appinfo-text f22 color-fff">安全 便捷 随时随地</div>
        </div>
      </div>
      <div class="appload-btn fr">
        <a href="javascript:;" class="appbtn f30 color-fff">立即下载</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
$background: #cccccc;
body {
  background: $background;
}

.appdownload {
  background-color: #232323;
}
</style>


<script>
import top from "../components/top.vue";
let vmdata = new Object();
vmdata.PageType = "czxv";
vmdata.goodinfoarray = 2;
export default {
  name: "index",
  data() {
    return vmdata;
  },
  mounted:function(){
    this.getdata();
  },
  components: {
    top: top
  },methods:{
    getdata:function(){
        letter='';
       let letter=letter||"";
                var _self=this;
                let type=1;
           console.log(1)
        try
          {
             this.$get("web/api/Game/GetGameByName", { type: type, name: ''}).then(function(result){console.log(result)})
          }
         catch(err)
        {
          console.log(err)
        }
    }
  }
};
</script>
