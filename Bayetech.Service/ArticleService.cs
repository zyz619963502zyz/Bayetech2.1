using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace Bayetech.Service
{
    public class ArticleService : ServiceBase<Article>
    {
        public JObject GetList(int value)
        {
            var obj = new JObject();
            var articleList = repository.IQueryable<Article>(a=>a.catid == value);
            var categoryList = repository.IQueryable<Category>(a => a.catid == value).ToList();
            foreach(var category in categoryList)
            {
                obj.Add(new JProperty(category.catname, JArray.FromObject(articleList.Where(a => a.catid == category.catid).ToList())));
            }
            return obj;
        }
    }
}
