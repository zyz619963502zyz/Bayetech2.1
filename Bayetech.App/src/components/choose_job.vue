<!--底部导航-->
<template>

  <div data-v-4d8e3562="" data-v-484bcaae="">
    <div data-v-4d8e3562="" class="one-screen">
      <div data-v-4d8e3562="" style="z-index: 100;">
        <div data-v-4d8e3562="" class="top-header border-bottom">
          <div data-v-4d8e3562="" class="top-back">
            <a data-v-4d8e3562="" @click="CloseDialog"></a>
          </div>
          <h2 data-v-4d8e3562="" class="f36">选择职业</h2>
          <div data-v-4d8e3562="" class="top-right"></div>
        </div>
      </div>
      <div data-v-4d8e3562="" class="search-container">
        <div data-v-4d8e3562="" class="search-box bg-fff">
          <input data-v-4d8e3562="" type="text" placeholder="请输入职业名称" maxlength="20" class="f30">
          <span data-v-4d8e3562="" class="clear1" style="display: none;"></span>
        </div>
      </div>
      <div data-v-4d8e3562="" class="qufu-container  clearfix border-top">
        
        <div data-v-4d8e3562="" class="qufu-container bg-fff fl" style="height: 100%;">
          <ul data-v-4d8e3562="">
            <li data-v-4d8e3562=""
                v-for="job of content.jobList"
                @click="ChooseJob(job)"
                style="text-align: left; padding-left: 0.3rem;">
              <span data-v-4d8e3562="" class="border-bottom">{{job.ProfessionName}}</span>
            </li>
           
          </ul>
        </div>
      </div>
      <div data-v-4d8e3562="" class="search-result f28" style="display: none;">
        <ul data-v-4d8e3562=""></ul>
      </div>
      <div data-v-4d8e3562="" class="search-empty" style="display: none;">
        <img data-v-4d8e3562="" src="" alt="">
        <p data-v-4d8e3562="">
          抱歉，没有找到“
          <span data-v-4d8e3562="" class="search-content"></span>”的相关结果
        </p>
      </div>
      <div data-v-4d8e3562="" class="mask" style="display: none;"></div>
      <div data-v-4d8e3562="" class="search-history" style="display: none;">
        <div data-v-4d8e3562="" class="container-ms bg-fff">
          <div data-v-4d8e3562="" class="game-list ">
            <ul data-v-4d8e3562="" class="clearfix ">
              <li data-v-4d8e3562="">
                <a data-v-4d8e3562="">暂无搜索历史</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import "@/assets/css/goods-publish-new.css";
  export default{
    data() {
      return {
        chooseServer: true,
        serverKeyWords:'',
        
        
        content: {
          jobId: '',
          filterJobList:[],
          jobList: []
        }
      
      }
    },
    watch: {},
    mounted: function() {
      this.Init();
    },
    methods: {
      Init: function (jobId) {
        let self = this;
        this.jobId = jobId;
       
        let gameid = 1;
        self.GetProfessions(gameid);
        
      },
      CloseDialog: function () {
        this.$emit('cancel');
      },
      ChooseJob: function (job) {
        this.$chooseSingle('content', 'jobId', job.Id);
        job.dataType = 'job';
        this.$emit('submit',job);
        //this.GetProfessions(job.Id);
      },
      
      GetProfessions: function (gameid) {
        let self = this;
        try {
          this.$get("/web/api/GoodInfo/GetProfessions", {
            gameid: gameid
          }).then(function (result) {
            console.log(result)
            self.content.jobList = result.content;
            self.content.filterJobList = result.content;
     
          });
        } catch (err) {
          console.log(err);
        }
      },
      
    },
    name: 'top',
    
    props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>
<style>

</style>

