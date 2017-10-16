using Bayetech.Service;
using Bayetech.Service.Interface;
using System;
using System.Linq;
using System.Web.Http;

namespace Bayetech.Web.Controllers
{
    public class ArticleController : BaseController
    {
        //IArticleService service = ctx.GetObject("ArticleService") as IArticleService;
        ArticleService service = new ArticleService();

        public IHttpActionResult FindList(int value)
        {
            try
            {
                var list = service.GetList(value);
               // var list = service.FindList(a => a.tag == "").ToList();
                return Json(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public IHttpActionResult FindContent(object value)
        {
            return null;
        }
    }

}