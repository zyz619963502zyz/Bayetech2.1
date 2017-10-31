using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.IServices
{
    public partial interface IArticleService : IBaseService<Article>
    {
        JArray GetListByModule(int value);
    }
}
