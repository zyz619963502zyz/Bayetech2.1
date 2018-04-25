using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class NavigationController : BaseController
    {
        [HttpPost]
        public JObject CheckAccount(JObject json)
        {
            return null;
        }
    }
}
