using Bayetech.Service;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
   
    public class HomeController : BaseController
    {
        ICheckService service = new CheckService();


        /// <summary>
        /// 验证客服QQ是否为真
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JObject CheckCustomServiceQQ(string qq) {
            JObject ret = new JObject();
            ret = service.CheckCustomServiceQQ(qq);
            return ret;
        }
    }
}
