using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.IServices
{
    public partial interface IArticleService : IBaseService<Article>
    {
        JArray GetListByModule(int value);

        JObject GetArticleContents(int value);
    }
}
