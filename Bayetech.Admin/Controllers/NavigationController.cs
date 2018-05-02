using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class NavigationController : BaseController
    {
       
        //ILoginSignService service = ctx.GetObject("LoginSignService") as ILoginSignService;

        [HttpPost]
        public JObject CheckAccount()
        {
            return null;
        }
    }
}
