using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public interface IGoodInfoService
    {
        JObject GetGoodInfo(string goodNo);

        JObject GetGoodInfoDetail(string goodNo);

        JObject GetGoodList(vw_MallGoodMainInfo goodInfo);
    }
}
