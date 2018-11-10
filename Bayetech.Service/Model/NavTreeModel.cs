using Bayetech.Core.Entity;
using System.Collections.Generic;

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

    //导航菜单页面模型
    public class NavigationModel
    {
        public int KeyId { get; set; }
        public string NavTitle { get; set; }
        public string Linkurl { get; set; }
        public int Sortnum { get; set; }
        public string iconCls { get; set; }
        public string iconUrl { get; set; }
        public bool IsVisible { get; set; }
        public int ParentID { get; set; }
        public string NavTag { get; set; }
        public string BigImageUrl { get; set; }
        public bool IsNewWindow { get; set; }
        public int WinWidth { get; set; }
        public int WinHeight { get; set; }
        public List<ChilNavdNodes> ChildNodes { get; set; }
    }

    public class ChilNavdNodes
    {
        public int KeyId { get; set; }
        public string NavTitle { get; set; }
        public string Linkurl { get; set; }
        public int Sortnum { get; set; }
        public string iconCls { get; set; }
        public string iconUrl { get; set; }
        public bool IsVisible { get; set; }
        public int ParentID { get; set; }
        public string NavTag { get; set; }
        public string BigImageUrl { get; set; }
        public bool IsNewWindow { get; set; }
        public int WinWidth { get; set; }
        public int WinHeight { get; set; }
    }
}
