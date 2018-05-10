using Bayetech.Admin.Controllers;
using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin.Controllersww
{
    public class LoginController : BaseController
    {
        ILogionService logionService = ctx.GetObject("LogionService") as ILogionService;
        /// <summary>
        /// 验证登陆
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject AdminLogion(JObject json)
        {
            try
            {
                return logionService.GetVerificationLogion(json);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// 退出
        /// </summary>
        /// <returns></returns>
        public bool LoginOut()
        {
            HttpContext.Current.Session.Clear();
            return true;
        }
    }
}
