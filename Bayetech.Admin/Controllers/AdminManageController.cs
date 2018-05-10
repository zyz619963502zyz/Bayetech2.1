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
    public class AdminManageController : BaseController
    {
        IAdminManageService adminManageService = ctx.GetObject("AdminManageService") as IAdminManageService;
        /// <summary>
        /// 获取管理员员工列表1
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpGet]
        public JObject GetList()
        {
            try
            {
                return adminManageService.GetUserList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
