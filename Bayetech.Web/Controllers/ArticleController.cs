using Bayetech.Service.Interface;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class ArticleController : BaseController
    {
        IArticleService service = ctx.GetObject("ArticleService") as IArticleService;

        public JObject FindEntity(object value)
        {
            try
            {
                return service.FindEntity(value);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}