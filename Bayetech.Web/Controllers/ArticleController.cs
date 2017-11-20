using Bayetech.Service.Services;
using System;
using System.Reflection;
using System.Web.Http;
using Bayetech.Core.Entity;
using System.Linq;

namespace Bayetech.Web.Controllers
{
    public class ArticleController : BaseController
    {
        //IArticleService service = ctx.GetObject("ArticleService") as IArticleService;
        ArticleService articleService = new ArticleService();
        ArticleContentService articleContentService = new ArticleContentService();

        [HttpGet]
        public IHttpActionResult FindList(int value)
        {
            Assembly assembly = typeof(BayetechEntities).Assembly;
            Type[] modelTypes = assembly.GetTypes().Where(tj => tj.Namespace == "Bayetech.DAL.Entity").ToArray();
            foreach (var modelType in modelTypes)
            {

            }
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