using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public interface IDealCheckService
    {
        JObject GetCheckInfo(string goodNo);
    }
}
