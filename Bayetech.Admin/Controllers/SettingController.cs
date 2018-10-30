using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bayetech.Admin.Controllers
{
    public class SettingController : ApiController
    {
        [HttpGet]
        public JObject GetSettings(string parentId)
        {
            using (BayetechEntities bay = new BayetechEntities())
            {
                var ret = new JObject();
                if (!string.IsNullOrEmpty(parentId))
                {
                    int _parent = Convert.ToInt32(parentId);
                   
                    List<Settings> settings = bay.Settings.Where(c => c.ParentId == _parent).ToList();
                    ret.Add("setting", JToken.FromObject(settings));
                }
                return ret;
            }
        }
    }
}
