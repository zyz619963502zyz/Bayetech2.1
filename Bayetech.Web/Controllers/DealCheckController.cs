using Bayetech.Service;
using Bayetech.Service.Services;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class DealCheckController : BaseController
    {
        //取出服务层
        DealCheckService service = ctx.GetObject("DealCheckService") as DealCheckService;

        [HttpPost]
        public JObject GetCheckInfo(string goodNo) 
        {
            return service.GetCheckInfo(goodNo);
        }

    }  
}
