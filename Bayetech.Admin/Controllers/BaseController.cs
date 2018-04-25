using Newtonsoft.Json.Linq;
using Spring.Context;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
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
        public static JObject CreatJObject(object content = null)
        {
            if (content == null)
            {
                return new JObject();
            }
            else
            {
                return new JObject(content);
            }
        }

    }
}