using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Model
{
    public class NavTreeModel : Admin_Sys_Navigations
    {
        public int id { get; set; }
        public string text { get; set; }

        private IList<NavTreeModel> _nodes;

        /// <summary>
        /// 子级
        /// </summary>
        public IList<NavTreeModel> nodes
        {
            get
            {
                if (_nodes == null)
                    _nodes = new List<NavTreeModel>();
                return _nodes;
            }
            set { _nodes = value; }
        }
    }

    /// <summary>
    /// 主页面框架左侧菜单模型
    /// </summary>
    public class MenuModel
    {
        public int Id { get; set; }

        public string Icon { get; set; }

        public string Name { get; set; }

        public int SortCode { get; set; }
        public List<ChildNodes> ChildNodes { get; set; }
    }

    public class ChildNodes
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string UrlAddress { get; set; }

        public int SortCode { get; set; }
    }
}
