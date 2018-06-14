using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class RolesController : BaseController
    {
        IRolesService rolesService = ctx.GetObject("RolesService") as IRolesService;
        /// <summary>
        /// 获取角色列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JObject GetList(JObject json)
        {
            return rolesService.GetListRoles(json, null, null);
        }
        /// <summary>
        /// 添加和修改角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject AddRoles(JObject json)
        {
           return rolesService.AddRoles(json);
        }
        /// <summary>
        /// 删除角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject DeleteRoles(JObject json)
        {
           return rolesService.DeleteRoles(json);
        }

        public JObject Roles()
        {
            return null;
        }
    }
}
