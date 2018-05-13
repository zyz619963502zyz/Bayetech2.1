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
        //INavigationService service = new NavigationService();
        /// <summary>
        /// 获取做菜单栏列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ConcurrentDictionary<string, string> GetClientsDataJson()
        {
            return service.GetClientsDataJson(0, null);
        }

        public JObject GetNavigationList()
        {
            return service.GetList("0");
        }
    }
}
