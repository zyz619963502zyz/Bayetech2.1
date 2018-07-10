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
        /// <summary>
        /// 获取导航菜单列表设置
        /// </summary>
        /// <returns></returns>
        public JObject GetNavigationList()
        {
            return service.GetList("0");
        }

        /// <summary>
        /// 添加和修改导航菜单
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject GetAddNavigation(JObject json)
        {
            return service.AddNavigation(json);
        }
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        [HttpPost]
        public JObject deleteNavigation(JObject json)
        {
            return service.DeleteNavigation(json);
        }
    }
}
