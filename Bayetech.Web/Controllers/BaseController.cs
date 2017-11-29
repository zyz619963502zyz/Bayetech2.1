using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System.Web.Http;


namespace Bayetech.Web
{
    public class BaseController : ApiController
    {
        /// <summary>
        /// 创建spring容器上下文公共容器
        /// </summary>
        public static IApplicationContext ctx = ContextRegistry.GetContext();

        /// <summary>
        /// JObject
        /// </summary>
        /// <returns></returns>
        public static JObject CreatJObject(object content = null) {
            return new JObject(content);
        }
    }
}
