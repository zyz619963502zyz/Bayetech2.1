using Bayetech.Core.Entity;
using Newtonsoft.Json.Linq;

namespace Bayetech.Service.Services
{
    internal interface IOrderService
    {
        JObject CreatOrder(MallOrder order);
    }
}