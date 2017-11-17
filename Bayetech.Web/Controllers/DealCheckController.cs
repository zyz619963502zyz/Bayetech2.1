using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class DealCheckController : BaseController
    {
        //取出服务层
        Ivw_OrderInfoService service = ctx.GetObject("DealCheckService") as Ivw_OrderInfoService;

        [HttpPost]
        public JObject GetCheckInfo() 
        {


            JObject ret = new JObject();
            return ret;
        }
    }  
}
