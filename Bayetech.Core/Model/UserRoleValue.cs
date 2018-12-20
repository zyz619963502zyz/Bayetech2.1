using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Core
{
    /// <summary>
    /// 存储过程UP_GetUserRole对应的结果集类
    /// </summary>
    public class UserRoleValue
    {
        public int ROLE_VALUE { get; set; }

        public string ROLE_NAME { get; set; }

        public string ROLE_COLUMN { get; set; }

        public string ROLESERIAL { get; set; }

        public string MODULE_ID { get; set; }

    }
}
