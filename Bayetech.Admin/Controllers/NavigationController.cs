using Bayetech.Service;
using Newtonsoft.Json.Linq;
using Spring.Context;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class NavigationController : BaseController
    {
       
        ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;
        [HttpGet]
        public JObject CheckAccount()
        {
            return null;
        }
    }
}
