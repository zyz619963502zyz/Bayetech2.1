using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service.Model
{
    public class NavTreeModelPub: T_Pub_Role
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
}
