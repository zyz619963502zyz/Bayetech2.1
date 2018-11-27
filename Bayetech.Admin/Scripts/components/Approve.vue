import "../../Content/MyStyle.css"

<!--流程组件-->
<template>
    <div class="">
        <h4><strong>流程送审:</strong></h4>
        <div class="col-md-6">
            <label class="control-label col-md-3">下一处理线:</label>
            <div class="col-md-offset-1 col-md-8">
                <select class="form-control" v-model="DisposalSelected">
                    <option v-for="item in ResultList.StatusAllDisposal" :value="item.DisposalCode">{{item.Disposal_Name}}</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <label class="control-label col-md-3">下一处理人:</label>
            <div class="col-md-offset-1 col-md-8">
                <select class="form-control" v-model="NextRoleSelected">
                    <option v-for="item in ResultList.DispUserInfo" :value="item.User_ID">{{item.User_DisplayName}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Approve',
                DisposalSelected: "",
                NextRoleSelected: "",
                Url: {//接口连接字符串
                    NewFlowExample: comCompnent.default.EngineUrl + "/api/Create_NewFlowExample",
                    FlowBeginStatusInfo: comCompnent.default.EngineUrl + "Get_FlowBeginStatusInfo",
                    FlowStatusInfo: comCompnent.default.EngineUrl + "Get_FlowStatusInfo",
                    CurFlowStatusInfo: comCompnent.default.EngineUrl + "Get_CurFlowStatusInfo",
                    StatusAllDisposal: comCompnent.default.EngineUrl + "Get_StatusAllDisposal",
                    OnNextStep: comCompnent.default.EngineUrl + "Execute_OnNextStep",
                    PermList: comCompnent.default.EngineUrl + "Get_PermList",
                    DispUserInfo: comCompnent.default.EngineUrl + "Get_DispUserInfo",
                },
                Param: {//参数
                    NewFlowExample: {//新建流程实例
                        //EngineInfo: JSON.parse(JSON.stringify(comCompnent.default.EngineInfo)),//对象深拷贝
                    },
                    OnNextStep: {//提交送下一步
                        //EngineInfo: JSON.parse(JSON.stringify(comCompnent.default.EngineInfo)),//对象深拷贝
                        //PageInfo: JSON.parse(JSON.stringify(comCompnent.default.PageInfo))
                    },
                    FlowBeginStatusInfo: {//获取当前流程的第一个环节
                        flowId:"",
                    },
                    FlowStatusInfo: {//获取当前流程所有环节信息
                        p_lStatus_ID: "",
                        p_lFlow_ID:""
                    },
                    CurFlowStatusInfo: {//获取当前流程当前环节信息
                        wfmid: ""
                    },
                    PermList: {//获取流程权限
                        lngPerm:""//权限累加算出来的值
                    },
                    StatusAllDisposal: {//获取当前环节流程线
                        p_lFlow_ID: "",//流程ID
                        p_lStatus_ID: "",//环节ID
                        PageConditionRule:""//页面规则
                    },
                    DispUserInfo: {//获取流程线 所有人员(无数据权限)
                        p_lFlow_ID: "",
                        p_lDisosal_ID:""
                    }
                },
                ResultList: {
                    NewFlowExample: [],
                    FlowBeginStatusInfo: [],
                    OnNextStep: [],
                    FlowStatusInfo: {},
                    CurFlowStatusInfo: {},
                    PermList: [],
                    StatusAllDisposal: [],
                    DispUserInfo: []
                } 
            }
        },
        props: ["flowid","wfmid"],
        created() {
            var self = this;
            self.Init();
        },
        mounted() {
            var self = this;
            //self.Get_PermList();
        },
        methods: {
            Init() {
                var self = this;
                //获取当前流程信息
                self.Get_CurFlowStatusInfo();
                //获取流程线
                self.Param.StatusAllDisposal.p_lFlow_ID = self.flowid;
                self.Param.StatusAllDisposal.p_lStatus_ID = 0;
                self.Param.StatusAllDisposal.PageConditionRule = "";//页面规则
                self.Get_StatusAllDisposal();
            },
            Create_NewFlowExample() {//创建流程实例
                var self = this;
                comCompnent.default.getWebJson(self.Url.NewFlowExample, self.Param.NewFlowExample, function (data) {
                    if (data) {
                        self.ResultList.NewFlowExample = data;
                        alert("实例创建成功!");
                    }
                })
            },
            Get_FlowBeginStatusInfo() {//获取流程开始环节信息
                var self = this;
                comCompnent.default.getWebJson(self.Url.FlowBeginStatusInfo, self.Param.FlowBeginStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.FlowBeginStatusInfo = data;
                        alert("获取流程开始信息成功!");
                    }
                })
            },
            Execute_OnNextStep() {//提交送下一步
                var self = this;
                comCompnent.default.getWebJson(self.Url.OnNextStep, self.Param.OnNextStep, function (data) {
                    if (data) { 
                        self.ResultList.OnNextStep = data;
                        alert("提交送下一步成功!");
                    }
                })
            },
            Get_CurFlowStatusInfo() {//获取当前流程及环节信息
                var self = this;
                self.Param.CurFlowStatusInfo.wfmid = self.wfmid;
                comCompnent.default.getWebJson(self.Url.CurFlowStatusInfo, self.Param.CurFlowStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.OnNextStep = data;
                        alert("提交送下一步成功!");
                    }
                })
            },
            Get_FlowStatusInfo() {//获取所有流程及环节信息
                var self = this;
                //self.Param.FlowStatusInfo.flowid = self.flowid;
                //self.Param.FlowStatusInfo.wfmid = self.wfmid;
                comCompnent.default.getWebJson(self.Url.FlowStatusInfo, self.Param.FlowStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.FlowStatusInfo = data;
                        alert("获取当前流程及环节信息成功!");
                    }
                },true)
            },
            Get_PermList() {//获取权限
                var self = this;
                comCompnent.default.getWebJson(self.Url.PermList, self.Param.PermList, function (data) {
                    if (data) {
                        self.ResultList.PermList = data;
                        alert("获取权限成功!");
                    }
                })
            },
            Get_StatusAllDisposal() {//获取当前环节流程线
                var self = this;
                comCompnent.default.getWebJson(self.Url.StatusAllDisposal, self.Param.StatusAllDisposal, function (data) {
                    if (data) {
                        self.ResultList.StatusAllDisposal = data;
                        alert("获取当前环节流程线成功!");
                    }
                })
            },
            Get_DispUserInfo() {//获取下一处理人
                var self = this;
                comCompnent.default.getWebJson(self.Url.DispUserInfo, self.Param.DispUserInfo, function (data) {
                    if (data) {
                        self.ResultList.DispUserInfo = data;
                        alert("获取下一处理人成功!");
                    }
                })
            },
        }
    }
</script>