using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public interface ICheckService
    {
        JObject CheckGoodInfo(MallGoodInfo goodInfo);

        JObject CheckCustomServiceQQ(string qq);
    }
}
