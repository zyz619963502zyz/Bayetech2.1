import "../../Content/MyStyle.css"

<!--流程组件-->
<template>
    <div class="">
        <h4><strong>流程送审:</strong></h4>
        <div class="col-md-6">
            <label class="control-label col-md-3">下一处理线:</label>
            <div class="col-md-offset-1 col-md-8">
                <select class="form-control" v-model="DisposalSelected">
                    <option v-for="item in ResultList.StatusAllDisposal" :value="item.Disposal_ID">{{item.Disposal_Name}}</option>
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
                flowid: "",//根据wfmid计算出来的flowid
                wfmid:"",//页面传来的wfmid
                EngineInfo:{//引擎对象
                    Flow_Id: "",
                    Wfm_Id: "",
                    Sender_Id: "",//T_Pub_User表的UserId
                    Sender_Code: "",//T_Pub_User表的UserCode;
                    Reciever_Id: "",//T_Pub_User表的UserId
                    Reciever_Code: "",//T_Pub_User表的UserCode
                    Cur_Status_Id: "",//当前环节Id
                    New_Status_Id: "",//处理线获得的下一环节Id
                    Disposal_Id: "",//处理线Id
                    Send_Time:""//发送时间
                },
                PageInfo:{//页面对象
                    txtPageConditionRule99:""
                },
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
                        EngineInfo: {}
                    },
                    OnNextStep: {//提交送下一步
                        EngineInfo: {},
                        PageInfo:  {}
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
                        p_lStatus_ID: "",//环节ID
                        p_lFlow_ID: "",//流程ID
                        PageConditionRule:";KefuOperate;"//页面规则
                    },
                    DispUserInfo: {//获取流程线 所有人员(无数据权限)
                        p_lFlow_ID: "",
                        p_lDisosal_ID:""
                    }
                },
                ResultList: {
                    NewFlowExample: [],
                    FlowBeginStatusInfo: [],
                    OnNextStep: "",//true/false 提交成功，失败
                    FlowStatusInfo: {//通用环节信息CStatus
                        Status_ID:"",
                        Flow_ID:"",
                        Status_Type_ID:"",
                        Status_Name:"",//环节名
                        UI_Url:"",//页面URL
                        OperationRole_ID:"",//业务角色ID
                        OperationRole_Name:"",//业务角色名
                        OperationPerm_Value:"",//状态权限值
                        IsNextStatus:"",//是否后续节点还有本节点
                        Status_Attribute:"",//属性字段
                        Userrole_ID:"",//用户角色ID,后面权限字段省略...引擎看
                    },
                    CurFlowStatusInfo: {//同上，当前环节信息CStatus
                        Status_ID:"",
                        Flow_ID:"",
                        Status_Type_ID:"",
                        Status_Name:"",//环节名
                        UI_Url:"",//页面URL
                        OperationRole_ID:"",//业务角色ID
                        OperationRole_Name:"",//业务角色名
                        OperationPerm_Value:"",//状态权限值
                        IsNextStatus:"",//是否后续节点还有本节点
                        Status_Attribute:"",//属性字段
                        Userrole_ID:"",//用户角色ID,后面权限字段省略...引擎看
                    },
                    PermList: [],//权限
                    StatusAllDisposal: [//流程线对象CDisposal
                        {
                            TRANSACT_STATUS_ID:"",//经办环节ID
                            Disposal_ID:"",//处理线ID
                            Flow_ID:"",//流程ID
                            Dept_limit:"",//部门限定
                            Role_limit:"",//角色限定
                            Cur_Status_ID:"",//当前环节ID
                            Pre_Status_ID:"",//上环节ID
                            Priority:"",//默认路径
                            Disposal_Hint:"",//处理过程提示
                            Disposal_Name:"",//处理过程名称
                            Action_Content:"",//条件规则XML字符串
                            ConditionRule:"",//引擎条件规则
                            PageConditionRule:"",//页面条件规则
                            DisposalCode:"",//处理线编号
                            ConsignRelation:"",//委托关系设置值
                            PageDisposalRule:"",//页面入库规则
                            DisposalDefaultAtt:"",//处理线设置的处理选项
                            FlowDisposalRule:"",//流程处理步骤规则
                        }
                    ],
                    DispUserInfo: [
                        {//下一处理人信息V_Flow_StatusUser
                            Company_ID:"",
                            User_ID:"",
                            User_Name:"",
                            User_DisplayName:"",
                            User_Code:"",
                            Parent_ID:"",
                            Parent_Name:"",
                            Parent_DisplayName:"",
                            OrderBy:"",
                            userrole_id:"",
                            userrole_name:"",
                            userrole_display:"",
                            userrole_column:"",
                            Org_ID:"",
                            Org_GB:"",
                            Org_Name:"",
                            Org_Display:"",
                            Org_Level_id:"",
                            Org_Order:"",
                            Org_Code:"",
                            GUID_Path:"",
                            Status_Id:"",
                            Flow_Id:"",
                            id:"",
                            IsTempUser:""
                        }
                    ]
                } 
            }
        },
        //props: ["wfmid"],
        watch: {
            DisposalSelected: function (val, oldval) {//流程线选中
                var self = this; 
                self.Get_DispUserInfo();
                self.EngineInfo.Disposal_Id = val;
                for (var i = 0; i < self.ResultList.StatusAllDisposal.length; i++) {
                    if (self.ResultList.StatusAllDisposal[i].Disposal_ID == self.EngineInfo.Disposal_Id) {
                        self.EngineInfo.New_Status_Id = self.ResultList.StatusAllDisposal[i].Pre_Status_ID;
                        break;
                    }
                }
            },
            NextRoleSelected: function (val, oldval) {//角色选中
                var self = this;
                self.SetNextRoleSelected();
            }
        },
        methods: {
            Init(wfmid) {
                var self = this;
                if (wfmid) {                   
                    //获取当前流程信息
                    self.wfmid = wfmid;
                    self.Get_CurFlowStatusInfo(false);//同步执行。
                    self.EngineInfo.Wfm_Id = wfmid;//通用流程信息赋值。
                    self.EngineInfo.Flow_Id = self.flowid;//缓存flowid
                    //获取流程线
                    self.Param.StatusAllDisposal.p_lFlow_ID = self.flowid;
                    self.Param.StatusAllDisposal.p_lStatus_ID = self.ResultList.CurFlowStatusInfo.Status_ID;
                    self.Param.StatusAllDisposal.PageConditionRule = ";KefuOperate;";//页面规则,每笔订单给定。
                    self.Get_StatusAllDisposal();
                }
            },
            SetNextRoleSelected() {//下一处理人选中。
                var self = this;
                self.EngineInfo.Reciever_Id = self.NextRoleSelected; //通用流程信息赋值
                for (var i = 0; i < self.ResultList.DispUserInfo.length; i++) {
                    if (self.ResultList.DispUserInfo[i].User_ID == val) {
                        self.EngineInfo.Reciever_Code = self.ResultList.DispUserInfo[i].User_Code;//发送人Code
                        self.EngineInfo.Sender_Id = localStorage.getItem("User_ID");
                        self.EngineInfo.Sender_Code = localStorage.getItem("User_Code");
                        break;
                    }
                }
            },
            Create_NewFlowExample() {//创建流程实例
                var self = this;
                comCompnent.default.getWebJson(self.Url.NewFlowExample, self.Param.NewFlowExample, function (data) {
                    if (data) {
                        self.ResultList.NewFlowExample = data;
                        //alert("实例创建成功!");
                    }
                })
            },
            Get_FlowBeginStatusInfo() {//获取流程开始环节信息
                var self = this;
                comCompnent.default.getWebJson(self.Url.FlowBeginStatusInfo, self.Param.FlowBeginStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.FlowBeginStatusInfo = data;
                        //alert("获取流程开始信息成功!");
                    }
                })
            },
            Get_CurFlowStatusInfo(sync) {//获取当前流程及环节信息
                var self = this;
                self.Param.CurFlowStatusInfo.wfmid = self.wfmid;
                comCompnent.default.getWebJson(self.Url.CurFlowStatusInfo, self.Param.CurFlowStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.CurFlowStatusInfo = data;
                        self.EngineInfo.Cur_Status_Id = data.Status_ID; //通用流程信息赋值
                        self.flowid = data.Flow_ID;
                        //alert("获取当前流程信息成功!");
                    }
                }, null, sync)//同步获取当前流程信息
            },
            Get_StatusAllDisposal() {//获取当前环节流程线
                var self = this;
                comCompnent.default.getWebJson(self.Url.StatusAllDisposal, self.Param.StatusAllDisposal, function (data) {
                    if (data) {
                        self.ResultList.StatusAllDisposal = data;//data[0]
                        self.EngineInfo.New_Status_Id = data.Pre_Status_ID; //通用流程信息赋值 待定?流程线指向的当前环节ID。就是下一环节ID。
                        //alert("获取当前环节流程线成功!");
                    }
                })
            },
            Get_DispUserInfo() {//获取下一处理人
                var self = this;
                self.Param.DispUserInfo.p_lFlow_ID = self.flowid;
                self.Param.DispUserInfo.p_lDisosal_ID = self.DisposalSelected;
                comCompnent.default.getWebJson(self.Url.DispUserInfo, self.Param.DispUserInfo, function (data) {
                    if (data) {
                        self.ResultList.DispUserInfo = data;
                        self.SetNextRoleSelected();//设置pageInfo信息
                        alert("获取下一处理人成功!");
                    }
                })
            },
            Execute_OnNextStep(param) {//提交送下一步
                var self = this;
                if (param) {
                    self.Param.OnNextStep.EngineInfo = param.EngineInfo;
                    self.Param.OnNextStep.PageInfo = param.PageInfo;
                }else {
                    self.Param.OnNextStep.EngineInfo = self.EngineInfo;//收集到的页面信息
                    self.Param.OnNextStep.PageInfo = self.PageInfo;//txtPageConditionRule99.
                }
                comCompnent.default.getWebJson(self.Url.OnNextStep, self.Param.OnNextStep, function (data) {
                    if (data) {
                        self.ResultList.OnNextStep = data;
                        //alert("提交送下一步成功!");
                        $("#checkModal").modal("hide");
                    }
                });
            },
            Get_FlowStatusInfo() {//获取所有流程及环节信息
                var self = this;
                //self.Param.FlowStatusInfo.flowid = self.flowid;
                //self.Param.FlowStatusInfo.wfmid = self.wfmid;
                comCompnent.default.getWebJson(self.Url.FlowStatusInfo, self.Param.FlowStatusInfo, function (data) {
                    if (data) {
                        self.ResultList.FlowStatusInfo = data;
                        //alert("获取当前流程及环节信息成功!");
                    }
                },true)
            },
            Get_PermList() {//获取权限
                var self = this;
                comCompnent.default.getWebJson(self.Url.PermList, self.Param.PermList, function (data) {
                    if (data) {
                        self.ResultList.PermList = data;
                        //alert("获取权限成功!");
                    }
                })
            }
        }
    }
</script>