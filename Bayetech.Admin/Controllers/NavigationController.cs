using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class NavigationController : BaseController
    {
        [HttpGet]
        public JObject CheckAccount()
        {
            return null;
        }
    }
}
