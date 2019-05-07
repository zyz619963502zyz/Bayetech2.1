<!--底部导航-->
<template>

  <div data-v-4d8e3562="" data-v-484bcaae="">
    <div data-v-4d8e3562="" class="one-screen">
      <div data-v-4d8e3562="" style="z-index: 100;">
        <div data-v-4d8e3562="" class="top-header border-bottom">
          <div data-v-4d8e3562="" class="top-back">
            <a data-v-4d8e3562="" @click="CloseDialog"></a>
          </div>
          <h2 data-v-4d8e3562="" class="f36">选择服务器</h2>
          <div data-v-4d8e3562="" class="top-right"></div>
        </div>
      </div>
      <div data-v-4d8e3562="" class="search-container">
        <div data-v-4d8e3562="" class="search-box bg-fff">
          <input data-v-4d8e3562="" type="text" placeholder="请输入服务器名称" maxlength="20" class="f30">
          <span data-v-4d8e3562="" class="clear1" style="display: none;"></span>
        </div>
      </div>
      <div data-v-4d8e3562="" class="qufu-container f30 clearfix border-top">
        <div data-v-4d8e3562="" class="qu fl" style="height: 100%;">
          <ul data-v-4d8e3562="">

            <li v-for="group of cs_server.groupList" :class="{selected:$isChoice('cs_server','groupId',group.Id)}"
                @click="ChooseGroup(group)">
              <span data-v-4d8e3562="">{{group.Name}} </span>
            </li>
          </ul>
        </div>
        <div data-v-4d8e3562="" class="fu bg-fff fl" style="height: 100%;">
          <ul data-v-4d8e3562="">
            <li data-v-4d8e3562=""
                v-for="server of cs_server.serverList"
                @click="ChooseServer(server)"
                style="text-align: left; padding-left: 0.3rem;">
              <span data-v-4d8e3562="" class="border-bottom">{{server.Name}}</span>
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
  export default {
    data() {
      return {
        chooseServer: true,
        serverKeyWords: '',
        groupName: '',
        groupId: '',
        serverName: '',
        serverId: '',
        cs_server: {
          groupId: [],
          serverId: [],

          filterGroupList: [''],
          filterServerList: [''],
          groupNameList: [''],

          serverNameList: [''],
          serverList: [{ Id: 0, Name: "上海1区" }, { Id: 1, Name: "上海2区" }],
          groupList: [{ Id: 0, Name: "上海区" }, { Id: 1, Name: "广东区" }]
        },


      }
    },
    watch: {},
    mounted: function () {
      this.Init();
    },
    methods: {
      Init: function (groupId, serverId) {
        let self = this;
        this.serverId = serverId;
        this.groupId = groupId;
        self.GetGroup();
        if (self.groupId) {
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
            if (self.cs_server.serverList.length > 0)
              self.cs_server.serverId.push(self.cs_server.serverList[0].Id);

          });
        } catch (err) {
          console.log(err);
        }
      }
    },
    name: 'top',

    props: ['pagetype', 'goodinfoarray', 'startcheck', 'itemtype']
  }
</script>
<style>
</style>

