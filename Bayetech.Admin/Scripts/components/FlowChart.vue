import "../../Content/MyStyle.css";
import "../../Scripts/go-1.8.35.js"

<style>
    .diagram {
        background-color:#ffffff;
        text-align:center;
        width:100%;
        height:100%
    }
</style>

<template id="FlowChart" lang="html">
    <div class="modal form-horizontal" id="FlowChartModal" data-backdrop="static" data-keyboard="false" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:1200px">
            <div class="modal-content animated bounceInRight">
                <div id="modal_head" class="modal-header">
                    <a class="close" data-dismiss="modal" name="btnModalClose">
                        <span aria-hidden="true" style="font-size:26px">&times;</span><span class="sr-only">Close</span>
                    </a>
                    <h3 class="modal-title text-center" id="modal_title"><strong>订单号为：{{OrderNo}}</strong></h3>
                </div>
                <div class="modal-body" id="modal_body">
                </div>
                    <!--流程图-->
                    <div id="myDiagramDiv" class="diagram">

                </div>
                </div>
            </div>
        </div>
</template>

<script>
export default{
    name:'BaseTable',
    data(){
        return {
            OrderNo:"",//订单号
            Param:{
                wfmid:"",
            },
            Result:{
                List:[
                    WFM_ID:""
                    ,CURSTATUS_ID:""
                    ,CURSTATUS_Name:""
                    ,PRESTATUS_ID:""
                    ,PRESTATUS_Name:""
                    ,DISPOSAL_ID:""
                    ,DISPOSAL_Name:""
                    ,DISPOSAL_HINT:""
                    ,DealRemark:""
                    ,Sender:""
                    ,SenderName:""
                    ,Receiver:""
                    ,ReceiverName:""
                    ,SenderTrust:""
                    ,ReceiverTrust:""
                    ,SenderTrustName:""
                    ,ReceiverTrustName:""
                    ,ArriveTime:""
                    ,FinishTime:""
                    ,DealState:""
                    ,DealStateName:""
                    ,dRecordCreationDate:""
                    ,sRecordCreator:""
                    ,sRecordVersion:""
                    ,CURRole_Name:""
                    ,CURRole_ID:""
                    ,PRERole_Name:""
                    ,PRERole_ID:""
                ]//绑定图表的数据
            }
        }
    },
    props:['wfmid'],
    methods:{
        GetDiagramData(){//获取图表数据
            var self = this;
            comCompnent.default.getWebJson("/api/Flow/GetLogmonitor", self.Param, function (data) {
                    if (data) {
                        self.Result.List = data;
                    }
                })//同步获取当前流程信息
        },
        SetDiagram(arry){//设置流程图
            var $=go.GraphObject.make;
            var myDiagram = $(go.Diagram,"myDiagramDiv",{
                 "undoManager.isEnabled": true
            });
            //Models包含描述节点和链接的数据（JavaScript对象的数组）,Diagrams充当视图，使用实际的Node和Link对象可视化这些数据。
            var myModel=$(go.Model);//创建图表数据对象
            myModel.nodeDataArray = arry;//赋值
            myDiagram.model=myModel;
            myDiagram.nodeTemplate =$(go.Node, "Horizontal", 
                {
                  background:"#44CCFF",
                  locationSpot: go.Spot.Center
                },
                new go.Binding("location", "loc"),
                $(go.Shape,
                  "RoundedRectangle",
                  new go.Binding("figure", "fig")),
                $(go.TextBlock,
                  "default text",  
                  new go.Binding("text", "CURSTATUS_Name"))
               );
        }
    }
}
</script>