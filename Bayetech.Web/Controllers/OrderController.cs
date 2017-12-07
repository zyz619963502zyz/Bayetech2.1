using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class OrderController : BaseController
    {
        //取出服务层
        OrderService service = ctx.GetObject("OrderService") as OrderService;

        [HttpPost]
        public JObject GetList(JObject json)
        {
            MallOrder goodInfo = JsonConvert.DeserializeObject<MallOrder>(json.First.Path);
            return service.CreatOrder(goodInfo);
        }
    }  
}
