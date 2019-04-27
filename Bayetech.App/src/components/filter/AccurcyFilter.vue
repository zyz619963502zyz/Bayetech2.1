<!--底部导航-->
<template>

  <div data-v-6b09e788="" class="goodslist-02 pb-200" v-show="conditionTab.filter">
    <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
      <div data-v-6b09e788="" class="top-back">
        <a data-v-6b09e788=""></a>
      </div>
      <h2 data-v-6b09e788="" class="f36 ">精准筛选</h2>
      <div data-v-6b09e788="" class="top-right"></div>
    </div>
    <div data-v-6b09e788="" class="mt-97"></div>
    
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <i data-v-6b09e788="" class="fr src-ico manycheck" @click="searchModelSub.chooseZQ=true">

        <span v-show="searchModelSub.accrossList.length==0">不限</span>
        {{searchModelSub.accrossListName.join(',')}}
      </i>
      战区
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <!---->
      <!---->
      <div data-v-6b09e788="" v-show="searchModelSub.chooseZQ">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="" @click="searchModelSub.chooseZQ=false">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">战区</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;">
              <li v-for="accross in  accrossList" @click="choose('accrossList', accross.accrossId);choose('accrossListName', accross.accrossName)">{{accross.accrossName}} <a :class="{'chore-ico':true,fr:true,'chore-ico-hov':isChoice('accrossList',accross.accrossId)}" /></li>
              <!--  <a :class="{chore-ico:true,fr:true,chore-ico-hov:isChoice('accrossList',accorssId)}" @click="choose('accrossList', accross.Id)"></a>-->
            </ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff" @click="searchModelSub.chooseZQ=false">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico" @click="searchModelSub.chooseZY=true">
      <i data-v-6b09e788="" class="fr src-ico manycheck">
        <span v-show="searchModelSub.jobList.length==0">不限</span>
        {{searchModelSub.jobListName.join(',')}}

      </i>
      角色职业
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <!---->
      <!---->
      <div data-v-6b09e788="" v-show="searchModelSub.chooseZY">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="" @click="searchModelSub.chooseZY=false">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">角色职业</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;">
              <li v-for="job in  jobList" @click="choose('jobList', job.jobId);choose('jobListName', job.jobName)">{{job.jobName}} <a :class="{'chore-ico':true,fr:true,'chore-ico-hov':isChoice('jobList',job.jobId)}" /></li>

            </ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff" @click="searchModelSub.chooseZY=false">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <!---->
      角色性别
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <div data-v-6b09e788="" class="price-type pl-30 pt-30">
        <ul data-v-6b09e788="">
          <li data-v-6b09e788="" :class="{active:isChoice('gender','男'),fl:true,'mb-30':true}" @click="choose('gender','男')">
            <span data-v-6b09e788="" class="border f30">男</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('gender','女'),fl:true,'mb-30':true}" @click="choose('gender','女')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">女</span>
            </a>
          </li>
        </ul>
        <!---->
      </div>
      <!---->
      <div data-v-6b09e788="" style="display: none;">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">角色性别</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <!---->
      <!---->
      <div data-v-6b09e788="" style="display: none;">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">角色等级</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <!---->
      QQ等级
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <div data-v-6b09e788="" class="price-type pl-30 pt-30">
        <ul data-v-6b09e788="">
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','0'),fl:true,'mb-30':true}" @click="choose('qqLevel','0')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级0级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','1-5'),fl:true,'mb-30':true}" @click="choose('qqLevel','1-5')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级1-5级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','6-10'),fl:true,'mb-30':true}" @click="choose('qqLevel','6-10')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级6-10级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','11-20'),fl:true,'mb-30':true}" @click="choose('qqLevel','11-20')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级11-20级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','21-30'),fl:true,'mb-30':true}" @click="choose('qqLevel','21-30')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级21-30级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','31-40'),fl:true,'mb-30':true}" @click="choose('qqLevel','31-40')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级31-40级</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqLevel','40'),fl:true,'mb-30':true}" @click="choose('qqLevel','40')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">QQ等级40级以上</span>
            </a>
          </li>
        </ul>
        <!---->
      </div>
      <!---->
      <div data-v-6b09e788="" style="display: none;">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="" @click="ToggleConditionTab('filter')">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">QQ等级</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <!---->
      QQ好友
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <div data-v-6b09e788="" class="price-type pl-30 pt-30">
        <ul data-v-6b09e788="">
          <li data-v-6b09e788="" :class="{active:isChoice('qqFriend','1'),fl:true,'mb-30':true}" @click="choose('qqFriend','1')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">有QQ好友</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('qqFriend','0'),fl:true,'mb-30':true}" @click="choose('qqFriend','0')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">无QQ好友</span>
            </a>
          </li>
        </ul>
        <!---->
      </div>
      <!---->
      <div data-v-6b09e788="" style="display: none;">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">QQ好友</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
      <!---->
      历史处罚记录
      <!---->
    </div>
    <div data-v-6b09e788="" class="screen-price bg-fff">
      <!---->
      <div data-v-6b09e788="" class="price-type pl-30 pt-30">
        <ul data-v-6b09e788="">
          <li data-v-6b09e788="" :class="{active:isChoice('punishHistory','1'),fl:true,'mb-30':true}" @click="choose('punishHistory','1')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">存在5天封号记录</span>
            </a>
          </li>
          <li data-v-6b09e788="" :class="{active:isChoice('punishHistory','0'),fl:true,'mb-30':true}" @click="choose('punishHistory','0')">
            <a data-v-6b09e788="">
              <span data-v-6b09e788="" class="border f30">不存在5天封号记录</span>
            </a>
          </li>
        </ul>
        <!---->
      </div>
      <!---->
      <div data-v-6b09e788="" style="display: none;">
        <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
        <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
          <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
            <div data-v-6b09e788="" class="top-back">
              <a data-v-6b09e788="">返回</a>
            </div>
            <h2 data-v-6b09e788="" class="f36">历史处罚记录</h2>
          </div>
          <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
            <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
              <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
            </div>
          </div>
          <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
            <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
          </div>
          <div data-v-6b09e788="" class="filter-confirm  bg-fff">
            <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="fixed-bottom border-top">
      <div data-v-6b09e788="" class="goodslist-btn px-30 py-30 bg-fff">
        <a data-v-6b09e788="" class="options f32 color-666 fl text-center">清除选项</a>
        <a data-v-6b09e788="" class="purchase f32 bg-f54 color-fff fr text-center" @click="ToggleConditionTab('filter')">确定</a>
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
        groupName: '',
        groupId: '',
        serverName: '',
        serverId:'',
        cs_server: {
          groupId:[],
          serverId:[],

          filterGroupList: [''],
          filterServerList: [''],
          groupNameList:[''],
          
          serverNameList: [''],
          serverList: [{ Id: 0, Name: "上海1区" }, { Id: 1, Name: "上海2区" }],
          groupList: [{ Id: 0, Name: "上海区" }, { Id: 1, Name: "广东区" }]
        },

      
      }
    },
    watch: {},
    mounted: function() {
      this.Init();
    },
    methods: {
      Init: function (groupId, serverId) {
        let self = this;
        this.serverId = serverId;
        this.groupId = groupId;
        self.GetGroup();
        if (self.groupId)
        {
          self.GetServer(self.groupId);
        }
      },
      CloseDialog: function () {
        this.$emit('cancel');
      },
      ChooseGroup: function (group) {
        this.$chooseSingle('cs_server', 'groupId', group.Id);
        this.GetServer(group.Id);
      },
      ChooseServer: function (server) {
        this.$chooseSingle('cs_server', 'serverId', server.Id);
        server.dataType = 'server';
        this.$emit('submit', server)
      },
      GetGroup: function () {
        let self = this;
        try {
          this.$get("/web/api/GameServer/GetGroup", {
            gameid: 1
          }).then(function (result) {
            self.cs_server.groupList = result.content;
            self.cs_server.filterGroupList = self.groupList;
            self.cs_server.groupId.push(self.cs_server.groupList[0].Id);
            self.GetServer(self.cs_server.groupId);
          });
        } catch (err) {
          console.log(err);
        }
      },
      GetServer: function (groupId) {
        let self = this;
        try {
          this.$get("/web/api/GameServer/GetServer", {
            parenId: groupId
          }).then(function (result) {
            self.cs_server.serverList = result.content;
            self.cs_server.filterServerList = self.serverList;
            if (self.cs_server.serverList.length>0)
            self.cs_server.serverId.push(self.cs_server.serverList[0].Id);

            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    name: 'top',
    
    props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>
<style>

</style>

