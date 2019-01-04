using System;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using Bayetech.Core.Entity;
using Bayetech.DAL;
using System.Collections.Generic;
using Bayetech.Service.Model;

namespace Bayetech.Service
{
    public class FlowService : IFlowService
    {

        /// <summary>
        /// 获取流程
        /// </summary>
        /// <returns></returns>
        public JObject GetDiagramFLowInfos(string wfmid, decimal flowId)
        {
            try
            {
                using (var db = new RepositoryBase(DBFactory.oas).BeginTrans())
                {
                    JObject ret = new JObject();
                    Diagram diagram = new Diagram();
                    List<T_FLOW_DISPOSAL> disposals = db.FindList<T_FLOW_DISPOSAL>(null, c => c.FLOW_ID == flowId && c.IsDelete != 1);
                    List<T_FLOW_STATUS> status = db.FindList<T_FLOW_STATUS>(null, c => c.FLOW_ID == flowId && c.IsDelete != 1);
                    List<Node> nodes = new List<Node>();
                    List<Link> links = new List<Link>();
                    //节点
                    for (int i = 0; i < status.Count; i++)
                    {
                        Node node = new Node();//定义环节节点
                        node.category = ((STATUSNAME)status[i].STATUS_TYPE_ID).ToString();
                        node.key = status[i].STATUS_ID;
                        node.loc = status[i].CUR_X.ToString() + " " + status[i].CUR_Y.ToString();//坐标
                        node.text = status[i].STATUS_NAME;
                        nodes.Add(node);
                    }
                    diagram.nodeDataArray = nodes;
                    //连线
                    for (int i = 0; i < disposals.Count; i++)
                    {
                        Link link = new Link();
                        link.from = disposals[i].CUR_STATUS_ID;
                        link.to = disposals[i].PRE_STATUS_ID;
                        link.fromPort = "B";
                        link.toPort = "T";
                        links.Add(link);
                    }

                    //取当前流程的业务监控
                    List<T_WorkFlow_LogMonitor> monitors = db.FindList<T_WorkFlow_LogMonitor>(null, c => c.WFM_ID == wfmid);

                    diagram.linkDataArray = links;
                    diagram.linkFromPortIdProperty = "fromPort";
                    diagram.linkToPortIdProperty = "toPort";
                    ret.Add("diagram", JToken.FromObject(diagram));
                    ret.Add("current", JToken.FromObject(monitors));
                    return ret;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
