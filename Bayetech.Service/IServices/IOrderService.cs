using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.IServices
{
    internal interface IOrderService
    {
        JObject CreatOrder(MallOrder order);

        JObject GetOrderInfo(vw_MallOrderInfo order);
    }

}