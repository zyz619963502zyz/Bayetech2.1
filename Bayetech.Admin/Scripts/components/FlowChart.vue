import "../../Content/MyStyle.css"


<!--<style>
    .diagram {
        background-color: #ffffff;
        text-align: center;
        width: 100%;
        height: 100%;
    }
</style>-->
<template id="FlowChart" lang="html">
    <div class="modal form-horizontal" id="FlowChartModal" data-backdrop="static" data-keyboard="false" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:1200px">
            <div class="modal-content animated bounceInRight">
                <div id="modal_head" class="modal-header">
                    <a class="close" data-dismiss="modal" name="btnModalClose">
                        <span aria-hidden="true" style="font-size:26px">&times;</span><span class="sr-only">Close</span>
                    </a>
                    <!--https://gojs.net/latest/samples/flowchart.html-->
                    <h3 class="modal-title text-center" id="modal_title"><strong>单号为：{{OrderNo}}</strong></h3>
                </div>
                <div class="modal-body" id="modal_body">
                    <!--流程图-->
                    <div id="myDiagramDiv" style="width:800px; height:300px; background-color: #DAE4E4;text-align:center"></div>
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
                wfmId:"",
                flowId:""
            },
            Result:{
                List:[
                    {
                        WFM_ID:"",
                        CURSTATUS_ID:""
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
                    }
                ]//绑定图表的数据
            }
        }
    },
    props:['currentwfmid','currentitem'],
    watch:{
        currentwfmid(val,oldval){
            var self = this;
            self.Param.wfmid = val;
            self.Param.Flow_ID = self.currentitem.Flow_ID;
            self.OrderNo = self.currentitem.OrderNo;
            self.GetDiagramData();
        }
    },
    methods:{
        GetDiagramData(){//获取图表数据
            var self = this;
            comCompnent.default.getWebJson("/api/Flow/GetLogmonitor", self.Param, function (data) {
                    if (data) {
                        self.Result.List = data.content;
                        self.SetDiagram(self.Result.List);
                    }
                })//同步获取当前流程信息
        },
        init(){
                if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
                var $ = go.GraphObject.make;  // for conciseness in defining templates

                myDiagram =
                    $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                    {
                        initialContentAlignment: go.Spot.Center,
                        allowDrop: true,  // must be true to accept drops from the Palette
                        "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
                        "LinkRelinked": showLinkLabel,
                        scrollsPageOnFocus: false,
                        "undoManager.isEnabled": true  // enable undo & redo
                    });

                // when the document is modified, add a "*" to the title and enable the "Save" button
                myDiagram.addDiagramListener("Modified", function(e) {
                    var button = document.getElementById("SaveButton");
                    if (button) button.disabled = !myDiagram.isModified;
                    var idx = document.title.indexOf("*");
                    if (myDiagram.isModified) {
                    if (idx < 0) document.title += "*";
                    } else {
                    if (idx >= 0) document.title = document.title.substr(0, idx);
                    }
                });

                // helper definitions for node templates

                function nodeStyle() {
                    return [
                    // The Node.location comes from the "loc" property of the node data,
                    // converted by the Point.parse static method.
                    // If the Node.location is changed, it updates the "loc" property of the node data,
                    // converting back using the Point.stringify static method.
                    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                    {
                        // the Node.location is at the center of each node
                        locationSpot: go.Spot.Center
                    }
                    ];
                }
                function makePort(name, align, spot, output, input) {
                    var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
                    return $(go.Shape,
                    {
                        fill: "transparent",  // changed to a color in the mouseEnter event handler
                        strokeWidth: 0,  // no stroke
                        width: horizontal ? NaN : 8,  // if not stretching horizontally, just 8 wide
                        height: !horizontal ? NaN : 8,  // if not stretching vertically, just 8 tall
                        alignment: align,  // align the port on the main Shape
                        stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
                        portId: name,  // declare this object to be a "port"
                        fromSpot: spot,  // declare where links may connect at this port
                        fromLinkable: output,  // declare whether the user may draw links from here
                        toSpot: spot,  // declare where links may connect at this port
                        toLinkable: input,  // declare whether the user may draw links to here
                        cursor: "pointer",  // show a different cursor to indicate potential link point
                        mouseEnter: function(e, port) {  // the PORT argument will be this Shape
                        if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
                        },
                        mouseLeave: function(e, port) {
                        port.fill = "transparent";
                        }
                    });
                }

                function textStyle() {
                    return {
                    font: "bold 11pt Helvetica, Arial, sans-serif",
                    stroke: "whitesmoke"
                    }
                }

                myDiagram.nodeTemplateMap.add("",  // the default category
                    $(go.Node, "Table", nodeStyle(),
                    // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
                    $(go.Panel, "Auto",
                        $(go.Shape, "Rectangle",
                        { fill: "#00A9C9", strokeWidth: 0 },
                        new go.Binding("figure", "figure")),
                        $(go.TextBlock, textStyle(),
                        {
                            margin: 8,
                            maxSize: new go.Size(160, NaN),
                            wrap: go.TextBlock.WrapFit,
                            editable: true
                        },
                        new go.Binding("text").makeTwoWay())
                    ),
                    // four named ports, one on each side:
                    makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
                    makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
                    makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
                    makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
                    ));

                myDiagram.nodeTemplateMap.add("Conditional",
                    $(go.Node, "Table", nodeStyle(),
                    // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
                    $(go.Panel, "Auto",
                        $(go.Shape, "Diamond",
                        { fill: "#00A9C9", strokeWidth: 0 },
                        new go.Binding("figure", "figure")),
                        $(go.TextBlock, textStyle(),
                        {
                            margin: 8,
                            maxSize: new go.Size(160, NaN),
                            wrap: go.TextBlock.WrapFit,
                            editable: true
                        },
                        new go.Binding("text").makeTwoWay())
                    ),
                    // four named ports, one on each side:
                    makePort("T", go.Spot.Top, go.Spot.Top, false, true),
                    makePort("L", go.Spot.Left, go.Spot.Left, true, true),
                    makePort("R", go.Spot.Right, go.Spot.Right, true, true),
                    makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
                    ));

                myDiagram.nodeTemplateMap.add("Start",
                    $(go.Node, "Table", nodeStyle(),
                    $(go.Panel, "Auto",
                        $(go.Shape, "Circle",
                        { minSize: new go.Size(40, 40), fill: "#79C900", strokeWidth: 0 }),
                        $(go.TextBlock, "Start", textStyle(),
                        new go.Binding("text"))
                    ),
                    // three named ports, one on each side except the top, all output only:
                    makePort("L", go.Spot.Left, go.Spot.Left, true, false),
                    makePort("R", go.Spot.Right, go.Spot.Right, true, false),
                    makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
                    ));

                myDiagram.nodeTemplateMap.add("End",
                    $(go.Node, "Table", nodeStyle(),
                    $(go.Panel, "Auto",
                        $(go.Shape, "Circle",
                        { minSize: new go.Size(40, 40), fill: "#DC3C00", strokeWidth: 0 }),
                        $(go.TextBlock, "End", textStyle(),
                        new go.Binding("text"))
                    ),
                    // three named ports, one on each side except the bottom, all input only:
                    makePort("T", go.Spot.Top, go.Spot.Top, false, true),
                    makePort("L", go.Spot.Left, go.Spot.Left, false, true),
                    makePort("R", go.Spot.Right, go.Spot.Right, false, true)
                    ));

                myDiagram.nodeTemplateMap.add("Comment",
                    $(go.Node, "Auto", nodeStyle(),
                    $(go.Shape, "File",
                        { fill: "#EFFAB4", strokeWidth: 0 }),
                    $(go.TextBlock, textStyle(),
                        {
                        margin: 5,
                        maxSize: new go.Size(200, NaN),
                        wrap: go.TextBlock.WrapFit,
                        textAlign: "center",
                        editable: true,
                        font: "bold 12pt Helvetica, Arial, sans-serif",
                        stroke: '#454545'
                        },
                        new go.Binding("text").makeTwoWay())
                    ));

                myDiagram.linkTemplate =
                    $(go.Link,  // the whole link panel
                    {
                        routing: go.Link.AvoidsNodes,
                        curve: go.Link.JumpOver,
                        corner: 5, toShortLength: 4,
                        relinkableFrom: true,
                        relinkableTo: true,
                        reshapable: true,
                        resegmentable: true,
                        // mouse-overs subtly highlight links:
                        mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                        mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                        selectionAdorned: false
                    },
                    new go.Binding("points").makeTwoWay(),
                    $(go.Shape,  // the highlight shape, normally transparent
                        { isPanelMain: true, strokeWidth: 8, stroke: "transparent", name: "HIGHLIGHT" }),
                    $(go.Shape,  // the link path shape
                        { isPanelMain: true, stroke: "gray", strokeWidth: 2 },
                        new go.Binding("stroke", "isSelected", function(sel) { return sel ? "dodgerblue" : "gray"; }).ofObject()),
                    $(go.Shape,  // the arrowhead
                        { toArrow: "standard", strokeWidth: 0, fill: "gray"}),
                    $(go.Panel, "Auto",  // the link label, normally not visible
                        { visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5},
                        new go.Binding("visible", "visible").makeTwoWay(),
                        $(go.Shape, "RoundedRectangle",  // the label shape
                        { fill: "#F8F8F8", strokeWidth: 0 }),
                        $(go.TextBlock, "Yes",  // the label
                        {
                            textAlign: "center",
                            font: "10pt helvetica, arial, sans-serif",
                            stroke: "#333333",
                            editable: true
                        },
                        new go.Binding("text").makeTwoWay())
                    )
                    );

                function showLinkLabel(e) {
                    var label = e.subject.findObject("LABEL");
                    if (label !== null) label.visible = (e.subject.fromNode.data.category === "Conditional");
                }

                // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
                myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
                myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

                load();  // load an initial diagram from some JSON text

                myPalette =
                    $(go.Palette, "myPaletteDiv",  // must name or refer to the DIV HTML element
                    {
                        scrollsPageOnFocus: false,
                        nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
                        model: new go.GraphLinksModel([  // specify the contents of the Palette
                        { category: "Start", text: "Start" },
                        { text: "Step" },
                        { category: "Conditional", text: "???" },
                        { category: "End", text: "End" },
                        { category: "Comment", text: "Comment" }
                        ])
                    });
        },
        save(){
             document.getElementById("mySavedModel").value = myDiagram.model.toJson();
             myDiagram.isModified = false;
        },
        load(){
             myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
        },
        printDiagram(){
            var svgWindow = window.open();
            if (!svgWindow) return;  // failure to open a new Window
            var printSize = new go.Size(700, 960);
            var bnds = myDiagram.documentBounds;
            var x = bnds.x;
            var y = bnds.y;
            while (y < bnds.bottom) {
                while (x < bnds.right) {
                var svg = myDiagram.makeSVG({ scale: 1.0, position: new go.Point(x, y), size: printSize });
                svgWindow.document.body.appendChild(svg);
                x += printSize.width;
                }
                x = bnds.x;
                y += printSize.height;
            }
            setTimeout(function() { svgWindow.print(); }, 1);
       }
    }
 }

    

</script>