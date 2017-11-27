using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public interface IDealCheckService
    {
        JObject GetGoodInfo(string goodNo);
    }
}
