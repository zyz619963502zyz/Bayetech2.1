using Bayetech.Service;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using Spring.Context;
using System.Collections.Concurrent;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{

    public class NavigationController : BaseController
    {
        ILoginSignService service1 = ctx.GetObject("LoginSignService") as ILoginSignService;
        INavigationService service = ctx.GetObject("NavigationService") as INavigationService;

        [HttpGet]
        public ConcurrentDictionary<string, string> GetClientsDataJson()
        {
            return service.GetClientsDataJson(0, null);
        }
    }
}
