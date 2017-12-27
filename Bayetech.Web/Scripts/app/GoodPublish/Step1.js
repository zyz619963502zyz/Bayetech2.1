//模块之间的操作
require(['vue', 'jquery', 'common', 'bootstrap', 'v-header'],
	function (Vue, $, common, bootstrap, header) {
	    var data={
	        GameType: 0,
	        GameList: [],
	        TypeList: [],
	        GroupList: [],
	        ServerList: [],
	    }
	    new Vue({
	        el: '#app',
	        data() {
	            return data
	        },
	        created: function () {
	            this.GetGameList("0");
	        },
	        methods: {
                GetGameList:function(type){
                    $.get("/api/Game/GetGameList", { type: type }, function (data) {
                        this.GameList=data;
                    });
                },
                GetTypeList: function (gameId) {
                    $.get("/api/GoodType/GetGoodTypeByGameId", { gameId: gameId }, function (data) {
                        this.TypeList=data;
                    });
                },

                GetGroupList: function (gameId) {
                    $.get("/api/GameServer/GetGroupByGameId", { gameId: gameId }, function (data) {
                        this.GroupList=data;
                    });
                },

                GetGameList: function (groupId) {
                    $.get("/api/GameServer/GetServerByParentId", { pid: groupId }, function (data) {
                        this.ServerList=data;
                    });
                },
	        },
	        components: {
	            "v-header": header,
	        }
	    });

	});