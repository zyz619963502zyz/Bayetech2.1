using Bayetech.DAL.Entity;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System.Linq;
using Bayetech.Core;

namespace Bayetech.Service.Services
{
    public partial class ArticleService : IArticleService
    {
        public JArray GetListByModule(int value)
        {
            var arr = new JArray();
            var articleList = repository.IQueryable<Article>(a => a.ModuleId == value);
            var categoryList = repository.IQueryable<Category>(a => a.moduleid == value).ToList();
            foreach (var category in categoryList)
            {
                var obj = new JObject();
                obj.Add(new JProperty("title", category.catname));
                obj.Add(new JProperty("items", JArray.FromObject(articleList.Where(a => a.CatId == category.catid).ToList())));
                arr.Add(obj);
            }
            return arr;
        }
    }
}

