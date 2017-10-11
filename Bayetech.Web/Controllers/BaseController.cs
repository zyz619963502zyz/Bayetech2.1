using Spring.Context;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class BaseController : ApiController
    {
        public static IApplicationContext ctx = ContextRegistry.GetContext();
    }
}
