using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IUserRolesService
    {
        /// <summary>
        /// 分配角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject AddUserRole(JObject json);

        /// <summary>
        /// 判断员工是否分配角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject GetIsRoles(JObject json);
    }
}
