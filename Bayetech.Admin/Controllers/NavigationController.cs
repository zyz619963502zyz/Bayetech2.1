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
        [HttpPost]
        public JObject CheckAccount(JObject json)
        {
            return null;
        }
    }
}
