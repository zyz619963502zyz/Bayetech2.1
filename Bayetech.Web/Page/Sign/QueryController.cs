using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Web
{
    public class QueryController : ApiController
    {
        [HttpGet]
        public void Start()
        {
            //var pmp = (PM_Prdcert4Paper)JsonConvert.DeserializeObject(json["model"].ToString(), typeof(PM_Prdcert4Paper));
            var a = 1;
        }
    }
}
