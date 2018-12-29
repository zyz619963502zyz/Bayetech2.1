import "../../Content/MyStyle.css";

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
                List:[]//绑定图表的数据
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
            }
    }
}
</script>