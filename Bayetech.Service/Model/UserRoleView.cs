using Bayetech.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public class UserRoleView: Admin_Sys_UserRoles
    {
        public string UserName { get; set; }
        public string RoleName { get; set; }
    }
}
