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
    }
}
