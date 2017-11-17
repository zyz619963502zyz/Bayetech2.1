using Bayetech.DAL.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service
{
    public partial interface IDealCheckService:IBaseService<vw_OrderInfo>
    {
        JObject GetCheckInfo();
    }
}
