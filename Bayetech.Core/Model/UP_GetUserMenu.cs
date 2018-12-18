using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core
{
    public class UP_GetUserMenu
    {
        public int MenuID { get; set; }
        public string MenuName { get; set; }
        public Nullable<int> ParentID { get; set; }
        public Nullable<int> SortID { get; set; }
        public string Url { get; set; }
        public string User_ID { get; set; }
    }
}
  
