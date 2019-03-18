<!--底部导航-->
<template>
  
  <div data-v-7b64404c="" data-v-6b09e788="" v-show="conditionTab.server">
    <div data-v-7b64404c="" class="seach-list">
      <div data-v-7b64404c="" class="gmvst-profile ">
        <div data-v-7b64404c="" class="gmvst-server fl">
          <ul data-v-7b64404c="">
            <!---->
            <li data-v-7b64404c="" class="border-bottom curren">
              <a data-v-7b64404c="" @click='setValue({GameGroupName:""})'>
                <span data-v-7b64404c="" class="f30 color-000" v-show="!searchModel.GameGroupName">
                  选择区
                  <i data-v-7b64404c="" class="close"></i>
                </span>
                <span data-v-7b64404c="" class="f30 color-000" v-show="!!searchModel.GameGroupName">
                  {{searchModel.GameGroupName}}
                  <i data-v-7b64404c="" class="close"></i>
                </span>
              </a>
            </li>
            <li data-v-7b64404c="" class="border-bottom">
              <a data-v-7b64404c="">
                <span data-v-7b64404c="" class="f30 color-000">
                  选择服
                  <i data-v-7b64404c="" class="close"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div data-v-7b64404c="" class="gmvst-area bg-fff">
          <div data-v-7b64404c="" class="gmvst-server">
            <div data-v-7b64404c="" class="gvst-seach mx-30 my-20 border py-15 px-20">
              <input data-v-7b64404c="" name="" type="text" placeholder="请输入服务器名称" class="server-input" v-model="serverKeyWords">
            </div>
          </div>
          <ul data-v-7b64404c="" class="pl-30" v-show="groupId">
            <a @click='setValue({GameGroupName:group.Name,GameGroupId:group.Id})' v-for='group in filterGroupList' v-bind:key="group.Id">
              <li data-v-7b64404c="" class="border-bottom">
                <span data-v-7b64404c="" class="f30 color-000">{{group.Name}}</span>
              </li>
            </a>

            <li data-v-7b64404c="" class="border-bottom">
              <span data-v-7b64404c="" class="f30 color-000">体验区</span>
            </li>
          </ul>
          <ul data-v-7b64404d="" class="pl-30" v-show="!!searchModel.GameGroupName">
            <a @click="setValue({GameServerName:server.Name,GameServerId:server.Id});ToggleConditionTab('server');SearchList();" v-for='server in filterServerList' v-bind:key="server.Id">
              <li data-v-7b64404c="" class="border-bottom">
                <span data-v-7b64404c="" class="f30 color-000">{{server.Name}}</span>
              </li>
            </a>

            <li data-v-7b64404c="" class="border-bottom">
              <span data-v-7b64404c="" class="f30 color-000">体验区</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-7b64404c="" class="shade" style="display:none"></div>
  </div>

</template>

<script>

  export default{
    data() {
      return {
        groupId:'',
        serverId: '',
        serverList: [{ Id: 0, Name: "上海1区" }, { Id: 1, Name: "上海2区" }],
        groupList: [{ Id: 0, Name: "上海区" }, { Id: 1, Name: "广东区" }],
      }
    },
    watch: {},
    method: {
      Init: function (groupId, serverId) {
        let self = this;
        this.serverId = serverId;
        this.groupId = groupId;
        GetGroup();
        if (self.groupId)
        {
          GetServer(self.groupId);
        }
      },
      Choose_server: function () {

        $.emit('update_server', data)
      },
      GetGroup: function () {
        let self = this;
        try {
          this.$get("/web/api/GameServer/GetGroup", {
            gameid: self.searchModel.GameId
          }).then(function (result) {
            self.groupList = result.content;
            self.filterGroupList = self.groupList;
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
            self.serverList = result.content;
            self.filterServerList = self.serverList;
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
