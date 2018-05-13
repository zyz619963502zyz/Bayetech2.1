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
    public class UserRolesController : BaseController
    {
        IUserRolesService userRolesService = ctx.GetObject("UserRolesService") as IUserRolesService;
        /// <summary>
        /// 分配角色添加
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public JObject AddRoles(JObject json)
        {
            return userRolesService.AddUserRole(json);
        }

        /// <summary>
        /// 判断员工是否分配角色
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetRole(JObject json)
        {
            return userRolesService.GetIsRoles(json);
        }
    }
}
