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
                flowId: "",
                DisposalSelected: "",
                NextRoleSelected: "",
                Url: {//接口连接字符串
                    NewFlowExample: comCompnent.default.EngineUrl + "/api/Create_NewFlowExample",
                    FlowBeginStatusInfo: comCompnent.default.EngineUrl + "Get_FlowBeginStatusInfo",
                    OnNextStep: comCompnent.default.EngineUrl + "Execute_OnNextStep",
                    FlowStatusInfo: comCompnent.default.EngineUrl + "Get_FlowStatusInfo",
                    PermList: comCompnent.default.EngineUrl + "Get_PermList",
                    StatusAllDisposal: comCompnent.default.EngineUrl + "Get_StatusAllDisposal",
                    DispUserInfo: comCompnent.default.EngineUrl + "Get_DispUserInfo",
                },
                Param: {//参数
                    NewFlowExample: {
                        Flow_Id: "",
                        Cur_Status_Id: "",
                        New_Status_Id: "",
                        Reciever_Id: "",
                        Sender_Id: "",
                        Send_Time:""
                    },
                    FlowBeginStatusInfo: {

                    },
                    OnNextStep: {

                    },
                    FlowStatusInfo: {

                    },
                    PermList: {

                    },
                    StatusAllDisposal: {

                    },
                    DispUserInfo: {

                    }
                },
                ResultList: {
                    NewFlowExample: [],
                    FlowBeginStatusInfo: [],
                    OnNextStep: [],
                    FlowStatusInfo: [],
                    PermList: [],
                    StatusAllDisposal: [],
                    DispUserInfo: []
                }
            }
        },
        props: {
            FlowId: "FlowId"
        },
        Created() {
            var self = this;
            self.flowId = self.props.FlowId;
        },
        mounted() {
            var self = this;
            self.Get_PermList();
        },
        methods: {
            Create_NewFlowExample() {//创建流程实例
                var self = this;
                comCompnent.default.getWebJson(self.NewFlowExampleUrl, param, function (data) {
                    if (data) {
                        self.NewFlowExampleList = data;
                        alert("实例创建成功!");
                    }
                })
            },
            Get_FlowBeginStatusInfo() {//获取流程开始环节信息
                var self = this;
                comCompnent.default.getWebJson(self.FlowBeginStatusInfoUrl, param, function (data) {
                    if (data) {
                        self.FlowBeginStatusInfoList = data;
                        alert("返回成功!");
                    }
                })
            },
            Execute_OnNextStep() {//提交送下一步
                var self = this;
                comCompnent.default.getWebJson(self.OnNextStepUrl, param, function (data) {
                    if (data) {
                        self.FlowBeginStatusInfoList = data;
                        alert("返回成功!");
                    }
                })
            },
            Get_FlowStatusInfo() {//获取当前流程及环节信息
                var self = this;
                comCompnent.default.getWebJson(self.FlowStatusInfoUrl, param, function (data) {
                    if (data) {
                        self.FlowStatusInfoList = data;
                        alert("返回成功!");
                    }
                })
            },
            Get_PermList() {//获取权限
                var self = this;
                comCompnent.default.getWebJson(self.PermListUrl, null, function (data) {
                    if (data) {
                        self.PermList = data;
                        alert("返回成功!");
                    }
                })
            },
            Get_StatusAllDisposal() {//获取当前环节流程线
                var self = this;
                var param = {
                    p_lStatus_ID: "0",
                    p_lFlow_ID: "1",
                    PageConditionRule: ""
                }
                comCompnent.default.getWebJson(self.StatusAllDisposalUrl, param, function (data) {
                    if (data) {
                        self.StatusAllDisposalList = data;
                        alert("返回成功!");
                    }
                })
            },
            Get_DispUserInfo() {//获取下一处理人
                var self = this;
                comCompnent.default.getWebJson(self.DispUserInfoUrl, data, function (data) {
                    if (data) {
                        self.DispUserInfoList = data;
                        alert("返回成功!");
                    }
                })
            },
        }
    }
</script>