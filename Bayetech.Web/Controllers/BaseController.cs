using Spring.Context;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Web
{
    public class BaseController : ApiController
    {
        //创建spring容器上下文公共容器
        public static IApplicationContext ctx = ContextRegistry.GetContext();
    }
}
