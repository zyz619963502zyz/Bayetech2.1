using Bayetech.Service.Services;
using System;
using System.Reflection;
using System.Web.Http;
using System.Linq;
using Bayetech.Service;
using Bayetech.Core.Entity;

namespace Bayetech.Web.Controllers
{
    public class ArticleController : BaseController
    {
        //IArticleService service = ctx.GetObject("ArticleService") as IArticleService;
        ArticleService articleService = new ArticleService();
        BaseService<Article> articleContentService = new BaseService<Article>();

        [HttpGet] 
        public IHttpActionResult FindList(int value)
        {
            try
            {
                var list = articleService.GetListByModule(value);
                return Json(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        

        [HttpGet]
        public IHttpActionResult FindContent(int value)
        {
            //var list = Core.Common.AddTryCatch(a => service.GetList(value));
            try
            {
                var list = articleContentService.FindEntity(value);
                return Json(list);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }

}