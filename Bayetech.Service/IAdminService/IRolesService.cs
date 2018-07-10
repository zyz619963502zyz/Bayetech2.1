using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bayetech.Service
{
    public interface IRolesService
    {
        /// <summary>
        /// 获取角色列表
        /// </summary>
        /// <returns></returns>
        JObject GetListRoles(JObject json, DateTime? StartTime, DateTime? EndTime);
        /// <summary>
        /// 添加和修改角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        JObject AddRoles(JObject json);

        JObject DeleteRoles(JObject json);

        JObject RolesGetTree();

        JObject RolesGetTrees(int id);
    }
}
