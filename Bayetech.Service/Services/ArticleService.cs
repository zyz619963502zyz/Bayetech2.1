using Bayetech.Core.Entity;
using Bayetech.Service.IServices;
using Newtonsoft.Json.Linq;
using System.Linq;
using Bayetech.Core;
using Bayetech.DAL;
using System.Collections.Generic;

namespace Bayetech.Service.Services
{
    public partial class ArticleService : BaseService<Article> ,IArticleService
    {
        /// <summary>
        /// 获取1级目录
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public JArray GetListByModule(int value)
        {
            var arr = new JArray();
            var articleList = repository.IQueryable<Article>(a => a.ModuleId == value);
            var categoryList = repository.IQueryable<Category>(a => a.moduleid == value).ToList();
            foreach (var category in categoryList)
            {
                var obj = new JObject();
                obj.Add(new JProperty("Title", category.catname));
                obj.Add(new JProperty("Items", JArray.FromObject(articleList.Where(a => a.CatId == category.catid).ToList())));
                arr.Add(obj);
            }
            return arr;
        }

        ///// <summary>
        ///// 获取整个咨询的信息
        ///// </summary>
        ///// <param name="value"></param>
        ///// <returns></returns>
        public JObject GetArticleContents(int value)
        {
            using (var db = new RepositoryBase())
            {
                JObject ret = new JObject();
                List<vw_ArticleModule> articles = db.FindList<vw_ArticleModule>(Pagination.GetDefaultPagination("Id"),c=>c.ModuleId==value);
                ret.Add(ResultInfo.Result, true);
                ret.Add(ResultInfo.Content, JToken.FromObject(articles));
                return ret;
            }
        }
    }
}

