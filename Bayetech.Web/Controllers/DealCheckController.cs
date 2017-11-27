using Bayetech.Service.Services;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class DealCheckController : BaseController
    {
        //取出服务层
        DealCheckService service = ctx.GetObject("DealCheckService") as DealCheckService;

        [HttpGet]
        public JObject GetGoodInfo(string goodNo) 
        {
            return service.GetGoodInfo(goodNo);
        }

    }  
}
