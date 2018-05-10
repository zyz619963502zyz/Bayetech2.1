using Bayetech.Service;
using Newtonsoft.Json.Linq;
using Spring.Context;
using System.Collections.Concurrent;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{

    public class NavigationController:BaseController
    {
        INavigationService service = ctx.GetObject("NavigationService") as INavigationService;

        [HttpGet]
        public ConcurrentDictionary<string, string> GetClientsDataJson()
        {
            return service.GetClientsDataJson(0, null);
        }
    }
}
