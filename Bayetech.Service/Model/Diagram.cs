using System.Collections.Generic;

namespace Bayetech.Service.Model
{
    /// <summary>
    /// 表图内容
    /// </summary>
    public class Diagram
    {
        public string _class { get; set; }
        public string linkFromPortIdProperty { get; set; }
        public string linkToPortIdProperty { get; set; }
        public List<Node> nodeDataArray { get; set; }
        public List<Link> linkDataArray { get; set; }
    }

    /// <summary>
    /// 节点
    /// </summary>
    public class Node
    {
        public string category { get; set; }

        public decimal key { get; set; }

        public string loc { get; set; }

        public string text { get; set; }
    }

    /// <summary>
    /// 连线
    /// </summary>
    public class Link
    {
        public decimal from { get; set; }
        public decimal to { get; set; }
        public string fromPort { get; set; }
        public string toPort { get; set; }
    }


    public enum STATUSNAME {
        开始,
        结束,
        普通,
        自动,
        子流,
        分流,
        合流
    }
}
